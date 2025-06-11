 import React from 'react'
 import Card_tittle from "./Card_tittle";
 import"./css/Sales.css"
import Sales_Cardpage from './Sales_Cardpage';

 
 export default function Sales() {
   return (
     <>
     <div className="sales_Page">
     <div class="Sales_page"></div>
     <Card_tittle card_tittle1='GET 20% off' card_tittle2='Trusted by +2000 families' />
     <Sales_Cardpage/>
          <Sales_Cardpage/>

     <Sales_Cardpage/>

     <Sales_Cardpage/>

     <Sales_Cardpage/>

     <Sales_Cardpage/>

     </div>
     </>
   )
 }
 