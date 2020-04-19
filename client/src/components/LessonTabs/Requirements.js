import React from 'react'
import { useSelector } from 'react-redux';

export default function Requirements() {

  const requirements = useSelector(state => state.lesson.requirements);

  return (
    <div>
      {requirements}
    </div>
  )
}
