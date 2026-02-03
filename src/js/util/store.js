import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createStorageMiddleware, loadPersistedState } from './storageRedux';


// Example user reducer (replace with your actual reducers)
function userReducer(state = {}, action) {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

// mainTabKey reducer
function mainTabKey(state = 'memstocks', action) {
  switch (action.type) {
    case 'SET_MAINTAB_KEY':
      return action.payload;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  user: userReducer,
  mainTabKey,
  // add other reducers here
});

// Keys to persist
const persistKeys = ['user', 'mainTabKey'];

// Load persisted state
const preloadedState = loadPersistedState(persistKeys);

// Create store with middleware
const store = createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(createStorageMiddleware(persistKeys))
);

export default store;
