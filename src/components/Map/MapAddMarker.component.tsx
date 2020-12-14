import React from 'react'
import { LatLng } from '../../interfaces'
import { Marker } from '@react-google-maps/api'
import { Map } from './Map.component.component'

export const MapAddMarker: React.FC<{ onUpdateMarker: (position: LatLng) => void }> = ({
  onUpdateMarker,
}) => {
  const [position, setPosition] = React.useState<LatLng>()

  const onMapClick = (e: LatLng): void => {
    setPosition(e)
    onUpdateMarker(e)
  }

  return (
    <Map onClick={onMapClick}>
      {position?.lat && position?.lng && <Marker position={position} />}
    </Map>
  )
}
