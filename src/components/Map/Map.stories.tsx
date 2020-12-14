import { action } from '@storybook/addon-actions'
import { Chance } from 'chance'
import { Map as MapBase } from './Map.component.component'
import { MapAddMarker } from './MapAddMarker.component'
import { MapWithMarkers } from './MapWithMarkers.component'
const story = {
  component: MapBase,
  title: 'Map',
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: { onSuccess: { action: 'clicked' } },
}
const c = Chance()
export const Map = () => <MapBase onClick={action('clicked')} />
export const withMarkers = () => (
  <MapWithMarkers
    events={[
      {
        id: 1,
        title: 'Meditation',
        datetime: `${new Date()}`,
        duration: 15,
        photoUrls: [],
        location: locationCreator(),
      },
      {
        id: 2,
        title: 'Meditat2ion',
        datetime: `${new Date()}`,
        duration: 15,
        photoUrls: [],
        location: locationCreator(),
      },
    ]}
    onMarkerClick={action('clicked')}
  />
)
export const addMarker = () => <MapAddMarker onUpdateMarker={action('clicked')} />
export default story
function locationCreator() {
  const me = { lat: 8.33129, lng: -62.65655 }
  const closer = (n: number) => ({ min: n - 0.01, max: n + 0.01 })
  const d = {
    coordinates: {
      lat: c.latitude(closer(me.lat)),
      lng: c.longitude(closer(me.lng)),
    },
  }
  return d
}
