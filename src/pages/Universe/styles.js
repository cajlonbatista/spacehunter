import styled from "styled-components";

export const UniverseContainer = styled.div`
  h1 {
    font-family: "Exo", sans-serif;
    text-align: center;
    color: #ef9906;
    margin-bottom: 10px;
    position: fixed;
    top: 95px;
    font-size: 24px;
    left: 30px;
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
