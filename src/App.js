import React from 'react';
import './App.css';
import PreNavbar from './components/PreNavbar'
import {Navbar} from './components/Navbar'
import {BrowserRouter as Router} from "react-router-dom"
import Slider from "./components/Slider.js"
import data from "./data/data.json"
import Offers from "./components/Offers.js"
import Heading from "./components/Heading.js"
import StarProducts from "./components/StarProducts.js"
import HotAccesoriesMenu from "./components/HotAccesoriesMenu.js"

function App() {
  return (

    <Router>
          <PreNavbar/>
          <Navbar/>
          <Slider start={data.banner.start} />
          <Offers offer={data.offer} />
          <Heading text= "STAR PRODUCTS"/> {/* isko hamne isliye banaya hai kyuki aage 2 sections aur banege to usme phir se use kr lenge aur text mai props bheje hai ye... don't be confused*/}
          <StarProducts starProduct={data.starProduct}/>
          <Heading text= "HOT ACCESORIES"/>
          <HotAccesoriesMenu/>
    </Router>

  );

}

export default App;
