import styled from 'styled-components';

export const PageHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 120px;
  gap: 20px;
  font-family: Exo, sans-serif;
  text-align: center;
  animation: bounce 1s linear;
  svg { 
    width: 70px; 
  }
  h2{
    font-size: 25px;
  }
  @media(max-width: 500px){
    padding-top: 90px;
    padding-bottom: 20px;
    flex-direction: column;
    svg{
      width: 55px;
    }
    h2{
      font-size: 19px;
    }
  }
`;

export const PlanetGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, min(100%, 600px));
  justify-content: center;
  grid-template-rows: auto;
`;

export const HeaderTitle = styled.h2`
  color: #faad14;
  font-size: 20px;
`;
export const DialogContent = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  padding: 10px;
  overflow: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  position: relative;
  @media(max-width: 700px){
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  >figure{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
      width: 100%;
      max-width: 600px;
      object-fit: cover;
      border-radius: 10px;
    }
    figcaption{
      font-family: Nunito, sans-serif;
      font-size: 14px;
      color: #FFFFE9;
      width: 100%;
      max-width: 600px;
      text-align: center;
    }  
  }
  >button:first-child{
    position: absolute;
    top: 20px;
    left: 50%;
    svg{
      width: 24px;
      height: 24px;
    }  
  }
  >section{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    >article{
      width: 100%;
      max-width: 400px;
      margin: 20px auto;
      display: flex;
      flex-direction: column;
      border: 2px solid #D07E03;
      border-radius: 5px;
      padding: 10px;
      font-family: Nunito, sans-serif;
      color: #FFFFE9;
      div{
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
      strong {
        color: #D07E03; 
      }
    }
    >a{
      background-color: #D07E03;
      display: block;
      margin: 0 auto;
      padding: 10px 20px;
      border-radius: 5px;
      font-family: Nunito, sans-serif;
      border: 2px solid transparent;
      font-size: 14px;
      width: 100%;
      max-width: 400px;
      color: #000;
      font-weight: 600;
      text-transform: uppercase;
      text-align: center;
      :hover, :focus{
        color: #000;
      }
      @media(max-width: 500px){
        padding: 5px 10px;
        font-size: 13px;
      } 
    }
  }
`;
