import { icons } from '../utils/icons.js';

export async function renderLoginPage() {
  const mainContainer = document.getElementById('main-container');
  
  mainContainer.innerHTML = `
    <div class="container py-5 my-5">
      <div class="row justify-content-center">
        <div class="col-md-6 col-lg-5">
          <div class="card shadow">
            <div class="card-body p-4 p-md-5">
              <div class="text-center mb-4">
                ${icons.logIn}
                <h1 class="h3 mt-3">Login to Your Account</h1>
                <p class="text-secondary">Enter your credentials to access your account</p>
              </div>
              
              <form id="loginForm" onsubmit="handleLogin(event)">
                <div class="mb-3">
                  <label for="loginEmail" class="form-label">Email Address</label>
                  <div class="input-group">
                    <span class="input-group-text">
                      ${icons.mail}
                    </span>
                    <input type="email" class="form-control" id="loginEmail" required placeholder="name@example.com">
                  </div>
                </div>
                
                <div class="mb-4">
                  <label for="loginPassword" class="form-label">Password</label>
                  <div class="input-group">
                    <span class="input-group-text">
                      ${icons.lock}
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
  `;
  
  // Update document title
  document.title = 'Login - Dern-Support';
  
  // Add email validation
  const emailInput = document.getElementById('loginEmail');
  emailInput.addEventListener('input', validateEmail);
  
  // Add password validation
  const passwordInput = document.getElementById('loginPassword');
  passwordInput.addEventListener('input', validatePassword);
}

function validateEmail(e) {
  const email = e.target.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (email && !emailRegex.test(email)) {
    e.target.classList.add('is-invalid');
    
    // Add validation message if it doesn't exist
    if (!e.target.nextElementSibling || !e.target.nextElementSibling.classList.contains('invalid-feedback')) {
      const invalidFeedback = document.createElement('div');
      invalidFeedback.classList.add('invalid-feedback');
      invalidFeedback.innerText = 'Please enter a valid email address.';
      e.target.insertAdjacentElement('afterend', invalidFeedback);
    }
  } else {
    e.target.classList.remove('is-invalid');
    if (email) {
      e.target.classList.add('is-valid');
    } else {
      e.target.classList.remove('is-valid');
    }
  }
}

function validatePassword(e) {
  const password = e.target.value;
  
  if (password && password.length < 8) {
    e.target.classList.add('is-invalid');
    
    // Add validation message if it doesn't exist
    if (!e.target.nextElementSibling || !e.target.nextElementSibling.classList.contains('invalid-feedback')) {
      const invalidFeedback = document.createElement('div');
      invalidFeedback.classList.add('invalid-feedback');
      invalidFeedback.innerText = 'Password must be at least 8 characters long.';
      e.target.insertAdjacentElement('afterend', invalidFeedback);
    }
  } else {
    e.target.classList.remove('is-invalid');
    if (password) {
      e.target.classList.add('is-valid');
    } else {
      e.target.classList.remove('is-valid');
    }
  }
}