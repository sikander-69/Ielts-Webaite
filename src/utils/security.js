/**
 * EASY IELTS / PTE Global Education - Security & Sanitization Layer
 * Provides XSS prevention, rate limiting, and input validation.
 */

// 1. XSS Input Sanitization
export function sanitizeInput(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Strip script tags
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '') // Strip iframe tags
    .replace(/on\w+="[^"]*"/gi, '') // Strip event handlers like onerror, onload
    .replace(/on\w+='[^']*'/gi, '')
    .replace(/javascript:/gi, '') // Strip javascript: URLs
    .replace(/</g, '&lt;') // Escape HTML brackets
    .replace(/>/g, '&gt;')
    .trim();
}

// 2. Email Format Validation
export function isValidEmail(email) {
  if (!email || typeof email !== 'string') return false;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email.trim());
}

// 3. Phone Format Validation (Supports Pakistani & International formats)
export function isValidPhone(phone) {
  if (!phone || typeof phone !== 'string') return false;
  const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,8}$/;
  return phoneRegex.test(phone.trim().replace(/\s+/g, ''));
}

// 4. Rate Limiter (Prevents Rapid Duplicate Submissions)
const SUBMISSION_COOLDOWN_MS = 15000; // 15 seconds cooldown

export function checkRateLimit(key = 'last_form_submission') {
  const lastSubmit = localStorage.getItem(key);
  const now = Date.now();
  if (lastSubmit && now - parseInt(lastSubmit, 10) < SUBMISSION_COOLDOWN_MS) {
    const remainingSec = Math.ceil((SUBMISSION_COOLDOWN_MS - (now - parseInt(lastSubmit, 10))) / 1000);
    return {
      allowed: false,
      message: `Security Limit: Please wait ${remainingSec} seconds before submitting another request to prevent spam.`
    };
  }
  return { allowed: true };
}

export function recordSubmission(key = 'last_form_submission') {
  localStorage.setItem(key, Date.now().toString());
}
