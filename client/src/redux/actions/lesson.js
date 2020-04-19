import axios from 'axios';
import { SET_LESSON } from '../actionTypes';

export const setLesson = (lesson) => (dispatch) => {

  dispatch({
    type: SET_LESSON,
    payload: lesson
  });

}

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

export const submit = (submission) => (dispatch) => {

  const formData = new FormData();

  formData.append('files', submission.files);
  formData.append('student-id', submission.studentId);

  axios.post(`/lessons/${submission.lessonId}/submit`, { files: submission.files, "student-id": submission.studentId })
    .then(res => {
      
    })
    .catch(error => console.log(error))
}