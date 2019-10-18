import React, { useEffect, useState } from "react";
import axios from "axios"

import CharacterCard from "./CharacterCard";
import SearchForm from './SearchForm';

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/`)
    .then(res => {
      console.log("This is from character list", res);
      const persons = res.data.results.filter(person => person.name.toLowerCase().includes(query.toLowerCase()))

      setCharacters(persons)
    })
  }, [query])


const eventHandle = event => {
  setQuery(event.target.value);
}


  // TODO: Add useState to track data from useEffect

    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!


  return (
    <section className="character-list">
      <SearchForm eventHandle={eventHandle} query={query}/>
      <h2>{characters.map( (char, index ) => 
          (<CharacterCard key={index} character={char.name} species={char.species}/>)
      )}</h2>
    </section>
  );
}


//TODO: `array.map()` over your state here! in the H2 above