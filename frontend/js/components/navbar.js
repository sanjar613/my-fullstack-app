import { icons } from '../utils/icons.js';

export function createNavbar() {
  const navbarContainer = document.getElementById('navbar-container');
  
  // Check if user is logged in
  const isLoggedIn = localStorage.getItem('authToken') !== null;
  const userName = localStorage.getItem('userName');
  const userRole = localStorage.getItem('userRole');
  
  // Create different navbar based on login status
  if (isLoggedIn) {
    // If admin, show admin navbar
    if (userRole === 'admin') {
      createAdminNavbar(navbarContainer, userName);
    } else {
      // Otherwise show user navbar
      createUserNavbar(navbarContainer, userName);
    }
  } else {
    // Public navbar
    createPublicNavbar(navbarContainer);
  }
  
  // Initialize Bootstrap navbar toggler
  initializeNavbar();
}

function createPublicNavbar(container) {
  container.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div class="container">
        <a class="navbar-brand" href="/" onclick="return navigateTo('/')">
          ${icons.settings}
          <span class="ms-2">Dern-Support</span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="/" onclick="return navigateTo('/')">Main</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/login" onclick="return navigateTo('/login')">Sign In</a>
            </li>
            <li class="nav-item">
              <a class="nav-link btn btn-primary text-white px-3" href="/register" onclick="return navigateTo('/register')">Sign Up</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `;
}

function createUserNavbar(container, userName) {
  container.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div class="container">
        <a class="navbar-brand" href="/dashboard" onclick="return navigateTo('/dashboard')">
          ${icons.settings}
          <span class="ms-2">Dern-Support</span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/dashboard" onclick="return navigateTo('/dashboard')">Control Panel</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/support-request" onclick="return navigateTo('/support-request')">Create Request</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/knowledge-base" onclick="return navigateTo('/knowledge-base')">Help Center</a>
            </li>
          </ul>
          <div class="user-dropdown dropdown ms-auto">
            <a class="dropdown-toggle d-flex align-items-center" href="#" role="button" id="userDropdown" data-bs-toggle="dropdown" aria-expanded="false">
              <div class="avatar d-flex align-items-center justify-content-center bg-warning text-white rounded-circle me-2" style="width: 32px; height: 32px;">
                ${userName?.charAt(0).toUpperCase() || 'U'}
              </div>
              <span class="d-none d-sm-inline">${userName || 'User'}</span>
              ${icons.chevronDown}
            </a>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
              <li>
                <span class="dropdown-item-text">Logged in as</span>
                <span class="dropdown-item-text fw-bold">${userName || 'User'}</span>
              </li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#" id="userProfileLink">${icons.user} Profile</a></li>
              <li><a class="dropdown-item" href="#" id="logoutButton">${icons.logOut} Sign Out</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  `;
}

  
  // Add event listener for logout button
  setTimeout(() => {
    document.getElementById('logoutButton').addEventListener('click', handleLogout);
  }, 0);


function createAdminNavbar(container, userName) {
  container.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div class="container">
        <a class="navbar-brand" href="/admin" onclick="return navigateTo('/admin')">
          ${icons.settings}
          <span class="ms-2">Dern-Support</span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/admin" onclick="return navigateTo('/admin')">Control Panel</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/admin/requests" onclick="return navigateTo('/admin/requests')">Tickets</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/admin/spareparts" onclick="return navigateTo('/admin/spareparts')">Parts Inventory</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/admin/knowledge-base" onclick="return navigateTo('/admin/knowledge-base')">Help Center</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/admin/feedback" onclick="return navigateTo('/admin/feedback')">User Feedback</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/admin/analytics" onclick="return navigateTo('/admin/analytics')">Reports</a>
            </li>
          </ul>
          <div class="user-dropdown dropdown ms-auto">
            <a class="dropdown-toggle d-flex align-items-center" href="#" role="button" id="userDropdown" data-bs-toggle="dropdown" aria-expanded="false">
              <div class="avatar d-flex align-items-center justify-content-center bg-warning text-white rounded-circle me-2" style="width: 32px; height: 32px;">
                ${userName?.charAt(0).toUpperCase() || 'A'}
              </div>
              <span class="d-none d-sm-inline">${userName || 'Admin'} (Admin)</span>
              ${icons.chevronDown}
            </a>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
              <li>
                <span class="dropdown-item-text">Logged in as</span>
                <span class="dropdown-item-text fw-bold">${userName || 'Admin'} (Admin)</span>
              </li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#" id="userProfileLink">${icons.user} Profile</a></li>
              <li><a class="dropdown-item" href="#" id="logoutButton">${icons.logOut} Sign Out</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  `;
}

  
  // Add event listener for logout button
  setTimeout(() => {
    document.getElementById('logoutButton').addEventListener('click', handleLogout);
  }, 0);


function handleLogout(e) {
  e.preventDefault();
  
  // Clear local storage
  localStorage.removeItem('authToken');
  localStorage.removeItem('userId');
  localStorage.removeItem('userName');
  localStorage.removeItem('userEmail');
  localStorage.removeItem('userRole');
  
  // Navigate to home page
  window.navigateTo('/');
  
  // Recreate navbar
  createNavbar();
}

function initializeNavbar() {
  // Add active class to current nav item
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const currentPath = window.location.pathname;
  
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (linkPath === currentPath) {
      link.classList.add('active');
    }
  });
  
  // Close navbar on link click on mobile
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarNav = document.querySelector('#navbarNav');
  const navbarCollapse = new bootstrap.Collapse(navbarNav, {
    toggle: false
  });
  
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 992 && navbarNav.classList.contains('show')) {
        navbarCollapse.hide();
      }
    });
  });
}