import React, { useEffect, useState } from "react";
import axios from "axios"

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/`)
    .then(res => {
      console.log(res);
      setCharacters(res.data.results)
    })
  }, [])


  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      <h2></h2>
    </section>
  );
}


//TODO: `array.map()` over your state here! in the H2 above