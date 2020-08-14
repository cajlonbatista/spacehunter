import styled from "styled-components";

const styles = {
    NewsGrid : styled.div`
        display: grid; 
        padding: 15px;
        grid-template-columns: repeat(auto-fit, min(100%, 318px));
        grid-gap: 20px;
        animation: bounce 2s linear;
        justify-content: space-around;
    `,
    Loading: styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 90vh;
        align-items: center;
        background-size: 80%;
   `,
}
export default styles;