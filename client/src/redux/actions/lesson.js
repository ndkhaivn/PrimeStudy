import axios from 'axios';
import { SET_LESSON, SET_SUBMISSION } from '../actionTypes';

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
  axios.post(`/lessons/${submission.lessonId}/submit`, { files: submission.files, "student-id": submission.studentId })
    .then(res => {
      dispatch({
        type: SET_SUBMISSION,
        payload: submission.files
      });
    })
    .catch(error => console.log(error))
}

export const deleteSubmission = (studyId) => (dispatch) => {
  axios.delete(`/studies/${studyId}`, { crossorigin:true })
    .then(res => {
      dispatch({
        type: SET_SUBMISSION,
        payload: []
      })
    })
    .catch(error => console.log(error));
}