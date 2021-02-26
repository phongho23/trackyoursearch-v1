//main page that displays the notes

import React from 'react'
import Note from '../Note/Note'
import './NotePageMain.css'

export default function NotePageMain(props) {
  return (
    <section className='NotePageMain'>
      <Note
        id={props.note.id}
        name={props.note.name}
        modified={props.note.modified}
      />

      <div className='NotePageMain__jobTitle'>
        <b><p>Job Title:</p></b>
        {props.note.jobTitle}
      </div>

      <div className='NotePageMain__companyName'>
        <b><p>Company Name:</p></b>
        {props.note.companyName}
      </div>

      <div className='NotePageMain__postedUrl'>
        <b><p>Job Listing URL/Info:</p></b>
        {props.note.postedUrl}
      </div>

      <div className='NotePageMain__interview'>
        <b><p>Interview Details:</p></b>
        {props.note.interview}
      </div>

      <div className='NotePageMain__jobRating'>
        <b><p>Opportunity Rating:</p></b>
        {props.note.jobRating}
      </div>

      <div className='NotePageMain__content'>
        <b><p>Job Description:</p></b>
        {props.note.content.split(/\n \r|\n/).map((para, i) =>
          <p key={i}>{para}</p>
        )}
      </div>
      
    </section>
  )
}

NotePageMain.defaultProps = {
  note: {
    content: '',
  }
}