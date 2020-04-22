import { SET_SUBMISSIONS } from '../actionTypes';

const initialState = [];

const submissionsReducers = function(state = initialState, action) {
  switch (action.type) {
    case SET_SUBMISSIONS:
      return action.payload
    default:
      return state
  }
}

export default submissionsReducers;