import styled from 'styled-components';

export const NewsMore = styled.div`
  display: flex;
  flex-direction: column;
  animation: bounce 2s linear;
  align-items: center;
`;

export const NewsBanner = styled.img`
  width: 100%;
  object-fit: cover;
  max-height: 100vh;
  margin-bottom: 30px;
`;

export const NewsTitle = styled.h1`
  color: #00d9ff;
  font-family: Rubik, sans-serif;
  text-align: center;
`;

export const NewsSubtitle = styled.h4`
  text-align: end;
`;

export const NewsContent = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: #f5f5f5;
    line-height: 27px;
    text-align: justify;
  }

  h3 { color: #00d9ff; }

  img {
    width: 100%;
    max-width: 700px;
  }

  strong { margin-bottom: 200px; }

  hr {
    width: 100%;
    margin-bottom: 30px;
    color: #00d9ff;
  }
`;
