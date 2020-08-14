import styled from "styled-components";

const styles = {
  Content: styled.div`
    margin-top: 20px;
    width: 100%;
    animation: bounce 1s linear;
    
   `,
  ContentTitle: styled.h1`
   font-family: "Exo", sans-serif;
   text-align: center;
   `,
  Loading: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 90vh;
    align-items: center;
    background-size: 80%;
   `,
  Apod: styled.div`
    margin: 30px auto;
    display: flex;
    width: 90%;
    justify-content: center;
    max-width: 900px;
    text-align: center;
    @media (max-width: 526px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
  `,
  ApodImage: styled.img`
    width: 65%;
    border-radius: 10px;
    @media (max-width: 526px){
      width: 100%;
        margin-top: 20px;
    }
  `,
  ApodInfo: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `, 
  Welcome: styled.div`
  
  `,
  WelcomeTitle: styled.h2`
    font-family: Roboto Mono, sans-serif;
    text-align: end;
    margin-right: 10px;
    line-height: 10px;
  `,
  WelcomePainel: styled.div`
    
  `
}
export default styles;
/*


.welcome h2 {
  font-family: Roboto Mono, sans-serif;
  text-align: end;
  margin-right: 10px;
  line-height: 10px;
}
*/