import { SET_USER } from '../actionTypes';

const initialState = {
  type: "UNAUTHENTICATED",
  student: {},
  teacher: {}
};

const userReducers = function(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return action.payload
    default:
      return state
  }
}

export default userReducers;