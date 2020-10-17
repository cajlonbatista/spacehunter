import styled from 'styled-components';

export const CardNavigationTag = styled.a`
  display: grid;
  place-items: center;
  padding: 20px;
  color: #faad14;

`;

export const ItemImg = styled.img`
  width: 40px;
  object-fit: cover;
  animation: bright 5s infinite linear;
`;

export const CardButton = styled.button`
  border: 1px solid #202020;
  transition: all 0.3s;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  :hover,:focus{
      border: 1px solid #57DAD8;
  }
  background: url("https://media.giphy.com/media/RHIKETUlUINYvV7CAO/giphy.gif");

`;
