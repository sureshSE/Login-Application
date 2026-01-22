import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Login API call
export const loginUser = async (email, password) => {
  try {
    const response = await apiClient.post('/login', {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      // Server responded with error
      throw error.response.data;
    } else if (error.request) {
      // Request made but no response
      throw { success: false, message: 'No response from server. Please check if the backend is running.' };
    } else {
      // Something else happened
      throw { success: false, message: 'An error occurred. Please try again.' };
    }
  }
};

// Health check API call
export const checkHealth = async () => {
  try {
    const response = await apiClient.get('/health');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default apiClient;
