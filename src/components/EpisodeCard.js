import React from "react";
import styled from "styled-components";

const StyledShow = styled.div`
    display:flex;
    background-color: rgba(255, 151, 19);
    border-radius: 22px;
    margin-left: 30%;
    margin-bottom: 2%;
    margin-right: 12%;
    z-index:: -1;
`

export default function EpisodeCard({name}) { 
  return(
    <StyledShow>
        <h2>{name}</h2>
 
        
    </StyledShow>
  );
}