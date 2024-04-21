import React from "react";

const AnimesItem = ({anime}) => {
   return (
      <div className="animes-item">
         <p>Anime: {anime.anime}</p>
         <p>Character: {anime.character}</p>
         <p>Quote: {anime.quote}</p>
      </div>
   );
};

export default AnimesItem;