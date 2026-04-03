import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AnimeList({ type, searchQuery }) {
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let url = "";

    //  SEARCH OVERRIDES EVERYTHING
    if (searchQuery && searchQuery.trim() !== "") {
      url = `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(searchQuery)}`;
    } else {
      //  DEFAULT / DROPDOWN 
      if (type === "anime-popular") {
        url = "https://api.jikan.moe/v4/top/anime";
      } else if (type === "manga-popular") {
        url = "https://api.jikan.moe/v4/top/manga";
      } else if (type === "anime-airing") {
        url = "https://api.jikan.moe/v4/seasons/now";
      } else {
        // 🔥 fallback so page NEVER loads empty
        url = "https://api.jikan.moe/v4/top/anime";
      }
    }

    if (!url) return;

    setLoading(true);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (!data.data) {
          setAnimeList([]);
          setLoading(false);
          return;
        }

        // remove duplicates
        const uniqueAnime = data.data.filter(
          (anime, index, self) =>
            index === self.findIndex((a) => a.mal_id === anime.mal_id)
        );

        // remove missing images
        const filteredAnime = uniqueAnime.filter(
          (anime) => anime.images?.jpg?.image_url
        );

        setAnimeList(filteredAnime.slice(0, 18));
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });

  }, [type, searchQuery]);

  return (
    <div className="anime-container">

      {loading ? (
        <p>Loading...</p>
      ) : animeList.length > 0 ? (
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
        <p>No results found...</p>
      )}

    </div>
  );
}

export default AnimeList;