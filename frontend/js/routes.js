




import { renderHomePage } from './pages/home.js';
import { renderLoginPage } from './pages/login.js';
import { renderRegisterPage } from './pages/register.js';
import { renderDashboardPage } from './pages/dashboard.js';
import { renderSupportRequestPage } from './pages/SupportRequest.js';
import { renderKnowledgeBasePage } from './pages/knowledgeBase.js';
import { renderAdminDashboardPage } from './pages/adminDashboard.js';
import { renderAdminRequestsPage } from './pages/adminRequests.js';
import { renderAdminSparePartsPage } from './pages/adminSpareParts.js';
import { renderAdminKnowledgeBasePage } from './pages/adminKnowledgeBase.js';
import { renderAdminFeedbackPage } from './pages/adminFeedback.js';
import { renderAdminAnalyticsPage } from './pages/adminAnalytics.js';
import { renderTermsPage } from './pages/terms.js';
import { renderPrivacyPage } from './pages/privacy.js';
import { renderAboutPage } from './pages/about.js';
import { showLoading, hideLoading } from './utils/ui.js';

// Setup routes
export function setupRoutes() {
  // Handle route changes
  window.addEventListener('popstate', router);
  
  // Handle initial route
  router();
}

// Router function
async function router() {
  // Get the current path
  const path = window.location.pathname;
  
  // Get the main container
  const main = document.getElementById('main-container');
  
  // Show loading spinner
  showLoading();
  
  // Check if user is authenticated
  const authToken = localStorage.getItem('authToken');
  const userRole = localStorage.getItem('userRole');
  
  // Define protected routes
  const protectedRoutes = [
    '/dashboard',
    '/support-request',
    '/my-requests',
    '/knowledge-base',
    '/admin',
    '/admin/requests',
    '/admin/spareparts',
    '/admin/knowledge-base',
    '/admin/feedback',
    '/admin/analytics'
  ];
  
  // Define admin routes
  const adminRoutes = [
    '/admin',
    '/admin/requests',
    '/admin/spareparts',
    '/admin/knowledge-base',
    '/admin/feedback',
    '/admin/analytics'
  ];
  
  // Check if trying to access protected route without auth
  if (protectedRoutes.includes(path) && !authToken) {
    window.history.pushState({}, '', '/login');
    hideLoading();
    renderLoginPage();
    return;
  }
  
  // Check if trying to access admin route without admin role
  if (adminRoutes.includes(path) && userRole !== 'admin') {
    window.history.pushState({}, '', '/dashboard');
    hideLoading();
    renderDashboardPage();
    return;
  }
  
  // Handle routes
  try {
    switch (path) {
      case '/':
        await renderHomePage();
        break;
      case '/login':
        // Redirect to dashboard if already logged in
        if (authToken) {
          window.history.pushState({}, '', userRole === 'admin' ? '/admin' : '/dashboard');
          userRole === 'admin' ? await renderAdminDashboardPage() : await renderDashboardPage();
        } else {
          await renderLoginPage();
        }
        break;
      case '/register':
        // Redirect to dashboard if already logged in
        if (authToken) {
          window.history.pushState({}, '', userRole === 'admin' ? '/admin' : '/dashboard');
          userRole === 'admin' ? await renderAdminDashboardPage() : await renderDashboardPage();
        } else {
          await renderRegisterPage();
        }
        break;
      case '/dashboard':
        await renderDashboardPage();
        break;
      case '/support-request':
        await renderSupportRequestPage();
        break;
      case '/knowledge-base':
        await renderKnowledgeBasePage();
        break;
      case '/admin':
        await renderAdminDashboardPage();
        break;
      case '/admin/requests':
        await renderAdminRequestsPage();
        break;
      case '/admin/spareparts':
        await renderAdminSparePartsPage();
        break;
      case '/admin/knowledge-base':
        await renderAdminKnowledgeBasePage();
        break;
      case '/admin/feedback':
        await renderAdminFeedbackPage();
        break;
      case '/admin/analytics':
        await renderAdminAnalyticsPage();
        break;
      case '/terms':
        await renderTermsPage();
        break;
      case '/privacy':
        await renderPrivacyPage();
        break;
      case '/about':
        await renderAboutPage();
        break;
      default:
        main.innerHTML = `
          <div class="container mt-5 pt-5 text-center">
            <h1 class="display-4">404 - Page Not Found</h1>
            <p class="lead">The page you're looking for doesn't exist.</p>
            <a href="/" onclick="return navigateTo('/')" class="btn btn-primary mt-3">Return Home</a>
          </div>
        `;
    }
  } catch (error) {
    console.error('Error rendering page:', error);
    main.innerHTML = `
      <div class="container mt-5 pt-5 text-center">
        <h1 class="display-4">Error</h1>
        <p class="lead">Something went wrong while loading the page.</p>
        <a href="/" onclick="return navigateTo('/')" class="btn btn-primary mt-3">Return Home</a>
      </div>
    `;
  }
  
  // Hide loading spinner
  hideLoading();
  
  // Scroll to top on page change
  window.scrollTo(0, 0);
}