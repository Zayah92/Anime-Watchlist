import { useState } from "react";
import Navbar from "../components/Navbar";
import BackgroundSlider from "../components/BackgroundSlider";
import AnimeList from "../components/AnimeList";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Home() {
  const [category, setCategory] = useState("anime");

  return (
    <div className="home">

      {/* HEADER */}
      <div className="header">
        <BackgroundSlider />
        <Navbar />
      </div>

      {/* CONTENT */}
      <div className="content">

        
        <div className="inner-content">
          <img src="/assets/dotts1.jpg" alt="" className="dotts--gray " />
          <img src="/assets/dotts1.jpg" alt="" className="dotts--gray2 " />
          <h2>==Start Here==</h2>
          <select onChange={(e) => setCategory(e.target.value)}>
            <option value="anime">Most Popular Anime</option>
            <option value="manga">Most Popular Manga</option>
            <option value="airing">Airing Now</option>
          </select>
        
          <div className="center">
        {/* GRID */}
        <AnimeList category={category} />
        </div>
      </div>
      </div>

  <Footer />


    </div>

    

  );
}

export default Home;