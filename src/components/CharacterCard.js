import React from "react";
import styled from "styled-components";

const StyledPerson = styled.div`
    display:flex;
    background-color: rgba(255, 151, 19);
    border-radius: 22px;
    margin-bottom: 2%;
    margin-right: 2%
    margin-top: 10%;
    padding: 0
`


export default function CharacterCard(props) {
  return(
        
    <StyledPerson>
        <h2>{props.character}</h2>
        <p>{props.species}</p>
    </StyledPerson>
    

)
}
