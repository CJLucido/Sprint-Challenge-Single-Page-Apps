import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import styled from 'styled-components'

import LocationList from './LocationsList'
import CharacterList from "./CharacterList"

export default function WelcomePage() {

  const StyledDiv = styled.div`
      display:flex;
      flex-direction: row;
  
  `

  const StyledUl = styled.ul`
      display: flex;
      margin-left: 50%;
      
  
  `
 //////////////////////////////////////UNCOMMENT THE API WHEN READY///////////////
  return (
    <Router>
    <section className="welcome-page">
      <header>

        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          //src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />

        <StyledDiv className="forLinks">
            <nav>
            <StyledUl>
              <li>
                <Link to="/">Character</Link>
              </li>
              <li>
                <Link to="/location">Location</Link>
              </li>
            </StyledUl>
          </nav>

          <Switch>
            <Route path="/location" component={LocationList} />
            <Route path="/" component={CharacterList} />
          </Switch>
        </StyledDiv>
      </header>
    </section>
    </Router>
  );
}
