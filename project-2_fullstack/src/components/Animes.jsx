import { useState } from "react";

import GetAnime from "./GetAnime";
import AnimesItem from "./AnimesItem";

const Animes = () => {
  const [animes, setAnimes] = useState({});

  const handleAnime = (data) => {
    setAnimes(data);
  };

  return (
    <div className="animes-container">
      <GetAnime onAnimeReceived={handleAnime} />
      <AnimesItem anime={animes} />
    </div>
  );
};

export default Animes;
