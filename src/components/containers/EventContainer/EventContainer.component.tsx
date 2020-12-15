import { Grid, makeStyles } from '@material-ui/core'
import React, {useState} from 'react'
import { Event } from '../../../interfaces/generated-types'
import { Button } from '@material-ui/core'
import { ImageEventCard } from '../../../components/EventCard/ImageEventCard.component'


interface Props {
  events: Event[]
}
export const EventContainer: React.FC<Props> = (props) => {
  const styles = useStyles()
  const { events } = props

  const [categoryId, setCategoryId] = useState(0)

  const renderCards = () => {
    let filteredEvents: Event[]

    // categoryId ? filteredEvents = events.filter(event => event.category === categoryId) : filteredEvents = events
    console.log(filteredEvents)
    return events?.map((event, id) => {
      return (
        <Grid item xs={3} justify="center" direction="row" alignItems="flex-start" key={id}>
          <ImageEventCard event={event} key={id} />
          {console.log(event)}
        </Grid>
      )
    })
  }

  const renderCategories = () => {
    return categories.map((category) => {
      return (
        <Button
          data-id={category.name}
          onClick={(e) => {
            setCategoryId(e.currentTarget.getAttribute('data-id'))
          }}
        >
          {category.name}
        </Button>
      )
    })
  }

  return (
      <div style={{ width: '1100px' }}>
        <Button onClick={() => setCategoryId(0)}>All</Button>
        {console.log(categoryId)}
        {renderCategories()}
        <br></br>
        <br></br>
        <Grid container item direction="row" alignItems="flex-start" xs={12} spacing={3}>
          {events ? renderCards() : 'Loading'}
        </Grid>
      </div>
  )
}

const useStyles = makeStyles(() => ({
  root: {
    padding: 4,
  },
}))

const categories: Array<object> = [
  { name: 'Mindfulness', id: 1 },
  { name: 'Spiritual', id: 2 },
  { name: 'Focused', id: 3 },
  { name: 'Movement', id: 4 },
  { name: 'Mantra', id: 5 },
  { name: 'Zen', id: 6 },
  { name: 'Kundalini', id: 7 },
]
