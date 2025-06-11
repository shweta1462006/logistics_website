import React from 'react';
import "./css/jewellery_Card.css"
import Img1 from "../../public/Images/url1.png";
import Img2 from "../../public/Images/url2.png";
import Img3 from "../../public/Images/url3.png";
import Img4 from "../../public/Images/url11.png";
import Img5 from "../../public/Images/url5.png";
import Img6 from "../../public/Images/url6.png";
import Img7 from "../../public/Images/url7.png";
import Img8 from "../../public/Images/url8.png";
import Img9 from "../../public/Images/url10.png";
import Img10 from "../../public/Images/url9.png";
import Img11 from "../../public/Images/url4.png";









export default function JewelleryData() { 
  
  
  const CardData = [
    {
        id: "1",
        CardName : "Silver Polished Short Necklace - Ruby",
        Price : "₹5,785",
        Description : "This statement necklace from Tarinika is a stunning piece of beauty that will enhance your look instantly. Studded with opulent kundan stones on a gold polish base, it goes perfectly well with any ethnic outfit and makes you look graceful and elegant with ease.",
        ImgLink : Img1
    },
    {
        id: "2",
        CardName : "Antique Polished Short Necklace",
        Price : "₹5,785",
        Description : "This statement necklace from Tarinika is a stunning piece of beauty that will enhance your look instantly. Studded with opulent kundan stones on a gold polish base, it goes perfectly well with any ethnic outfit and makes you look graceful and elegant with ease.",
        ImgLink : Img2
    },
    {
        id: "3",
        CardName : "Silver Polished Short Necklace",
        Price : "₹5,785",
        Description : "This statement necklace from Tarinika is a stunning piece of beauty that will enhance your look instantly. Studded with opulent kundan stones on a gold polish base, it goes perfectly well with any ethnic outfit and makes you look graceful and elegant with ease.",
        ImgLink : Img3
    },
    {
        id: "4",
        CardName : "Danica Statement Kundan Necklace Set",
        Price : "₹5,785",
        Description : "This statement necklace from Tarinika is a stunning piece of beauty that will enhance your look instantly. Studded with opulent kundan stones on a gold polish base, it goes perfectly well with any ethnic outfit and makes you look graceful and elegant with ease.",
        ImgLink : Img4
    },
      {
        id: "5",
        CardName : "Danica Statement Kundan Necklace Set",
        Price : "₹5,785",
        Description : "This statement necklace from Tarinika is a stunning piece of beauty that will enhance your look instantly. Studded with opulent kundan stones on a gold polish base, it goes perfectly well with any ethnic outfit and makes you look graceful and elegant with ease.",
        ImgLink : Img5
    },  {
        id: "6",
        CardName : "Danica Statement Kundan Necklace Set",
        Price : "₹5,785",
        Description : "This statement necklace from Tarinika is a stunning piece of beauty that will enhance your look instantly. Studded with opulent kundan stones on a gold polish base, it goes perfectly well with any ethnic outfit and makes you look graceful and elegant with ease.",
        ImgLink : Img6
    },  {
        id: "7",
        CardName : "Danica Statement Kundan Necklace Set",
        Price : "₹5,785",
        Description : "This statement necklace from Tarinika is a stunning piece of beauty that will enhance your look instantly. Studded with opulent kundan stones on a gold polish base, it goes perfectly well with any ethnic outfit and makes you look graceful and elegant with ease.",
        ImgLink : Img7
    },  {
        id: "8",
        CardName : "Danica Statement Kundan Necklace Set",
        Price : "₹5,785",
        Description : "This statement necklace from Tarinika is a stunning piece of beauty that will enhance your look instantly. Studded with opulent kundan stones on a gold polish base, it goes perfectly well with any ethnic outfit and makes you look graceful and elegant with ease.",
        ImgLink : Img8
    },  {
        id: "9",
        CardName : "Danica Statement Kundan Necklace Set",
        Price : "₹5,785",
        Description : "This statement necklace from Tarinika is a stunning piece of beauty that will enhance your look instantly. Studded with opulent kundan stones on a gold polish base, it goes perfectly well with any ethnic outfit and makes you look graceful and elegant with ease.",
        ImgLink : Img9
    },  {
        id: "10",
        CardName : "Danica Statement Kundan Necklace Set",
        Price : "₹5,785",
        Description : "This statement necklace from Tarinika is a stunning piece of beauty that will enhance your look instantly. Studded with opulent kundan stones on a gold polish base, it goes perfectly well with any ethnic outfit and makes you look graceful and elegant with ease.",
        ImgLink : Img10
    },  {
        id: "11",
        CardName : "Antique Polished Combo Set",
        Price : "₹5,785",
        Description : "This statement necklace from Tarinika is a stunning piece of beauty that will enhance your look instantly. Studded with opulent kundan stones on a gold polish base, it goes perfectly well with any ethnic outfit and makes you look graceful and elegant with ease.",
        ImgLink : Img11
    },
   
]


  return (
    <div>
     {CardData.map((sample,index)=>(
      <div key={index} class="jewellery_content1">
    <div  class="jewellery_imgbox">
        <img src={sample.ImgLink}/>
            </div>
    <div class="jewellery_description_box">
        <div class="jewellery_undertext">
            <h4 id="jewellery_text1">{sample.CardName}</h4>
            <h3 id="jewellery_num">{sample.Price}</h3>
            <p id="jewellery_Description">Description:</p>
            <p id="jewellery_para">{sample.Description}</p>
            <div class="jewellery_button09">
              <input id="jewellery_buttonoption" type="button" onclick="window.location.href='jewll.html'" value="Choose Option"/>
            <input id="jewellery_buttonview" type="button" value="Quick view"/>
            </div>
            </div>
        </div>
    </div>

     )

     )}
    </div>
  )
}
