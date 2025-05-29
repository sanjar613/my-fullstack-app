import { icons } from '../utils/icons.js';

export async function renderRegisterPage() {
  const mainContainer = document.getElementById('main-container');
  
  mainContainer.innerHTML = `
    <div class="container py-5 my-5">
      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6">
          <div class="card shadow">
            <div class="card-body p-4 p-md-5">
              <div class="text-center mb-4">
                ${icons.userPlus}
                <h1 class="h3 mt-3">Create an Account</h1>
                <p class="text-secondary">Join Dern-Support to get expert IT technical support</p>
              </div>
              
              <form id="registerForm" onsubmit="handleRegister(event)">
                <div class="mb-3">
                  <label for="registerName" class="form-label">Full Name</label>
                  <div class="input-group">
                    <span class="input-group-text">
                      ${icons.user}
                    </span>
                    <input type="text" class="form-control" id="registerName" required placeholder="John Smith">
                  </div>
                </div>
                
                <div class="mb-3">
                  <label for="registerEmail" class="form-label">Email Address</label>
                  <div class="input-group">
                    <span class="input-group-text">
                      ${icons.mail}
                    </span>
                    <input type="email" class="form-control" id="registerEmail" required placeholder="name@example.com">
                  </div>
                </div>
                
                <div class="mb-3">
                  <label for="registerPassword" class="form-label">Password</label>
                  <div class="input-group">
                    <span class="input-group-text">
                      ${icons.lock}
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
                      ${icons.lock}
                    </span>
                    <input type="password" class="form-control" id="registerConfirmPassword" required placeholder="Confirm your password">
                  </div>
                </div>
                
                <div class="mb-4">
                  <label class="form-label">Account Type</label>
                  <div class="d-flex gap-4">
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="role" id="roleIndividual" value="individual" checked>
                      <label class="form-check-label" for="roleIndividual">
                        Individual
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="role" id="roleBusiness" value="business">
                      <label class="form-check-label" for="roleBusiness">
                        Business
                      </label>
                    </div>
                  </div>
                </div>
                
                <div class="mb-4 form-check">
                  <input class="form-check-input" type="checkbox" id="termsAgree" required>
                  <label class="form-check-label" for="termsAgree">
                    I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
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
  `;
  
  // Update document title
  document.title = 'Register - Dern-Support';
  
  // Add form validation
  const form = document.getElementById('registerForm');
  const nameInput = document.getElementById('registerName');
  const emailInput = document.getElementById('registerEmail');
  const passwordInput = document.getElementById('registerPassword');
  const confirmPasswordInput = document.getElementById('registerConfirmPassword');
  
  nameInput.addEventListener('input', validateName);
  emailInput.addEventListener('input', validateEmail);
  passwordInput.addEventListener('input', validatePassword);
  confirmPasswordInput.addEventListener('input', validateConfirmPassword);
}

function validateName(e) {
  const name = e.target.value;
  
  if (name && name.length < 2) {
    e.target.classList.add('is-invalid');
    
    // Add validation message if it doesn't exist
    if (!e.target.nextElementSibling || !e.target.nextElementSibling.classList.contains('invalid-feedback')) {
      const invalidFeedback = document.createElement('div');
      invalidFeedback.classList.add('invalid-feedback');
      invalidFeedback.innerText = 'Name must be at least 2 characters long.';
      e.target.insertAdjacentElement('afterend', invalidFeedback);
    }
  } else {
    e.target.classList.remove('is-invalid');
    if (name) {
      e.target.classList.add('is-valid');
    } else {
      e.target.classList.remove('is-valid');
    }
  }
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
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  
  if (password && !passwordRegex.test(password)) {
    e.target.classList.add('is-invalid');
    
    // Add validation message if it doesn't exist
    if (!e.target.nextElementSibling || !e.target.nextElementSibling.classList.contains('invalid-feedback')) {
      const invalidFeedback = document.createElement('div');
      invalidFeedback.classList.add('invalid-feedback');
      invalidFeedback.innerText = 'Password must be at least 8 characters long and include at least one letter, one number, and one special character.';
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
  
  // Validate confirm password if it has a value
  const confirmPasswordInput = document.getElementById('registerConfirmPassword');
  if (confirmPasswordInput.value) {
    validateConfirmPassword({ target: confirmPasswordInput });
  }
}

function validateConfirmPassword(e) {
  const confirmPassword = e.target.value;
  const password = document.getElementById('registerPassword').value;
  
  if (confirmPassword && confirmPassword !== password) {
    e.target.classList.add('is-invalid');
    
    // Add validation message if it doesn't exist
    if (!e.target.nextElementSibling || !e.target.nextElementSibling.classList.contains('invalid-feedback')) {
      const invalidFeedback = document.createElement('div');
      invalidFeedback.classList.add('invalid-feedback');
      invalidFeedback.innerText = 'Passwords do not match.';
      e.target.insertAdjacentElement('afterend', invalidFeedback);
    }
  } else {
    e.target.classList.remove('is-invalid');
    if (confirmPassword) {
      e.target.classList.add('is-valid');
    } else {
      e.target.classList.remove('is-valid');
    }
  }
}