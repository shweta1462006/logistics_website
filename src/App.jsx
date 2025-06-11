import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Jewellery from "./components/jewellery";
import Earring from "./components/Earring";
import Ring_page from "./components/Ring_Page";
import Sales from "./components/Sales";
// import Bangles from "./components/Bangles";

// import Sell_Page from "./components/Sell_page";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carasoule from "./components/Carasoule";
import Home from "./components/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Header first="Jewellery" second="Earring" third="Rings" fourth="Bangles" fifth="Sales" />
      <Routes>

        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/jewellery" element={<Jewellery />} />
        <Route path="/Earring" element={<Earring />} />
        <Route path="/Ring" element={<Ring_page />} />
        {/* <Route path="/Bangles" element={<Bangles />} /> */}
        <Route path="/Sales" element={<Sales />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
