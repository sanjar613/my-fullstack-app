import '../css/styles.css';
import { createNavbar } from './components/navbar.js';
import { createFooter } from './components/footer.js';
import { setupAuthentication } from './services/auth.js';
import { setupRoutes } from './routes.js';
import { loadingSpinner, showToast } from './utils/ui.js';

// Set base API URL
const API_URL = '/api';
window.API_URL = API_URL;

// Initialize the application
document.addEventListener('DOMContentLoaded', initApp);

function initApp() {
  // Create navbar and footer
  const root = document.getElementById('root');
  root.innerHTML = `
    <div id="navbar-container"></div>
    <div id="main-container" class="fade-in"></div>
    <div id="footer-container"></div>
    <div id="toast-container" class="position-fixed bottom-0 end-0 p-3" style="z-index: 1100"></div>
    <div id="loading-spinner" class="d-none">${loadingSpinner}</div>
  `;

  // Setup authentication
  setupAuthentication();
  
  // Create navbar
  createNavbar();
  
  // Create footer
  createFooter();
  
  // Setup routes
  setupRoutes();
  
  // Show welcome toast
  showToast('Welcome to Dern-Support', 'Your trusted IT technical support partner.', 'info');
}

// Handle navigation
window.navigateTo = (path) => {
  window.history.pushState({}, '', path);
  const popStateEvent = new PopStateEvent('popstate');
  window.dispatchEvent(popStateEvent);
  return false; // Prevent default link behavior
};

