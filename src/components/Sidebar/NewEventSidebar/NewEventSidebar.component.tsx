import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import { EventForm } from '../../Forms'
import { EventInput, useAddEvent } from '../../../interfaces/generated-types'


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

export const NewEventSidebar: React.FC<Props> = ({ open, onClose }) => {

  const { mutate: send } = useAddEvent({})

  return (
    <div>
      <Drawer anchor="right" open={open} onClose={() => onClose()}>
        <EventForm
          onSubmit={async (_evt: EventInput) => {
            try {
              console.log('creating new event')
              send(_evt).then(console.log)

            } catch (error) {
              alert('Error creating event ' + JSON.stringify(error, null, 2))
            }
          }}
        />
      </Drawer>
    </div>
  )
}