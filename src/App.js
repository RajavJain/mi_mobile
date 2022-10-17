import React from 'react';
import './App.css';
import PreNavbar from './components/PreNavbar'
import { Navbar } from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Slider from "./components/Slider.js"
import data from "./data/data.json"
import Offers from "./components/Offers.js"
import Heading from "./components/Heading.js"
import StarProducts from "./components/StarProducts.js"
import HotAccesoriesMenu from "./components/HotAccesoriesMenu.js"
import HotAccessories from "./components/HotAccessories.js"

function App() {
  return (

    <Router>
      <PreNavbar />
      <Navbar />
      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text="STAR PRODUCTS" /> {/* isko hamne isliye banaya hai kyuki aage 2 sections aur banege to usme phir se use kr lenge aur text mai props bheje hai ye... don't be confused*/}
      <StarProducts starProduct={data.starProduct} />
      <Heading text="HOT ACCESORIES" />
      <HotAccesoriesMenu />

      <Routes>
        <Route exact path="/music" element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}/>}>    {/*isme hamne exact keyword diya hai, agar nhi dete then /music/song bhi hota tabhi ye data render hota  */}
          {/* <HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} /> */}
        </Route>

        <Route exact path="/smartDevice" element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />}>
          {/* <HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} /> */}
        </Route>

        <Route exact path="/home" element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}/>}>
          {/* <HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} /> */}
        </Route>

        <Route exact path="/lifestyle" element={<HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle}/>}>
          {/* <HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle} /> */}
        </Route>
        
        <Route exact path="/mobileAccessories" element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}/>}>
          {/* <HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} /> */}
        </Route>
      </Routes>

    </Router>


  );

}

export default App;
