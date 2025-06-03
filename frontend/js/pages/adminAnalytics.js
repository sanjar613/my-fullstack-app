


import { icons } from "../utils/icons.js";
import { authFetch } from "../services/auth.js";
import { showToast } from "../utils/ui.js";

export async function renderAdminAnalyticsPage() {
  const mainContainer = document.getElementById("main-container");

  mainContainer.innerHTML = `
    <div class="container-fluid py-5 mt-5">
      <div class="row mb-4">
        <div class="col-12">
          <h1>Analytics Dashboard</h1>
        </div>
      </div>

      <div class="row g-4">
        <!-- Summary Stats -->
        <div class="col-xl-3 col-md-6">
          <div class="card shadow-sm h-100">
            <div class="card-body">
              <h6 class="text-uppercase text-muted mb-2">Total Requests</h6>
              <div class="d-flex align-items-center">
                <div class="display-4 me-3" id="totalRequests">-</div>
                <div class="text-success small">
                  ${icons.trendingUp}
                  <span id="requestsGrowth">-%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-md-6">
          <div class="card shadow-sm h-100">
            <div class="card-body">
              <h6 class="text-uppercase text-muted mb-2">Resolution Rate</h6>
              <div class="d-flex align-items-center">
                <div class="display-4 me-3" id="resolutionRate">-%</div>
                <div class="text-success small">
                  ${icons.check}
                  <span>Success</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-md-6">
          <div class="card shadow-sm h-100">
            <div class="card-body">
              <h6 class="text-uppercase text-muted mb-2">Avg Response Time</h6>
              <div class="d-flex align-items-center">
                <div class="display-4 me-3" id="avgResponseTime">-</div>
                <div class="text-muted small">hours</div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-md-6">
          <div class="card shadow-sm h-100">
            <div class="card-body">
              <h6 class="text-uppercase text-muted mb-2">Customer Satisfaction</h6>
              <div class="d-flex align-items-center">
                <div class="display-4 me-3" id="satisfaction">-</div>
                <div class="text-warning small">
                  ${icons.star}
                  <span>Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Request Status Chart -->
        <div class="col-lg-8">
          <div class="card shadow-sm">
            <div class="card-header bg-white">
              <h5 class="mb-0">Request Status Distribution</h5>
            </div>
            <div class="card-body">
              <div style="height: 300px">
                <canvas id="requestStatusChart"></canvas>
              </div>
            </div>
          </div>
        </div>

        <!-- Priority Distribution -->
        <div class="col-lg-4">
          <div class="card shadow-sm">
            <div class="card-header bg-white">
              <h5 class="mb-0">Priority Distribution</h5>
            </div>
            <div class="card-body">
              <div style="height: 300px">
                <canvas id="priorityChart"></canvas>
              </div>
            </div>
          </div>
        </div>

        <!-- Common Issues -->
        <div class="col-lg-6">
          <div class="card shadow-sm">
            <div class="card-header bg-white">
              <h5 class="mb-0">Common Issues by Device Type</h5>
            </div>
            <div class="card-body">
              <div style="height: 300px">
                <canvas id="commonIssuesChart"></canvas>
              </div>
            </div>
          </div>
        </div>

        <!-- Resolution Time -->
        <div class="col-lg-6">
          <div class="card shadow-sm">
            <div class="card-header bg-white">
              <h5 class="mb-0">Average Resolution Time by Priority</h5>
            </div>
            <div class="card-body">
              <div style="height: 300px">
                <canvas id="resolutionTimeChart"></canvas>
              </div>
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
  document.title = "Analytics Dashboard - Admin Dashboard";

  // Load analytics data
  loadAnalytics();
}

async function loadAnalytics() {
  try {
    const [summaryResponse, commonIssuesResponse, completionTimeResponse] =
      await Promise.all([
        authFetch(`${window.API_URL}/analytics/summary`),
        authFetch(`${window.API_URL}/analytics/common-issues`),
        authFetch(`${window.API_URL}/analytics/completion-time`),
      ]);

    const summary = await summaryResponse.json();
    const commonIssues = await commonIssuesResponse.json();
    const completionTime = await completionTimeResponse.json();

    updateSummaryStats(summary);
    createRequestStatusChart(summary.byStatus);
    createPriorityChart(summary.byPriority);
    createCommonIssuesChart(commonIssues);
    createResolutionTimeChart(completionTime);
  } catch (error) {
    console.error("Error loading analytics:", error);
    showToast("Error", "Failed to load analytics data", "error");
  }
}

function updateSummaryStats(summary) {
  document.getElementById("totalRequests").textContent = summary.totalRequests;

  const resolutionRate = (
    (summary.byStatus.resolved / summary.totalRequests) *
    100
  ).toFixed(1);
  document.getElementById("resolutionRate").textContent = `${resolutionRate}%`;

  document.getElementById("avgResponseTime").textContent = "4.2";
  document.getElementById("satisfaction").textContent =
    summary.feedback.averageRating;
  document.getElementById("requestsGrowth").textContent = "12%";
}

function createRequestStatusChart(statusData) {
  const ctx = document.getElementById("requestStatusChart").getContext("2d");

  if (window.requestStatusChart) {
    window.requestStatusChart.destroy();
  }

  window.requestStatusChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Pending", "Scheduled", "In Progress", "Resolved"],
      datasets: [
        {
          data: [
            statusData.pending,
            statusData.scheduled,
            statusData.inProgress,
            statusData.resolved,
          ],
          backgroundColor: [
            "#FFC107", // Pending - yellow
            "#1E90FF", // Scheduled - blue
            "#FFA500", // In Progress - orange
            "#28A745", // Resolved - green
          ],
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            precision: 0,
          },
        },
      },
    },
  });
}

function createPriorityChart(priorityData) {
  const ctx = document.getElementById("priorityChart").getContext("2d");

  if (window.priorityChart) {
    window.priorityChart.destroy();
  }

  window.priorityChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["High", "Medium", "Low"],
      datasets: [
        {
          data: [priorityData.high, priorityData.medium, priorityData.low],
          backgroundColor: [
            "#DC3545", // High - red
            "#FFC107", // Medium - yellow
            "#28A745", // Low - green
          ],
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          position: "bottom",
        },
      },
      cutout: "60%",
    },
  });
}

function createCommonIssuesChart(issuesData) {
  const ctx = document.getElementById("commonIssuesChart").getContext("2d");

  if (window.commonIssuesChart) {
    window.commonIssuesChart.destroy();
  }

  window.commonIssuesChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: issuesData.map((item) => item._id),
      datasets: [
        {
          label: "Number of Issues",
          data: issuesData.map((item) => item.count),
          backgroundColor: "#1E90FF",
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            precision: 0,
          },
        },
      },
    },
  });
}

function createResolutionTimeChart(completionTime) {
  const ctx = document.getElementById("resolutionTimeChart").getContext("2d");

  if (window.resolutionTimeChart) {
    window.resolutionTimeChart.destroy();
  }

  window.resolutionTimeChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["High", "Medium", "Low"],
      datasets: [
        {
          label: "Average Days to Resolve",
          data: [
            completionTime.byPriority.high.averageTime,
            completionTime.byPriority.medium.averageTime,
            completionTime.byPriority.low.averageTime,
          ],
          backgroundColor: [
            "#DC3545", // High - red
            "#FFC107", // Medium - yellow
            "#28A745", // Low - green
          ],
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Days",
          },
        },
      },
    },
  });
}







