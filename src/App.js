import React from "react";


import Header from "./components/Header";
import SearchForm from "./components/SearchForm"
import WelcomePage from "./components/WelcomePage"


export default function App() {
  return (
    <main>
      <Header />
      <SearchForm/>
      <WelcomePage/>
    </main>
  );
}
