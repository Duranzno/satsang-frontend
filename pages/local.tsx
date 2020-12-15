import { NextPage } from 'next'
import { MapWithMarkers } from '../src/components/Map/MapWithMarkers.component'
import { useGetAllEvents } from '../src/interfaces/generated-types'

/*
 * This will be the page that shows events near the user.
 * DEVELOP:
 */

const Local: NextPage = () => {
  const { data: events } = useGetAllEvents({})
  return (
      <>
        <MapWithMarkers events={events ? events : []}/>
      </>
  )
}

export default Local
