import styled from 'styled-components';

export const PlanetTag = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
`;

export const PlanetContent = styled.div`
  padding: 0 0 40px;
  overflow: hidden auto;
`;

export const Description = styled.p`
  color: #d8a454;
  padding: 15px 15px 0;
  text-align: justify;
`;

export const Overview = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 60vh;
  margin: 0 auto;
  font-family: Exo, sans-serif;
  background-image: url('${({ src }) => src}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Title = styled.h2`
  color: #fff;
  font-size: 2.5rem;
`;
