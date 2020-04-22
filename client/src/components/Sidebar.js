import React from 'react';
import Intro from './LessonTabs/Intro';

export default function Sidebar(props) {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        { props.children }
      </div>
      
    </div>
  )
}
