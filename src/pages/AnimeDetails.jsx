import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import BackgroundSlider from "../components/BackgroundSlider";
import Footer from "../components/Footer";



function AnimeDetails() {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);


  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/anime/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setAnime(data.data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!anime) return <p>Loading...</p>;

  return (

<div>
       <div className="header">
        <BackgroundSlider />
        <Navbar />
      </div>





    <div className="anime-details">

      <h1>{anime.title}</h1>
        <div className="anime-detail-box">
        <div className="anime-image">
      <img
        src={anime.images?.jpg?.large_image_url}
        alt={anime.title}
      />

        </div>
        <div className="detail-content">
      <p><strong>Score:</strong> {anime.score}</p>
      <p><strong>Episodes:</strong> {anime.episodes}</p>
      <p><strong>Status:</strong> {anime.status}</p>

      <p>{anime.synopsis}</p>
        </div>
    </div>

    </div>

    <Footer />
    </div>
  );
}

export default AnimeDetails;