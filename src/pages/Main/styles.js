import styled from 'styled-components';

import hunter from '../../assets/images/hunter.svg';

export const Content = styled.div`
  padding-top: 90px;
  width: 100%;
  height: 100vh;
  animation: bounce 1s linear;
  overflow: hidden;
  background-image: url(${hunter});
  background-size: 40%;
  background-position: top left;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  h1{
    font-family: "Exo", sans-serif;
    text-align: center;
    color: #EF9906;
    margin-bottom: 10px;
    text-align: right;
  }

`;


export const Apod = styled.div`
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
  width: 65%;
  border-radius: 10px;

  @media (max-width: 526px) {
    width: 100%;
    margin-top: 20px;
  }
`;
export const ApodVideo = styled.iframe`
  width: 65%;
  height: 200px;
  @media (max-width: 526px) {
    width: 100%;
    margin-top: 20px;
  }
`
export const ApodInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WelcomeTitle = styled.h2`
  font-family: Roboto Mono, sans-serif;
  text-align: end;
  margin-right: 10px;
  line-height: 10px;
`;
