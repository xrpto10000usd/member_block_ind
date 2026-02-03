// src/js/util/storage.js
// Utility functions for loading and unloading data (localStorage/sessionStorage)

/**
 * Save data to localStorage
 * @param {string} key
 * @param {any} value
 */
export function saveToStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // Handle storage errors (e.g., quota exceeded)
    console.error('Storage save error:', e);
  }
}

/**
 * Load data from localStorage
 * @param {string} key
 * @returns {any|null}
 */
export function loadFromStorage(key) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (e) {
    console.error('Storage load error:', e);
    return null;
  }
}

/**
 * Remove data from localStorage
 * @param {string} key
 */
export function removeFromStorage(key) {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    console.error('Storage remove error:', e);
  }
}
