import styled from "styled-components";

export const UniverseContainer = styled.div`
  padding-top: 120px;
  width: 100%;
  background-position: bottom right;
  background-size: 35%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  animation: bounce 2s linear;
  h1 {
    font-family: Exo, sans-serif;
    text-align: center;
    font-size: 25px;
    color: #ef9906;
    margin-bottom: 10px;
  }
  @media (max-width: 500px) {
    padding-top: 90px;
    background-image: none;
    h1 {
      position: initial;
      top: auto;
      left: auto;
      font-size: 19px;
    }
  }
`;
