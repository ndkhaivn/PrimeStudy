import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import axios from 'axios';

const queryLessons = (info, successCallback, failureCallback) => {
  axios.get('/lessons/schedule', { 
      params: { 
        start: info.startStr, 
        end: info.endStr,
        "class-id": 1
      }
    })
    .then(res => {
      successCallback(res.data.map(lesson => ({
        title: `${lesson.subject_id}: ${lesson.title}`,
        start: lesson.date,
        end: lesson.date
      })));
    })
    .catch(error => {
      console.log(error);
      failureCallback();
    });
}

export default function Schedule() {
  return (
    <div>
      <FullCalendar
        defaultView="dayGridWeek"
        plugins={[dayGridPlugin]}
        allDayDefault="true"
        firstDay={1}
        events={queryLessons}
      />
    </div>
  );
}
