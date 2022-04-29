import React from "react";
import loader from "../img/loader.gif"
import styled from "styled-components";

const Loader = () => {
    return(
        <PreLoader src={loader} alt="loader"/>
    )
};

const PreLoader = styled.img`
  height: 200px;
  width: 200px;
  
  margin: 0 auto;
`

export default Loader;