import { useEffect, useState } from "react";

function BackgroundSlider() {
  const images = [
    "/assets/anime__background.jpeg",
    "/assets/background2.jpeg",
    "/assets/background3.jpeg"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="background-box"
      style={{
        backgroundImage: `url(${images[index]})`
      }}
    />
  );
}

export default BackgroundSlider;