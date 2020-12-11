import styled from 'styled-components';

import hunter from '../../assets/images/hunter.svg';
import cars from '../../assets/images/cars.svg';


export const MainContainer = styled.section`
  height: 100vh;
`;
export const Presentation = styled.main`
  padding-top: 90px;
  width: 100%;
  height: 100%;
  animation: bounce 1s linear;
  overflow: hidden;
  background-image: url(${hunter});
  background-size: 40%;
  background-position: top left;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center ;
  @media(max-width: 500px){
    background-image: url(${cars});
    background-position: center center;
    background-size: 70%; 
  }
  h1{
    font-family: "Exo", sans-serif;
    text-align: center;
    color: #EF9906;
    font-size: 30px;
    margin: 10px;
    text-align: right;
  }
  img{
    width: 50px;
  }
`;