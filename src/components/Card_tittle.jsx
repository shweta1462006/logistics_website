import React from 'react'
import"./css/Card_tittle.css"

export default function Mokash({
  card_tittle1="Mokash's Collection",
  card_tittle2="Explore Our newly Launched Collection..... "
}) {
  return (
    <>
        <div class="card_tittl2content1">
    <p id="card_tittlep1">{card_tittle1}</p>
    <h5 id="card_tittlep2" style={{color:"red"}}>{card_tittle2}</h5>
  </div>

    </>
  )
}
