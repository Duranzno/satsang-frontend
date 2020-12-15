import React from 'react'
import { useLogout } from '../../../interfaces/generated-types'
import { Button } from '@material-ui/core';
import {session, endSession} from '../SessionHook'

/**
 * This is the Sidebar that will show:
 *  * The user's next schedule events
 *  * A button to create a new event and open the NewEventSidebar
 * DEVELOP:
 */

interface Props {
    
}

const ISSERVER = typeof window === "undefined";

export const Logout: React.FC<Props> = ({ open, onClose }) => {

  const { mutate: send } = useLogout({})

  const handleLogout = async () => {
    try {

    if(session.token)
      send(session).then(console.log).then(endSession())

    } catch (error) {
    alert('Error logging out ' + JSON.stringify(error, null, 2))
    }
  }
  
  return (
    <div>
        <Button onClick={handleLogout}>
            Logout
        </Button>
    </div>
  )
}
