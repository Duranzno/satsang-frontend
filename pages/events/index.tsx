import React from "react"
import { NextPage } from "next"
import CardsContainer from "../../src/components/Event/CardsContainer";
import faker from "faker";



const EventsPage: NextPage = () => {
  const events = ["event1", "event2", "event3"]

  return (
    <>
        {/* This button opens right sidebar */}
        <CardsContainer events={events} />

    </>
  )
}

export default EventsPage

const date = faker.date.future()
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

const events = [
  {
  name: `${days[date.getDay()]}'s Meditation`,
  title: `Satsang Meditation`,
  description: `Session from the city of ${faker.address.city()}`,
  datetime: date,
  duration: Math.floor(Math.random() * (9 - 3) + 3),
  online: Math.random() >= 0.5,
  location: faker.address.city()
  },
  {
  name: `${days[date.getDay()]}'s Meditation`,
  title: `Satsang Meditation`,
  description: `Session from the city of ${faker.address.city()}`,
  datetime: date,
  duration: Math.floor(Math.random() * (9 - 3) + 3),
  online: Math.random() >= 0.5,
  location: faker.address.city()
  }
]
