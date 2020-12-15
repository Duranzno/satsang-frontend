import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import { EventForm, LoginForm } from '../../Forms'
import { EventInput, useAddEvent, useLogout } from '../../../interfaces/generated-types'
import { Button } from '@material-ui/core';


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
  const session = !ISSERVER ? localStorage.getItem("session") : ''

  const handleLogout = async () => {
    try {

    send(session).then(console.log).then(localStorage.setItem("session", ""))
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
