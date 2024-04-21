import axios from "axios";
import { useState, useEffect } from "react";

import Input from "./Input";
import Button from "./Button";

const GetAnime = ({ onAnimeReceived }) => {
   const [character, setCharacter] = useState("");

   const onChange = (e) => {
      setCharacter(e.target.value);
   };

   const fetchAnimes = async () => {
      try {
        const { data } = await axios.get(
          `https://animechan.xyz/api/random/character?name=${character}`
        )
        onAnimeReceived(data);
      } catch (error) {
        console.log("Erro", error);
      }
    };
  
    useEffect(() => {
      fetchAnimes();
    }, []);

   const handleAnimeGet = async () => {
      try {
         if (character.length === 0) {
            return <p>Não pode ser vazio</p>
         }

         const { data } = await axios.get(`https://animechan.xyz/api/random/character?name=${character}`);
         onAnimeReceived(data);
      } catch (error) {
         console.error("Erro ao buscar anime:", error);
      }
   };

   return (
      <div className="getanime-container">
         <Input 
         value={character}
         onChange={onChange}
         onEnterPress={handleAnimeGet}   
         />
         <Button onClick={handleAnimeGet}>
            Clique aqui
         </Button>
      </div>
   );
};

export default GetAnime;
