import React from 'react';

export default function Sidebar(props) {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        { props.children }
      </div>
      
    </div>
  )
}
