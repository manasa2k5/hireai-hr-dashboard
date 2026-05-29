/**
 * API Service
 * Centralized API client for communicating with the backend
 * Handles authentication, request/response management, and error handling
 */

const BASE_URL = 'https://hire-ai-webdev-w4.onrender.com';

/**
 * Get authentication token from localStorage
 * @returns {string|null} - JWT access token or null if not found
 */
function getAuthToken() {
  return localStorage.getItem('access_token');
}

/**
 * Check if user is authenticated
 * @returns {boolean} - True if token exists
 */
function isAuthenticated() {
  return !!getAuthToken();
}

/**
 * Generic request handler
 * @param {string} endpoint - API endpoint path
 * @param {object} options - Fetch options (method, body, headers, etc.)
 * @param {boolean} requiresAuth - Whether endpoint requires authentication
 * @returns {Promise<any>} - Parsed response data
 * @throws {Error} - API or network error
 */
async function request(endpoint, options = {}, requiresAuth = true) {
  // Check authentication for protected endpoints
  if (requiresAuth) {
    const token = getAuthToken();
    if (!token) {
      throw new Error('Please login first.');
    }
    console.log('Token:', token);
  }

  const url = `${BASE_URL}${endpoint}`;

  const defaultHeaders = {
    'Content-Type': 'application/json',
  };

  // Add Authorization header if token exists
  const token = getAuthToken();
  if (token) {
    defaultHeaders['Authorization'] = `Bearer ${token}`;
    console.log('Token:', token);
  }

  const config = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };
  // Log outgoing request (URL + method)
  const method = (config && config.method) || 'GET';
  console.info('API Request:', { url, method });

  try {
    const response = await fetch(url, config);

    // Log response status
    console.info('API Response:', { url, method, status: response.status });

    // Handle non-JSON responses
    const contentType = response.headers.get('content-type');
    const isJSON = contentType && contentType.includes('application/json');
    const data = isJSON ? await response.json() : await response.text();

    // Handle HTTP errors
    if (!response.ok) {
      // Log error body for debugging
      console.error('API Error Response:', { url, method, status: response.status, body: data });

      const error = new Error(
        data?.message || data?.error || `HTTP ${response.status}`
      );
      error.status = response.status;
      error.data = data;
      throw error;
    }

    return data;
  } catch (error) {
    // Log network / unexpected errors with context
    console.error('API Request Failed:', { url, method, error });

    // Handle network errors
    if (error instanceof TypeError) {
      const netErr = new Error(
        `Network error: ${error.message}. Please check your connection.`
      );
      console.error('Network error detail:', { url, method, message: netErr.message });
      throw netErr;
    }
    throw error;
  }
}

/**
 * Make a GET request
 * @param {string} endpoint - API endpoint path
 * @param {boolean} requiresAuth - Whether request requires authentication (default: true)
 * @returns {Promise<any>}
 */
async function get(endpoint, requiresAuth = true) {
  return request(endpoint, { method: 'GET' }, requiresAuth);
}

/**
 * Make a POST request
 * @param {string} endpoint - API endpoint path
 * @param {object} body - Request body data
 * @param {boolean} requiresAuth - Whether request requires authentication (default: true)
 * @returns {Promise<any>}
 */
async function post(endpoint, body, requiresAuth = true) {
  return request(
    endpoint,
    {
      method: 'POST',
      body: JSON.stringify(body),
    },
    requiresAuth
  );
}

/**
 * Make a PUT request
 * @param {string} endpoint - API endpoint path
 * @param {object} body - Request body data
 * @param {boolean} requiresAuth - Whether request requires authentication (default: true)
 * @returns {Promise<any>}
 */
async function put(endpoint, body, requiresAuth = true) {
  return request(
    endpoint,
    {
      method: 'PUT',
      body: JSON.stringify(body),
    },
    requiresAuth
  );
}

/**
 * Make a PATCH request
 * @param {string} endpoint - API endpoint path
 * @param {object} body - Request body data
 * @param {boolean} requiresAuth - Whether request requires authentication (default: true)
 * @returns {Promise<any>}
 */
async function patch(endpoint, body, requiresAuth = true) {
  return request(
    endpoint,
    {
      method: 'PATCH',
      body: JSON.stringify(body),
    },
    requiresAuth
  );
}

/**
 * Make a DELETE request
 * @param {string} endpoint - API endpoint path
 * @param {boolean} requiresAuth - Whether request requires authentication (default: true)
 * @returns {Promise<any>}
 */
async function del(endpoint, requiresAuth = true) {
  return request(endpoint, { method: 'DELETE' }, requiresAuth);
}

// ============================================================================
// AUTHENTICATION ENDPOINTS
// ============================================================================

/**
 * Login user
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {Promise<{token, user}>}
 */
async function login(email, password) {
  const data = await post('/api/auth/login', { email, password }, false);
  if (data.access_token) {
    localStorage.setItem('access_token', data.access_token);
  }
  return data;
}

/**
 * Register new user
 * @param {object} userData - User registration data (email, password, name, etc.)
 * @returns {Promise<{token, user}>}
 */
async function register(userData) {
  const data = await post('/api/auth/register', userData, false);
  if (data.access_token) {
    localStorage.setItem('access_token', data.access_token);
  }
  return data;
}

/**
 * Get current user profile
 * @param {string} token - Optional auth token (uses stored token if not provided)
 * @returns {Promise<{user}>}
 */
async function getCurrentUser(token) {
  if (token) {
    localStorage.setItem('access_token', token);
  }
  return get('/api/auth/me');
}

/**
 * Logout user
 */
function logout() {
  localStorage.removeItem('access_token');
}

// ============================================================================
// JOBS ENDPOINTS
// ============================================================================

/**
 * Get all jobs
 * @returns {Promise<{jobs: Array}>}
 */
async function getJobs() {
  return get('/api/jobs');
}

/**
 * Get single job by ID
 * @param {string} jobId - Job ID
 * @returns {Promise<{job}>}
 */
async function getJob(jobId) {
  return get(`/api/jobs/${jobId}`);
}

/**
 * Create new job
 * @param {object} jobData - Job data (title, description, requirements, etc.)
 * @returns {Promise<{job}>}
 */
async function createJob(jobData) {
  return post('/api/jobs', jobData);
}

/**
 * Update job
 * @param {string} jobId - Job ID
 * @param {object} payload - Update payload
 * @returns {Promise<{job}>}
 */
async function updateJob(jobId, payload) {
  return patch(`/api/jobs/${jobId}`, payload);
}

/**
 * Delete job
 * @param {string} jobId - Job ID
 * @returns {Promise<{success: boolean}>}
 */
async function deleteJob(jobId) {
  return del(`/api/jobs/${jobId}`);
}

// ============================================================================
// APPLICATIONS ENDPOINTS
// ============================================================================

/**
 * Get all applications
 * @returns {Promise<{applications: Array}>}
 */
async function getApplications() {
  return get('/api/applications');
}

/**
 * Get applications for a specific job
 * @param {string} jobId - Job ID
 * @returns {Promise<{applications: Array}>}
 */
async function getApplicationsByJob(jobId) {
  return get(`/api/applications?job_id=${jobId}`);
}

/**
 * Get applications by status
 * @param {string} status - Application status (pending, reviewing, shortlisted, rejected, hired)
 * @returns {Promise<{applications: Array}>}
 */
async function getApplicationsByStatus(status) {
  return get(`/api/applications?status=${status}`);
}

/**
 * Get single application
 * @param {string} applicationId - Application ID
 * @returns {Promise<{application}>}
 */
async function getApplication(applicationId) {
  return get(`/api/applications/${applicationId}`);
}

/**
 * Create new application
 * @param {object} payload - Application data (jobId, candidateEmail, resumeUrl, etc.)
 * @returns {Promise<{application}>}
 */
async function createApplication(payload) {
  return post('/api/applications', payload);
}

/**
 * Update application
 * @param {string} applicationId - Application ID
 * @param {object} payload - Update payload (status, notes, score, etc.)
 * @returns {Promise<{application}>}
 */
async function updateApplication(applicationId, payload) {
  return patch(`/api/applications/${applicationId}`, payload);
}

/**
 * Delete application
 * @param {string} applicationId - Application ID
 * @returns {Promise<{success: boolean}>}
 */
async function deleteApplication(applicationId) {
  return del(`/api/applications/${applicationId}`);
}

// ============================================================================
// EXPORT
// ============================================================================

export const api = {
  // Utility
  request,
  get,
  post,
  put,
  patch,
  del,
  getAuthToken,
  isAuthenticated,

  // Authentication
  login,
  register,
  getCurrentUser,
  logout,

  // Jobs
  getJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,

  // Applications
  getApplications,
  getApplicationsByJob,
  getApplicationsByStatus,
  getApplication,
  createApplication,
  updateApplication,
  deleteApplication,
};

export default api;