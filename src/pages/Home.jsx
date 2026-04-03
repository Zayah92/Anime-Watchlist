import { useState } from "react";
import Navbar from "../components/Navbar";
import BackgroundSlider from "../components/BackgroundSlider";
import AnimeList from "../components/AnimeList";
import Footer from "../components/Footer";

function Home() {
  const [type, setType] = useState("anime-popular");

  // separate input vs actual search
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="home">

      {/* HEADER */}
      <div className="header">
        <BackgroundSlider />
        <Navbar />
      </div>

      {/* CONTENT */}
      <div className="content">

        {/* CONTROLS */}
        <div className="controls">

          {/* DROPDOWN */}
          <select onChange={(e) => setType(e.target.value)}>
            <option value="anime-popular">Most Popular Anime</option>
            <option value="manga-popular">Most Popular Manga</option>
            <option value="anime-airing">Airing Now</option>
          </select>

          {/* SEARCH */}
          <input
            type="text"
            placeholder="Search anime..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />

          <button onClick={() => setSearchQuery(searchInput)}>
            Search
          </button>

        </div>

        {/* GRID */}
        <AnimeList type={type} searchQuery={searchQuery} />

      </div>

      <Footer />
    </div>
  );
}

export default Home;