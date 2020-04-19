import React from 'react'
import { useSelector } from 'react-redux';

export default function Content() {

  const content = useSelector(state => state.lesson.content);

  return (
    <div dangerouslySetInnerHTML={{__html: content}}>
      
    </div>
  )
}
