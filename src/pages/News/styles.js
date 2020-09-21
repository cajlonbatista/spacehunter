import styled from 'styled-components';

export const NewsGrid = styled.div`
  display: grid;
  margin-top: 80px;
  grid-template-columns: repeat(auto-fit, min(100%, 318px));
  grid-gap: 20px;
  justify-content: space-around;
  padding: 15px;
  animation: bounce 2s linear;
  padding-bottom: 70px;
`;

export const Container = styled.div`
width: 100%;
background: #202020;
padding: 10px 20px;
position: fixed;
bottom: 0;
display: flex;
justify-content: center;
color: white;
`