import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setLesson } from '../redux/actions/lesson';
import { useTranslation } from 'react-i18next';

export default function Schedule() {
  const history = useHistory();
  const dispatch = useDispatch();
  const student = useSelector((state) => state.user.student);
  const { i18n } = useTranslation();

  const queryLessons = (info, successCallback, failureCallback) => {
    axios
      .get('/lessons/schedule', {
        params: {
          start: info.startStr,
          end: info.endStr,
          'class-id': student.study_class_id,
          'student-id': student.id
        },
      })
      .then((res) => {
        successCallback(
          res.data.map((lesson) => ({
            id: lesson.id,
            data: lesson,
            title: `${lesson.subject.name}: ${lesson.title}`,
            start: lesson.date,
            end: lesson.date,
            color: lesson.subject.color
          }))
        );
      })
      .catch((error) => {
        console.log(error);
        failureCallback("Cannot retrieve this week schedule");
      });
  };

  const handleLessonClick = (info) => {
    history.push('/lesson');
    dispatch(setLesson(info.event.extendedProps.data));
  };

  return (
    <div className="main-panel">
      <FullCalendar
        locale={i18n.language}
        contentHeight='auto'
        defaultView="dayGridWeek"
        plugins={[dayGridPlugin]}
        allDayDefault="true"
        firstDay={1} // monday as first day of week
        events={queryLessons}
        eventClick={handleLessonClick}
      />
    </div>
  );
}
