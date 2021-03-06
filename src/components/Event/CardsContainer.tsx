//@ts-nocheck
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import DetailedEventCard from './DetailedEventCard'
import Grid from '@material-ui/core/Grid'
import { Button } from '@material-ui/core'
import {
  // useGetAllEvents,
  Event,
} from '../../interfaces/generated-types'

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
}))

interface Props {
  events?: Event[]
}
const CardsContainer: React.FC<Props> = ({ events }) => {
  const classes = useStyles()

  const [categoryId, setCategoryId] = useState(0)

  // const { data: events } = useGetAllEvents({})

  const renderCards = () => {
    let filteredEvents: Event[]

    // categoryId ? filteredEvents = events.filter(event => event.category === categoryId) : filteredEvents = events
    console.log(filteredEvents)
    return events?.map((event, id) => {
      return (
        <Grid item xs={3} justify="center" direction="row" alignItems="flex-start" key={id}>
          <DetailedEventCard event={event} id={id} />
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
    <main className={classes.content}>
      <div className={classes.toolbar} />
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
    </main>
  )
}

export default CardsContainer
CardsContainer.propTypes = {
  events: [],
}
const categories: Array<object> = [
  { name: 'Mindfulness', id: 1 },
  { name: 'Spiritual', id: 2 },
  { name: 'Focused', id: 3 },
  { name: 'Movement', id: 4 },
  { name: 'Mantra', id: 5 },
  { name: 'Zen', id: 6 },
  { name: 'Kundalini', id: 7 },
]

// const date = faker.date.future()
// const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

// const mockEvents = [
//   {
//   name: `${days[date.getDay()]}'s Meditation`,
//   title: `Satsang Meditation`,
//   description: `Session from the city of ${faker.address.city()}`,
//   datetime: date,
//   duration: Math.floor(Math.random() * (9 - 3) + 3),
//   online: Math.random() >= 0.5,
//   location: faker.address.city(),
//   category: 'Mantra'
//   },
//   {
//   name: `${days[date.getDay()+1]}'s Meditation`,
//   title: `Satsang Meditation`,
//   description: `Session from the city of ${faker.address.city()}`,
//   datetime: date,
//   duration: Math.floor(Math.random() * (9 - 3) + 3),
//   online: Math.random() >= 0.5,
//   location: faker.address.city(),
//   category: "Zen"
//   }
// ]
