import styled from "styled-components";

const styles = {
  Back: styled.div`
    display: flex;
    padding: 10px;
    align-items: center;
    column-gap: 20px;
  `,
  LinkBack: styled.button`
    width: 30px;
    border: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
  `,
  BackTitle: styled.h2`
  font-family: Exo, sans-serif;
  margin: 0;
  ::first-letter { text-transform: uppercase; }
  `
}
export default styles;
/*
.page-back-link {
  
}

.page-back-title {
  
}

.page-back-title::first-letter { text-transform: uppercase; }
*/