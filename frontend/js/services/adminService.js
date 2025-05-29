import { authFetch } from './auth.js';

export const adminService = {
  getDashboard: async () => {
    const response = await authFetch(`${window.API_URL}/admin/dashboard`);
    return response.json();
  },

  getUsers: async () => {
    const response = await authFetch(`${window.API_URL}/admin/users`);
    return response.json();
  },

  updateUser: async (userId, userData) => {
    const response = await authFetch(`${window.API_URL}/admin/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    return response.json();
  },

  deleteUser: async (userId) => {
    const response = await authFetch(`${window.API_URL}/admin/users/${userId}`, {
      method: 'DELETE',
    });
    return response.json();
  },

  getRequests: async () => {
    const response = await authFetch(`${window.API_URL}/admin/requests`);
    return response.json();
  },

  getFeedback: async () => {
    const response = await authFetch(`${window.API_URL}/admin/feedback`);
    return response.json();
  }
};