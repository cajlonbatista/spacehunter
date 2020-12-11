import styled from "styled-components";

import launcher from '../../assets/images/launcher.svg';

export const UniverseContainer = styled.div`
  padding-top: 100px;
  width: 100%;
  background-image: url(${launcher});
  background-position: bottom right;
  background-size: 35%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  animation: bounce 2s linear;

  h1 {
    font-family: Exo, sans-serif;
    text-align: center;
    color: #ef9906;
    margin-bottom: 10px;
  }
  @media (max-width: 500px) {
    padding-top: 90px;
    h1 {
      position: initial;
      top: auto;
      left: auto;
      font-size: 19px;
    }
  }
`;
