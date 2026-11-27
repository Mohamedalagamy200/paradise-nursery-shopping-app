// Shared formatting + image-fallback helpers for Paradise Nursery.

export const fmt = (n) => `$${Number(n).toFixed(2)}`;

// Inline SVG leaf placeholder (data URI) shown when a plant photo fails to load.
export const FALLBACK_IMAGE = `data:image/svg+xml;utf8,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="#e8f5e9"/><path d="M200 60 C280 100 300 180 200 240 C100 180 120 100 200 60Z" fill="#2e7d32"/><path d="M200 90 L200 230" stroke="#ffffff" stroke-width="6" stroke-linecap="round"/></svg>`
)}`;

export const handleImageError = (e) => {
  e.currentTarget.onerror = null;
  e.currentTarget.src = FALLBACK_IMAGE;
};
