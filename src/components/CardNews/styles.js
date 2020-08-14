import styled from "styled-components";

const styles = {
    CardNew: styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        height: 100%;
        background: #212121;
        color: #61dafb;
        border: 1px solid #212121;
        border-radius: 5px;
        transition: border 0.4s;
        &:hover{
            border: 1px solid #61dafb;
        }
    `,
    ContainerImage: styled.div`
        width: 100%;
        height: 22rem;
        display: flex;
    `,
    CardPreview: styled.img`
        width: 100%;
        max-height: 500px;
        object-fit: cover;
        border-radius: 5px 5px 0 0;
    `,
    Span: styled.span`
        font-size: 1.3rem;
    `,
    CardContent: styled.div`
        padding: 10px; 
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    `,
    CardTitle: styled.h2`
        font-size: 1.6rem;
        font-weight: 700;
        color: #ff8000;
        font-family: Exo, sans-serif;
        margin-bottom: 10px;
    `,
    CardDescription: styled.p`
        font-size: 1.3rem;
        color: #f5f5f5
    `
}
export default styles;