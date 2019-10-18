import React, { useEffect, useState } from "react";
import axios from "axios"

import LocationCard from "./LocationCard"
import SearchForm from './SearchForm';

 function LocationsList() {
  const [locations, setLocations] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/location/`)
    .then(res => {
      console.log("this is from locationList", res);
      const places = res.data.results.filter(place => place.name.toLowerCase().includes(query.toLowerCase()))
     setLocations(places)
    })
  }, [query])

  const eventHandle = event => {
    setQuery(event.target.value);
  }


  return (
    <section className="character-list">
      <SearchForm eventHandle={eventHandle} query={query}/>
      <h2>{locations.map( (local, index ) => 
        (<LocationCard key={index} name={local.name} dimension={local.dimension} type={local.type} />)
        )}</h2>
    </section>
  );
}


export default LocationsList;



//https://rickandmortyapi.com/api/location

