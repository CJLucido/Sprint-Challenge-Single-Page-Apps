import React from "react";
import styled from "styled-components";

const StyledLocal = styled.div`
    display:flex;
    flex-direction: column;
    background-color: rgba(255, 151, 19);
    border-radius: 22px;
    width: 25%;
    margin-bottom: 2%;
    margin-right: 2%
`

export default function LocationCard({ name, type, dimension, residents }) {
  return(
    <StyledLocal>
        <h2>{name}</h2>
        <p>{type}</p>
        <p>{dimension}</p>
        <p>{residents}</p>
    </StyledLocal>
  );
}
