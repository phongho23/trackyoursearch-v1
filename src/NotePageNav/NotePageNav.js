
//it is the navigation panel on the note page when you click on the note
//and it shows the actual note
//shows when you click on the note

// import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import CircleButton from '../CircleButton/CircleButton'
// import './NotePageNav.css'

// export default function NotePageNav(props) {
//   return (
//     <div className='NotePageNav'>
//       {/* <CircleButton
//         tag='button'
//         role='link'
//         onClick={() => props.history.goBack()}
//         className='NotePageNav__back-button'
//       >
//         <FontAwesomeIcon icon='chevron-left' />
//         <br />
//         Back
//       </CircleButton> */}
//       <div className='NotePageNav__back-button-wrapper'>
//       <CircleButton
//           tag='button'
//           role='link'
//           type='button'
//           onClick={() => props.history.goBack()}
//           className='NotePageNav__back-button'>
//           <FontAwesomeIcon icon='chevron-left' />
//           <br />
//           Back
//         </CircleButton>
//       </div>


//       {props.folder && (
//         <h3 className='NotePageNav__folder-name'>
//           {props.folder.name}
//         </h3>
//       )}
//     </div>
//   )
// }

// NotePageNav.defaultProps = {
//   history: {
//     goBack: () => {}
//   }
// }

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CircleButton from '../CircleButton/CircleButton'
import './NotePageNav.css'

export default function NotePageNav(props) {
  return (
    <div className='NotePageNav'>

      <div className='NotePageNav__back-button-wrapper'>
      <CircleButton
          tag='button'
          role='link'
          type='button'
          onClick={() => props.history.goBack()}
          className='NotePageNav__back-button'>
          <FontAwesomeIcon icon='chevron-left' />
          <br />
          Back
        </CircleButton>
      </div>


      {props.folder && (
        <h3 className='NotePageNav__folder-name'>
          {props.folder.name}
        </h3>
      )}
    </div>
  )
}

NotePageNav.defaultProps = {
  history: {
    goBack: () => {}
  }
}
