// lib/auth.js

// Get auth token from cookies
export function getTokenFromCookie() {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(/token=([^;]+)/);
  return match ? match[1] : null;
}

// Get user role from cookies (e.g. 'customer' or 'provider')
export function getUserRoleFromCookie() {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(/type=([^;]+)/);
  return match ? match[1] : null;
}
