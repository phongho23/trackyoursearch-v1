//this is the nav of the folders / soon to be dates for activity for jobs

import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CircleButton from '../CircleButton/CircleButton'
import { countNotesForFolder } from '../notes-helpers'
import './NoteListNav.css'

export default function NoteListNav(props) {
  return (
    <div className='NoteListNav'>
      <div className='NoteListNav__button-wrapper'>
        <CircleButton
          tag={Link}
          to='/add-folder'
          type='button'
          className='NoteListNav__add-folder-button'>
          <FontAwesomeIcon icon='plus' />
          <br />
          Week
        </CircleButton>
      </div>
      <ul className='NoteListNav__list'>
        {props.folders.map(folder =>
          <li style={{display: "inline-block"}} key={folder.id}>
            <NavLink
              className='NoteListNav__folder-link'
              to={`/folder/${folder.id}`}>
              <span className='NoteListNav__num-notes'>
                {countNotesForFolder(props.notes, folder.id)}
              </span>
              {folder.name}
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  )
}

NoteListNav.defaultProps = {
  folders: []
}