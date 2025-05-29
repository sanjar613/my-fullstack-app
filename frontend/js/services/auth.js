


import { showToast } from "../utils/ui.js";
import { createNavbar } from "../components/navbar.js";

// Setup authentication related event listeners and functions
export function setupAuthentication() {
  // Handle login form submission
  window.handleLogin = async (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    try {
      const response = await fetch(`${window.API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Save auth data to local storage
      localStorage.setItem("authToken", data.token);
      localStorage.setItem("userId", data._id);
      localStorage.setItem("userName", data.name);
      localStorage.setItem("userEmail", data.email);
      localStorage.setItem("userRole", data.role);

      // Show success message
      showToast("Success", "Login successful!", "success");

      // Recreate navbar
      createNavbar();

      // Redirect based on role
      if (data.role === "admin") {
        window.navigateTo("/admin");
      } else {
        window.navigateTo("/dashboard");
      }
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };

  // Handle registration form submission
  window.handleRegister = async (e) => {
    e.preventDefault();

    const name = document.getElementById("registerName").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    const confirmPassword = document.getElementById(
      "registerConfirmPassword"
    ).value;
    const role = document.querySelector('input[name="role"]:checked').value;

    // Validate password match
    if (password !== confirmPassword) {
      showToast("Error", "Passwords do not match", "error");
      return;
    }

    // Validate password strength
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      showToast(
        "Error",
        "Password must be at least 8 characters long and include at least one letter, one number, and one special character",
        "error"
      );
      return;
    }

    try {
      const response = await fetch(`${window.API_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, role }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      // Save auth data to local storage
      localStorage.setItem("authToken", data.token);
      localStorage.setItem("userId", data._id);
      localStorage.setItem("userName", data.name);
      localStorage.setItem("userEmail", data.email);
      localStorage.setItem("userRole", data.role);

      // Show success message
      showToast("Success", "Registration successful!", "success");

      // Recreate navbar
      createNavbar();

      // Redirect based on role
      if (data.role === "admin") {
        window.navigateTo("/admin");
      } else {
        window.navigateTo("/dashboard");
      }
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };
}

// Get authenticated user's token
export function getAuthToken() {
  return localStorage.getItem("authToken");
}

// Check if user is authenticated
export function isAuthenticated() {
  return localStorage.getItem("authToken") !== null;
}

// Check if user is admin
export function isAdmin() {
  return localStorage.getItem("userRole") === "admin";
}

// Make authenticated API request
export async function authFetch(url, options = {}) {
  const token = getAuthToken();

  if (!token) {
    throw new Error("Not authenticated");
  }

  const headers = {
    ...(options.headers || {}),
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(
        error.message || `Request failed with status ${response.status}`
      );
    }

    return response;
  } catch (error) {
    console.error("API request failed:", error);
    throw error;
  }
}