import { LatLng } from '../../interfaces'

export const parseMouseEventLatLng = (e: { latLng: { lat: () => number; lng: () => number } }): LatLng => {
  const newLocation: LatLng = {
    lat: e.latLng.lat(),
    lng: e.latLng.lng(),
  }
  return newLocation
}

export const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY