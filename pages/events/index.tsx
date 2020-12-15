import React from 'react'
import { NextPage } from 'next'
import { EventContainer } from '../../src/components/containers'
import { useGetAllEvents } from '../../src/interfaces/generated-types'


const EventsPage: NextPage = () => {

  const { data: events } = useGetAllEvents({})
  
  return (
    <>
      {/* This button opens right sidebar */}
      <div className="top-grid">
        <div className="top-flex">
          <div className="width-div">
            <EventContainer events={events} />
          </div>
        </div>
      </div>
    </>
  )
}

export default EventsPage
