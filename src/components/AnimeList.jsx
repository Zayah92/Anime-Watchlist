import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AnimeList({ category }) {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    let url = "";

    if (category === "anime") {
      url = "https://api.jikan.moe/v4/top/anime";
    } else if (category === "manga") {
      url = "https://api.jikan.moe/v4/top/manga";
    } else if (category === "airing") {
      url = "https://api.jikan.moe/v4/seasons/now";
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (!data.data) return;

        const uniqueAnime = data.data.filter(
          (anime, index, self) =>
            index === self.findIndex((a) => a.mal_id === anime.mal_id)
        );

        const filteredAnime = uniqueAnime.filter(
          (anime) => anime.images?.jpg?.image_url
        );

        const limitedAnime = filteredAnime.slice(0, 18);

        setAnimeList(limitedAnime);
      })
      .catch((err) => console.error(err));
  }, [category]);

  return (
    <div className="anime-container">
      {animeList.length > 0 ? (
        animeList.map((item) => (
          
          <Link to={`/anime/${item.mal_id}`} key={item.mal_id}>
            <div className="anime-card">
              
              <div
                className="anime-image-box"
                style={{
                  backgroundImage: `url(${
                    item.images?.webp?.large_image_url ||
                    item.images?.jpg?.image_url
                  })`,
                }}
              ></div>

              <p>{item.title}</p>
            </div>
          </Link>

        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default AnimeList;
