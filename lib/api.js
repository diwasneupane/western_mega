/**
 * Shared axios instance for all client-side API calls.
 * Automatically:
 *   - Sets base URL from NEXT_PUBLIC_API_URL (falls back to localhost:4000/api)
 *   - Sets Content-Type: application/json
 *   - Unwraps { statusCode, message, data } backend envelope on responses
 *   - Returns a consistent error shape so callers can read err.message
 */

import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';

const api = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  timeout: 15000,
});

// ── Response interceptor ─────────────────────────────────────────────────────
api.interceptors.response.use(
  (response) => {
    // Unwrap envelope: { statusCode, message, data } → data
    if (
      response.data &&
      'statusCode' in response.data &&
      'data' in response.data
    ) {
      response.data = response.data.data;
    }
    return response;
  },
  (error) => {
    // Normalise error message for callers
    const msg =
      error?.response?.data?.message ||
      error?.response?.data?.error ||
      error?.message ||
      'Something went wrong. Please try again.';
    return Promise.reject(new Error(Array.isArray(msg) ? msg.join(', ') : msg));
  },
);

export default api;

// ── Domain helpers ────────────────────────────────────────────────────────────

export const inquiriesApi = {
  /** Public — no auth required */
  submit: (payload) => api.post('/inquiries', payload).then((r) => r.data),
};

export const contactsApi = {
  /** Public — no auth required */
  submit: (payload) => api.post('/contacts', payload).then((r) => r.data),
};
