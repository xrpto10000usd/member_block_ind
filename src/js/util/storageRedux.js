
/**
 * @param {string[]} keys - State keys to persist
 */
export function createStorageMiddleware(keys) {
  return store => next => action => {
    const result = next(action);
    const state = store.getState();
    keys.forEach(key => {
      if (state[key] !== undefined) {
        try {
          localStorage.setItem(key, JSON.stringify(state[key]));
        } catch (e) {
          console.error('Redux storage save error:', e);
        }
      }
    });
    return result;
  };
}

/**
 * @param {string[]} keys
 * @returns {object}
 */
export function loadPersistedState(keys) {
  const persisted = {};
  keys.forEach(key => {
    try {
      const item = localStorage.getItem(key);
      if (item) persisted[key] = JSON.parse(item);
    } catch (e) {
      console.error('Redux storage load error:', e);
    }
  });
  return persisted;
}
