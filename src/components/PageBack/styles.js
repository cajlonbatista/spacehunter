import styled from 'styled-components';

export const Back = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  column-gap: 20px;
`;

export const LinkBack = styled.button`
  width: 30px;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
`;

export const BackTitle = styled.h2`
  font-family: Exo, sans-serif;
  margin: 0;

  &::first-letter { text-transform: uppercase; }
`;
