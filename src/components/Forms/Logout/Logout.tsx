import React from 'react'
import { useLogout } from '../../../interfaces/generated-types'
import { Button } from '@material-ui/core';
import {session, endSession} from '../SessionHook'
import { useRouter } from 'next/router';

/**
 * This is the Sidebar that will show:
 *  * The user's next schedule events
 *  * A button to create a new event and open the NewEventSidebar
 * DEVELOP:
 */

interface Props {
    
}

export const Logout: React.FC<Props> = () => {

  const { mutate: send } = useLogout({})

  const router = useRouter()

  const handleLogout = async () => {
    try {
      if(session !== ''){
        send(session).then(console.log).then(endSession()).then(router.push('/login'))
      }
    } catch (error) {
      console.log(session)
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
