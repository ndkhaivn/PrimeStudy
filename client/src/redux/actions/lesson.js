import axios from 'axios';
import { SET_LESSON } from '../actionTypes';

export const getLesson = (lessonId) => (dispatch) => {
  axios.get(`/lessons/${lessonId}`)
    .then(res => {
      dispatch({
        type: SET_LESSON,
        payload: res.data.data
      })
    })
    .catch(error => console.log(error))

}