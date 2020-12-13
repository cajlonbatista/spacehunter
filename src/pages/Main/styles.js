import styled from 'styled-components';

import cars from '../../assets/images/cars.svg';


export const MainContainer = styled.section`
  height: 100vh;
  main{
    padding-top: 90px;
    width: 100%;
    height: 100%;
    animation: bounce 1s linear;
    overflow: hidden;
    background-image: url(${cars});
    background-size: 40%;
    background-position: center right;
    background-repeat: no-repeat;
    display: flex;
    justify-content: flex-start;
    align-items: center ;
    @media(max-width: 500px){
      background-position: center center;
      background-size: 70%; 
      justify-content: flex-end;
      flex-direction: column;
      align-items: center;
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
      margin-right: 20px;
    }
  }
`;