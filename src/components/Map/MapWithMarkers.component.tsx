/// <reference types="googlemaps" />
import React, { useState } from 'react'
import { InfoBox, Marker } from '@react-google-maps/api'
import { Event } from '../../interfaces/generated-types'
import { Map } from './Map.component.component'
import SimpleModal from '../Event/EventModal'
import { ImageEventCard } from '../EventCard/ImageEventCard.component'

export const MapWithMarkers: React.FC<{ events: Event[]; onMarkerClick: (e: Event) => void }> = ({
  events,
}) => {
  const [infoBoxShown, setInfoBoxShown] = React.useState<number>()
  React.useEffect(() => {
    console.log(infoBoxShown)
  }, [infoBoxShown])

  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
    <Map>
      {console.log(open)}
      {events.map((e) => {
        const { title, id } = e
        const hasData = true
        // l?.coordinates && l?.coordinates && l?.coordinates?.lat && l?.coordinates?.lng

        const { lat, lng } = { lat: 8.33129, lng: -62.65655 } //l!.coordinates!
        const isHidden = !(infoBoxShown === id)

        const toggleShown = (_a: unknown) => {
          // setOpen(true)
          setInfoBoxShown(isHidden ? id : undefined)
        }
 

        return hasData ? (
          <div  key={title}>

            {/* <SimpleModal open={open} event={e} handleClose={handleClose} /> */}
            <InfoBox
              options={{ closeBoxURL: '', enableEventPropagation: true, isHidden }}
              position={{ lat, lng }}
            >

              <div style={{ backgroundColor: 'transparent', opacity: 0.75, padding: 12 }}>
                <div style={{ fontSize: 16, color: `#08233B` }}>
                  {/* {JSON.stringify({ isHidden, title })} */}
                  <ImageEventCard event={e} onClick={toggleShown} />

                </div>
              </div>
            
            </InfoBox>
            <Marker position={{ lat, lng }} onClick={toggleShown} />
          </div>
        ) : null
      })}
    </Map>
    </>
  )
}
