import React from 'react'
import Welcome from '../../components/Welcome/Welcome'
import Partner from '../../components/Partner/Partner'
import Booking from '../Booking/Booking'
import Dishes from '../Dishes/Dishes'
import Ambience from '../Ambience/Ambience'
import Delivery from '../Delivery/Delivery'

function Home() {
  return (
    <>
    <Welcome />
    <Partner />
    <Booking />
    <Dishes />
    <Ambience />
    <Delivery />
    </>
  )
}

export default Home