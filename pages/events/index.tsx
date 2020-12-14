import React from "react"
import { NextPage } from "next"
import CardsContainer from "../../src/components/Event/CardsContainer";



const EventsPage: NextPage = () => {


  return (
    <>
        {/* This button opens right sidebar */}
        <div className="top-grid">
          <div className="top-flex">
            <div className="width-div">
              <CardsContainer />
            </div>
          </div>
        </div>
    </>
  )
}

export default EventsPage

