/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import posts from './modules/Post/PostReducer';
import customer from './modules/Customer/CustomerReducer';
import intl from './modules/Intl/IntlReducer';
import { reducer as formReducer } from 'redux-form'

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  posts,
  customer,
  form: formReducer
});
