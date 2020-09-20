import styled from "styled-components";

export const ApodImage = styled.div`
    margin-top: 75px;
    img{
        width: 100%;
        max-width: 700px;
        margin: 20px auto;
        border-radius: 10px;
    }
    animation: bounce 1s linear;
    p{
        font-family: Kufam, sans-serif;
        color: #888888;
        text-align: justify;
        padding: 10px;
    }
`;

export const ApodVideo = styled.div`
    margin-top: 75px;

    iframe{
        max-width: 100%;
        width: 600px;
        height: 500px;
        @media(max-width: 400px){
            height: 200px;
        }
    }
    p{
        font-family: Kufam, sans-serif;
        color: #888888;
        text-align: justify;
        padding: 10px;
    }
`
