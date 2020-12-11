import styled from "styled-components";

export const ApodGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, min(100%, 400px));
    justify-content: space-around;
    padding: 15px;
    grid-gap: 20px;
    animation: bounce 2s linear;
`;
export const HeaderApod = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;
    h1 {
      font-family: Exo, sans-serif!important;
      text-align: center;
      color: #ef9906;
      margin-bottom: 10px;
      font-size: 24px;
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
    img {
        width: 30px;
    }
    @media(max-width: 500px){
        flex-direction: column;
    }
    div {
      display: flex;
      align-items: center;
      margin-left: 25px;
    }
`;
export const ApodConteiner = styled.div`
  margin: 30px auto;
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: center;
  max-width: 900px;
  text-align: center;

  @media (max-width: 526px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ApodImage = styled.img`
width: 600px;
height: 120px;
object-fit: cover;
object-position: center;

  @media (max-width: 526px) {
    width: 100%;
    margin-top: 20px;
  }
`;
export const ApodVideo = styled.iframe`
width: 600px;
height: 120px;
object-fit: cover;
object-position: center;

  @media (max-width: 526px) {
    width: 100%;
    margin-top: 20px;
  }
`