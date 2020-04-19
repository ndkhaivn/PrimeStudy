import { SET_LESSON, SET_SUBMISSION } from '../actionTypes';

const initialState = {};

const lessonReducers = function(state = initialState, action) {
  switch (action.type) {
    case SET_LESSON:
      if (action.payload.studies.length > 0) {
        return {
          ...action.payload,
          submission: JSON.parse(action.payload.studies[0].uploads)
        }
      }
      return {
        ...action.payload,
        submission: []
      }
    case SET_SUBMISSION:
      return {
        ...state,
        submission: action.payload
      }
    default:
      return state
  }
}

export default lessonReducers;