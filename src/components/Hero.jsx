import React from 'react'
import"./css/hero.css";
import y1 from "../../public/y1.mp4";
import HeroFooter from './HeroFooter';

export default function Hero() {
  return (
    <>
       <div className="herocontainer">
    
    <video id='v1' src={y1}autoPlay muted loop></video>
<div className="onVideo_section">
  <p id='p2'>YOU SET THE DESTINATION</p>
  <p className='p1'>WE CREATE THE PATH</p>
  <p id='p3'>As India's largest end-to-end logistics partner, we simplify transportation, warehousing and supply chain management.</p>
</div>
      </div>
      <div className="us">
        <div className="box4554">
        <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" fill="currentColor" class="text-danger bi bi-box-seam mx-4" viewBox="0 0 16 16">
  <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2zm3.564 1.426L5.596 5 8 5.961 14.154 3.5zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z"/>
</svg>
<h2 >About Us</h2></div>
<div className="p90">
<p>We are the undisputed leader in temperature-controlled & dry warehousing, transportation, Fifth Party Logistics (5PL) and supply chain management services in India. With our extensive nationwide network of warehouses we ensure seamless access and uninterrupted supply.</p></div>
      </div>
       <HeroFooter/>
    </>
  )
}
