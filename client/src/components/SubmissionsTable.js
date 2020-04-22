import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getSubmissions } from '../redux/actions/submissions';
import { Button, Intent } from '@blueprintjs/core';
import { SET_FEEDBACK_SUBMISSION } from '../redux/actionTypes';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function getCurrentWeek() {
  const today = new Date();
  const first = today.getDate() - today.getDay() + 1; // find the date of the last monday
  const last = first + 6;

  return {
    start: new Date(today.setDate(first)),
    end: new Date(today.setDate(last))
  }
}

function offsetWeek(period, offset) {

  return {
    start: new Date(period.start.setDate(period.start.getDate() + offset * 7)),
    end: new Date(period.end.setDate(period.end.getDate() + offset * 7))
  }
}

export default function SubmissionsTable() {

  const dispatch = useDispatch();
  const teacher = useSelector(state => state.user.teacher);
  const [period, setPeriod] = useState(getCurrentWeek());
  const submissions = useSelector(state => state.submissions);
  const history = useHistory();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getSubmissions(teacher.study_class_id, period));
  }, [period]);

  const listMarkup = submissions.map(student => {

    const week = [[], [], [], [], []]; // monday tuesday wednesday thursday friday 

    for (let study of student.studies) {
      let lessonDate = new Date(study.lesson.date);
      let index = lessonDate.getDay() - 1;
      week[index].push(study);
    }
    const weekMarkup = week.map((day, index) => {

      const dayMarkup = day.map(submission => (
        <Button 
          key={submission.id}
          intent={ submission.checked ? Intent.SUCCESS : Intent.NONE } 
          onClick={() => {
            dispatch({
              type: SET_FEEDBACK_SUBMISSION,
              payload: {
                ...submission,
                student: {
                  id: student.id,
                  first_name: student.first_name,
                  last_name: student.last_name
                }
              }
            });
            history.push("/feedback");
          }}
        >
          { submission.lesson.subject.name } 
        </Button>
      ))

      return <td key={index}> {dayMarkup} </td>

    });

    return (
      <tr key={student.id}>
        <td> { student.id } </td>
        <td> { student.last_name } </td>
        <td> { student.first_name } </td>
        { weekMarkup }
      </tr>
    );
  })

  return (
    <div className="main-panel">

      <div className="week-selector">
        <Button icon="double-chevron-left" onClick={() => { setPeriod(offsetWeek(period, -1)) }}/>
        <span> {period.start.toLocaleDateString()} - {period.end.toLocaleDateString()}  </span>
        <Button icon="double-chevron-right" onClick={() => { setPeriod(offsetWeek(period, +1)) }}/>
      </div>

      <table class="bp3-html-table bp3-html-table-bordered bp3-html-table-striped">
        <thead>
          <tr>
            <th>{t("ID")}</th>
            <th>{t("Last Name")}</th>
            <th>{t("First Name")}</th>
            <th>{t("Monday")}</th>
            <th>{t("Tuesday")}</th>
            <th>{t("Wednesday")}</th>
            <th>{t("Thursday")}</th>
            <th>{t("Friday")}</th>
          </tr>
        </thead>
        <tbody>
          { listMarkup }
        </tbody>
      </table>
    </div>
  )
}
