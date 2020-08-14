import styled from "styled-components";

const styles = {
    Card : styled.div`
        width: 100%;
        height: 100%;
        padding: 13px;
        border-radius: 5px;
        color: #f5f5f5;
        border: 1px solid transparent;
        transition: all 0.5s;
        background: url("https://media.giphy.com/media/RHIKETUlUINYvV7CAO/giphy.gif");
        &:hover{
            border: 1px solid #61dafb;
            animation: graps 1s both;
        };
    `,
    CardTitle: styled.h3`
        color: #010259; 
    `,
    CardDescription: styled.p`
        
    `
}
export default styles;