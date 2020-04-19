import { combineReducers } from 'redux';
import lesson from './lesson';
import user from './user';

export default combineReducers({
  lesson,
  user,
});