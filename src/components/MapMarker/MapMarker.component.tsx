/// <reference types="googlemaps" />
import React from 'react'
// import {
//   withGoogleMap,
//   withScriptjs,
//   GoogleMap,
//   Marker,
// } from 'react-google-maps';
import { LatLng } from '../../interfaces'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
const containerStyle = {
  width: '400px',
  height: '400px',
}

const center = {
  lat: -3.745,
  lng: -38.523,
}
type Props = {
  onClick: (coordinates: LatLng) => void
  location: LatLng
}

// const MapComponent = withScriptjs(
//   withGoogleMap(({ onClick, location: l }: Props) => {
//     // this is used as any as nor the library nor the underlying google maps gives out the correct data
//     // TODO: implement correct typing or use another library
//     const onMapClick = (e: {
//       latLng: { lat: () => number; lng: () => number };
//     }): void => {
//       const newLocation: LatLng = {
//         latitude: e.latLng.lat(),
//         longitude: e.latLng.lng(),
//       };
//       onClick(newLocation);
//     };
//     // React.useEffect(() => {
//     //   // setMarker({e})
//     // }, [location]);
//     return (
//       <>
//         <GoogleMap
//           defaultZoom={8}
//           defaultCenter={{ lat: -33.4489, lng: -70.6693 }}
//           onClick={onMapClick}
//         >
//           {l && (
//             <Marker
//               position={{ lat: l.latitude, lng: l.longitude }}
//             />
//           )}
//         </GoogleMap>
//       </>
//     );
//   }),
// );
// export const MapMarker_: React.FC<Props> = (p) => (
//   <MapComponent
//     {...p}
//     googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}`}
//     loadingElement={<div style={{ height: `100%` }} />}
//     containerElement={<div style={{ height: `400px` }} />}
//     mapElement={<div style={{ height: `100%` }} />}
//   />
// );
const onMapClick = (e: { latLng: { lat: () => number; lng: () => number } }): LatLng => {
  const newLocation: LatLng = {
    lat: e.latLng.lat(),
    lng: e.latLng.lng(),
  }
  return newLocation
}

const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY
export const MapMarker: React.FC<Props> = () => {
  const [newMarker, setNewMarker] = React.useState(center)
  if (!googleMapsApiKey)
    return (
      <div style={containerStyle}>
        <p>No api key </p>
      </div>
    )
  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onClick={(e: google.maps.MouseEvent) => {
          setNewMarker(onMapClick(e))
        }}
      >
        <Marker position={newMarker} />
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  )
}
