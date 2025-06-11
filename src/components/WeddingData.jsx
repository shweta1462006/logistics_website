import React from 'react'
import "./css/jewellery_Card.css"
// import Img1 from "../../public/Images/burl1.png";
// // import Img2 from "../../public/Images/burl1.png";


export default function WeddingData() {
    const WeddiingDetails =[
            {
              id: "1",
              CardName: "Silver Polished Short Necklace - Ruby",
              Price: "₹5,785",
              Description: "This statement necklace from Tarinika is a stunning piece of beauty that will enhance your look instantly. Studded with opulent kundan stones on a gold polish base, it goes perfectly well with any ethnic outfit and makes you look graceful and elegant with ease.",
              ImgLink: Img1
            },
            {
              id: "2",
              CardName: "Silver Polished Short Necklace - Ruby",
              Price: "₹5,785",
              Description: "This statement necklace from Tarinika is a stunning piece of beauty that will enhance your look instantly. Studded with opulent kundan stones on a gold polish base, it goes perfectly well with any ethnic outfit and makes you look graceful and elegant with ease.",
              ImgLink: mg2
            },
            {
              id: "2",
              CardName: "Silver Polished Short Necklace - Ruby",
              Price: "₹5,785",
              Description: "This statement necklace from Tarinika is a stunning piece of beauty that will enhance your look instantly. Studded with opulent kundan stones on a gold polish base, it goes perfectly well with any ethnic outfit and makes you look graceful and elegant with ease.",
              ImgLink: Img1
            },
            {
              id: "4",
              CardName: "Silver Polished Short Necklace - Ruby",
              Price: "₹5,785",
              Description: "This statement necklace from Tarinika is a stunning piece of beauty that will enhance your look instantly. Studded with opulent kundan stones on a gold polish base, it goes perfectly well with any ethnic outfit and makes you look graceful and elegant with ease.",
              ImgLink: Img1
            },
        
    ]
  return (
    <div>
         {WeddiingDetails.map((Wedding, index) => (
        <div key={index} class="jewellery_content1">
          <div class="jewellery_imgbox">
            <img src={Wedding.ImgLink} />
          </div>
          <div class="jewellery_description_box">
            <div class="jewellery_undertext">
              <h4 id="jewellery_text1">{Wedding.CardName}</h4>
              <h3 id="jewellery_num">{Wedding.Price}</h3>
              <p id="jewellery_Description">Description:</p>
              <p id="jewellery_para">{Wedding.Description}</p>
              <div class="jewellery_button09">
                {/* <input id="jewellery_buttonoption" type="button" onclick="window.location.href='jewll.html'" value="Choose Option"/>
                <input id="jewellery_buttonview" type="button" value="Quick view"/> */}
              </div>
            </div>
          </div>
        </div>

      )

      )}
    </div>
  )
}
