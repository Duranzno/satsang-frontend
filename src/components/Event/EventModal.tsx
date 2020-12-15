import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import faker from 'faker'
import { Event } from '../../interfaces/generated-types'

// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }

function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      borderRadius: '40px',
      outline: 'none !important'
    },
    modalSize: {
      position: 'fixed',
      background: 'lightblue',
      width: '50%',
      height: '50%',

      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',

      transform: 'translate(-50%, -50%)',
    },
  })
)

export const SimpleModal: React.FC<{ event: Event; open: boolean; handleClose: Function }> = ({
  event,
  open,
  handleClose,
}) => {
  const classes = useStyles()
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle)

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <img src={faker.image.nature()} alt="calming nature" width="300" height="200" />
      <h2 id="simple-modal-title">{event.title}</h2>
      <p id="simple-modal-description">
        Description: {event.description}
        <br></br>
        Duration: {event.duration} mins
        <br></br>
        Location: {event.online ? 'Online' : event.location}
        <br></br>
         {event.category ? `Category: ${event.category}` : null}
      </p>
    </div>
  )

  return (
    <div>
      <Modal
        open={open}
        onClose={() => handleClose()}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  )
}
export default SimpleModal
