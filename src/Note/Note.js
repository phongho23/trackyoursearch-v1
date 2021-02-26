//job listing section/is the note link box / and the actual note itself
//need to move within the dates/folderbutton/jobdateapplied when clicked

//aka the bottom part of the noteful app when u changed it

import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { format } from 'date-fns'
import './Note.css'

export default function Note(props) {
  return (
    <div style={{width: "150px", height: "150px", margin: "10px", position: "relative"}} className='Note'>
      <h2 className='Note__title'>
        <Link to={`/note/${props.id}`}>
          {props.name}
        </Link>
      </h2>
      <button style={{color: "red", fontSize: "20px", position: "absolute", top: "0", right: "0" }} type='button'>
        {' '}
        X
      </button>
      <div className='Note__dates'>
        <div className='Note__dates-modified'>
          Modified
          {' '}
          <span className='Date'>
            {format(props.modified, 'Do MMM YYYY')}
          </span>
        </div>
      </div>
    </div>
  )
}