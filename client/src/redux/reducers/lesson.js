import { SET_LESSON } from '../actionTypes';

const initialState = {};

const lessonReducers = function(state = initialState, action) {
  switch (action.type) {
    case SET_LESSON:
      return action.payload
    default:
      return state
  }
}

export default lessonReducers;