/// <reference types="googlemaps" />
import React from 'react'
import { InfoBox, Marker } from '@react-google-maps/api'
import { Event } from '../../interfaces/generated-types'
import { Map } from './Map.component.component'

export const MapWithMarkers: React.FC<{ events: Event[]; onMarkerClick: (e: Event) => void }> = ({
  events,
}) => {
  const [infoBoxShown, setInfoBoxShown] = React.useState<number>()
  React.useEffect(() => {
    console.log(infoBoxShown)
  }, [infoBoxShown])
  return (
    <Map>
      {events.map((e) => {
        const { title, id } = e
        const hasData = false
        // l?.coordinates && l?.coordinates && l?.coordinates?.lat && l?.coordinates?.lng

        const { lat, lng } = { lat: 0, lng: 0 } //l!.coordinates!
        const isHidden = !(infoBoxShown === id)

        const toggleShown = (_a: unknown) => {
          setInfoBoxShown(isHidden ? id : undefined)
        }
        return hasData ? (
          <div key={title}>
            <InfoBox
              options={{ closeBoxURL: '', enableEventPropagation: true, isHidden }}
              position={{ lat, lng }}
            >
              <div style={{ backgroundColor: 'yellow', opacity: 0.75, padding: 12 }}>
                <div style={{ fontSize: 16, color: `#08233B` }}>
                  {JSON.stringify({ isHidden, title })}
                </div>
              </div>
              {/* <ImageEventCard event={e} onClick={toggleShown} /> */}
            </InfoBox>
            <Marker position={{ lat, lng }} onClick={toggleShown} />
          </div>
        ) : null
      })}
    </Map>
  )
}
