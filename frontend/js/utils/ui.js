// Loading spinner HTML
export const loadingSpinner = `
  <div class="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center" style="background-color: rgba(0, 0, 0, 0.5); z-index: 9999;">
    <div class="spinner-border text-light" role="status" style="width: 3rem; height: 3rem;">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
`;

// Show loading spinner
export function showLoading() {
  const loadingElement = document.getElementById('loading-spinner');
  if (loadingElement) {
    loadingElement.classList.remove('d-none');
  }
}

// Hide loading spinner
export function hideLoading() {
  const loadingElement = document.getElementById('loading-spinner');
  if (loadingElement) {
    loadingElement.classList.add('d-none');
  }
}

// Show toast notification
export function showToast(title, message, type = 'info') {
  const toastContainer = document.getElementById('toast-container');
  
  // Define toast background color based on type
  let bgColor = 'bg-primary';
  let icon = '';
  
  switch (type) {
    case 'success':
      bgColor = 'bg-success';
      icon = '<i class="bi bi-check-circle-fill me-2"></i>';
      break;
    case 'error':
      bgColor = 'bg-danger';
      icon = '<i class="bi bi-x-circle-fill me-2"></i>';
      break;
    case 'warning':
      bgColor = 'bg-warning';
      icon = '<i class="bi bi-exclamation-triangle-fill me-2"></i>';
      break;
    default:
      bgColor = 'bg-primary';
      icon = '<i class="bi bi-info-circle-fill me-2"></i>';
  }
  
  // Create toast
  const toastId = `toast-${Date.now()}`;
  const toastHTML = `
    <div id="${toastId}" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header ${bgColor} text-white">
        ${icon}
        <strong class="me-auto">${title}</strong>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">
        ${message}
      </div>
    </div>
  `;
  
  // Add toast to container
  toastContainer.innerHTML += toastHTML;
  
  // Initialize and show toast
  const toastElement = document.getElementById(toastId);
  const toast = new bootstrap.Toast(toastElement, {
    delay: 5000
  });
  
  toast.show();
  
  // Remove toast after it's hidden
  toastElement.addEventListener('hidden.bs.toast', () => {
    toastElement.remove();
  });
}

// Format date
export function formatDate(dateString) {
  const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

// Get status badge HTML
export function getStatusBadge(status) {
  switch (status) {
    case 'pending':
      return `<span class="badge badge-pending">Pending</span>`;
    case 'scheduled':
      return `<span class="badge badge-scheduled">Scheduled</span>`;
    case 'in-progress':
      return `<span class="badge badge-in-progress">In Progress</span>`;
    case 'resolved':
      return `<span class="badge badge-resolved">Resolved</span>`;
    default:
      return `<span class="badge bg-secondary">${status}</span>`;
  }
}

// Get priority badge HTML
export function getPriorityBadge(priority) {
  switch (priority) {
    case 'high':
      return `<span class="badge badge-high">High</span>`;
    case 'medium':
      return `<span class="badge badge-medium">Medium</span>`;
    case 'low':
      return `<span class="badge badge-low">Low</span>`;
    default:
      return `<span class="badge bg-secondary">${priority}</span>`;
  }
}

// Format currency
export function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

// Validate form input
export function validateInput(input, validationFn, errorMessage) {
  const value = input.value;
  const isValid = validationFn(value);
  
  if (!isValid) {
    input.classList.add('is-invalid');
    
    // Add validation message if it doesn't exist
    if (!input.nextElementSibling || !input.nextElementSibling.classList.contains('invalid-feedback')) {
      const invalidFeedback = document.createElement('div');
      invalidFeedback.classList.add('invalid-feedback');
      invalidFeedback.innerText = errorMessage;
      input.insertAdjacentElement('afterend', invalidFeedback);
    }
    return false;
  } else {
    input.classList.remove('is-invalid');
    if (value) {
      input.classList.add('is-valid');
    } else {
      input.classList.remove('is-valid');
    }
    return true;
  }
}

// Check if form is valid
export function isFormValid(form) {
  return form.checkValidity();
}