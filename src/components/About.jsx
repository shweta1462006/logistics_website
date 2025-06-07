import React from 'react'
import"./css/About.css"
import"./javascript/About.js"
import Greenpage from  "./greenpage.jsx"

export default function DigitalSolution() {
  return (
    <>
      <div className="containerabout">
        <h1 style={{color:"white", marginLeft:"20px"}}>Digital Solution</h1>
        <br></br>
        <p id="p1" >Enhancing supply chain efficiency with tailored logistics solutions that minimize costs and ensure timely deliveries. With a nationwide network, advanced technology and a customer-centric approach, every service is customized to meet diverse industry requirements, ensuring seamless operations.</p>
      </div>
    <div className="wrapper">
      <ul className='carousel'>
        <li className='card'>
          <div className="img">
            <img src='https://media.istockphoto.com/id/926497354/photo/modern-factory-and-global-communication-concept.jpg?b=1&s=612x612&w=0&k=20&c=xVdc9P8GrG7tPZ2GoNquaskTPzhvjE_66hh-w69lm0w=' draggable ="false"></img></div>
            <h2 style={{color:""}}>Logistics</h2>
            <span>Coding platform</span>
                </li>

                        <li className='card'>
          <div className="img">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1aOWJtGVFSOmSBzE_d3rFVQ7gy0EsI6IPylxMTuXJM3FMUr-Bq6_kXl5Apw3a3Gck134&usqp=CAU' draggable ="false"></img></div>
            <h2 style={{color:""}}>Logistics</h2>
            <span>Coding platform</span>
                </li>


        <li className='card'>
          <div className="img">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHXUTogUWF9O9ACKNanjmjyhY8VrKEpucQMv3C6B_5bU7158rSpE1E4JYXpDd4RpnOsA&usqp=CAU' draggable ="false"></img></div>
            <h2>Logistics</h2>
            <span>Coding platform</span>
                </li>



        <li className='card'>
          <div className="img">
            <img src='https://cdn.prod.website-files.com/6232d983fb6808367ba19d67/6523d1655c1a2b5a1ef544d4_courier-with-parcel-trolley-against-logistic-truck-2021-08-26-16-25-49-utc.jpg' draggable ="false"></img></div>
            <h2 style={{color:"gren"}}>Logistics</h2>
            <span>Coding platform</span>
                </li>


        <li className='card'>
          <div className="img">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLuuQHxEqfr_Z_PHuKdkA1whLljXCQ-atI5kfLj8W51K1toHkKPVKuy_x4g8o3XC_iMqY&usqp=CAU' draggable ="false"></img></div>
            <h2 style={{color:""}}>Logistics</h2>
            <span>Coding platform</span>
                </li>


        <li className='card'>
          <div className="img">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-w9qhsytNehsVhnRHErQouMV8uey7LOz7Hv4Gd-yPI14ciS_rYLxvVJiDAzFgWsGcGeY&usqp=CAU' draggable ="false"></img></div>
            <h2 style={{color:""}}>Logistics</h2>
            <span>Coding platform</span>
                </li>


        <li className='card'>
          <div className="img">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-w9qhsytNehsVhnRHErQouMV8uey7LOz7Hv4Gd-yPI14ciS_rYLxvVJiDAzFgWsGcGeY&usqp=CAU' draggable ="false"></img></div>
            <h2 style={{color:"gren"}}>Logistics</h2>
            <span>Coding platform</span>
                </li>


        <li className='card'>
          <div className="img">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLuuQHxEqfr_Z_PHuKdkA1whLljXCQ-atI5kfLj8W51K1toHkKPVKuy_x4g8o3XC_iMqY&usqp=CAU' draggable ="false"></img></div>
            <h2 style={{color:"gren"}}>Logistics</h2>
            <span>Coding platform</span>
                </li>
      </ul>
      {/* <i id='right' className='fa-solid fas fa-angle-right'></i> */}
         <center> 
         
          <div className="bottom">
          <h1 style={{fontFamily:"cursive"}}>For Better Recomandation</h1>
        </div>
</center>
    </div>
     <Greenpage/>
    </>
  )
}
