import styled from "styled-components";

const styles = {
    Navigator: styled.div`
        display: grid;
        width: 100%;
        height: 90vh;
        grid-template-columns: repeat(auto-fit, 150px);
        grid-auto-rows: min-content;
        justify-content: center;
        gap: 40px max(20px, calc(25% - 150px));
        padding: 50px 20px 0;
        animation: bounce 2s linear;
    `
}

export default styles;