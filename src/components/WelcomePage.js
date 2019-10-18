import React from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import styled from 'styled-components'

import LocationList from './LocationsList'
import CharacterList from "./CharacterList"
import EpisodeList from "./EpisodeList"

export default function WelcomePage() {

  const StyledDiv = styled.div`
      display:flex;
      flex-direction: row;
  
  `

  const StyledUl = styled.ul`
      margin-bottom: 10%;
      z-index: 1;
  `
 
  return (
    <Router>
    <section className="welcome-page">
      <header>

        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
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

              <li>
              <Link to="/episode">Episode</Link>
              </li>
            </StyledUl>
          </nav>

          <Switch>
            <Route path="/location" component={LocationList} />
            <Route exact path="/" component={CharacterList} />
            <Route path="/episode" component={EpisodeList}/>
            <Redirect from="*" to="/"/>
          </Switch>
        </StyledDiv>
      </header>
    </section>
    </Router>
  );
}
