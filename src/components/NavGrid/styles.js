import styled from 'styled-components';


export const Navigator = styled.div`
  display: grid;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, min(100%, 600px));
  grid-template-rows: auto;
  justify-content: center;
  padding: 50px 20px 0;
  @media(max-width: 500px){
    margin-top: 20px!important;
    background-image: none;
  }
`;
