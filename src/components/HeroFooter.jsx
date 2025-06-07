import React from 'react'
import"./css/herofooter.css"
import full from "./../../public/Images/full.png";

export default function HeroFooter() {
  return (
    <>
            <div className="blue">
        <h3 >End-to-End Capabilities</h3>
        <h1>From Source to Store</h1>
      </div>
      <div className="whitebox">
        <div className="under">
        <img src={full}></img>
        </div>
      </div>
      <div className="bottomwhitebox">
        
      </div>

    </>
  )
}
