import axios from 'axios';
import { SET_USER } from '../actionTypes';

export const setUser = (user) => (dispatch) => {
  dispatch({
    type: SET_USER,
    payload: user
  });
}

export const login = (loginDetails) => (dispatch) => {
  axios.get('/users/login', {params: loginDetails})
    .then(res => {

      localStorage.setItem('UserData', JSON.stringify(res.data));

      dispatch({
        type: SET_USER,
        payload: res.data
      });
    })
    .catch(error => console.log(error));
}

export const logout = () => (dispatch) => {
  localStorage.removeItem('UserData');
  dispatch({
    type: SET_USER,
    payload: {
      type: "UNAUTHENTICATED"
    }
  });
}