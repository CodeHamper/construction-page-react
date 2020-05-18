import styled from "styled-components";

import Background from './background.jpg';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${Background}) no-repeat center center fixed;
  background-size: cover;
  display: block;
  text-align: center;
  padding-top: 40vh;

  h1 {
    color: #B3B3B3;
    font-size: 4rem;
    font-weight: 100;
    margin: 0;
  }

  .count {
    color: #EEE;
    font-size: 5rem;
  }

`;