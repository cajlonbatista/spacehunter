import styled from 'styled-components';

import launcher from '../../assets/images/launcher.svg';

export const Navigator = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  margin-top: 20px!important;
  padding: 50px 20px 0;
  background-image: url(${launcher});
  background-position: bottom right;
  background-size: 35%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  animation: bounce 2s linear;
  @media(max-width: 500px){
    margin-top: 20px!important;
  }
`;
