import styled from 'styled-components';

export const PageHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 20px;
  font-family: Exo, sans-serif;
  text-align: center;

  img { width: 70px; }
`;

export const HeaderTitle = styled.h2`
  color: #faad14;
  font-size: 20px;
`;

export const DrawerInfo = styled.div`
  margin: 20px auto;
  border: 1px solid #faad14;
  border-radius: 5px;
  padding: 10px;

  strong { color: #faad14; }
`;

export const DrawerButton = styled.button`
  background-color: #faad14;
  color: #181818;
  padding: 10px 20px;
  border-radius: 5px;
  transition: all 0.5s;

  &:hover {
    opacity: 0.9;
    color: white;
  }
`;
