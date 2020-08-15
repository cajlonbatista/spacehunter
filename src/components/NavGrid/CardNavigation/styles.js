import styled from 'styled-components';

export const CardNavigationTag = styled.a`
  background: url("https://media.giphy.com/media/RHIKETUlUINYvV7CAO/giphy.gif");
  display: grid;
  place-items: center;
  padding: 20px;
  color: #faad14;
  border: 1px solid #202020;
  transition: all 0.5s;
  border-radius: 5px;
  cursor: pointer;

  &:hover,
  &:focus {
    transform: scale(1.1);
    background-color: #191919;
    border: 1px solid #61dafb;
  }
`;

export const ItemImg = styled.img`
  width: 40px;
  object-fit: cover;
  animation: bright 5s infinite linear;
`;
