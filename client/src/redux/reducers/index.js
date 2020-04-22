import { combineReducers } from 'redux';
import lesson from './lesson';
import user from './user';
import submissions from './submissions';
import feedback from './feedback';

export default combineReducers({
  lesson,
  user,
  submissions,
  feedback
});