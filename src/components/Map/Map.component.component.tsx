/// <reference types="googlemaps" />
import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api'
import { usePosition } from 'use-position'
import { LatLng } from '../../interfaces'
import { googleMapsApiKey, parseMouseEventLatLng } from './map.utils'

const containerStyle = {
  width: '400px',
  height: '400px',
}

type Props = {
  onClick?: (coordinates: LatLng) => void
}

export const Map: React.FC<Props> = ({ children, onClick }) => {
  const { latitude: lat, longitude: lng } = usePosition(false)
  const [center, setCenter] = React.useState({ lat: 8.33129, lng: -62.65655 })

  React.useEffect(() => {
    if (lat && lng) setCenter({ lat, lng })
  }, [lng, lat, setCenter])

  if (!googleMapsApiKey)
    return (
      <div style={containerStyle}>
        <p>No api key </p>
      </div>
    )
  const mapClick = (e: google.maps.MouseEvent) => {
    const position = parseMouseEventLatLng(e)
    onClick?.(position)
  }
  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} onClick={mapClick}>
        {children}
      </GoogleMap>
    </LoadScript>
  )
}
