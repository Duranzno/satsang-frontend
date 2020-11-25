import React from "react"
import Drawer from "@material-ui/core/Drawer"
import { EventForm } from "../../Forms"
// import createEvent from "app/events/mutations/createEvent"
// import { useMutation, useRouter } from 'blitz';
// import { useCurrentUser } from "app/hooks/useCurrentUser";

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
  // const [createEventMutation] = useMutation(createEvent);
  // const router = useRouter();

  return (
    <div>
      <Drawer anchor="right" open={open} onClose={() => onClose()}>
        <EventForm
          onSubmit={async (_evt) => {
            try {
              console.log("creating new event")
              // TODO: properly type this mutation...
              //   const event = await createEventMutation({
              //     data: {
              //       name: evt.name,
              //       title: evt.title,
              //       description: evt.description,
              //       datetime: new Date(evt.datetime),
              //       duration: parseInt(evt.duration),
              //       online: evt.online,
              //       location: evt.location ? evt.location : "",
              //       category: evt.category ? evt.category : "",
              //     }
              //   })
              //   alert("Success!" + JSON.stringify(event))
              //   router.push("/events")
            } catch (error) {
              alert("Error creating event " + JSON.stringify(error, null, 2))
            }
          }}
        />
      </Drawer>
    </div>
  )
}
