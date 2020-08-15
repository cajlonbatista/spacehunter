import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  height: 100%;
  padding: 13px;
  color: #f5f5f5;
  border: 1px solid transparent;
  border-radius: 5px;
  transition: all 0.5s;
  box-shadow: 0 0 3px #fff;
  background-color: #000;

  &:hover {
    border: 1px solid #61dafb;
    animation: graps 1s both;
  };
`;
export const CardTitle = styled.h3`
  color: #ff8000;
`;
