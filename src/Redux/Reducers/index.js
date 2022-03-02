import { combineReducers } from 'redux';
import Auth from './Auth';
import Main from './Main';

export default combineReducers({
  main: Main,
  auth: Auth,
});
