




import { icons } from '../utils/icons.js';
import { authFetch } from '../services/auth.js';
import { showToast, formatDate, getStatusBadge, getPriorityBadge, formatCurrency } from '../utils/ui.js';

export async function renderAdminRequestsPage() {
  const mainContainer = document.getElementById('main-container');
  
  mainContainer.innerHTML = `
    <div class="container-fluid py-5 mt-5">
      <div class="row mb-4">
        <div class="col-12 d-flex justify-content-between align-items-center">
          <h1>Support Requests</h1>
          <div class="d-flex gap-2">
            <div class="input-group">
              <input type="text" class="form-control" id="searchInput" placeholder="Search requests...">
              <button class="btn btn-primary" type="button" id="searchButton">
                ${icons.search}
              </button>
            </div>
            <div class="dropdown">
              <button class="btn btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                ${icons.filter} Filter
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#" data-filter="all">All Requests</a></li>
                <li><a class="dropdown-item" href="#" data-filter="pending">Pending</a></li>
                <li><a class="dropdown-item" href="#" data-filter="scheduled">Scheduled</a></li>
                <li><a class="dropdown-item" href="#" data-filter="in-progress">In Progress</a></li>
                <li><a class="dropdown-item" href="#" data-filter="resolved">Resolved</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="card shadow-sm">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-hover align-middle" id="requestsTable">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Issue</th>
                  <th>Status</th>
                  <th>Priority</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colspan="6" class="text-center py-4">Loading requests...</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- Request Details Modal -->
    <div class="modal fade" id="requestModal" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Request Details</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body" id="requestModalBody">
            Loading...
          </div>
        </div>
      </div>
    </div>
  `;

  // Update document title
  document.title = 'Support Requests - Admin Dashboard';

  try {
    const response = await authFetch(`${window.API_URL}/requests/all`);
    const requests = await response.json();
    displayRequests(requests);

    // Add event listeners
    setupEventListeners();
  } catch (error) {
    console.error('Error fetching requests:', error);
    showToast('Error', 'Failed to load requests', 'error');
  }
}

function displayRequests(requests) {
  const tbody = document.querySelector('#requestsTable tbody');
  
  if (!requests || requests.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" class="text-center py-4">No requests found</td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = requests.map(request => `
    <tr>
      <td>
        <div class="d-flex align-items-center">
          <div class="avatar d-flex align-items-center justify-content-center bg-primary text-white rounded-circle me-2" style="width: 32px; height: 32px;">
            ${request.userId?.name?.charAt(0).toUpperCase() || 'U'}
          </div>
          <div>
            <div class="fw-semibold">${request.userId?.name || 'Unknown'}</div>
            <div class="small text-secondary">${request.userId?.email || 'No email'}</div>
          </div>
        </div>
      </td>
      <td>
        <div class="fw-semibold">${request.issueSummary}</div>
        <div class="small text-secondary">${request.deviceType}</div>
      </td>
      <td>${getStatusBadge(request.status)}</td>
      <td>${getPriorityBadge(request.priority)}</td>
      <td>${formatDate(request.createdAt)}</td>
      <td>
        <div class="btn-group">
          <button class="btn btn-sm btn-outline-primary view-request" data-id="${request._id}">
            View
          </button>
          <button class="btn btn-sm btn-outline-danger delete-request" data-id="${request._id}">
            Delete
          </button>
        </div>
      </td>
    </tr>
  `).join('');
}

function setupEventListeners() {
  // View request details
  document.querySelectorAll('.view-request').forEach(button => {
    button.addEventListener('click', async (e) => {
      const requestId = e.target.dataset.id;
      const modal = new bootstrap.Modal(document.getElementById('requestModal'));
      
      try {
        const response = await authFetch(`${window.API_URL}/requests/${requestId}`);
        const request = await response.json();
        
        let sparePartsHtml = '';
        if (request.spareParts && request.spareParts.length > 0) {
          sparePartsHtml = `
            <div class="mb-4">
              <h6 class="fw-bold">Spare Parts</h6>
              <ul class="list-unstyled">
                ${request.spareParts.map(part => `
                  <li>${part.quantity}x ${part.partId.name} - ${formatCurrency(part.partId.price * part.quantity)}</li>
                `).join('')}
              </ul>
            </div>
          `;
        }

        document.getElementById('requestModalBody').innerHTML = `
          <div class="mb-4">
            <h6 class="fw-bold">User Information</h6>
            <p class="mb-1">Name: ${request.userId?.name || 'Unknown'}</p>
            <p class="mb-1">Email: ${request.userId?.email || 'No email'}</p>
          </div>
          
          <div class="mb-4">
            <h6 class="fw-bold">Request Details</h6>
            <p class="mb-1">Device Type: ${request.deviceType}</p>
            <p class="mb-1">Issue Summary: ${request.issueSummary}</p>
            <p class="mb-1">Description: ${request.description}</p>
            <p class="mb-1">Location: ${request.location}</p>
            <p class="mb-1">Schedule Date: ${formatDate(request.scheduleDate)}</p>
            ${request.requiresOnSite ? '<p class="mb-1 text-primary">On-Site Support Requested</p>' : ''}
          </div>

          <div class="mb-4">
            <h6 class="fw-bold">Status and Priority</h6>
            <div class="mb-3">
              <label class="form-label">Status</label>
              <select class="form-select" id="statusUpdate">
                <option value="pending" ${request.status === 'pending' ? 'selected' : ''}>Pending</option>
                <option value="scheduled" ${request.status === 'scheduled' ? 'selected' : ''}>Scheduled</option>
                <option value="in-progress" ${request.status === 'in-progress' ? 'selected' : ''}>In Progress</option>
                <option value="resolved" ${request.status === 'resolved' ? 'selected' : ''}>Resolved</option>
              </select>
            </div>
            <div class="mb-3">
              <label class="form-label">Priority</label>
              <select class="form-select" id="priorityUpdate">
                <option value="low" ${request.priority === 'low' ? 'selected' : ''}>Low</option>
                <option value="medium" ${request.priority === 'medium' ? 'selected' : ''}>Medium</option>
                <option value="high" ${request.priority === 'high' ? 'selected' : ''}>High</option>
              </select>
            </div>
          </div>
          
          ${sparePartsHtml}
          
          ${request.estimatedCost ? `
            <div class="mb-4">
              <h6 class="fw-bold">Cost Estimation</h6>
              <p class="mb-1">Parts: ${formatCurrency(request.estimatedCost.parts)}</p>
              <p class="mb-1">Labor: ${formatCurrency(request.estimatedCost.labor)}</p>
              <p class="fw-bold">Total: ${formatCurrency(request.estimatedCost.total)}</p>
            </div>
          ` : ''}
          
          <div class="mb-4">
            <h6 class="fw-bold">Timeline</h6>
            <p class="mb-1">Created: ${formatDate(request.createdAt)}</p>
            <p class="mb-1">Last Updated: ${formatDate(request.updatedAt)}</p>
          </div>

          <div class="d-flex justify-content-end gap-2">
            <button class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button class="btn btn-primary" onclick="updateRequest('${request._id}')">
              Update Request
            </button>
          </div>
        `;
        
        modal.show();
      } catch (error) {
        console.error('Error fetching request details:', error);
        showToast('Error', 'Failed to load request details', 'error');
      }
    });
  });

  // Delete request
  document.querySelectorAll('.delete-request').forEach(button => {
    button.addEventListener('click', async (e) => {
      if (confirm('Are you sure you want to delete this request?')) {
        const requestId = e.target.dataset.id;
        
        try {
          const response = await authFetch(`${window.API_URL}/requests/${requestId}`, {
            method: 'DELETE'
          });
          
          if (response.ok) {
            showToast('Success', 'Request deleted successfully', 'success');
            e.target.closest('tr').remove();
          } else {
            throw new Error('Failed to delete request');
          }
        } catch (error) {
          console.error('Error deleting request:', error);
          showToast('Error', 'Failed to delete request', 'error');
        }
      }
    });
  });

  // Search functionality
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');

  searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const rows = document.querySelectorAll('#requestsTable tbody tr');

    rows.forEach(row => {
      const text = row.textContent.toLowerCase();
      row.style.display = text.includes(searchTerm) ? '' : 'none';
    });
  });

  // Filter functionality
  document.querySelectorAll('[data-filter]').forEach(filter => {
    filter.addEventListener('click', (e) => {
      e.preventDefault();
      const filterValue = e.target.dataset.filter;
      const rows = document.querySelectorAll('#requestsTable tbody tr');

      rows.forEach(row => {
        if (filterValue === 'all') {
          row.style.display = '';
        } else {
          const status = row.querySelector('td:nth-child(3)').textContent.toLowerCase();
          row.style.display = status.includes(filterValue) ? '' : 'none';
        }
      });
    });
  });
}

// Add to window object for modal access
window.updateRequest = async (requestId) => {
  const status = document.getElementById('statusUpdate').value;
  const priority = document.getElementById('priorityUpdate').value;
  
  try {
    const response = await authFetch(`${window.API_URL}/requests/${requestId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ status, priority })
    });

    if (response.ok) {
      showToast('Success', 'Request updated successfully', 'success');
      const modal = bootstrap.Modal.getInstance(document.getElementById('requestModal'));
      modal.hide();
      
      // Refresh the requests list
      const requestsResponse = await authFetch(`${window.API_URL}/requests/all`);
      const requests = await requestsResponse.json();
      displayRequests(requests);
    } else {
      throw new Error('Failed to update request status');
    }
  } catch (error) {
    console.error('Error updating request:', error);
    showToast('Error', 'Failed to update request', 'error');
  }
};