import styled from 'styled-components';

export const Content = styled.div`
  margin-top: 20px;
  width: 100%;
  animation: bounce 1s linear;
`;

export const ContentTitle = styled.h1`
  font-family: "Exo", sans-serif;
  text-align: center;
`;

export const Apod = styled.div`
  margin: 30px auto;
  display: flex;
  width: 90%;
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
