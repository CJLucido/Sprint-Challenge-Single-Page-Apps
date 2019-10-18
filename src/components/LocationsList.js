import React, { useEffect, useState } from "react";
import axios from "axios"

import LocationCard from "./LocationCard"

 function LocationsList() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/location/`)
    .then(res => {
      console.log("this is from locationList", res);
     setLocations(res.data.results)
    })
  }, [])


  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      <h2>{locations.map( (local, index ) => 
        (<LocationCard key={index} name={local.name} dimension={local.dimension} type={local.type} />)
        )}</h2>
    </section>
  );
}


export default LocationsList;



//https://rickandmortyapi.com/api/location

