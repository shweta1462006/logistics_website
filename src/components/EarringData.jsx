import React from 'react'
import "./css/jewellery_Card.css"
// import Img1 from "../../public/Images/eurl1.png";
// import Img2 from "../../public/Images/eurl9.png";
// import Img3 from "../../public/Images/eurl3.png";
// import Img4 from "../../public/Images/eurl4.png";
// import Img5 from "../../public/Images/eurl5.png";
// import Img6 from "../../public/Images/eurl10.png";
// import Img7 from "../../public/Images/eurl7.png";
// import Img8 from "../../public/Images/eurl8.png";
// import Img9 from "../../public/Images/eurl2.png";
// import Img10 from "../../public/Images/eurl11.png";
// import Img11 from "../../public/Images/eurl12.png";
// import Img12 from "../../public/Images/eurl13.png";
// import Img13 from "../../public/Images/eurl14.png";












export default function EarringData() {

  const EarringDetail = [
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
      ImgLink: Img2
    },
    {
      id: "3",
      CardName: "Silver Polished Short Necklace - Ruby",
      Price: "₹5,785",
      Description: "This statement necklace from Tarinika is a stunning piece of beauty that will enhance your look instantly. Studded with opulent kundan stones on a gold polish base, it goes perfectly well with any ethnic outfit and makes you look graceful and elegant with ease.",
      ImgLink: Img3
    },
    {
      id: "4",
      CardName: "Silver Polished Short Necklace - Ruby",
      Price: "₹5,785",
      Description: "This statement necklace from Tarinika is a stunning piece of beauty that will enhance your look instantly. Studded with opulent kundan stones on a gold polish base, it goes perfectly well with any ethnic outfit and makes you look graceful and elegant with ease.",
      ImgLink: Img4
    },
        {
      id: "5",
      CardName: "Silver Polished Short Necklace - Ruby",
      Price: "₹5,785",
      Description: "This statement necklace from Tarinika is a stunning piece of beauty that will enhance your look instantly. Studded with opulent kundan stones on a gold polish base, it goes perfectly well with any ethnic outfit and makes you look graceful and elegant with ease.",
      ImgLink: Img5
    },

    {
      id: "6",
      CardName: "Silver Polished Short Necklace - Ruby",
      Price: "₹5,785",
      Description: "This statement necklace from Tarinika is a stunning piece of beauty that will enhance your look instantly. Studded with opulent kundan stones on a gold polish base, it goes perfectly well with any ethnic outfit and makes you look graceful and elegant with ease.",
      ImgLink: Img6
    },

    {
      id: "7",
      CardName: "Silver Polished Short Necklace - Ruby",
      Price: "₹5,785",
      Description: "This statement necklace from Tarinika is a stunning piece of beauty that will enhance your look instantly. Studded with opulent kundan stones on a gold polish base, it goes perfectly well with any ethnic outfit and makes you look graceful and elegant with ease.",
      ImgLink: Img7
    },

    {
      id: "8",
      CardName: "Silver Polished Short Necklace - Ruby",
      Price: "₹5,785",
      Description: "This statement necklace from Tarinika is a stunning piece of beauty that will enhance your look instantly. Studded with opulent kundan stones on a gold polish base, it goes perfectly well with any ethnic outfit and makes you look graceful and elegant with ease.",
      ImgLink: Img8
    },
   {
      id: "9",
      CardName: "Silver Polished Short Necklace - Ruby",
      Price: "₹5,785",
      Description: "This statement necklace from Tarinika is a stunning piece of beauty that will enhance your look instantly. Studded with opulent kundan stones on a gold polish base, it goes perfectly well with any ethnic outfit and makes you look graceful and elegant with ease.",
      ImgLink: Img9
    },
   {
      id: "10",
      CardName: "Silver Polished Short Necklace - Ruby",
      Price: "₹5,785",
      Description: "This statement necklace from Tarinika is a stunning piece of beauty that will enhance your look instantly. Studded with opulent kundan stones on a gold polish base, it goes perfectly well with any ethnic outfit and makes you look graceful and elegant with ease.",
      ImgLink: Img10
    },
   {
      id: "11",
      CardName: "Silver Polished Short Necklace - Ruby",
      Price: "₹5,785",
      Description: "This statement necklace from Tarinika is a stunning piece of beauty that will enhance your look instantly. Studded with opulent kundan stones on a gold polish base, it goes perfectly well with any ethnic outfit and makes you look graceful and elegant with ease.",
      ImgLink: Img11
    },
   {
      id: "12",
      CardName: "Silver Polished Short Necklace - Ruby",
      Price: "₹5,785",
      Description: "This statement necklace from Tarinika is a stunning piece of beauty that will enhance your look instantly. Studded with opulent kundan stones on a gold polish base, it goes perfectly well with any ethnic outfit and makes you look graceful and elegant with ease.",
      ImgLink: Img12
    },
   {
      id: "13",
      CardName: "Silver Polished Short Necklace - Ruby",
      Price: "₹5,785",
      Description: "This statement necklace from Tarinika is a stunning piece of beauty that will enhance your look instantly. Studded with opulent kundan stones on a gold polish base, it goes perfectly well with any ethnic outfit and makes you look graceful and elegant with ease.",
      ImgLink: Img13
    },




  ]
  return (
    <div>
      {EarringDetail.map((Earring, index) => (
        <div key={index} class="jewellery_content1">
          <div class="jewellery_imgbox">
            <img src={Earring.ImgLink} />
          </div>
          <div class="jewellery_description_box">
            <div class="jewellery_undertext">
              <h4 id="jewellery_text1">{Earring.CardName}</h4>
              <h3 id="jewellery_num">{Earring.Price}</h3>
              <p id="jewellery_Description">Description:</p>
              <p id="jewellery_para">{Earring.Description}</p>
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
