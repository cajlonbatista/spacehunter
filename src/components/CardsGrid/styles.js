import styled from 'styled-components';

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(auto, 400px));
  grid-auto-rows: min-content;
  justify-content: space-around;
  padding: 10px;
  gap: 20px;
`;
