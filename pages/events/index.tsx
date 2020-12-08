import React, { useEffect, useState } from "react"
import { NextPage } from "next"
import CardsContainer from "../../src/components/Event/CardsContainer";
import faker from "faker";



const EventsPage: NextPage = () => {
  // const events = ["event1", "event2", "event3"]
  const [events, setEvents] = useState()

  useEffect(()=>{
    fetch('https://virtserver.swaggerhub.com/Duranzno/satsang/1.0.0/api/event')
      .then(response => {return response.json()})
      .then(events => {
        console.log(events)
        setEvents(events)
      })
      .catch(error => console.log(error.message))
  }, [])
  return (
    <>
        {/* This button opens right sidebar */}
        <div className="top-grid">
          <div className="top-flex">
            <div className="width-div">
              <CardsContainer events={events} />
            </div>
          </div>
        </div>
    </>
  )
}

export default EventsPage

const date = faker.date.future()
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

const mockEvents = [
  {
  name: `${days[date.getDay()]}'s Meditation`,
  title: `Satsang Meditation`,
  description: `Session from the city of ${faker.address.city()}`,
  datetime: date,
  duration: Math.floor(Math.random() * (9 - 3) + 3),
  online: Math.random() >= 0.5,
  location: faker.address.city(),
  category: 'Mantra'
  },
  {
  name: `${days[date.getDay()+1]}'s Meditation`,
  title: `Satsang Meditation`,
  description: `Session from the city of ${faker.address.city()}`,
  datetime: date,
  duration: Math.floor(Math.random() * (9 - 3) + 3),
  online: Math.random() >= 0.5,
  location: faker.address.city(),
  category: "Zen"
  }
]
