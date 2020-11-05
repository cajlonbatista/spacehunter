import styled from 'styled-components';

export const CardNavigationTag = styled.a`
  display: flex;
  justify-content: space-between;
  background: #0F0A03;
  margin: 10px auto;
  align-items: center;
  width: 100%;
  max-width: 500px;
  padding: 20px 30px;
  border-radius: 5px;
  border: 1px solid transparent;
  transition: all 0.4s;
  span{
    font-family: Open Sans, sans-serif;
    color: white;
  }
  :hover, :focus{
    border: 1px solid #ff9900;
  }
`;

export const ItemImg = styled.img`
  width: 40px;
  object-fit: cover;
  animation: bright 5s infinite linear;
  margin-left: 10px;
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
  background: #0f0a03;

`;
