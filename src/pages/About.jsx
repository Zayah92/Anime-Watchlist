import { useState } from "react";
import Navbar from "../components/Navbar";
import BackgroundSlider from "../components/BackgroundSlider";
import Footer from "../components/Footer";

function About() {
 

  return (
    <div>
       <div className="header">
        <BackgroundSlider />
        <Navbar />
      </div>
      <div className="content">
         <div className="inner-content ">
          <div className="about">
           <img src="/assets/dotts1.jpg" alt="" className="dotts--gray " />
          <img src="/assets/dotts1.jpg" alt="" className="dotts--gray2 " />
          <div className="in-front">
   <h3 className="about-para">Just a super cool webpage
    dedicated to all things anime! Here to help you find the next best title
     to watch or read, and to keep track of all the ones you have already seen. Happy watching!
    
</h3>
     <div className="img-about">
        <img src="/assets/manga.jpeg" alt="" />
     </div>
</div>
</div>
     </div>
      </div>

      <Footer /> 
    </div>
    
  );
}

export default About;