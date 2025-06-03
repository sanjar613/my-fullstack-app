import { icons } from '../utils/icons.js';
import { authFetch } from '../services/auth.js';
import { showToast } from '../utils/ui.js';

export async function renderAdminDashboardPage() {
  const mainContainer = document.getElementById('main-container');
  const userName = localStorage.getItem('userName');
  
  // Initial loading state
  mainContainer.innerHTML = `
    <div class="container-fluid py-5 mt-5">
      <div class="row mb-4">
        <div class="col-12">
          <h1>Admin Dashboard</h1>
          <p class="lead">Welcome back, ${userName || 'Admin'}!</p>
        </div>
      </div>
      
      <!-- Stats Summary Cards -->
      <div class="row g-4 mb-4">
        <div class="col-xl-3 col-md-6">
          <div class="stats-card">
            <div class="stats-card-icon">
              ${icons.clipboard}
            </div>
            <div class="stats-card-value" id="total-requests">-</div>
            <div class="stats-card-label">Total Requests</div>
          </div>
        </div>
        
        <div class="col-xl-3 col-md-6">
          <div class="stats-card">
            <div class="stats-card-icon" style="background-color: rgba(40, 167, 69, 0.1); color: #28A745;">
              ${icons.checkCircle}
            </div>
            <div class="stats-card-value" id="resolved-requests">-</div>
            <div class="stats-card-label">Resolved Requests</div>
          </div>
        </div>
        
        <div class="col-xl-3 col-md-6">
          <div class="stats-card">
            <div class="stats-card-icon" style="background-color: rgba(255, 193, 7, 0.1); color: #FFC107;">
              ${icons.clock}
            </div>
            <div class="stats-card-value" id="pending-requests">-</div>
            <div class="stats-card-label">Pending Requests</div>
          </div>
        </div>
        
        <div class="col-xl-3 col-md-6">
          <div class="stats-card">
            <div class="stats-card-icon" style="background-color: rgba(220, 53, 69, 0.1); color: #DC3545;">
              ${icons.alertCircle}
            </div>
            <div class="stats-card-value" id="high-priority">-</div>
            <div class="stats-card-label">High Priority</div>
          </div>
        </div>
      </div>
      
      <div class="row g-4">
        <!-- Recent Requests -->
        <div class="col-lg-8">
          <div class="card shadow-sm mb-4">
            <div class="card-header bg-orange d-flex justify-content-between align-items-center">
              <h5 class="mb-0">Recent Support Requests</h5>
              <a href="/admin/requests" onclick="return navigateTo('/admin/requests')" class="btn btn-sm btn-primary">
                View All
              </a>
            </div>
            <div class="card-body">
              <div id="recent-requests-container">
                <p class="text-center py-4">Loading requests...</p>
              </div>
            </div>
          </div>
          
          <!-- Device Type Distribution Chart -->
          <div class="card shadow-sm mb-4">
            <div class="card-header bg-orange">
              <h5 class="mb-0">Request Distribution by Device Type</h5>
            </div>
            <div class="card-body">
              <canvas id="deviceTypeChart" height="250"></canvas>
            </div>
          </div>
        </div>
        
        <div class="col-lg-4">
          <!-- Request Status Chart -->
          <div class="card shadow-sm mb-4">
            <div class="card-header bg-orange">
              <h5 class="mb-0">Request Status</h5>
            </div>
            <div class="card-body">
              <canvas id="statusChart" height="250"></canvas>
            </div>
          </div>
          
          <!-- Quick Actions -->
          <div class="card shadow-sm mb-4">
            <div class="card-header bg-orange">
              <h5 class="mb-0">Quick Actions</h5>
            </div>
            <div class="card-body">
              <div class="d-grid gap-2">
                <a href="/admin/requests" onclick="return navigateTo('/admin/requests')" class="btn btn-primary">
                  ${icons.clipboard} Manage Requests
                </a>
                <a href="/admin/spareparts" onclick="return navigateTo('/admin/spareparts')" class="btn btn-outline-primary">
                  ${icons.tool} Manage Spare Parts
                </a>
                <a href="/admin/knowledge-base" onclick="return navigateTo('/admin/knowledge-base')" class="btn btn-outline-primary">
                  ${icons.book} Update Knowledge Base
                </a>
                <a href="/admin/feedback" onclick="return navigateTo('/admin/feedback')" class="btn btn-outline-primary">
                  ${icons.messageCircle} View Feedback
                </a>
                <a href="/admin/analytics" onclick="return navigateTo('/admin/analytics')" class="btn btn-outline-primary">
                  ${icons.barChart} Detailed Analytics
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Update document title
  document.title = 'Admin Dashboard - Dern-Support';
  
  // Fetch analytics data
  try {
    const [summaryResponse, commonIssuesResponse] = await Promise.all([
      authFetch(`${window.API_URL}/analytics/summary`),
      authFetch(`${window.API_URL}/analytics/common-issues`)
    ]);
    
    const summaryData = await summaryResponse.json();
    const commonIssuesData = await commonIssuesResponse.json();
    
    // Update stats cards
    document.getElementById('total-requests').textContent = summaryData.totalRequests;
    document.getElementById('resolved-requests').textContent = summaryData.byStatus.resolved;
    document.getElementById('pending-requests').textContent = summaryData.byStatus.pending;
    document.getElementById('high-priority').textContent = summaryData.byPriority.high;
    
    // Create status chart
    createStatusChart(summaryData.byStatus);
    
    // Create device type chart
    createDeviceTypeChart(commonIssuesData);
    
    // Fetch recent requests
    const requestsResponse = await authFetch(`${window.API_URL}/requests/all`);
    const requests = await requestsResponse.json();
    
    // Display recent requests
    displayRecentRequests(requests);
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    showToast('Error', 'Failed to load dashboard data. Please try again later.', 'error');
  }
}

function createStatusChart(statusData) {
  const ctx = document.getElementById('statusChart').getContext('2d');
  
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Pending', 'Scheduled', 'In Progress', 'Resolved'],
      datasets: [{
        data: [
          statusData.pending,
          statusData.scheduled,
          statusData.inProgress,
          statusData.resolved
        ],
        backgroundColor: [
          '#FFC107', // Pending - yellow
          '#1E90FF', // Scheduled - blue
          '#FFA500', // In Progress - orange
          '#28A745'  // Resolved - green
        ],
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '70%',
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            padding: 20,
            boxWidth: 12
          }
        }
      }
    }
  });
}

function createDeviceTypeChart(deviceData) {
  const ctx = document.getElementById('deviceTypeChart').getContext('2d');
  
  const labels = deviceData.map(item => item._id);
  const data = deviceData.map(item => item.count);
  
  const generateColors = (num) => {
    const colors = [];
    for (let i = 0; i < num; i++) {
      const hue = (i * 137) % 360;
      colors.push(`hsla(${hue}, 70%, 60%, 0.7)`);
    }
    return colors;
  };
  
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Number of Requests',
        data: data,
        backgroundColor: generateColors(labels.length),
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            precision: 0
          }
        }
      }
    }
  });
}

function displayRecentRequests(requests) {
  const container = document.getElementById('recent-requests-container');
  
  if (!requests || requests.length === 0) {
    container.innerHTML = '<p class="text-center py-4">No support requests found.</p>';
    return;
  }
  
  requests.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  const recentRequests = requests.slice(0, 5);
  
  const getStatusBadge = (status) => {
    const statusClasses = {
      'pending': 'badge-pending',
      'scheduled': 'badge-scheduled',
      'in-progress': 'badge-in-progress',
      'resolved': 'badge-resolved'
    };
    
    return `<span class="badge ${statusClasses[status] || 'bg-secondary'}">${status.charAt(0).toUpperCase() + status.slice(1)}</span>`;
  };
  
  const getPriorityBadge = (priority) => {
    const priorityClasses = {
      'high': 'badge-high',
      'medium': 'badge-medium',
      'low': 'badge-low'
    };
    
    return `<span class="badge ${priorityClasses[priority] || 'bg-secondary'}">${priority.charAt(0).toUpperCase() + priority.slice(1)}</span>`;
  };
  
  const formatDate = (dateString) => {
    const options = { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  let tableHTML = `
    <div class="table-responsive">
      <table class="table align-middle">
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
  `;
  
  recentRequests.forEach(request => {
    const userName = request.userId?.name || 'Unknown User';
    
    tableHTML += `
      <tr>
        <td>
          <div class="d-flex align-items-center">
            <div class="avatar d-flex align-items-center justify-content-center bg-primary text-white rounded-circle me-2" style="width: 32px; height: 32px;">
              ${userName.charAt(0).toUpperCase()}
            </div>
            <div class="ms-2">
              <div class="fw-semibold">${userName}</div>
              <div class="small text-secondary">${request.userId?.email || 'No email'}</div>
            </div>
          </div>
        </td>
        <td>
          <div class="fw-semibold">${request.issueSummary || 'N/A'}</div>
          <div class="small text-secondary">${request.deviceType || 'N/A'}</div>
        </td>
        <td>${getStatusBadge(request.status)}</td>
        <td>${getPriorityBadge(request.priority)}</td>
        <td class="small">${formatDate(request.createdAt)}</td>
        <td>
          <button class="btn btn-sm btn-outline-primary view-request-btn" data-id="${request._id}">
            View
          </button>
        </td>
      </tr>
    `;
  });
  
  tableHTML += `
        </tbody>
      </table>
    </div>
  `;
  
  container.innerHTML = tableHTML;
  
  setTimeout(() => {
    document.querySelectorAll('.view-request-btn').forEach(button => {
      button.addEventListener('click', (e) => {
        const requestId = e.target.getAttribute('data-id');
        showToast('Info', 'View request details functionality will be implemented soon.', 'info');
      });
    });
  }, 0);
}