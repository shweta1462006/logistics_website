import React from 'react'

export default function Card({img ="https://cdn.prod.website-files.com/6232d983fb6808367ba19d67/6523d1655c1a2b5a1ef544d4_courier-with-parcel-trolley-against-logistic-truck-2021-08-26-16-25-49-utc.jpg",tittle ="Logistics"}) {
  return (
    <div>
         <li className='card'>
          <div className="img">
            <img src={img} draggable ="false"></img></div>
            <h2 style={{color:"gren"}}>{tittle} </h2>
            <span>Coding platform</span>
                </li>

    </div>
  )
}
