import React from 'react'
import CarouselBanner from '../../widgets/CarouselBanner/CarouselBanner'
import New from '../../widgets/New/New'
import Pizzazmenu from '../../pizzamenu/Pizzazmenu'
import Pizamenu from '../../pizamenu/Pizamenu'

const Home = () => {
  return (
    <>
      <CarouselBanner/>
      <New/>
      <Pizzazmenu/>
      <Pizamenu/>
    </>
  )
}

export default Home
