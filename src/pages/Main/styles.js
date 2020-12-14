import styled from 'styled-components';

export const MainContainer = styled.section`
  height: 100vh;
  main{
    padding-top: 90px;
    width: 100%;
    height: 100%;
    animation: bounce 1s linear;
    overflow: hidden;
    svg:last-child{
      position: absolute;
      top: center;
      right: 0;
    }
    svg:first-child{
      width: 100%;
      max-width: 400px;
      position: absolute;
      bottom: 0;
      left: 0;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start ;
    @media(max-width: 1024px){
      svg:last-child{
        width: 90%;
        top: -50px;
        right: center;
      }      
      svg:first-child{
        display: none;
      }
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
    p{
      font-family: Nunito, sans-serif;
      margin: 10px;
      text-align: center;
    }
    img{
      width: 50px;
      margin-right: 20px;
    }
  }
`;