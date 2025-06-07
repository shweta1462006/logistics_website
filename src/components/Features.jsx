import React from "react";
import"./css/Features.css"

export default function Features() {
  return (
    <div className="container px-4 py-5" id="featured-3">
      
      <h2 className="pb-2 border-bottom">Industrial features provided by Our Company</h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        
        <div className="feature col">
          
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            
          </div>
          <h3 className="fs-2 text-body-emphasis">Free Services</h3>
          <img src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG9naXN0aWNzfGVufDB8fDB8fHww" style={{height:"20%"}}></img><p>
            Paragraph of text beneath the heading to explain the heading. We'll
            add onto it with another sentence and probably just keep going until
            we run out of words.
          </p>
          <a href="#" className="icon-link">
            More 
            <svg className="bi" aria-hidden="true">
              <use xlinkHref="#chevron-right"></use>
            </svg>
          </a>
        </div>
                  <div className="feature col">
          
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            
          </div>
          <h3 className="fs-2 text-body-emphasis">Free Shiping</h3>
          <img src="https://media.istockphoto.com/id/1340887518/photo/outside-of-logistics-retail-warehouse-manager-using-tablet-computer-talking-to-worker-loading.jpg?s=612x612&w=0&k=20&c=FaATzPkUqfctu7lACB673mZ51WuC2oALFCM8FYukUGA=" style={{height:"20%"}}></img><p>
            Paragraph of text beneath the heading to explain the heading. We'll
            add onto it with another sentence and probably just keep going until
            we run out of words.
          </p>
          <a href="#" className="icon-link">
                 More
            <svg className="bi" aria-hidden="true">
              <use xlinkHref="#chevron-right"></use>
            </svg>
          </a>
        </div>
                          <div className="feature col">
          
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            
          </div>
          <h3 className="fs-2 text-body-emphasis">Globally Services</h3>
          <img src="https://media.istockphoto.com/id/1334575791/photo/smart-logistics-and-transportation-handshake-for-successful-of-investment-deal-teamwork-and.jpg?s=612x612&w=0&k=20&c=wre_Lsxkm2lSzUF4PqxjC-OHDbI9ssuDWxqvSeO9I3M=" style={{height:"20%"}}></img><p>
            Paragraph of text beneath the heading to explain the heading. We'll
            add onto it with another sentence and probably just keep going until
            we run out of words.
          </p>
          <a href="#" className="icon-link">
                 More
            <svg className="bi" aria-hidden="true">
              <use xlinkHref="#chevron-right"></use>
            </svg>
          </a>
        </div>


            
            <svg className="bi" width="1em" height="1em" aria-hidden="true">
              <use xlinkHref="#toggles2"></use>
            </svg>
        
        </div>
      </div>
  ) ;
}
