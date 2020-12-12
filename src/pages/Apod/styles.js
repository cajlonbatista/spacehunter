import styled from "styled-components";

export const ApodContainer = styled.section`
  padding-top: 100px;
  @media(max-width: 500px){
    padding-top: 80px;
  }
  >article{
    display: grid;
    grid-template-columns: repeat(auto-fit, min(100%, 400px));
    justify-content: space-around;
    padding: 15px;
    grid-gap: 20px;
    animation: bounce 2s linear;
  }
  >h1{
    font-family: Exo, sans-serif!important;
    text-align: center;
    color: #ef9906;
    margin-bottom: 10px;
    font-size: 25px;
    @media (max-width: 500px) {
      font-size: 20px;
    }
  }
`;
