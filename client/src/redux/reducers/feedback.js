import { SET_FEEDBACK_SUBMISSION } from '../actionTypes';

const initialState = {
  submission: null
};

const feedbackReducers = function(state = initialState, action) {
  switch (action.type) {
    case SET_FEEDBACK_SUBMISSION:
      return {
        ...state,
        submission: action.payload
      }
    default:
      return state
  }
}

export default feedbackReducers;