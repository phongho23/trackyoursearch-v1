import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Note from '../Note/Note'
import CircleButton from '../CircleButton/CircleButton'
import './NoteListMain.css'
//job button = note button
export default function NoteListMain(props) {
  return (
    <section className='NoteListMain'>
      <div className='NoteListMain__button-container'>
        <CircleButton
          tag={Link}
          to='/add-note'
          type='button'
          className='NoteListMain__add-note-button'>
          <FontAwesomeIcon icon='plus' />
          <br />
          Job
        </CircleButton>
      </div>
      <ul>
        {props.notes.map(note =>
          <li style={{display: "inline-block"}} key={note.id}>
            <Note
              id={note.id}
              name={note.name}
              modified={note.modified}
            />
          </li>
        )}
      </ul>
    </section>
  )
}

NoteListMain.defaultProps = {
  notes: [],
}
