import React from 'react'
import "./css/jewellery_Card.css"


export default function Jewellery_Card() {
  return (
    <>    
    <div class="jewellery_content1">
    <div class="jewellery_imgbox">
        <img src="public/Images/34.jpg"/>
            </div>
    <div class="jewellery_description_box">
        <div class="jewellery_undertext">
            <h4 id="jewellery_text1">Danica Statement Kundan Necklace Set</h4>
            <h3 id="jewellery_num">₹5,785</h3>
            <p id="jewellery_Description">Description:</p>
            <p id="jewellery_para">This statement necklace from Tarinika is a stunning piece of beauty that will enhance your look instantly. Studded with opulent kundan stones on a gold polish base, it goes perfectly well with any ethnic outfit and makes you look graceful and elegant with ease.</p>
            <div class="jewellery_button09"><input id="jewellery_buttonoption" type="button" onclick="window.location.href='jewll.html'" value="Choose Option"/>
            <input id="jewellery_buttonview" type="button" value="Quick view"/>
            </div>
            </div>
        </div>
    </div>

    </>
  )
}
