import styled from 'styled-components';

export const CardNew = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #212121;
  color: #61dafb;
  border: 1px solid #212121;
  border-radius: 5px;
  transition: border 0.4s;

  &:hover { border: 1px solid #61dafb; }
`;

export const CardPreview = styled.img`
  width: 100%;
  height: min(500px, 22rem);
  object-fit: cover;
  border-radius: 5px 5px 0 0;
`;

export const Span = styled.span`
  font-size: 1.3rem;
`;

export const CardContent = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const CardTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  color: #ff8000;
  font-family: Exo, sans-serif;
  margin-bottom: 10px;
`;

export const CardDescription = styled.p`
  font-size: 1.3rem;
  color: #f5f5f5;
`;

export const CardPreviewVideo = styled.iframe`
    height: min(500px, 22rem);
    border-radius: 5px;
    border: 0px;
`
export const NewMark = styled.img`
  animation: graps 3s infinite ;
`;