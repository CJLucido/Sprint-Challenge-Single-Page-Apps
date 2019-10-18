import React, { useEffect, useState } from "react";
import axios from "axios"

import EpisodeCard from "./EpisodeCard"
import SearchForm from './SearchForm';

 function EpisodeList() {
  const [episodes, setEpisodes] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/episode/`)
    .then(res => {
      console.log("this is from episodeList", res);
      const shows = res.data.results.filter(show => show.name.toLowerCase().includes(query.toLowerCase()));
     setEpisodes(shows)
    })
  }, [query])


  const eventHandle = event => {
    setQuery(event.target.value);
  }
  

  return (
    <section className="character-list">
      <SearchForm eventHandle={eventHandle} query={query}/>
      <h2>{episodes.map( (episode, index ) => 
        (<EpisodeCard key={index} name={episode.name}  />)
        )}</h2>
    </section>
  );
}


export default EpisodeList;