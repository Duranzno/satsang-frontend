import { storiesOf } from '@storybook/react'
import { MapMarker } from './MapMarker.component'

storiesOf('MapMarker', module).add('with text', () => {
  return (
    <MapMarker
      onClick={(c) => console.log(c)}
      location={{
        lat: -3.745,
        lng: -38.523,
      }}
    />
  )
})
