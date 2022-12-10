import React from 'react'
import ReactDOM from 'react-dom'
import Counter from '../components/Counter'

export default function HeadingPortal() {
 
  return (
    ReactDOM.createPortal(<Counter start={0}/> , document.getElementById('outside-header'))
  )
}
