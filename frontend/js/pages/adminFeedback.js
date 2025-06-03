import { icons } from '../utils/icons.js';
import { authFetch } from '../services/auth.js';
import { showToast, formatDate } from '../utils/ui.js';

export async function renderAdminFeedbackPage() {
  const mainContainer = document.getElementById('main-container');
  
  mainContainer.innerHTML = `
    <div class="container-fluid py-5 mt-5">
      <div class="row mb-4">
        <div class="col-12">
          <h1>Customer Feedback</h1>
        </div>
      </div>

      <div class="row g-4">
        <div class="col-lg-8">
          <div class="card shadow-sm">
            <div class="card-header bg-orange">
              <div class="d-flex justify-content-between align-items-center">
                <h5 class="mb-0">Recent Feedback</h5>
                <div class="btn-group">
                  <button class="btn btn-outline-primary active" data-filter="all">All</button>
                  <button class="btn btn-outline-primary" data-filter="positive">Positive</button>
                  <button class="btn btn-outline-primary" data-filter="negative">Negative</button>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div id="feedbackContainer">
                <p class="text-center py-4">Loading feedback...</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="card shadow-sm mb-4">
            <div class="card-header bg-orange">
              <h5 class="mb-0">Feedback Summary</h5>
            </div>
            <div class="card-body">
              <div class="mb-4">
                <h6 class="mb-3">Average Rating</h6>
                <div class="d-flex align-items-center">
                  <div class="display-4 me-3" id="averageRating">-</div>
                  <div id="ratingStars"></div>
                </div>
              </div>
              
              <div class="mb-4">
                <h6 class="mb-3">Rating Distribution</h6>
                <div id="ratingDistribution">
                  Loading...
                </div>
              </div>

              <div>
                <h6 class="mb-3">Quick Stats</h6>
                <div class="d-flex justify-content-between mb-2">
                  <span>Total Feedback</span>
                  <span class="badge bg-primary" id="totalFeedback">0</span>
                </div>
                <div class="d-flex justify-content-between mb-2">
                  <span>Positive Feedback</span>
                  <span class="badge bg-success" id="positiveFeedback">0</span>
                </div>
                <div class="d-flex justify-content-between">
                  <span>Negative Feedback</span>
                  <span class="badge bg-danger" id="negativeFeedback">0</span>
                </div>
              </div>
            </div>
          </div>

          <div class="card shadow-sm">
            <div class="card-header bg-orange">
              <h5 class="mb-0">Export Options</h5>
            </div>
            <div class="card-body">
              <div class="d-grid gap-2">
                <button class="btn btn-outline-primary" onclick="exportFeedback('csv')">
                  ${icons.download} Export as CSV
                </button>
                <button class="btn btn-outline-primary" onclick="exportFeedback('pdf')">
                  ${icons.download} Export as PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Update document title
  document.title = 'Customer Feedback - Admin Dashboard';

  // Load feedback data
  loadFeedback();

  // Add event listeners
  setupEventListeners();

  // Add global export function
  window.exportFeedback = (format) => {
    showToast('Info', `Export as ${format.toUpperCase()} will be implemented soon`, 'info');
  };
}

async function loadFeedback() {
  try {
    const response = await authFetch(`${window.API_URL}/feedback`);
    const feedback = await response.json();
    displayFeedback(feedback);
    updateFeedbackStats(feedback);
  } catch (error) {
    console.error('Error loading feedback:', error);
    showToast('Error', 'Failed to load feedback', 'error');
  }
}

function displayFeedback(feedback, filter = 'all') {
  const container = document.getElementById('feedbackContainer');
  
  if (!feedback || feedback.length === 0) {
    container.innerHTML = `
      <div class="text-center py-4">
        <p class="mb-0">No feedback found</p>
      </div>
    `;
    return;
  }

  // Filter feedback if needed
  let filteredFeedback = feedback;
  if (filter === 'positive') {
    filteredFeedback = feedback.filter(f => f.rating >= 4);
  } else if (filter === 'negative') {
    filteredFeedback = feedback.filter(f => f.rating <= 2);
  }

  container.innerHTML = filteredFeedback.map(f => `
    <div class="card mb-4">
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-start mb-3">
          <div>
            <h6 class="mb-1">${f.userId?.name || 'Anonymous'}</h6>
            <div class="text-secondary small">${formatDate(f.createdAt)}</div>
          </div>
          <div class="rating">
            ${getRatingStars(f.rating)}
          </div>
        </div>
        <p class="mb-2">${f.comment || 'No comment provided'}</p>
        <div class="d-flex align-items-center text-secondary small">
          <span class="me-3">
            ${icons.clipboard} Request: ${f.requestId?.issueSummary || 'N/A'}
          </span>
          <span>
            ${icons.tag} Device: ${f.requestId?.deviceType || 'N/A'}
          </span>
        </div>
      </div>
    </div>
  `).join('');
}

function updateFeedbackStats(feedback) {
  // Calculate average rating
  const totalRating = feedback.reduce((sum, f) => sum + f.rating, 0);
  const averageRating = feedback.length > 0 ? (totalRating / feedback.length).toFixed(1) : 0;

  // Update average rating display
  document.getElementById('averageRating').textContent = averageRating;
  document.getElementById('ratingStars').innerHTML = getRatingStars(averageRating);

  // Calculate rating distribution
  const distribution = {
    5: feedback.filter(f => f.rating === 5).length,
    4: feedback.filter(f => f.rating === 4).length,
    3: feedback.filter(f => f.rating === 3).length,
    2: feedback.filter(f => f.rating === 2).length,
    1: feedback.filter(f => f.rating === 1).length
  };

  // Update rating distribution display
  const maxCount = Math.max(...Object.values(distribution));
  document.getElementById('ratingDistribution').innerHTML = Object.entries(distribution)
    .reverse()
    .map(([rating, count]) => `
      <div class="d-flex align-items-center mb-2">
        <div class="me-2" style="width: 24px;">${rating}★</div>
        <div class="flex-grow-1">
          <div class="progress" style="height: 8px;">
            <div class="progress-bar bg-primary" style="width: ${(count / maxCount) * 100}%"></div>
          </div>
        </div>
        <div class="ms-2" style="width: 24px;">${count}</div>
      </div>
    `).join('');

  // Update quick stats
  document.getElementById('totalFeedback').textContent = feedback.length;
  document.getElementById('positiveFeedback').textContent = feedback.filter(f => f.rating >= 4).length;
  document.getElementById('negativeFeedback').textContent = feedback.filter(f => f.rating <= 2).length;
}

function getRatingStars(rating) {
  const fullStar = `<span class="text-warning">${icons.star}</span>`;
  const emptyStar = `<span class="text-secondary">${icons.star}</span>`;
  
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  
  let stars = '';
  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars += fullStar;
    } else if (i === fullStars && hasHalfStar) {
      stars += `<span class="text-warning">${icons.starHalf}</span>`;
    } else {
      stars += emptyStar;
    }
  }
  
  return stars;
}

function setupEventListeners() {
  // Filter buttons
  document.querySelectorAll('[data-filter]').forEach(button => {
    button.addEventListener('click', (e) => {
      // Update active state
      document.querySelectorAll('[data-filter]').forEach(btn => {
        btn.classList.remove('active');
      });
      e.target.classList.add('active');

      // Apply filter
      const filter = e.target.dataset.filter;
      authFetch(`${window.API_URL}/feedback`)
        .then(response => response.json())
        .then(feedback => {
          displayFeedback(feedback, filter);
        })
        .catch(error => {
          console.error('Error filtering feedback:', error);
          showToast('Error', 'Failed to filter feedback', 'error');
        });
    });
  });
}