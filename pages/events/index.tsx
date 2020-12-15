import React from 'react'
import { NextPage } from 'next'
import { EventContainer } from '../../src/components/containers'
import { useGetAllEvents } from '../../src/interfaces/generated-types'


const EventsPage: NextPage = () => {

  const { data: events } = useGetAllEvents({})
  
  return (
    <>
      {/* This button opens right sidebar */}
      <>
            <EventContainer events={events} />
      </>
    </>
  )
}

export default EventsPage
