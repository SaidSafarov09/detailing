import React from 'react';
import './App.js';
import AboutUs from './Components/AboutUs.js';
import Main from './Components/Main.js';
import OurServices from './Components/OurServices.js';
import PopularServices from './Components/PopularServices.js';
import DepartmentHeads from './Components/DepartmentHeads.js'
import FAQ from './Components/FAQ.js';
import Map from './Components/Map.js'
import FooterSite from './Components/FooterSite.js';


function App() {
    var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
  return (
        <div className="body">
            <Main></Main>
            <AboutUs></AboutUs>
            <OurServices></OurServices>
            <PopularServices></PopularServices>
            <DepartmentHeads></DepartmentHeads>
            <FAQ></FAQ>
            <Map></Map>
            <FooterSite></FooterSite>
      </div>      
  );
}

export default App;
