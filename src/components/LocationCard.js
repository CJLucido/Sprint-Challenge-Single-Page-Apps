import React from "react";
import styled from "styled-components";

const StyledLocal = styled.div`
    display:flex;
    background-color: rgba(255, 151, 19);
    border-radius: 22px;
    margin-left: 30%;
    margin-bottom: 2%;
    margin-right: 12%;
    z-index:: -1;
`

export default function LocationCard({ name, type, dimension }) { //add residents some other time
  return(
    <StyledLocal>
        <h2>{name}</h2>
        <p>{type}</p>
        <p>{dimension}</p>
        
    </StyledLocal>
  );
}


//<p>{residents}</p>