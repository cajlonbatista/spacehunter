import styled from 'styled-components';

export const NewsMore = styled.div`
  display: flex;
  margin-top: 70px;
  flex-direction: column;
  animation: bounce 2s linear;
  align-items: center;

`;

export const NewsBanner = styled.img`
  display: none;
  @media(max-width: 700px){
    width: 100%;
    display: block;
    object-fit: cover;
    max-height: 45vh;
    margin-bottom: 30px;
    opacity: 0.5;
  }
`;
export const NewsImage = styled.img`
  display: block;
  padding: 20px;
  border-radius: 20px;
  margin: 0 auto;
  width: 500px;
  @media(max-width: 700px){
    display: none;
  }
`;
export const NewsTitle = styled.h1`
  color: #ef9906;
  font-family: Inter, sans-serif;
  font-size: 21px;
  text-align: center;
  @media(min-width: 700px){
    padding-top: 30px;
    font-size: 25px;
  }
`;

export const NewsSubtitle = styled.h4`
  text-align: end;
`;

export const NewsContent = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    color: #B3B3B3;
    line-height: 27px;
    text-align: justify;
    font-family: Nunito, sans-serif;
  }
  a {
    color: #14e2fc;
    font-family: Nunito, sans-serif;
  }
  h3 {
    color: #ef9906;
    font-family: Inter, sans-serif;
  }
  img {
    width: 100%;
    max-width: 700px;
  }

  strong { 
    margin-bottom: 200px;
    color: #B5B5B5;
    font-family: Nunito, sans-serif;
  }

  hr {
    width: 100%;
    margin-bottom: 30px;
    color: #B5B5B5;
  }
`;
