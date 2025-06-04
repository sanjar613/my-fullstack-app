(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();const n={home:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',settings:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>',user:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',userPlus:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/></svg>',logIn:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-in"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" x2="3" y1="12" y2="12"/></svg>',logOut:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>',chevronDown:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>',mapPin:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',phone:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',mail:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',clock:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',lock:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lock"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',laptop:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-laptop"><path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"/></svg>',code:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',wifi:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wifi"><path d="M5 13a10 10 0 0 1 14 0"/><path d="M8.5 16.5a5 5 0 0 1 7 0"/><path d="M2 8.82a15 15 0 0 1 20 0"/><line x1="12" x2="12.01" y1="20" y2="20"/></svg>',server:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-server"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>',shield:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>',database:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-database"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',facebook:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',twitter:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>',instagram:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>',linkedin:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>',pieChart:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pie-chart"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>',barChart:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bar-chart"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>',clipboard:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard"><rect width="14" height="18" x="5" y="3" rx="2"/><path d="M13 2v4h4"/></svg>',tool:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tool"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',messageCircle:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',book:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>',bookmark:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bookmark"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',plus:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><line x1="12" x2="12" y1="5" y2="19"/><line x1="5" x2="19" y1="12" y2="12"/></svg>',edit:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>',trash:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>',alertCircle:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-alert-circle"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>',checkCircle:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',xCircle:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-circle"><circle cx="12" cy="12" r="10"/><line x1="15" x2="9" y1="9" y2="15"/><line x1="9" x2="15" y1="9" y2="15"/></svg>',helpCircle:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-help-circle"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg>',search:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/></svg>',filter:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-filter"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>'};function x(){const e=document.getElementById("navbar-container"),s=localStorage.getItem("authToken")!==null,a=localStorage.getItem("userName"),i=localStorage.getItem("userRole");s?i==="admin"?F(e,a):j(e,a):D(e),U()}function D(e){e.innerHTML=`
    <nav class="navbar navbar-expand-lg navbar-light bg-orange fixed-top">
      <div class="container">
        <a class="navbar-brand" href="/" onclick="return navigateTo('/')">
          ${n.settings}
          <span class="ms-2">Dern-Support</span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="/" onclick="return navigateTo('/')">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/login" onclick="return navigateTo('/login')">Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link btn btn-primary text-white px-3" href="/register" onclick="return navigateTo('/register')">Register</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `}function j(e,s){e.innerHTML=`
    <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div class="container">
        <a class="navbar-brand" href="/dashboard" onclick="return navigateTo('/dashboard')">
          ${n.settings}
          <span class="ms-2">Dern-Support</span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/dashboard" onclick="return navigateTo('/dashboard')">Dashboard</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/support-request" onclick="return navigateTo('/support-request')">New Request</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/knowledge-base" onclick="return navigateTo('/knowledge-base')">Knowledge Base</a>
            </li>
          </ul>
          <div class="user-dropdown dropdown ms-auto">
            <a class="dropdown-toggle d-flex align-items-center" href="#" role="button" id="userDropdown" data-bs-toggle="dropdown" aria-expanded="false">
              <div class="avatar d-flex align-items-center justify-content-center bg-primary text-white rounded-circle me-2" style="width: 32px; height: 32px;">
                ${(s==null?void 0:s.charAt(0).toUpperCase())||"U"}
              </div>
              <span class="d-none d-sm-inline">${s||"User"}</span>
              ${n.chevronDown}
            </a>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
              <li>
                <span class="dropdown-item-text">Signed in as</span>
                <span class="dropdown-item-text fw-bold">${s||"User"}</span>
              </li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#" id="userProfileLink">${n.user} My Profile</a></li>
              <li><a class="dropdown-item" href="#" id="logoutButton">${n.logOut} Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  `,setTimeout(()=>{document.getElementById("logoutButton").addEventListener("click",A)},0)}function F(e,s){e.innerHTML=`
    <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div class="container">
        <a class="navbar-brand" href="/admin" onclick="return navigateTo('/admin')">
          ${n.settings}
          <span class="ms-2">Dern-Support</span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/admin" onclick="return navigateTo('/admin')">Dashboard</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/admin/requests" onclick="return navigateTo('/admin/requests')">Requests</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/admin/spareparts" onclick="return navigateTo('/admin/spareparts')">Spare Parts</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/admin/knowledge-base" onclick="return navigateTo('/admin/knowledge-base')">Knowledge Base</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/admin/feedback" onclick="return navigateTo('/admin/feedback')">Feedback</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/admin/analytics" onclick="return navigateTo('/admin/analytics')">Analytics</a>
            </li>
          </ul>
          <div class="user-dropdown dropdown ms-auto">
            <a class="dropdown-toggle d-flex align-items-center" href="#" role="button" id="userDropdown" data-bs-toggle="dropdown" aria-expanded="false">
              <div class="avatar d-flex align-items-center justify-content-center bg-primary text-white rounded-circle me-2" style="width: 32px; height: 32px;">
                ${(s==null?void 0:s.charAt(0).toUpperCase())||"A"}
              </div>
              <span class="d-none d-sm-inline">${s||"Admin"} (Admin)</span>
              ${n.chevronDown}
            </a>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
              <li>
                <span class="dropdown-item-text">Signed in as</span>
                <span class="dropdown-item-text fw-bold">${s||"Admin"} (Admin)</span>
              </li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#" id="userProfileLink">${n.user} My Profile</a></li>
              <li><a class="dropdown-item" href="#" id="logoutButton">${n.logOut} Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  `,setTimeout(()=>{document.getElementById("logoutButton").addEventListener("click",A)},0)}function A(e){e.preventDefault(),localStorage.removeItem("authToken"),localStorage.removeItem("userId"),localStorage.removeItem("userName"),localStorage.removeItem("userEmail"),localStorage.removeItem("userRole"),window.navigateTo("/"),x()}function U(){const e=document.querySelectorAll(".navbar-nav .nav-link"),s=window.location.pathname;e.forEach(t=>{t.getAttribute("href")===s&&t.classList.add("active")}),document.querySelector(".navbar-toggler");const a=document.querySelector("#navbarNav"),i=new bootstrap.Collapse(a,{toggle:!1});e.forEach(t=>{t.addEventListener("click",()=>{window.innerWidth<992&&a.classList.contains("show")&&i.hide()})})}function H(){const e=document.getElementById("footer-container");e.innerHTML=`
    <footer class="footer mt-auto py-5">
      <div class="container">
        <div class="row g-4">
          <div class="col-lg-4 col-md-6">
            <h5 class="mb-3">Dern-Support</h5>
            <p>Your trusted partner for all IT technical support needs. We provide expert solutions for businesses and individuals.</p>
            <div class="d-flex gap-3 mt-4">
              <a href="#" class="text-warning" aria-label="Facebook">
                ${n.facebook}
              </a>
              <a href="#" class="text-warning" aria-label="Twitter">
                ${n.twitter}
              </a>
              <a href="#" class="text-warning" aria-label="Instagram">
                ${n.instagram}
              </a>
              <a href="#" class="text-warning" aria-label="LinkedIn">
                ${n.linkedin}
              </a>
            </div>
          </div>
          
          <div class="col-lg-2 col-md-6">
            <h5 class="mb-3">Company</h5>
            <ul class="list-unstyled">
              <li class="mb-2"><a href="about">About Us</a></li>
              <li class="mb-2"><a href="#">Our Team</a></li>
              <li class="mb-2"><a href="#">Blog</a></li>
            </ul>
          </div>
          
          <div class="col-lg-2 col-md-6">
            <h5 class="mb-3">Services</h5>
            <ul class="list-unstyled">
              <li class="mb-2"><a href="#">Hardware Repair</a></li>
              <li class="mb-2"><a href="#">Software Support</a></li>
              <li class="mb-2"><a href="#">Network Setup</a></li>
              <li class="mb-2"><a href="#">Data Recovery</a></li>
              <li class="mb-2"><a href="#">IT Consultation</a></li>
            </ul>
          </div>
          
          <div class="col-lg-4 col-md-6">
            <h5 class="mb-3">Contact Us</h5>
            <ul class="list-unstyled">
              <li class="mb-2 d-flex align-items-center">
                ${n.mapPin}
                <span class="ms-2">123, Tashkent, Uzbekistan</span>
              </li>
              <li class="mb-2 d-flex align-items-center">
                ${n.phone}
                <span class="ms-2">+998 (77) 777-7777</span>
              </li>
              <li class="mb-2 d-flex align-items-center">
                ${n.mail}
                <span class="ms-2">support@dern-support.com</span>
              </li>
              <li class="mb-2 d-flex align-items-center">
                ${n.clock}
                <span class="ms-2">Mon-Fri: 8:00 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr class="my-4">
        
        <div class="row">
          <div class="col-md-6 mb-3 mb-md-0">
            <p class="mb-0">© 2025 Dern-Support</p>
          </div>
          <div class="col-md-6 text-md-end">
            <a href="privacy" class="text-decoration-none me-3">Privacy Policy</a>
            <a href="terms" class="text-decoration-none me-3">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  `}const N=`
  <div class="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center" style="background-color: rgba(0, 0, 0, 0.5); z-index: 9999;">
    <div class="spinner-border text-light" role="status" style="width: 3rem; height: 3rem;">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
`;function O(){const e=document.getElementById("loading-spinner");e&&e.classList.remove("d-none")}function k(){const e=document.getElementById("loading-spinner");e&&e.classList.add("d-none")}function d(e,s,a="info"){const i=document.getElementById("toast-container");let t="bg-primary",o="";switch(a){case"success":t="bg-success",o='<i class="bi bi-check-circle-fill me-2"></i>';break;case"error":t="bg-danger",o='<i class="bi bi-x-circle-fill me-2"></i>';break;case"warning":t="bg-warning",o='<i class="bi bi-exclamation-triangle-fill me-2"></i>';break;default:t="bg-primary",o='<i class="bi bi-info-circle-fill me-2"></i>'}const r=`toast-${Date.now()}`,l=`
    <div id="${r}" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header ${t} text-white">
        ${o}
        <strong class="me-auto">${e}</strong>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">
        ${s}
      </div>
    </div>
  `;i.innerHTML+=l;const m=document.getElementById(r);new bootstrap.Toast(m,{delay:5e3}).show(),m.addEventListener("hidden.bs.toast",()=>{m.remove()})}function v(e){const s={year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"};return new Date(e).toLocaleDateString("en-US",s)}function S(e){switch(e){case"pending":return'<span class="badge badge-pending">Pending</span>';case"scheduled":return'<span class="badge badge-scheduled">Scheduled</span>';case"in-progress":return'<span class="badge badge-in-progress">In Progress</span>';case"resolved":return'<span class="badge badge-resolved">Resolved</span>';default:return`<span class="badge bg-secondary">${e}</span>`}}function $(e){switch(e){case"high":return'<span class="badge badge-high">High</span>';case"medium":return'<span class="badge badge-medium">Medium</span>';case"low":return'<span class="badge badge-low">Low</span>';default:return`<span class="badge bg-secondary">${e}</span>`}}function p(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e)}function _(){window.handleLogin=async e=>{e.preventDefault();const s=document.getElementById("loginEmail").value,a=document.getElementById("loginPassword").value;try{const i=await fetch(`${window.API_URL}/auth/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s,password:a})}),t=await i.json();if(!i.ok)throw new Error(t.message||"Login failed");localStorage.setItem("authToken",t.token),localStorage.setItem("userId",t._id),localStorage.setItem("userName",t.name),localStorage.setItem("userEmail",t.email),localStorage.setItem("userRole",t.role),d("Success","Login successful!","success"),x(),t.role==="admin"?window.navigateTo("/admin"):window.navigateTo("/dashboard")}catch(i){d("Error",i.message,"error")}},window.handleRegister=async e=>{e.preventDefault();const s=document.getElementById("registerName").value,a=document.getElementById("registerEmail").value,i=document.getElementById("registerPassword").value,t=document.getElementById("registerConfirmPassword").value,o=document.querySelector('input[name="role"]:checked').value;if(i!==t){d("Error","Passwords do not match","error");return}if(!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(i)){d("Error","Password must be at least 8 characters long and include at least one letter, one number, and one special character","error");return}const l={name:s,email:a,password:i,role:o};o==="business"&&(l.businessInfo={name:document.getElementById("businessName").value,address:document.getElementById("businessAddress").value,phone:document.getElementById("businessPhone").value,type:document.getElementById("businessType").value});try{const m=await fetch(`${window.API_URL}/auth/register`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}),c=await m.json();if(!m.ok)throw new Error(c.message||"Registration failed");localStorage.setItem("authToken",c.token),localStorage.setItem("userId",c._id),localStorage.setItem("userName",c.name),localStorage.setItem("userEmail",c.email),localStorage.setItem("userRole",c.role),c.businessInfo&&localStorage.setItem("businessInfo",JSON.stringify(c.businessInfo)),d("Success","Registration successful!","success"),x(),c.role==="admin"?window.navigateTo("/admin"):window.navigateTo("/dashboard")}catch(m){d("Error",m.message,"error")}}}function W(){return localStorage.getItem("authToken")}async function u(e,s={}){const a=W();if(!a)throw new Error("Not authenticated");const i={...s.headers||{},Authorization:`Bearer ${a}`,"Content-Type":"application/json"};try{const t=await fetch(e,{...s,headers:i});if(!t.ok){const o=await t.json().catch(()=>({}));throw new Error(o.message||`Request failed with status ${t.status}`)}return t}catch(t){throw console.error("API request failed:",t),t}}async function z(){const e=document.getElementById("main-container");try{const a=await(await fetch(`${window.API_URL}/kb`)).json();e.innerHTML=`
      <!-- Hero Section -->
      <section class="hero">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-10 text-center">
              <h1 class="display-4 fw-bold mb-4 fade-in">Expert IT Support When You Need It</h1>
              <p class="lead mb-5 fade-in">We provide comprehensive technical support for businesses and individuals, solving your IT problems quickly and efficiently.</p>
              <div class="d-flex flex-wrap justify-content-center gap-3 fade-in">
                <a href="/register" onclick="return navigateTo('/register')" class="btn btn-primary btn-lg px-4 py-3 pulse">Get Started</a>
                <a href="#services" class="btn btn-outline-light btn-lg px-4 py-3">Our Services</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Key Features Section -->
      <section class="py-5" id="services">
        <div class="container">
          <div class="row text-center mb-5">
            <div class="col-lg-8 mx-auto">
              <h2 class="fw-bold">Our Services</h2>
              <p class="lead text-secondary">We offer a wide range of IT support services to keep your technology running smoothly.</p>
            </div>
          </div>
          
          <div class="row g-4">
            <div class="col-lg-4 col-md-6">
              <div class="card h-100 service-card">
                <div class="card-body text-center">
                  <div class="service-icon mb-4">
                    ${n.laptop}
                  </div>
                  <h3 class="h4 mb-3">Hardware Support</h3>
                  <p class="mb-0">Expert diagnosis and repair for computers, laptops, printers, and other devices to get you back up and running.</p>
                </div>
              </div>
            </div>
            
            <div class="col-lg-4 col-md-6">
              <div class="card h-100 service-card">
                <div class="card-body text-center">
                  <div class="service-icon mb-4">
                    ${n.code}
                  </div>
                  <h3 class="h4 mb-3">Software Solutions</h3>
                  <p class="mb-0">Troubleshooting and support for operating systems, applications, and custom software implementations.</p>
                </div>
              </div>
            </div>
            
            <div class="col-lg-4 col-md-6">
              <div class="card h-100 service-card">
                <div class="card-body text-center">
                  <div class="service-icon mb-4">
                    ${n.wifi}
                  </div>
                  <h3 class="h4 mb-3">Network Setup</h3>
                  <p class="mb-0">Installation, configuration, and troubleshooting of home and business networks for optimal performance.</p>
                </div>
              </div>
            </div>
            
            <div class="col-lg-4 col-md-6">
              <div class="card h-100 service-card">
                <div class="card-body text-center">
                  <div class="service-icon mb-4">
                    ${n.server}
                  </div>
                  <h3 class="h4 mb-3">Server Management</h3>
                  <p class="mb-0">Setup and maintenance of servers, including cloud solutions, with focus on security and performance.</p>
                </div>
              </div>
            </div>
            
            <div class="col-lg-4 col-md-6">
              <div class="card h-100 service-card">
                <div class="card-body text-center">
                  <div class="service-icon mb-4">
                    ${n.shield}
                  </div>
                  <h3 class="h4 mb-3">Security Services</h3>
                  <p class="mb-0">Protect your data with comprehensive security solutions, including antivirus, firewall, and backup solutions.</p>
                </div>
              </div>
            </div>
            
            <div class="col-lg-4 col-md-6">
              <div class="card h-100 service-card">
                <div class="card-body text-center">
                  <div class="service-icon mb-4">
                    ${n.database}
                  </div>
                  <h3 class="h4 mb-3">Data Recovery</h3>
                  <p class="mb-0">Professional recovery of lost or corrupted data from various storage devices with high success rates.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Knowledge Base Section -->
      <section class="py-5 bg-light">
        <div class="container">
          <div class="row text-center mb-5">
            <div class="col-lg-8 mx-auto">
              <h2 class="fw-bold">Knowledge Base</h2>
              <p class="lead text-secondary">Find solutions to common IT issues in our comprehensive knowledge base.</p>
            </div>
          </div>

          <div class="row g-4">
            ${a.slice(0,6).map(i=>`
              <div class="col-lg-4 col-md-6">
                <div class="card h-100 kb-article">
                  <div class="card-body">
                    <h3 class="h5 kb-article-title">${i.title}</h3>
                    <div class="kb-article-content">
                      ${i.content.length>150?i.content.substring(0,150)+"...":i.content}
                    </div>
                    <div class="mt-3">
                      ${i.tags.map(t=>`
                        <span class="kb-tag">${t}</span>
                      `).join("")}
                    </div>
                  </div>
                </div>
              </div>
            `).join("")}
          </div>

          <div class="text-center mt-4">
            <a href="/knowledge-base" onclick="return navigateTo('/knowledge-base')" class="btn btn-primary">
              View All Articles
            </a>
          </div>
        </div>
      </section>
      
      <!-- How It Works Section -->
      <section class="py-5">
        <div class="container">
          <div class="row text-center mb-5">
            <div class="col-lg-8 mx-auto">
              <h2 class="fw-bold">How It Works</h2>
              <p class="lead text-secondary">Getting support from Dern-Support is quick and simple.</p>
            </div>
          </div>
          
          <div class="row">
            <div class="col-md-4 text-center mb-4 mb-md-0">
              <div class="bg-primary rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4" style="width: 80px; height: 80px;">
                <h3 class="text-white mb-0">1</h3>
              </div>
              <h4>Submit a Request</h4>
              <p>Fill out our quick support request form with details about your issue.</p>
            </div>
            
            <div class="col-md-4 text-center mb-4 mb-md-0">
              <div class="bg-primary rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4" style="width: 80px; height: 80px;">
                <h3 class="text-white mb-0">2</h3>
              </div>
              <h4>Get a Quote</h4>
              <p>Our technicians will review your issue and provide an estimate for the service.</p>
            </div>
            
            <div class="col-md-4 text-center">
              <div class="bg-primary rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4" style="width: 80px; height: 80px;">
                <h3 class="text-white mb-0">3</h3>
              </div>
              <h4>Problem Solved</h4>
              <p>Our experts will fix your issue promptly and efficiently.</p>
            </div>
          </div>
          
          <div class="text-center mt-5">
            <a href="/register" onclick="return navigateTo('/register')" class="btn btn-primary btn-lg px-4">Get Started Now</a>
          </div>
        </div>
      </section>
      
      <!-- Testimonials Section -->
      <section class="py-5 bg-light">
        <div class="container">
          <div class="row text-center mb-5">
            <div class="col-lg-8 mx-auto">
              <h2 class="fw-bold">Customer Testimonials</h2>
              <p class="lead text-secondary">Hear what our satisfied customers have to say about our services.</p>
            </div>
          </div>
          
          <div class="row g-4">
            <div class="col-lg-4 col-md-6">
              <div class="testimonial h-100">
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="John Smith" class="testimonial-avatar">
                <div class="testimonial-content">
                  <p>The team at Dern-Support saved my business when our server crashed. They recovered our data and had us back online within hours. Extremely professional service!</p>
                </div>
                <h5 class="testimonial-name">John Smith</h5>
                <p class="testimonial-role">Small Business Owner</p>
              </div>
            </div>
            
            <div class="col-lg-4 col-md-6">
              <div class="testimonial h-100">
                <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Sarah Johnson" class="testimonial-avatar">
                <div class="testimonial-content">
                  <p>I was having issues with my laptop for weeks before contacting Dern-Support. Their technician identified and fixed the problem quickly. Excellent service and fair pricing!</p>
                </div>
                <h5 class="testimonial-name">Sarah Johnson</h5>
                <p class="testimonial-role">Freelance Designer</p>
              </div>
            </div>
            
            <div class="col-lg-4 col-md-6">
              <div class="testimonial h-100">
                <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Michael Chen" class="testimonial-avatar">
                <div class="testimonial-content">
                  <p>Our company needed to set up a secure network for our new office. Dern-Support handled everything from start to finish, ensuring all our devices were properly connected and secured.</p>
                </div>
                <h5 class="testimonial-name">Michael Chen</h5>
                <p class="testimonial-role">Marketing Director</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- CTA Section -->
      <section class="py-5 bg-primary text-white">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-8 mb-4 mb-lg-0">
              <h2 class="fw-bold">Ready to solve your IT issues?</h2>
              <p class="lead mb-0">Sign up today and get your first consultation free.</p>
            </div>
            <div class="col-lg-4 text-lg-end">
              <a href="/register" onclick="return navigateTo('/register')" class="btn btn-light btn-lg px-4">Get Started</a>
            </div>
          </div>
        </div>
      </section>
    `}catch(s){console.error("Error loading knowledge base articles:",s)}document.title="Dern-Support - IT Technical Support Services"}async function C(){const e=document.getElementById("main-container");e.innerHTML=`
    <div class="container py-5 my-5">
      <div class="row justify-content-center">
        <div class="col-md-6 col-lg-5">
          <div class="card shadow">
            <div class="card-body p-4 p-md-5">
              <div class="text-center mb-4">
                ${n.logIn}
                <h1 class="h3 mt-3">Login to Your Account</h1>
                <p class="text-secondary">Enter your credentials to access your account</p>
              </div>
              
              <form id="loginForm" onsubmit="handleLogin(event)">
                <div class="mb-3">
                  <label for="loginEmail" class="form-label">Email Address</label>
                  <div class="input-group">
                    <span class="input-group-text">
                      ${n.mail}
                    </span>
                    <input type="email" class="form-control" id="loginEmail" required placeholder="name@example.com">
                  </div>
                </div>
                
                <div class="mb-4">
                  <label for="loginPassword" class="form-label">Password</label>
                  <div class="input-group">
                    <span class="input-group-text">
                      ${n.lock}
                    </span>
                    <input type="password" class="form-control" id="loginPassword" required placeholder="Enter your password">
                  </div>
                </div>
                
                <div class="mb-4 d-flex justify-content-between align-items-center">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="rememberMe">
                    <label class="form-check-label" for="rememberMe">
                      Remember me
                    </label>
                  </div>
                  <a href="#" class="text-primary">Forgot password?</a>
                </div>
                
                <button type="submit" class="btn btn-primary w-100 py-2 mb-4">
                  Login
                </button>
                
                <div class="text-center">
                  <p>Don't have an account? <a href="/register" onclick="return navigateTo('/register')">Register</a></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,document.title="Login - Dern-Support",document.getElementById("loginEmail").addEventListener("input",V),document.getElementById("loginPassword").addEventListener("input",J)}function V(e){const s=e.target.value;if(s&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)){if(e.target.classList.add("is-invalid"),!e.target.nextElementSibling||!e.target.nextElementSibling.classList.contains("invalid-feedback")){const i=document.createElement("div");i.classList.add("invalid-feedback"),i.innerText="Please enter a valid email address.",e.target.insertAdjacentElement("afterend",i)}}else e.target.classList.remove("is-invalid"),s?e.target.classList.add("is-valid"):e.target.classList.remove("is-valid")}function J(e){const s=e.target.value;if(s&&s.length<8){if(e.target.classList.add("is-invalid"),!e.target.nextElementSibling||!e.target.nextElementSibling.classList.contains("invalid-feedback")){const a=document.createElement("div");a.classList.add("invalid-feedback"),a.innerText="Password must be at least 8 characters long.",e.target.insertAdjacentElement("afterend",a)}}else e.target.classList.remove("is-invalid"),s?e.target.classList.add("is-valid"):e.target.classList.remove("is-valid")}async function Q(){const e=document.getElementById("main-container");e.innerHTML=`
    <div class="container py-5 my-5">
      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6">
          <div class="card shadow">
            <div class="card-body p-4 p-md-5">
              <div class="text-center mb-4">
                ${n.userPlus}
                <h1 class="h3 mt-3">Create an Account</h1>
                <p class="text-secondary">Join Dern-Support to get expert IT technical support</p>
              </div>
              
              <form id="registerForm" onsubmit="handleRegister(event)">
                <div class="mb-3">
                  <label for="registerName" class="form-label">Full Name</label>
                  <div class="input-group">
                    <span class="input-group-text">
                      ${n.user}
                    </span>
                    <input type="text" class="form-control" id="registerName" required placeholder="John Smith">
                  </div>
                </div>
                
                <div class="mb-3">
                  <label for="registerEmail" class="form-label">Email Address</label>
                  <div class="input-group">
                    <span class="input-group-text">
                      ${n.mail}
                    </span>
                    <input type="email" class="form-control" id="registerEmail" required placeholder="name@example.com">
                  </div>
                </div>
                
                <div class="mb-3">
                  <label for="registerPassword" class="form-label">Password</label>
                  <div class="input-group">
                    <span class="input-group-text">
                      ${n.lock}
                    </span>
                    <input type="password" class="form-control" id="registerPassword" required placeholder="Create a password">
                  </div>
                  <div class="form-text">
                    Password must be at least 8 characters long and include a symbol and a number
                  </div>
                </div>
                
                <div class="mb-4">
                  <label for="registerConfirmPassword" class="form-label">Confirm Password</label>
                  <div class="input-group">
                    <span class="input-group-text">
                      ${n.lock}
                    </span>
                    <input type="password" class="form-control" id="registerConfirmPassword" required placeholder="Confirm your password">
                  </div>
                </div>
                
                <div class="mb-4">
                  <label class="form-label">Account Type</label>
                  <div class="d-flex gap-4">
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="role" id="roleIndividual" value="individual" checked onchange="toggleBusinessFields(false)">
                      <label class="form-check-label" for="roleIndividual">
                        Individual
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="role" id="roleBusiness" value="business" onchange="toggleBusinessFields(true)">
                      <label class="form-check-label" for="roleBusiness">
                        Business
                      </label>
                    </div>
                  </div>
                </div>

                <div id="businessFields" class="d-none">
                  <div class="mb-3">
                    <label for="businessName" class="form-label">Business Name</label>
                    <div class="input-group">
                      <span class="input-group-text">
                        ${n.briefcase}
                      </span>
                      <input type="text" class="form-control" id="businessName" placeholder="Your Business Name">
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="businessAddress" class="form-label">Business Address</label>
                    <div class="input-group">
                      <span class="input-group-text">
                        ${n.mapPin}
                      </span>
                      <input type="text" class="form-control" id="businessAddress" placeholder="Business Address">
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="businessPhone" class="form-label">Business Phone</label>
                    <div class="input-group">
                      <span class="input-group-text">
                        ${n.phone}
                      </span>
                      <input type="tel" class="form-control" id="businessPhone" placeholder="Business Phone Number">
                    </div>
                  </div>

                  <div class="mb-4">
                    <label for="businessType" class="form-label">Business Type</label>
                    <select class="form-select" id="businessType">
                      <option value="">Select Business Type</option>
                      <option value="retail">Retail</option>
                      <option value="technology">Technology</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="education">Education</option>
                      <option value="finance">Finance</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div class="mb-4 form-check">
                  <input class="form-check-input" type="checkbox" id="termsAgree" required>
                  <label class="form-check-label" for="termsAgree">
                    I agree to the <a href="/terms" onclick="return navigateTo('/terms')">Terms of Service</a> and <a href="/privacy" onclick="return navigateTo('/privacy')">Privacy Policy</a>
                  </label>
                </div>
                
                <button type="submit" class="btn btn-primary w-100 py-2 mb-4">
                  Create Account
                </button>
                
                <div class="text-center">
                  <p>Already have an account? <a href="/login" onclick="return navigateTo('/login')">Login</a></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,document.title="Register - Dern-Support",document.getElementById("registerForm");const s=document.getElementById("registerName"),a=document.getElementById("registerEmail"),i=document.getElementById("registerPassword"),t=document.getElementById("registerConfirmPassword");s.addEventListener("input",K),a.addEventListener("input",Y),i.addEventListener("input",Z),t.addEventListener("input",q),window.toggleBusinessFields=o=>{const r=document.getElementById("businessFields"),l=r.querySelectorAll("input, select");o?(r.classList.remove("d-none"),l.forEach(m=>m.required=!0)):(r.classList.add("d-none"),l.forEach(m=>m.required=!1))}}function K(e){const s=e.target.value;if(s&&s.length<2){if(e.target.classList.add("is-invalid"),!e.target.nextElementSibling||!e.target.nextElementSibling.classList.contains("invalid-feedback")){const a=document.createElement("div");a.classList.add("invalid-feedback"),a.innerText="Name must be at least 2 characters long.",e.target.insertAdjacentElement("afterend",a)}}else e.target.classList.remove("is-invalid"),s?e.target.classList.add("is-valid"):e.target.classList.remove("is-valid")}function Y(e){const s=e.target.value;if(s&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)){if(e.target.classList.add("is-invalid"),!e.target.nextElementSibling||!e.target.nextElementSibling.classList.contains("invalid-feedback")){const i=document.createElement("div");i.classList.add("invalid-feedback"),i.innerText="Please enter a valid email address.",e.target.insertAdjacentElement("afterend",i)}}else e.target.classList.remove("is-invalid"),s?e.target.classList.add("is-valid"):e.target.classList.remove("is-valid")}function Z(e){const s=e.target.value;if(s&&!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(s)){if(e.target.classList.add("is-invalid"),!e.target.nextElementSibling||!e.target.nextElementSibling.classList.contains("invalid-feedback")){const t=document.createElement("div");t.classList.add("invalid-feedback"),t.innerText="Password must be at least 8 characters long and include at least one letter, one number, and one special character.",e.target.insertAdjacentElement("afterend",t)}}else e.target.classList.remove("is-invalid"),s?e.target.classList.add("is-valid"):e.target.classList.remove("is-valid");const i=document.getElementById("registerConfirmPassword");i.value&&q({target:i})}function q(e){const s=e.target.value,a=document.getElementById("registerPassword").value;if(s&&s!==a){if(e.target.classList.add("is-invalid"),!e.target.nextElementSibling||!e.target.nextElementSibling.classList.contains("invalid-feedback")){const i=document.createElement("div");i.classList.add("invalid-feedback"),i.innerText="Passwords do not match.",e.target.insertAdjacentElement("afterend",i)}}else e.target.classList.remove("is-invalid"),s?e.target.classList.add("is-valid"):e.target.classList.remove("is-valid")}async function y(){const e=document.getElementById("main-container"),s=localStorage.getItem("userName");e.innerHTML=`
    <div class="container py-5 mt-5">
      <div class="row mb-4">
        <div class="col-12">
          <h1>Welcome, ${s||"User"}!</h1>
          <p class="lead">Your IT support dashboard</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8">
          <div class="card shadow-sm mb-4">
            <div class="card-header bg-white d-flex justify-content-between align-items-center">
              <h5 class="mb-0">My Recent Support Requests</h5>
              <a href="/support-request" onclick="return navigateTo('/support-request')" class="btn btn-sm btn-primary">
                ${n.plus} New Request
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
                  ${n.plus} New Support Request
                </a>
                <a href="/knowledge-base" onclick="return navigateTo('/knowledge-base')" class="btn btn-outline-primary">
                  ${n.book} Browse Knowledge Base
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
                    ${n.helpCircle} How to create a request
                  </a>
                </li>
                <li class="list-group-item px-0 py-2 border-0">
                  <a href="#" class="text-decoration-none">
                    ${n.alertCircle} Common IT issues
                  </a>
                </li>
                <li class="list-group-item px-0 py-2 border-0">
                  <a href="#" class="text-decoration-none">
                    ${n.tool} Preventive maintenance tips
                  </a>
                </li>
                <li class="list-group-item px-0 py-2 border-0">
                  <a href="#" class="text-decoration-none">
                    ${n.phone} Contact support team
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
  `,document.title="Dashboard - Dern-Support";try{const i=await(await u(`${window.API_URL}/requests`)).json();G(i)}catch(a){console.error("Error fetching requests:",a),d("Error","Failed to load support requests. Please try again later.","error"),document.getElementById("requests-container").innerHTML=`
      <div class="alert alert-danger" role="alert">
        Failed to load support requests. Please try again later.
      </div>
    `}}function G(e){const s=document.getElementById("requests-container");if(e.length===0){s.innerHTML=`
      <div class="text-center py-4">
        <p class="mb-3">You have no support requests yet.</p>
        <a href="/support-request" onclick="return navigateTo('/support-request')" class="btn btn-primary">
          ${n.plus} Create Your First Request
        </a>
      </div>
    `;return}e.sort((t,o)=>new Date(o.createdAt)-new Date(t.createdAt));const a=e.slice(0,5);let i=`
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
  `;a.forEach(t=>{i+=`
      <tr>
        <td>
          <div class="fw-semibold">${t.issueSummary||"N/A"}</div>
          <div class="small text-secondary">${t.deviceType||"N/A"}</div>
        </td>
        <td>${S(t.status)}</td>
        <td>${$(t.priority)}</td>
        <td class="small">${v(t.createdAt)}</td>
        <td>
          <button class="btn btn-sm btn-outline-primary view-request-btn" data-id="${t._id}">
            View
          </button>
        </td>
      </tr>
    `}),i+=`
        </tbody>
      </table>
    </div>
    
    <div class="text-center mt-3">
      <a href="#" class="btn btn-link">View All Requests</a>
    </div>
  `,s.innerHTML=i,setTimeout(()=>{document.querySelectorAll(".view-request-btn").forEach(t=>{t.addEventListener("click",o=>{const r=o.target.getAttribute("data-id");X(r)})})},0)}async function X(e){const s=new bootstrap.Modal(document.getElementById("requestDetailsModal")),a=document.getElementById("requestDetailsContent");try{const t=await(await u(`${window.API_URL}/requests/${e}`)).json();let o="";t.spareParts&&t.spareParts.length>0&&(o=`
        <div class="mb-4">
          <h6 class="fw-bold">Spare Parts</h6>
          <ul class="list-unstyled">
            ${t.spareParts.map(r=>`
              <li>${r.quantity}x ${r.partId.name} - ${p(r.partId.price*r.quantity)}</li>
            `).join("")}
          </ul>
        </div>
      `),a.innerHTML=`
      <div class="mb-4">
        <h6 class="fw-bold">Request Information</h6>
        <p class="mb-1">Device Type: ${t.deviceType}</p>
        <p class="mb-1">Issue Summary: ${t.issueSummary}</p>
        <p class="mb-1">Description: ${t.description}</p>
        <p class="mb-1">Location: ${t.location}</p>
        <p class="mb-1">Status: ${S(t.status)}</p>
        <p class="mb-1">Priority: ${$(t.priority)}</p>
        <p class="mb-1">Schedule Date: ${v(t.scheduleDate)}</p>
        ${t.requiresOnSite?'<p class="mb-1 text-primary">On-Site Support Requested</p>':""}
      </div>
      
      ${o}
      
      ${t.estimatedCost?`
        <div class="mb-4">
          <h6 class="fw-bold">Cost Estimation</h6>
          <p class="mb-1">Parts: ${p(t.estimatedCost.parts)}</p>
          <p class="mb-1">Labor: ${p(t.estimatedCost.labor)}</p>
          <p class="fw-bold">Total: ${p(t.estimatedCost.total)}</p>
        </div>
      `:""}
      
      ${t.quote?`
        <div class="mb-4">
          <h6 class="fw-bold">Quote</h6>
          <p class="mb-1">Amount: ${p(t.quote.amount)}</p>
          <p class="mb-1">Details: ${t.quote.details}</p>
          <p class="mb-1">Date: ${v(t.quote.date)}</p>
        </div>
      `:""}
      
      <div class="mb-4">
        <h6 class="fw-bold">Timeline</h6>
        <p class="mb-1">Created: ${v(t.createdAt)}</p>
        <p class="mb-1">Last Updated: ${v(t.updatedAt)}</p>
      </div>
    `,s.show()}catch(i){console.error("Error fetching request details:",i),d("Error","Failed to load request details","error")}}async function ee(){const e=document.getElementById("main-container"),s=localStorage.getItem("userRole");try{const i=await(await u(`${window.API_URL}/spareparts`)).json();if(!Array.isArray(i))throw new Error("Invalid spare parts data received");e.innerHTML=`
      <div class="container py-5 mt-5">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="card shadow">
              <div class="card-body p-4">
                <h1 class="h3 mb-4">Submit Support Request</h1>
                
                <form id="supportRequestForm">
                  <div class="mb-3">
                    <label for="deviceType" class="form-label">Device Type</label>
                    <select class="form-select" id="deviceType" required>
                      <option value="">Select device type</option>
                      <option value="laptop">Laptop</option>
                      <option value="desktop">Desktop</option>
                      <option value="printer">Printer</option>
                      <option value="network">Network Equipment</option>
                      <option value="mobile">Mobile Device</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div class="mb-3">
                    <label for="issueSummary" class="form-label">Issue Summary</label>
                    <input type="text" class="form-control" id="issueSummary" required
                      placeholder="Brief description of the issue">
                  </div>
                  
                  <div class="mb-3">
                    <label for="description" class="form-label">Detailed Description</label>
                    <textarea class="form-control" id="description" rows="4" required
                      placeholder="Please provide detailed information about the issue"></textarea>
                  </div>
                  
                  <div class="mb-3">
                    <label for="location" class="form-label">Location</label>
                    <input type="text" class="form-control" id="location" required
                      placeholder="Where is the device located?">
                  </div>

                  ${s==="business"?`
                    <div class="mb-3">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="requiresOnSite">
                        <label class="form-check-label" for="requiresOnSite">
                          Request On-Site Support
                        </label>
                      </div>
                      <div class="form-text">Our technician will visit your location for support</div>
                    </div>
                  `:""}
                  
                  <div class="mb-3">
                    <label class="form-label">Spare Parts Needed</label>
                    <div id="sparePartsContainer">
                      ${i.map(t=>`
                        <div class="form-check mb-2">
                          <input class="form-check-input spare-part-checkbox" type="checkbox" 
                            id="part-${t._id}" data-id="${t._id}" data-price="${t.price}">
                          <label class="form-check-label" for="part-${t._id}">
                            ${t.name} - ${p(t.price)} 
                            (${t.quantity} available)
                          </label>
                          <div class="ms-4 mt-1 d-none quantity-input">
                            <input type="number" class="form-control form-control-sm w-25" 
                              min="1" max="${t.quantity}" value="1">
                          </div>
                        </div>
                      `).join("")}
                    </div>
                  </div>
                  
                  <div class="mb-4">
                    <label for="scheduleDate" class="form-label">Preferred Service Date</label>
                    <input type="datetime-local" class="form-control" id="scheduleDate" required>
                  </div>

                  <div class="mb-4 d-none" id="estimatedCostContainer">
                    <h5>Estimated Cost</h5>
                    <div class="table-responsive">
                      <table class="table">
                        <tr>
                          <td>Spare Parts:</td>
                          <td id="partsTotal">$0.00</td>
                        </tr>
                        <tr>
                          <td>Labor (estimated):</td>
                          <td id="laborTotal">$0.00</td>
                        </tr>
                        <tr class="fw-bold">
                          <td>Total Estimated Cost:</td>
                          <td id="totalCost">$0.00</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  
                  <button type="submit" class="btn btn-primary w-100 py-2">
                    Submit Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,document.querySelectorAll(".spare-part-checkbox").forEach(t=>{t.addEventListener("change",o=>{const r=o.target.closest(".form-check").querySelector(".quantity-input");o.target.checked?r.classList.remove("d-none"):r.classList.add("d-none"),T()})}),document.querySelectorAll(".quantity-input input").forEach(t=>{t.addEventListener("change",T)}),document.getElementById("supportRequestForm").addEventListener("submit",te)}catch(a){console.error("Error loading support request page:",a),e.innerHTML=`
      <div class="container mt-5 pt-5">
        <div class="alert alert-danger" role="alert">
          Failed to load the support request form. Please try again later.
          <br>
          Error: ${a.message}
        </div>
      </div>
    `}}function T(){let e=0;document.querySelectorAll(".spare-part-checkbox:checked").forEach(a=>{const i=parseFloat(a.dataset.price),t=parseInt(a.closest(".form-check").querySelector(".quantity-input input").value);e+=i*t});const s=100;document.getElementById("estimatedCostContainer").classList.remove("d-none"),document.getElementById("partsTotal").textContent=p(e),document.getElementById("laborTotal").textContent=p(s),document.getElementById("totalCost").textContent=p(e+s)}async function te(e){var i;e.preventDefault();const s=[];document.querySelectorAll(".spare-part-checkbox:checked").forEach(t=>{const o=parseInt(t.closest(".form-check").querySelector(".quantity-input input").value);s.push({partId:t.dataset.id,quantity:o})});const a={deviceType:document.getElementById("deviceType").value,issueSummary:document.getElementById("issueSummary").value,description:document.getElementById("description").value,location:document.getElementById("location").value,scheduleDate:document.getElementById("scheduleDate").value,spareParts:s,requiresOnSite:((i=document.getElementById("requiresOnSite"))==null?void 0:i.checked)||!1,estimatedCost:{parts:parseFloat(document.getElementById("partsTotal").textContent.replace(/[^0-9.-]+/g,"")),labor:parseFloat(document.getElementById("laborTotal").textContent.replace(/[^0-9.-]+/g,"")),total:parseFloat(document.getElementById("totalCost").textContent.replace(/[^0-9.-]+/g,""))}};try{const t=await u(`${window.API_URL}/requests`,{method:"POST",body:JSON.stringify(a)});d("Success","Support request submitted successfully!","success"),window.navigateTo("/dashboard")}catch(t){d("Error",t.message,"error")}}async function se(){const e=document.getElementById("main-container");e.innerHTML=`
    <div class="container py-5 mt-5">
      <div class="row">
        <div class="col-lg-8">
          <h1 class="mb-4">Knowledge Base</h1>
          
          <div class="mb-4">
            <div class="input-group">
              <input type="text" class="form-control" id="searchInput" 
                placeholder="Search articles...">
              <button class="btn btn-primary" type="button" id="searchButton">
                ${n.search} Search
              </button>
            </div>
          </div>
          
          <div id="articlesContainer">
            <div class="text-center py-4">
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="col-lg-4">
          <div class="card shadow-sm mb-4">
            <div class="card-header bg-white">
              <h5 class="mb-0">Popular Topics</h5>
            </div>
            <div class="card-body">
              <div class="list-group list-group-flush" id="popularTopics">
                Loading...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,document.title="Knowledge Base - Dern-Support",E();const s=document.getElementById("searchInput");document.getElementById("searchButton").addEventListener("click",()=>{E(s.value)}),s.addEventListener("keypress",i=>{i.key==="Enter"&&E(s.value)})}async function E(e=""){try{const a=await(await fetch(`${window.API_URL}/kb${e?`?keyword=${e}`:""}`)).json();ae(a),ie(a)}catch(s){console.error("Error loading articles:",s),d("Error","Failed to load articles","error")}}function ae(e){const s=document.getElementById("articlesContainer");if(!e||e.length===0){s.innerHTML=`
      <div class="text-center py-4">
        <p class="mb-0">No articles found.</p>
      </div>
    `;return}const a=e.map(i=>`
    <div class="card mb-4 kb-article">
      <div class="card-body">
        <h2 class="h4 kb-article-title">${i.title}</h2>
        <div class="kb-article-meta">
          ${oe(i.createdAt)}
        </div>
        <div class="kb-article-content">
          ${i.content}
        </div>
        <div class="kb-article-tags">
          ${i.tags.map(t=>`
            <span class="kb-tag">${t}</span>
          `).join("")}
        </div>
      </div>
    </div>
  `).join("");s.innerHTML=a}function ie(e){const s=document.getElementById("popularTopics"),a={};e.forEach(o=>{o.tags.forEach(r=>{a[r]=(a[r]||0)+1})});const t=Object.entries(a).sort(([,o],[,r])=>r-o).slice(0,5).map(([o,r])=>`
    <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
      onclick="return false;">
      ${o}
      <span class="badge bg-primary rounded-pill">${r}</span>
    </a>
  `).join("");s.innerHTML=t||"No topics available"}function oe(e){const s={year:"numeric",month:"long",day:"numeric"};return new Date(e).toLocaleDateString("en-US",s)}async function I(){const e=document.getElementById("main-container"),s=localStorage.getItem("userName");e.innerHTML=`
    <div class="container-fluid py-5 mt-5">
      <div class="row mb-4">
        <div class="col-12">
          <h1>Admin Dashboard</h1>
          <p class="lead">Welcome back, ${s||"Admin"}!</p>
        </div>
      </div>
      
      <!-- Stats Summary Cards -->
      <div class="row g-4 mb-4">
        <div class="col-xl-3 col-md-6">
          <div class="stats-card">
            <div class="stats-card-icon">
              ${n.clipboard}
            </div>
            <div class="stats-card-value" id="total-requests">-</div>
            <div class="stats-card-label">Total Requests</div>
          </div>
        </div>
        
        <div class="col-xl-3 col-md-6">
          <div class="stats-card">
            <div class="stats-card-icon" style="background-color: rgba(40, 167, 69, 0.1); color: #28A745;">
              ${n.checkCircle}
            </div>
            <div class="stats-card-value" id="resolved-requests">-</div>
            <div class="stats-card-label">Resolved Requests</div>
          </div>
        </div>
        
        <div class="col-xl-3 col-md-6">
          <div class="stats-card">
            <div class="stats-card-icon" style="background-color: rgba(255, 193, 7, 0.1); color: #FFC107;">
              ${n.clock}
            </div>
            <div class="stats-card-value" id="pending-requests">-</div>
            <div class="stats-card-label">Pending Requests</div>
          </div>
        </div>
        
        <div class="col-xl-3 col-md-6">
          <div class="stats-card">
            <div class="stats-card-icon" style="background-color: rgba(220, 53, 69, 0.1); color: #DC3545;">
              ${n.alertCircle}
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
                  ${n.clipboard} Manage Requests
                </a>
                <a href="/admin/spareparts" onclick="return navigateTo('/admin/spareparts')" class="btn btn-outline-primary">
                  ${n.tool} Manage Spare Parts
                </a>
                <a href="/admin/knowledge-base" onclick="return navigateTo('/admin/knowledge-base')" class="btn btn-outline-primary">
                  ${n.book} Update Knowledge Base
                </a>
                <a href="/admin/feedback" onclick="return navigateTo('/admin/feedback')" class="btn btn-outline-primary">
                  ${n.messageCircle} View Feedback
                </a>
                <a href="/admin/analytics" onclick="return navigateTo('/admin/analytics')" class="btn btn-outline-primary">
                  ${n.barChart} Detailed Analytics
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,document.title="Admin Dashboard - Dern-Support";try{const[a,i]=await Promise.all([u(`${window.API_URL}/analytics/summary`),u(`${window.API_URL}/analytics/common-issues`)]),t=await a.json(),o=await i.json();document.getElementById("total-requests").textContent=t.totalRequests,document.getElementById("resolved-requests").textContent=t.byStatus.resolved,document.getElementById("pending-requests").textContent=t.byStatus.pending,document.getElementById("high-priority").textContent=t.byPriority.high,ne(t.byStatus),re(o);const l=await(await u(`${window.API_URL}/requests/all`)).json();le(l)}catch(a){console.error("Error fetching dashboard data:",a),d("Error","Failed to load dashboard data. Please try again later.","error")}}function ne(e){const s=document.getElementById("statusChart").getContext("2d");new Chart(s,{type:"doughnut",data:{labels:["Pending","Scheduled","In Progress","Resolved"],datasets:[{data:[e.pending,e.scheduled,e.inProgress,e.resolved],backgroundColor:["#FFC107","#1E90FF","#FFA500","#28A745"],borderWidth:0}]},options:{responsive:!0,maintainAspectRatio:!1,cutout:"70%",plugins:{legend:{position:"bottom",labels:{padding:20,boxWidth:12}}}}})}function re(e){const s=document.getElementById("deviceTypeChart").getContext("2d"),a=e.map(o=>o._id),i=e.map(o=>o.count),t=o=>{const r=[];for(let l=0;l<o;l++){const m=l*137%360;r.push(`hsla(${m}, 70%, 60%, 0.7)`)}return r};new Chart(s,{type:"bar",data:{labels:a,datasets:[{label:"Number of Requests",data:i,backgroundColor:t(a.length),borderWidth:0}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{y:{beginAtZero:!0,ticks:{precision:0}}}}})}function le(e){const s=document.getElementById("recent-requests-container");if(!e||e.length===0){s.innerHTML='<p class="text-center py-4">No support requests found.</p>';return}e.sort((l,m)=>new Date(m.createdAt)-new Date(l.createdAt));const a=e.slice(0,5),i=l=>`<span class="badge ${{pending:"badge-pending",scheduled:"badge-scheduled","in-progress":"badge-in-progress",resolved:"badge-resolved"}[l]||"bg-secondary"}">${l.charAt(0).toUpperCase()+l.slice(1)}</span>`,t=l=>`<span class="badge ${{high:"badge-high",medium:"badge-medium",low:"badge-low"}[l]||"bg-secondary"}">${l.charAt(0).toUpperCase()+l.slice(1)}</span>`,o=l=>{const m={month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"};return new Date(l).toLocaleDateString("en-US",m)};let r=`
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
  `;a.forEach(l=>{var c,h;const m=((c=l.userId)==null?void 0:c.name)||"Unknown User";r+=`
      <tr>
        <td>
          <div class="d-flex align-items-center">
            <div class="avatar d-flex align-items-center justify-content-center bg-primary text-white rounded-circle me-2" style="width: 32px; height: 32px;">
              ${m.charAt(0).toUpperCase()}
            </div>
            <div class="ms-2">
              <div class="fw-semibold">${m}</div>
              <div class="small text-secondary">${((h=l.userId)==null?void 0:h.email)||"No email"}</div>
            </div>
          </div>
        </td>
        <td>
          <div class="fw-semibold">${l.issueSummary||"N/A"}</div>
          <div class="small text-secondary">${l.deviceType||"N/A"}</div>
        </td>
        <td>${i(l.status)}</td>
        <td>${t(l.priority)}</td>
        <td class="small">${o(l.createdAt)}</td>
        <td>
          <button class="btn btn-sm btn-outline-primary view-request-btn" data-id="${l._id}">
            View
          </button>
        </td>
      </tr>
    `}),r+=`
        </tbody>
      </table>
    </div>
  `,s.innerHTML=r,setTimeout(()=>{document.querySelectorAll(".view-request-btn").forEach(l=>{l.addEventListener("click",m=>{m.target.getAttribute("data-id"),d("Info","View request details functionality will be implemented soon.","info")})})},0)}async function de(){const e=document.getElementById("main-container");e.innerHTML=`
    <div class="container-fluid py-5 mt-5">
      <div class="row mb-4">
        <div class="col-12 d-flex justify-content-between align-items-center">
          <h1>Support Requests</h1>
          <div class="d-flex gap-2">
            <div class="input-group">
              <input type="text" class="form-control" id="searchInput" placeholder="Search requests...">
              <button class="btn btn-primary" type="button" id="searchButton">
                ${n.search}
              </button>
            </div>
            <div class="dropdown">
              <button class="btn btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                ${n.filter} Filter
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
  `,document.title="Support Requests - Admin Dashboard";try{const a=await(await u(`${window.API_URL}/requests/all`)).json();L(a),ce()}catch(s){console.error("Error fetching requests:",s),d("Error","Failed to load requests","error")}}function L(e){const s=document.querySelector("#requestsTable tbody");if(!e||e.length===0){s.innerHTML=`
      <tr>
        <td colspan="6" class="text-center py-4">No requests found</td>
      </tr>
    `;return}s.innerHTML=e.map(a=>{var i,t,o,r;return`
    <tr>
      <td>
        <div class="d-flex align-items-center">
          <div class="avatar d-flex align-items-center justify-content-center bg-primary text-white rounded-circle me-2" style="width: 32px; height: 32px;">
            ${((t=(i=a.userId)==null?void 0:i.name)==null?void 0:t.charAt(0).toUpperCase())||"U"}
          </div>
          <div>
            <div class="fw-semibold">${((o=a.userId)==null?void 0:o.name)||"Unknown"}</div>
            <div class="small text-secondary">${((r=a.userId)==null?void 0:r.email)||"No email"}</div>
          </div>
        </div>
      </td>
      <td>
        <div class="fw-semibold">${a.issueSummary}</div>
        <div class="small text-secondary">${a.deviceType}</div>
      </td>
      <td>${S(a.status)}</td>
      <td>${$(a.priority)}</td>
      <td>${v(a.createdAt)}</td>
      <td>
        <div class="btn-group">
          <button class="btn btn-sm btn-outline-primary view-request" data-id="${a._id}">
            View
          </button>
          <button class="btn btn-sm btn-outline-danger delete-request" data-id="${a._id}">
            Delete
          </button>
        </div>
      </td>
    </tr>
  `}).join("")}function ce(){document.querySelectorAll(".view-request").forEach(a=>{a.addEventListener("click",async i=>{var r,l;const t=i.target.dataset.id,o=new bootstrap.Modal(document.getElementById("requestModal"));try{const c=await(await u(`${window.API_URL}/requests/${t}`)).json();let h="";c.spareParts&&c.spareParts.length>0&&(h=`
            <div class="mb-4">
              <h6 class="fw-bold">Spare Parts</h6>
              <ul class="list-unstyled">
                ${c.spareParts.map(b=>`
                  <li>${b.quantity}x ${b.partId.name} - ${p(b.partId.price*b.quantity)}</li>
                `).join("")}
              </ul>
            </div>
          `),document.getElementById("requestModalBody").innerHTML=`
          <div class="mb-4">
            <h6 class="fw-bold">User Information</h6>
            <p class="mb-1">Name: ${((r=c.userId)==null?void 0:r.name)||"Unknown"}</p>
            <p class="mb-1">Email: ${((l=c.userId)==null?void 0:l.email)||"No email"}</p>
          </div>
          
          <div class="mb-4">
            <h6 class="fw-bold">Request Details</h6>
            <p class="mb-1">Device Type: ${c.deviceType}</p>
            <p class="mb-1">Issue Summary: ${c.issueSummary}</p>
            <p class="mb-1">Description: ${c.description}</p>
            <p class="mb-1">Location: ${c.location}</p>
            <p class="mb-1">Schedule Date: ${v(c.scheduleDate)}</p>
            ${c.requiresOnSite?'<p class="mb-1 text-primary">On-Site Support Requested</p>':""}
          </div>

          <div class="mb-4">
            <h6 class="fw-bold">Status and Priority</h6>
            <div class="mb-3">
              <label class="form-label">Status</label>
              <select class="form-select" id="statusUpdate">
                <option value="pending" ${c.status==="pending"?"selected":""}>Pending</option>
                <option value="scheduled" ${c.status==="scheduled"?"selected":""}>Scheduled</option>
                <option value="in-progress" ${c.status==="in-progress"?"selected":""}>In Progress</option>
                <option value="resolved" ${c.status==="resolved"?"selected":""}>Resolved</option>
              </select>
            </div>
            <div class="mb-3">
              <label class="form-label">Priority</label>
              <select class="form-select" id="priorityUpdate">
                <option value="low" ${c.priority==="low"?"selected":""}>Low</option>
                <option value="medium" ${c.priority==="medium"?"selected":""}>Medium</option>
                <option value="high" ${c.priority==="high"?"selected":""}>High</option>
              </select>
            </div>
          </div>
          
          ${h}
          
          ${c.estimatedCost?`
            <div class="mb-4">
              <h6 class="fw-bold">Cost Estimation</h6>
              <p class="mb-1">Parts: ${p(c.estimatedCost.parts)}</p>
              <p class="mb-1">Labor: ${p(c.estimatedCost.labor)}</p>
              <p class="fw-bold">Total: ${p(c.estimatedCost.total)}</p>
            </div>
          `:""}
          
          <div class="mb-4">
            <h6 class="fw-bold">Timeline</h6>
            <p class="mb-1">Created: ${v(c.createdAt)}</p>
            <p class="mb-1">Last Updated: ${v(c.updatedAt)}</p>
          </div>

          <div class="d-flex justify-content-end gap-2">
            <button class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button class="btn btn-primary" onclick="updateRequest('${c._id}')">
              Update Request
            </button>
          </div>
        `,o.show()}catch(m){console.error("Error fetching request details:",m),d("Error","Failed to load request details","error")}})}),document.querySelectorAll(".delete-request").forEach(a=>{a.addEventListener("click",async i=>{if(confirm("Are you sure you want to delete this request?")){const t=i.target.dataset.id;try{if((await u(`${window.API_URL}/requests/${t}`,{method:"DELETE"})).ok)d("Success","Request deleted successfully","success"),i.target.closest("tr").remove();else throw new Error("Failed to delete request")}catch(o){console.error("Error deleting request:",o),d("Error","Failed to delete request","error")}}})});const e=document.getElementById("searchInput");document.getElementById("searchButton").addEventListener("click",()=>{const a=e.value.toLowerCase();document.querySelectorAll("#requestsTable tbody tr").forEach(t=>{const o=t.textContent.toLowerCase();t.style.display=o.includes(a)?"":"none"})}),document.querySelectorAll("[data-filter]").forEach(a=>{a.addEventListener("click",i=>{i.preventDefault();const t=i.target.dataset.filter;document.querySelectorAll("#requestsTable tbody tr").forEach(r=>{if(t==="all")r.style.display="";else{const l=r.querySelector("td:nth-child(3)").textContent.toLowerCase();r.style.display=l.includes(t)?"":"none"}})})})}window.updateRequest=async e=>{const s=document.getElementById("statusUpdate").value,a=document.getElementById("priorityUpdate").value;try{if((await u(`${window.API_URL}/requests/${e}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:s,priority:a})})).ok){d("Success","Request updated successfully","success"),bootstrap.Modal.getInstance(document.getElementById("requestModal")).hide();const r=await(await u(`${window.API_URL}/requests/all`)).json();L(r)}else throw new Error("Failed to update request status")}catch(i){console.error("Error updating request:",i),d("Error","Failed to update request","error")}};async function ue(){const e=document.getElementById("main-container");e.innerHTML=`
    <div class="container-fluid py-5 mt-5">
      <div class="row mb-4">
        <div class="col-12 d-flex justify-content-between align-items-center">
          <h1>Spare Parts Inventory</h1>
          <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addPartModal">
            ${n.plus} Add New Part
          </button>
        </div>
      </div>

      <div class="card shadow-sm">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-hover align-middle" id="partsTable">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Supplier</th>
                  <th>Last Updated</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colspan="6" class="text-center py-4">Loading spare parts...</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- Add Part Modal -->
    <div class="modal fade" id="addPartModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add New Spare Part</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <form id="addPartForm">
              <div class="mb-3">
                <label for="partName" class="form-label">Part Name</label>
                <input type="text" class="form-control" id="partName" required>
              </div>
              <div class="mb-3">
                <label for="partQuantity" class="form-label">Quantity</label>
                <input type="number" class="form-control" id="partQuantity" required min="0">
              </div>
              <div class="mb-3">
                <label for="partPrice" class="form-label">Price</label>
                <div class="input-group">
                  <span class="input-group-text">$</span>
                  <input type="number" class="form-control" id="partPrice" required min="0" step="0.01">
                </div>
              </div>
              <div class="mb-3">
                <label for="partSupplier" class="form-label">Supplier</label>
                <input type="text" class="form-control" id="partSupplier" required>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-primary" onclick="handleAddPart()">Add Part</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Edit Part Modal -->
    <div class="modal fade" id="editPartModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Edit Spare Part</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <form id="editPartForm">
              <input type="hidden" id="editPartId">
              <div class="mb-3">
                <label for="editPartName" class="form-label">Part Name</label>
                <input type="text" class="form-control" id="editPartName" required>
              </div>
              <div class="mb-3">
                <label for="editPartQuantity" class="form-label">Quantity</label>
                <input type="number" class="form-control" id="editPartQuantity" required min="0">
              </div>
              <div class="mb-3">
                <label for="editPartPrice" class="form-label">Price</label>
                <div class="input-group">
                  <span class="input-group-text">$</span>
                  <input type="number" class="form-control" id="editPartPrice" required min="0" step="0.01">
                </div>
              </div>
              <div class="mb-3">
                <label for="editPartSupplier" class="form-label">Supplier</label>
                <input type="text" class="form-control" id="editPartSupplier" required>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-primary" onclick="handleEditPart()">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  `,document.title="Spare Parts Inventory - Admin Dashboard",w(),window.handleAddPart=async()=>{const s=document.getElementById("addPartForm");if(!s.checkValidity()){s.reportValidity();return}const a={name:document.getElementById("partName").value,quantity:parseInt(document.getElementById("partQuantity").value),price:parseFloat(document.getElementById("partPrice").value),supplier:document.getElementById("partSupplier").value};try{if((await u(`${window.API_URL}/spareparts`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)})).ok)d("Success","Spare part added successfully","success"),bootstrap.Modal.getInstance(document.getElementById("addPartModal")).hide(),s.reset(),w();else throw new Error("Failed to add spare part")}catch(i){console.error("Error adding spare part:",i),d("Error","Failed to add spare part","error")}},window.handleEditPart=async()=>{const s=document.getElementById("editPartForm");if(!s.checkValidity()){s.reportValidity();return}const a=document.getElementById("editPartId").value,i={name:document.getElementById("editPartName").value,quantity:parseInt(document.getElementById("editPartQuantity").value),price:parseFloat(document.getElementById("editPartPrice").value),supplier:document.getElementById("editPartSupplier").value};try{if((await u(`${window.API_URL}/spareparts/${a}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)})).ok)d("Success","Spare part updated successfully","success"),bootstrap.Modal.getInstance(document.getElementById("editPartModal")).hide(),w();else throw new Error("Failed to update spare part")}catch(t){console.error("Error updating spare part:",t),d("Error","Failed to update spare part","error")}}}async function w(){try{const s=await(await u(`${window.API_URL}/spareparts`)).json();me(s)}catch(e){console.error("Error loading spare parts:",e),d("Error","Failed to load spare parts","error")}}function me(e){const s=document.querySelector("#partsTable tbody");if(!e||e.length===0){s.innerHTML=`
      <tr>
        <td colspan="6" class="text-center py-4">No spare parts found</td>
      </tr>
    `;return}s.innerHTML=e.map(a=>`
    <tr>
      <td>${a.name}</td>
      <td>
        <span class="badge ${a.quantity>10?"bg-success":a.quantity>5?"bg-warning":"bg-danger"}">
          ${a.quantity}
        </span>
      </td>
      <td>${p(a.price)}</td>
      <td>${a.supplier}</td>
      <td>${new Date(a.updatedAt).toLocaleDateString()}</td>
      <td>
        <div class="btn-group">
          <button class="btn btn-sm btn-outline-primary" onclick="editPart('${a._id}')">
            ${n.edit}
          </button>
          <button class="btn btn-sm btn-outline-danger" onclick="deletePart('${a._id}')">
            ${n.trash}
          </button>
        </div>
      </td>
    </tr>
  `).join(""),window.editPart=async a=>{try{const t=await(await u(`${window.API_URL}/spareparts/${a}`)).json();document.getElementById("editPartId").value=t._id,document.getElementById("editPartName").value=t.name,document.getElementById("editPartQuantity").value=t.quantity,document.getElementById("editPartPrice").value=t.price,document.getElementById("editPartSupplier").value=t.supplier,new bootstrap.Modal(document.getElementById("editPartModal")).show()}catch(i){console.error("Error loading part details:",i),d("Error","Failed to load part details","error")}},window.deletePart=async a=>{if(confirm("Are you sure you want to delete this spare part?"))try{if((await u(`${window.API_URL}/spareparts/${a}`,{method:"DELETE"})).ok)d("Success","Spare part deleted successfully","success"),w();else throw new Error("Failed to delete spare part")}catch(i){console.error("Error deleting spare part:",i),d("Error","Failed to delete spare part","error")}}}async function pe(){const e=document.getElementById("main-container");e.innerHTML=`
    <div class="container-fluid py-5 mt-5">
      <div class="row mb-4">
        <div class="col-12 d-flex justify-content-between align-items-center">
          <h1>Knowledge Base Management</h1>
          <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addArticleModal">
            ${n.plus} Add New Article
          </button>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-8">
          <div class="card shadow-sm mb-4">
            <div class="card-header bg-orange">
              <div class="input-group">
                <input type="text" class="form-control" id="searchInput" placeholder="Search articles...">
                <button class="btn btn-primary" type="button" id="searchButton">
                  ${n.search}
                </button>
              </div>
            </div>
            <div class="card-body">
              <div id="articlesContainer">
                <p class="text-center py-4">Loading articles...</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="card shadow-sm mb-4">
            <div class="card-header bg-orange">
              <h5 class="mb-0">Popular Tags</h5>
            </div>
            <div class="card-body">
              <div id="tagsContainer">Loading tags...</div>
            </div>
          </div>

          <div class="card shadow-sm">
            <div class="card-header bg-orange">
              <h5 class="mb-0">Quick Stats</h5>
            </div>
            <div class="card-body">
              <div class="d-flex justify-content-between mb-3">
                <span>Total Articles</span>
                <span class="badge bg-primary" id="totalArticles">0</span>
              </div>
              <div class="d-flex justify-content-between">
                <span>Total Tags</span>
                <span class="badge bg-primary" id="totalTags">0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Add Article Modal -->
    <div class="modal fade" id="addArticleModal" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add New Article</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <form id="addArticleForm">
              <div class="mb-3">
                <label for="articleTitle" class="form-label">Title</label>
                <input type="text" class="form-control" id="articleTitle" required>
              </div>
              <div class="mb-3">
                <label for="articleContent" class="form-label">Content</label>
                <textarea class="form-control" id="articleContent" rows="10" required></textarea>
              </div>
              <div class="mb-3">
                <label for="articleTags" class="form-label">Tags (comma separated)</label>
                <input type="text" class="form-control" id="articleTags" placeholder="hardware, software, network">
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-primary" onclick="handleAddArticle()">Add Article</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Edit Article Modal -->
    <div class="modal fade" id="editArticleModal" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Edit Article</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <form id="editArticleForm">
              <input type="hidden" id="editArticleId">
              <div class="mb-3">
                <label for="editArticleTitle" class="form-label">Title</label>
                <input type="text" class="form-control" id="editArticleTitle" required>
              </div>
              <div class="mb-3">
                <label for="editArticleContent" class="form-label">Content</label>
                <textarea class="form-control" id="editArticleContent" rows="10" required></textarea>
              </div>
              <div class="mb-3">
                <label for="editArticleTags" class="form-label">Tags (comma separated)</label>
                <input type="text" class="form-control" id="editArticleTags">
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-primary" onclick="handleEditArticle()">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  `,document.title="Knowledge Base Management - Admin Dashboard",g(),f(),he(),window.handleAddArticle=async()=>{const s=document.getElementById("addArticleForm");if(!s.checkValidity()){s.reportValidity();return}const a={title:document.getElementById("articleTitle").value,content:document.getElementById("articleContent").value,tags:document.getElementById("articleTags").value.split(",").map(i=>i.trim()).filter(i=>i)};try{if((await u(`${window.API_URL}/kb`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)})).ok)d("Success","Article added successfully","success"),bootstrap.Modal.getInstance(document.getElementById("addArticleModal")).hide(),s.reset(),g(),f();else throw new Error("Failed to add article")}catch(i){console.error("Error adding article:",i),d("Error","Failed to add article","error")}},window.handleEditArticle=async()=>{const s=document.getElementById("editArticleForm");if(!s.checkValidity()){s.reportValidity();return}const a=document.getElementById("editArticleId").value,i={title:document.getElementById("editArticleTitle").value,content:document.getElementById("editArticleContent").value,tags:document.getElementById("editArticleTags").value.split(",").map(t=>t.trim()).filter(t=>t)};try{if((await u(`${window.API_URL}/kb/${a}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)})).ok)d("Success","Article updated successfully","success"),bootstrap.Modal.getInstance(document.getElementById("editArticleModal")).hide(),g(),f();else throw new Error("Failed to update article")}catch(t){console.error("Error updating article:",t),d("Error","Failed to update article","error")}}}async function g(){try{const s=await(await u(`${window.API_URL}/kb`)).json();B(s),ve(s)}catch(e){console.error("Error loading articles:",e),d("Error","Failed to load articles","error")}}function B(e){const s=document.getElementById("articlesContainer");if(!e||e.length===0){s.innerHTML=`
      <div class="text-center py-4">
        <p class="mb-0">No articles found</p>
      </div>
    `;return}s.innerHTML=e.map(a=>`
    <div class="card mb-4">
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-start mb-3">
          <h3 class="h5 mb-0">${a.title}</h3>
          <div class="btn-group">
            <button class="btn btn-sm btn-outline-primary" onclick="editArticle('${a._id}')">
              ${n.edit}
            </button>
            <button class="btn btn-sm btn-outline-danger" onclick="deleteArticle('${a._id}')">
              ${n.trash}
            </button>
          </div>
        </div>
        <p class="mb-3">${a.content}</p>
        <div class="d-flex flex-wrap gap-2">
          ${a.tags.map(i=>`
            <span class="badge bg-secondary">${i}</span>
          `).join("")}
        </div>
      </div>
    </div>
  `).join(""),window.editArticle=async a=>{try{const t=await(await u(`${window.API_URL}/kb/${a}`)).json();document.getElementById("editArticleId").value=t._id,document.getElementById("editArticleTitle").value=t.title,document.getElementById("editArticleContent").value=t.content,document.getElementById("editArticleTags").value=t.tags.join(", "),new bootstrap.Modal(document.getElementById("editArticleModal")).show()}catch(i){console.error("Error loading article details:",i),d("Error","Failed to load article details","error")}},window.deleteArticle=async a=>{if(confirm("Are you sure you want to delete this article?"))try{if((await u(`${window.API_URL}/kb/${a}`,{method:"DELETE"})).ok)d("Success","Article deleted successfully","success"),g(),f();else throw new Error("Failed to delete article")}catch(i){console.error("Error deleting article:",i),d("Error","Failed to delete article","error")}}}function f(){const e=document.getElementById("tagsContainer");u(`${window.API_URL}/kb`).then(s=>s.json()).then(s=>{const a={};s.forEach(t=>{t.tags.forEach(o=>{a[o]=(a[o]||0)+1})});const i=Object.entries(a).sort(([,t],[,o])=>o-t).map(([t,o])=>({tag:t,count:o}));e.innerHTML=`
        <div class="d-flex flex-wrap gap-2">
          ${i.map(({tag:t,count:o})=>`
            <span class="badge bg-primary">
              ${t} <span class="badge bg-white text-primary">${o}</span>
            </span>
          `).join("")}
        </div>
      `}).catch(s=>{console.error("Error loading tags:",s),e.innerHTML='<p class="text-danger">Failed to load tags</p>'})}function ve(e){const s=e.length,a=new Set(e.flatMap(i=>i.tags)).size;document.getElementById("totalArticles").textContent=s,document.getElementById("totalTags").textContent=a}function he(){const e=document.getElementById("searchInput"),s=document.getElementById("searchButton");s.addEventListener("click",()=>{const a=e.value;a?u(`${window.API_URL}/kb?keyword=${encodeURIComponent(a)}`).then(i=>i.json()).then(i=>{B(i)}).catch(i=>{console.error("Error searching articles:",i),d("Error","Failed to search articles","error")}):g()}),e.addEventListener("keypress",a=>{a.key==="Enter"&&s.click()})}async function ge(){const e=document.getElementById("main-container");e.innerHTML=`
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
                  ${n.download} Export as CSV
                </button>
                <button class="btn btn-outline-primary" onclick="exportFeedback('pdf')">
                  ${n.download} Export as PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,document.title="Customer Feedback - Admin Dashboard",be(),we(),window.exportFeedback=s=>{d("Info",`Export as ${s.toUpperCase()} will be implemented soon`,"info")}}async function be(){try{const s=await(await u(`${window.API_URL}/feedback`)).json();R(s),ye(s)}catch(e){console.error("Error loading feedback:",e),d("Error","Failed to load feedback","error")}}function R(e,s="all"){const a=document.getElementById("feedbackContainer");if(!e||e.length===0){a.innerHTML=`
      <div class="text-center py-4">
        <p class="mb-0">No feedback found</p>
      </div>
    `;return}let i=e;s==="positive"?i=e.filter(t=>t.rating>=4):s==="negative"&&(i=e.filter(t=>t.rating<=2)),a.innerHTML=i.map(t=>{var o,r,l;return`
    <div class="card mb-4">
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-start mb-3">
          <div>
            <h6 class="mb-1">${((o=t.userId)==null?void 0:o.name)||"Anonymous"}</h6>
            <div class="text-secondary small">${v(t.createdAt)}</div>
          </div>
          <div class="rating">
            ${M(t.rating)}
          </div>
        </div>
        <p class="mb-2">${t.comment||"No comment provided"}</p>
        <div class="d-flex align-items-center text-secondary small">
          <span class="me-3">
            ${n.clipboard} Request: ${((r=t.requestId)==null?void 0:r.issueSummary)||"N/A"}
          </span>
          <span>
            ${n.tag} Device: ${((l=t.requestId)==null?void 0:l.deviceType)||"N/A"}
          </span>
        </div>
      </div>
    </div>
  `}).join("")}function ye(e){const s=e.reduce((o,r)=>o+r.rating,0),a=e.length>0?(s/e.length).toFixed(1):0;document.getElementById("averageRating").textContent=a,document.getElementById("ratingStars").innerHTML=M(a);const i={5:e.filter(o=>o.rating===5).length,4:e.filter(o=>o.rating===4).length,3:e.filter(o=>o.rating===3).length,2:e.filter(o=>o.rating===2).length,1:e.filter(o=>o.rating===1).length},t=Math.max(...Object.values(i));document.getElementById("ratingDistribution").innerHTML=Object.entries(i).reverse().map(([o,r])=>`
      <div class="d-flex align-items-center mb-2">
        <div class="me-2" style="width: 24px;">${o}★</div>
        <div class="flex-grow-1">
          <div class="progress" style="height: 8px;">
            <div class="progress-bar bg-primary" style="width: ${r/t*100}%"></div>
          </div>
        </div>
        <div class="ms-2" style="width: 24px;">${r}</div>
      </div>
    `).join(""),document.getElementById("totalFeedback").textContent=e.length,document.getElementById("positiveFeedback").textContent=e.filter(o=>o.rating>=4).length,document.getElementById("negativeFeedback").textContent=e.filter(o=>o.rating<=2).length}function M(e){const s=`<span class="text-warning">${n.star}</span>`,a=`<span class="text-secondary">${n.star}</span>`,i=Math.floor(e),t=e%1>=.5;let o="";for(let r=0;r<5;r++)r<i?o+=s:r===i&&t?o+=`<span class="text-warning">${n.starHalf}</span>`:o+=a;return o}function we(){document.querySelectorAll("[data-filter]").forEach(e=>{e.addEventListener("click",s=>{document.querySelectorAll("[data-filter]").forEach(i=>{i.classList.remove("active")}),s.target.classList.add("active");const a=s.target.dataset.filter;u(`${window.API_URL}/feedback`).then(i=>i.json()).then(i=>{R(i,a)}).catch(i=>{console.error("Error filtering feedback:",i),d("Error","Failed to filter feedback","error")})})})}async function fe(){const e=document.getElementById("main-container");e.innerHTML=`
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
                  ${n.trendingUp}
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
                  ${n.check}
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
                  ${n.star}
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
  `,document.title="Analytics Dashboard - Admin Dashboard",xe()}async function xe(){try{const[e,s,a]=await Promise.all([u(`${window.API_URL}/analytics/summary`),u(`${window.API_URL}/analytics/common-issues`),u(`${window.API_URL}/analytics/completion-time`)]),i=await e.json(),t=await s.json(),o=await a.json();ke(i),Ee(i.byStatus),Ie(i.byPriority),Se(t),$e(o)}catch(e){console.error("Error loading analytics:",e),d("Error","Failed to load analytics data","error")}}function ke(e){document.getElementById("totalRequests").textContent=e.totalRequests;const s=(e.byStatus.resolved/e.totalRequests*100).toFixed(1);document.getElementById("resolutionRate").textContent=`${s}%`,document.getElementById("avgResponseTime").textContent="4.2",document.getElementById("satisfaction").textContent=e.feedback.averageRating,document.getElementById("requestsGrowth").textContent="12%"}function Ee(e){const s=document.getElementById("requestStatusChart").getContext("2d");window.requestStatusChart&&window.requestStatusChart.destroy(),window.requestStatusChart=new Chart(s,{type:"bar",data:{labels:["Pending","Scheduled","In Progress","Resolved"],datasets:[{data:[e.pending,e.scheduled,e.inProgress,e.resolved],backgroundColor:["#FFC107","#1E90FF","#FFA500","#28A745"],borderWidth:0}]},options:{responsive:!0,maintainAspectRatio:!0,plugins:{legend:{display:!1}},scales:{y:{beginAtZero:!0,ticks:{precision:0}}}}})}function Ie(e){const s=document.getElementById("priorityChart").getContext("2d");window.priorityChart&&window.priorityChart.destroy(),window.priorityChart=new Chart(s,{type:"doughnut",data:{labels:["High","Medium","Low"],datasets:[{data:[e.high,e.medium,e.low],backgroundColor:["#DC3545","#FFC107","#28A745"],borderWidth:0}]},options:{responsive:!0,maintainAspectRatio:!0,plugins:{legend:{position:"bottom"}},cutout:"60%"}})}function Se(e){const s=document.getElementById("commonIssuesChart").getContext("2d");window.commonIssuesChart&&window.commonIssuesChart.destroy(),window.commonIssuesChart=new Chart(s,{type:"bar",data:{labels:e.map(a=>a._id),datasets:[{label:"Number of Issues",data:e.map(a=>a.count),backgroundColor:"#1E90FF",borderWidth:0}]},options:{responsive:!0,maintainAspectRatio:!0,plugins:{legend:{display:!1}},scales:{y:{beginAtZero:!0,ticks:{precision:0}}}}})}function $e(e){const s=document.getElementById("resolutionTimeChart").getContext("2d");window.resolutionTimeChart&&window.resolutionTimeChart.destroy(),window.resolutionTimeChart=new Chart(s,{type:"bar",data:{labels:["High","Medium","Low"],datasets:[{label:"Average Days to Resolve",data:[e.byPriority.high.averageTime,e.byPriority.medium.averageTime,e.byPriority.low.averageTime],backgroundColor:["#DC3545","#FFC107","#28A745"],borderWidth:0}]},options:{responsive:!0,maintainAspectRatio:!0,plugins:{legend:{display:!1}},scales:{y:{beginAtZero:!0,title:{display:!0,text:"Days"}}}}})}async function Ce(){const e=document.getElementById("main-container");e.innerHTML=`
    <div class="container py-5 mt-5">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <h1 class="mb-4">Terms of Service</h1>
          
          <div class="card shadow-sm mb-4">
            <div class="card-body">
              <h2 class="h4 mb-3">1. Acceptance of Terms</h2>
              <p>By accessing and using Dern-Support's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
              
              <h2 class="h4 mb-3 mt-4">2. Service Description</h2>
              <p>Dern-Support provides IT technical support services, including but not limited to:</p>
              <ul>
                <li>Hardware repair and maintenance</li>
                <li>Software troubleshooting and support</li>
                <li>Network setup and configuration</li>
                <li>Data recovery services</li>
                <li>IT consultation</li>
              </ul>
              
              <h2 class="h4 mb-3 mt-4">3. User Responsibilities</h2>
              <p>Users of Dern-Support services agree to:</p>
              <ul>
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of their account credentials</li>
                <li>Use the services in compliance with applicable laws</li>
                <li>Not engage in any unauthorized access or use of the service</li>
              </ul>
              
              <h2 class="h4 mb-3 mt-4">4. Service Availability</h2>
              <p>While we strive to provide uninterrupted service, we do not guarantee that our services will be available at all times. We reserve the right to modify or discontinue services with or without notice.</p>
              
              <h2 class="h4 mb-3 mt-4">5. Payment Terms</h2>
              <p>Users agree to pay all fees associated with the services they receive. Fees will be clearly communicated before service delivery. Payment terms may vary based on service type and user category (individual or business).</p>
              
              <h2 class="h4 mb-3 mt-4">6. Warranty and Liability</h2>
              <p>Services are provided "as is" without any warranty. Dern-Support shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from the use of our services.</p>
              
              <h2 class="h4 mb-3 mt-4">7. Data Protection</h2>
              <p>We handle user data in accordance with our Privacy Policy. Users are responsible for backing up their data before service delivery.</p>
              
              <h2 class="h4 mb-3 mt-4">8. Termination</h2>
              <p>We reserve the right to terminate or suspend access to our services for violations of these terms or for any other reason we deem appropriate.</p>
              
              <h2 class="h4 mb-3 mt-4">9. Changes to Terms</h2>
              <p>We may modify these terms at any time. Continued use of our services after such modifications constitutes acceptance of the updated terms.</p>
              
              <h2 class="h4 mb-3 mt-4">10. Contact Information</h2>
              <p>For questions about these terms, please contact us at:</p>
              <ul>
                <li>Email: legal@dern-support.com</li>
                <li>Phone: +998 (77) 777-7777</li>
                <li>Address: 123, Tashkent, Uzbekistan</li>
              </ul>
            </div>
          </div>
          
          <p class="text-center text-secondary">
            Last updated: March 1, 2025
          </p>
        </div>
      </div>
    </div>
  `,document.title="Terms of Service - Dern-Support"}async function Te(){const e=document.getElementById("main-container");e.innerHTML=`
    <div class="container py-5 mt-5">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <h1 class="mb-4">Privacy Policy</h1>
          
          <div class="card shadow-sm mb-4">
            <div class="card-body">
              <h2 class="h4 mb-3">1. Information We Collect</h2>
              <p>We collect information that you provide directly to us, including:</p>
              <ul>
                <li>Name and contact information</li>
                <li>Account credentials</li>
                <li>Service request details</li>
                <li>Payment information</li>
                <li>Device information</li>
                <li>Communication records</li>
              </ul>
              
              <h2 class="h4 mb-3 mt-4">2. How We Use Your Information</h2>
              <p>We use the collected information to:</p>
              <ul>
                <li>Provide and maintain our services</li>
                <li>Process and fulfill service requests</li>
                <li>Communicate with you about services</li>
                <li>Improve our services</li>
                <li>Protect against fraud and unauthorized access</li>
                <li>Comply with legal obligations</li>
              </ul>
              
              <h2 class="h4 mb-3 mt-4">3. Information Sharing</h2>
              <p>We do not sell your personal information. We may share your information with:</p>
              <ul>
                <li>Service providers and contractors</li>
                <li>Payment processors</li>
                <li>Legal authorities when required</li>
              </ul>
              
              <h2 class="h4 mb-3 mt-4">4. Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.</p>
              
              <h2 class="h4 mb-3 mt-4">5. Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
                <li>Receive a copy of your information</li>
              </ul>
              
              <h2 class="h4 mb-3 mt-4">6. Cookies and Tracking</h2>
              <p>We use cookies and similar technologies to improve user experience and analyze service usage. You can control cookie settings through your browser.</p>
              
              <h2 class="h4 mb-3 mt-4">7. Children's Privacy</h2>
              <p>Our services are not directed to children under 13. We do not knowingly collect information from children under 13.</p>
              
              <h2 class="h4 mb-3 mt-4">8. Changes to Privacy Policy</h2>
              <p>We may update this policy periodically. We will notify you of material changes through our website or email.</p>
              
              <h2 class="h4 mb-3 mt-4">9. Contact Us</h2>
              <p>For privacy-related inquiries, please contact us at:</p>
              <ul>
                <li>Email: privacy@dern-support.com</li>
                <li>Phone: +998 (77) 777-7777</li>
                <li>Address: 123, Tashkent, Uzbekistan</li>
              </ul>
            </div>
          </div>
          
          <p class="text-center text-secondary">
            Last updated: March 1, 2025
          </p>
        </div>
      </div>
    </div>
  `,document.title="Privacy Policy - Dern-Support"}async function Pe(){const e=document.getElementById("main-container");e.innerHTML=`
    <div class="container py-5 mt-5">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <h1 class="mb-4">About Dern-Support</h1>
          
          <div class="card shadow-sm mb-4">
            <div class="card-body">
              <h2 class="h4 mb-3">Our Story</h2>
              <p>Founded in 2025, Dern-Support emerged from a simple vision: to make expert IT support accessible to everyone. What started as a small team of passionate technicians has grown into a comprehensive technical support platform serving both individuals and businesses.</p>
              
              <h2 class="h4 mb-3 mt-4">Our Mission</h2>
              <p>We strive to provide exceptional IT support services that empower our clients to maximize their technology investments. Our mission is to deliver prompt, reliable, and cost-effective solutions while maintaining the highest standards of customer service.</p>
              
              <h2 class="h4 mb-3 mt-4">Our Values</h2>
              <div class="row g-4">
                <div class="col-md-6">
                  <div class="d-flex align-items-start">
                    <div class="flex-shrink-0 text-primary me-3">
                      ${n.checkCircle}
                    </div>
                    <div>
                      <h3 class="h5 mb-2">Excellence</h3>
                      <p class="mb-0">We pursue excellence in every service we provide, ensuring the highest quality solutions for our clients.</p>
                    </div>
                  </div>
                </div>
                
                <div class="col-md-6">
                  <div class="d-flex align-items-start">
                    <div class="flex-shrink-0 text-primary me-3">
                      ${n.shield}
                    </div>
                    <div>
                      <h3 class="h5 mb-2">Integrity</h3>
                      <p class="mb-0">We operate with complete transparency and honesty, building trust with our clients through ethical practices.</p>
                    </div>
                  </div>
                </div>
                
                <div class="col-md-6">
                  <div class="d-flex align-items-start">
                    <div class="flex-shrink-0 text-primary me-3">
                      ${n.clock}
                    </div>
                    <div>
                      <h3 class="h5 mb-2">Reliability</h3>
                      <p class="mb-0">We deliver consistent, dependable service when our clients need it most.</p>
                    </div>
                  </div>
                </div>
                
                <div class="col-md-6">
                  <div class="d-flex align-items-start">
                    <div class="flex-shrink-0 text-primary me-3">
                      ${n.users}
                    </div>
                    <div>
                      <h3 class="h5 mb-2">Customer Focus</h3>
                      <p class="mb-0">We put our clients first, ensuring their success through personalized support and solutions.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <h2 class="h4 mb-3 mt-4">Our Team</h2>
              <p>Our team consists of certified IT professionals with diverse expertise in hardware, software, networking, and cybersecurity. We continuously invest in training and development to stay ahead of technological advances.</p>
              
              <div class="row g-4 mt-2">
                <div class="col-lg-4 col-md-6">
                  <div class="card h-100">
                    <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" class="card-img-top" alt="John Smith">
                    <div class="card-body text-center">
                      <h3 class="h5 mb-1">John Smith</h3>
                      <p class="text-secondary mb-2">CEO & Founder</p>
                      <p class="small">15+ years of experience in IT industry leadership and technical support management.</p>
                    </div>
                  </div>
                </div>
                
                <div class="col-lg-4 col-md-6">
                  <div class="card h-100">
                    <img src="https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg" class="card-img-top" alt="Sarah Johnson">
                    <div class="card-body text-center">
                      <h3 class="h5 mb-1">Sarah Johnson</h3>
                      <p class="text-secondary mb-2">Technical Director</p>
                      <p class="small">Expert in network infrastructure and cloud solutions with multiple certifications.</p>
                    </div>
                  </div>
                </div>
                
                <div class="col-lg-4 col-md-6">
                  <div class="card h-100">
                    <img src="https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg" class="card-img-top" alt="Michael Chen">
                    <div class="card-body text-center">
                      <h3 class="h5 mb-1">Michael Chen</h3>
                      <p class="text-secondary mb-2">Support Manager</p>
                      <p class="small">Specialized in customer service excellence and technical team leadership.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <h2 class="h4 mb-3 mt-4">Our Location</h2>
              <p>Located in the heart of Cityville's IT Park, our modern facility is equipped with state-of-the-art diagnostic and repair tools. We also provide remote support services to clients worldwide.</p>
              
              <div class="row align-items-center mt-4">
                <div class="col-md-6">
                  <h2 class="h4 mb-3">Contact Us</h2>
                  <ul class="list-unstyled">
                    <li class="mb-2">
                      <div class="d-flex align-items-center">
                        ${n.mapPin}
                        <span class="ms-2">123, Tashkent, Uzbekistan</span>
                      </div>
                    </li>
                    <li class="mb-2">
                      <div class="d-flex align-items-center">
                        ${n.phone}
                        <span class="ms-2">+998 (77) 777-7777</span>
                      </div>
                    </li>
                    <li class="mb-2">
                      <div class="d-flex align-items-center">
                        ${n.mail}
                        <span class="ms-2">support@dern-support.com</span>
                      </div>
                    </li>
                    <li>
                      <div class="d-flex align-items-center">
                        ${n.clock}
                        <span class="ms-2">Mon-Fri: 8:00 AM - 7:00 PM</span>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div class="col-md-6">
                  <div class="d-flex gap-3 justify-content-md-end mt-4 mt-md-0">
                    <a href="#" class="btn btn-outline-primary">
                      ${n.messageCircle} Chat with Us
                    </a>
                    <a href="/support-request" onclick="return navigateTo('/support-request')" class="btn btn-primary">
                      ${n.plus} Submit Request
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,document.title="About Us - Dern-Support"}function Ae(){window.addEventListener("popstate",P),P()}async function P(){const e=window.location.pathname,s=document.getElementById("main-container");O();const a=localStorage.getItem("authToken"),i=localStorage.getItem("userRole"),t=["/dashboard","/support-request","/my-requests","/knowledge-base","/admin","/admin/requests","/admin/spareparts","/admin/knowledge-base","/admin/feedback","/admin/analytics"],o=["/admin","/admin/requests","/admin/spareparts","/admin/knowledge-base","/admin/feedback","/admin/analytics"];if(t.includes(e)&&!a){window.history.pushState({},"","/login"),k(),C();return}if(o.includes(e)&&i!=="admin"){window.history.pushState({},"","/dashboard"),k(),y();return}try{switch(e){case"/":await z();break;case"/login":a?(window.history.pushState({},"",i==="admin"?"/admin":"/dashboard"),i==="admin"?await I():await y()):await C();break;case"/register":a?(window.history.pushState({},"",i==="admin"?"/admin":"/dashboard"),i==="admin"?await I():await y()):await Q();break;case"/dashboard":await y();break;case"/support-request":await ee();break;case"/knowledge-base":await se();break;case"/admin":await I();break;case"/admin/requests":await de();break;case"/admin/spareparts":await ue();break;case"/admin/knowledge-base":await pe();break;case"/admin/feedback":await ge();break;case"/admin/analytics":await fe();break;case"/terms":await Ce();break;case"/privacy":await Te();break;case"/about":await Pe();break;default:s.innerHTML=`
          <div class="container mt-5 pt-5 text-center">
            <h1 class="display-4">404 - Page Not Found</h1>
            <p class="lead">The page you're looking for doesn't exist.</p>
            <a href="/" onclick="return navigateTo('/')" class="btn btn-primary mt-3">Return Home</a>
          </div>
        `}}catch(r){console.error("Error rendering page:",r),s.innerHTML=`
      <div class="container mt-5 pt-5 text-center">
        <h1 class="display-4">Error</h1>
        <p class="lead">Something went wrong while loading the page.</p>
        <a href="/" onclick="return navigateTo('/')" class="btn btn-primary mt-3">Return Home</a>
      </div>
    `}k(),window.scrollTo(0,0)}const qe="/api";window.API_URL=qe;document.addEventListener("DOMContentLoaded",Le);function Le(){const e=document.getElementById("root");e.innerHTML=`
    <div id="navbar-container"></div>
    <div id="main-container" class="fade-in"></div>
    <div id="footer-container"></div>
    <div id="toast-container" class="position-fixed bottom-0 end-0 p-3" style="z-index: 1100"></div>
    <div id="loading-spinner" class="d-none">${N}</div>
  `,_(),x(),H(),Ae(),d("Welcome to Dern-Support","Your trusted IT technical support partner.","info")}window.navigateTo=e=>{window.history.pushState({},"",e);const s=new PopStateEvent("popstate");return window.dispatchEvent(s),!1};
