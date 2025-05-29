





import { icons } from "../utils/icons.js";
import { authFetch } from "../services/auth.js";
import {
  formatDate,
  getStatusBadge,
  getPriorityBadge,
  showToast,
  formatCurrency,
} from "../utils/ui.js";

export async function renderDashboardPage() {
  const mainContainer = document.getElementById("main-container");
  const userName = localStorage.getItem("userName");

  mainContainer.innerHTML = `
    <div class="container py-5 mt-5">
      <div class="row mb-4">
        <div class="col-12 mt-2">
          <h1>Welcome, ${userName || "User"}!</h1>
          <p class="lead">Your IT support dashboard</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8">
          <div class="card shadow-sm mb-4">
            <div class="card-header bg-white d-flex justify-content-between align-items-center">
              <h5 class="mb-0">My Recent Support Requests</h5>
              <a href="/support-request" onclick="return navigateTo('/support-request')" class="btn btn-sm btn-primary">
                ${icons.plus} New Request
              </a>
            </div>
            <div class="card-body">
              <div id="requests-container">
                <p class="text-center py-4">Loading requests...</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card shadow-sm mb-4">
            <div class="card-header bg-white">
              <h5 class="mb-0">Quick Actions</h5>
            </div>
            <div class="card-body">
              <div class="d-grid gap-2">
                <a href="/support-request" onclick="return navigateTo('/support-request')" class="btn btn-primary">
                  ${icons.plus} New Support Request
                </a>
                <a href="/knowledge-base" onclick="return navigateTo('/knowledge-base')" class="btn btn-outline-primary">
                  ${icons.book} Browse Knowledge Base
                </a>
              </div>
            </div>
          </div>
          
          <div class="card shadow-sm mb-4">
            <div class="card-header bg-white">
              <h5 class="mb-0">Help & Resources</h5>
            </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item px-0 py-2 border-0">
                  <a href="#" class="text-decoration-none">
                    ${icons.helpCircle} How to create a request
                  </a>
                </li>
                <li class="list-group-item px-0 py-2 border-0">
                  <a href="#" class="text-decoration-none">
                    ${icons.alertCircle} Common IT issues
                  </a>
                </li>
                <li class="list-group-item px-0 py-2 border-0">
                  <a href="#" class="text-decoration-none">
                    ${icons.tool} Preventive maintenance tips
                  </a>
                </li>
                <li class="list-group-item px-0 py-2 border-0">
                  <a href="#" class="text-decoration-none">
                    ${icons.phone} Contact support team
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Request Details Modal -->
    <div class="modal fade" id="requestDetailsModal" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Request Details</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body" id="requestDetailsContent">
            Loading...
          </div>
        </div>
      </div>
    </div>
  `;

  // Update document title
  document.title = "Dashboard - Dern-Support";

  // Fetch user's support requests
  try {
    const response = await authFetch(`${window.API_URL}/requests`);
    const requests = await response.json();

    // Update requests container
    updateRequestsDisplay(requests);
  } catch (error) {
    console.error("Error fetching requests:", error);
    showToast(
      "Error",
      "Failed to load support requests. Please try again later.",
      "error"
    );
    document.getElementById("requests-container").innerHTML = `
      <div class="alert alert-danger" role="alert">
        Failed to load support requests. Please try again later.
      </div>
    `;
  }
}

function updateRequestsDisplay(requests) {
  const requestsContainer = document.getElementById("requests-container");

  if (requests.length === 0) {
    requestsContainer.innerHTML = `
      <div class="text-center py-4">
        <p class="mb-3">You have no support requests yet.</p>
        <a href="/support-request" onclick="return navigateTo('/support-request')" class="btn btn-primary">
          ${icons.plus} Create Your First Request
        </a>
      </div>
    `;
    return;
  }

  // Sort requests by creation date (newest first)
  requests.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  // Get the 5 most recent requests
  const recentRequests = requests.slice(0, 5);

  // Build requests HTML
  let requestsHTML = `
    <div class="table-responsive">
      <table class="table table-hover">
        <thead>
          <tr>
            <th>Issue</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
  `;

  recentRequests.forEach((request) => {
    requestsHTML += `
      <tr>
        <td>
          <div class="fw-semibold">${request.issueSummary || "N/A"}</div>
          <div class="small text-secondary">${request.deviceType || "N/A"}</div>
        </td>
        <td>${getStatusBadge(request.status)}</td>
        <td>${getPriorityBadge(request.priority)}</td>
        <td class="small">${formatDate(request.createdAt)}</td>
        <td>
          <button class="btn btn-sm btn-outline-primary view-request-btn" data-id="${
            request._id
          }">
            View
          </button>
        </td>
      </tr>
    `;
  });

  requestsHTML += `
        </tbody>
      </table>
    </div>
    
    <div class="text-center mt-3">
      <a href="#" class="btn btn-link text-success">View All Requests</a>
    </div>
  `;

  requestsContainer.innerHTML = requestsHTML;

  // Add event listeners to view buttons
  setTimeout(() => {
    document.querySelectorAll(".view-request-btn").forEach((button) => {
      button.addEventListener("click", (e) => {
        const requestId = e.target.getAttribute("data-id");
        viewRequestDetails(requestId);
      });
    });
  }, 0);
}

async function viewRequestDetails(requestId) {
  const modal = new bootstrap.Modal(
    document.getElementById("requestDetailsModal")
  );
  const contentContainer = document.getElementById("requestDetailsContent");

  try {
    const response = await authFetch(`${window.API_URL}/requests/${requestId}`);
    const request = await response.json();

    let sparePartsHtml = "";
    if (request.spareParts && request.spareParts.length > 0) {
      sparePartsHtml = `
        <div class="mb-4">
          <h6 class="fw-bold">Spare Parts</h6>
          <ul class="list-unstyled">
            ${request.spareParts
              .map(
                (part) => `
              <li>${part.quantity}x ${part.partId.name} - ${formatCurrency(
                  part.partId.price * part.quantity
                )}</li>
            `
              )
              .join("")}
          </ul>
        </div>
      `;
    }

    contentContainer.innerHTML = `
      <div class="mb-4">
        <h6 class="fw-bold">Request Information</h6>
        <p class="mb-1">Device Type: ${request.deviceType}</p>
        <p class="mb-1">Issue Summary: ${request.issueSummary}</p>
        <p class="mb-1">Description: ${request.description}</p>
        <p class="mb-1">Location: ${request.location}</p>
        <p class="mb-1">Status: ${getStatusBadge(request.status)}</p>
        <p class="mb-1">Priority: ${getPriorityBadge(request.priority)}</p>
        <p class="mb-1">Schedule Date: ${formatDate(request.scheduleDate)}</p>
        ${
          request.requiresOnSite
            ? '<p class="mb-1 text-primary">On-Site Support Requested</p>'
            : ""
        }
      </div>
      
      ${sparePartsHtml}
      
      ${
        request.estimatedCost
          ? `
        <div class="mb-4">
          <h6 class="fw-bold">Cost Estimation</h6>
          <p class="mb-1">Parts: ${formatCurrency(
            request.estimatedCost.parts
          )}</p>
          <p class="mb-1">Labor: ${formatCurrency(
            request.estimatedCost.labor
          )}</p>
          <p class="fw-bold">Total: ${formatCurrency(
            request.estimatedCost.total
          )}</p>
        </div>
      `
          : ""
      }
      
      ${
        request.quote
          ? `
        <div class="mb-4">
          <h6 class="fw-bold">Quote</h6>
          <p class="mb-1">Amount: ${formatCurrency(request.quote.amount)}</p>
          <p class="mb-1">Details: ${request.quote.details}</p>
          <p class="mb-1">Date: ${formatDate(request.quote.date)}</p>
        </div>
      `
          : ""
      }
      
      <div class="mb-4">
        <h6 class="fw-bold">Timeline</h6>
        <p class="mb-1">Created: ${formatDate(request.createdAt)}</p>
        <p class="mb-1">Last Updated: ${formatDate(request.updatedAt)}</p>
      </div>
    `;

    modal.show();
  } catch (error) {
    console.error("Error fetching request details:", error);
    showToast("Error", "Failed to load request details", "error");
  }
}