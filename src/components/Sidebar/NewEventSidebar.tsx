import React from 'react'
import NewEventForm from './NewEventForm'
import Drawer from '@material-ui/core/Drawer'
import { EventInput, useAddEvent } from '../../interfaces/generated-types'

/**
 * This is the Sidebar that will show:
 *  * The user's next schedule events
 *  * A button to create a new event and open the NewEventSidebar
 * DEVELOP:
 */

interface Props {
  open: boolean
  onClose: Function
}

const NewEventSidebar: React.FC<Props> = ({ open, onClose }) => {
  // const [createEventMutation] = useMutation(createEvent);
  // const router = useRouter();
  const { mutate: send } = useAddEvent({})
  const newEventValues = {
    name: 'Session Name',
    title: 'Session Title',
    description: 'Description',
    datetime: new Date(),
    duration: '30',
    online: true,
    location: 'LA',
    category: 'Mindfulness',
  }
  const onSubmit = (_evt: EventInput) => {
    try {
      console.log(_evt)
      send(_evt).then(console.log)
      // const real = "https://satsang-app.herokuapp.com/api/event"
      // const mock = "https://virtserver.swaggerhub.com/Duranzno/satsang/1.0.0"
      // const local = "http://localhost:3001/api/event"
      // console.log(_evt)
      // try {
      //   console.log("creating new event")
      //   fetch(local,{
      //     method: "POST",
      //     headers: {
      //       'Access-Control-Allow-Origin':'*',
      //       'Content-Type': 'application/json',
      //       Accept: 'application/json'
      //     },
      //     body: JSON.stringify({
      //       title: _evt.title,
      //       online: _evt.online,
      //       description: _evt.description,
      //       datetime: _evt.datetime,
      //       duration: parseInt(_evt.duration)
      //     })
      //   })
      // .then(response => response.json())
      // .then(event => {
      //   console.log(event)
      // })
      // .catch(error => console.log(error.message))
    } catch (error) {
      alert('Error creating event ' + JSON.stringify(error, null, 2))
    }
  }
  // const addEvent = (event) => useAddEvent(event)
  return (
    <div>
      <Drawer anchor="right" open={open} onClose={() => onClose()}>
        <NewEventForm initialValues={newEventValues} onSubmit={onSubmit} />
      </Drawer>
    </div>
  )
}

export default NewEventSidebar
