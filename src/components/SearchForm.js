import React, { useState } from "react";

export default function SearchForm({query, eventHandle}) {
 
  return (
    <section className="search-form">
     <form>
        <label name="search">Search: </label>
        <input name="search" type="text" placeholder="Search by Character or Location!" value={query} onChange={eventHandle}/>
     </form>
    </section>
  );
}
