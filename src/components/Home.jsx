import React from 'react'
import Carasoule from './Carasoule'
import Card_tittle from"./Card_tittle"
import"./css/home.css"
import Grid_card from './Grid_card'
import Mokash_World from './Mokash_World'
import Backvidio from './Backvidio'
import Background_ring from'./Background_ring'
// import Footer from './Footer'

export default function Home() {
  return (
    <div>
        <div className="home">
      <Carasoule/>
      <Card_tittle />
      <Grid_card/>
      <Card_tittle  card_tittle1='Mokashs World' card_tittle2='A campanion of Every ocasion' />
      <Mokash_World />
      <Background_ring/>
      <Backvidio/>
      {/* <Footer/> */}
      </div>
    </div>
  )
}
