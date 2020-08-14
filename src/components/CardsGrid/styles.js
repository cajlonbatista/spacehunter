import styled from "styled-components";

const styles = {
    GridWrapper : styled.div`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(auto, 400px));
        grid-auto-rows: min-content;
        justify-content: space-around;
        padding: 10px;
        gap: 10px;
    `
}
export default styles;