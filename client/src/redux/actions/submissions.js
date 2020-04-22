import axios from 'axios';
import { SET_SUBMISSIONS } from '../actionTypes';

export const getSubmissions = (classId, period) => (dispatch) => {
  axios.get(`/study_classes/${classId}`, { params: {
    start: period.start.toISOString(),
    end: period.end.toISOString()
  }})
    .then(res => {
      dispatch({
        type: SET_SUBMISSIONS,
        payload: res.data
      });
    })
    .catch(error => console.log(error));
}