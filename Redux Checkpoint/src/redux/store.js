import { legacy_createStore as createStore } from 'redux';
import taskReducer from './reducer';

// Connect to Redux DevTools browser extension if available
const reduxDevTools =
  typeof window !== 'undefined' &&
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(taskReducer, reduxDevTools);

export default store;
