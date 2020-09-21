import styled from 'styled-components';


export const ConteinerApod = styled.div`
    margin-top: 90px;
    animation: bounce 1s linear;
`

export const HeaderApod = styled.div`

`
export const SelectApod = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    p{
        margin: 10px;
        font-family: Rubik, sans-serif;
    }

`
export const ApodImage = styled.div`
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
        width: 100%;
        margin: 20px auto;
        max-width: 70vw;
        border-radius: 10px;
    }

    span{
        width: 90%;
        max-width: 1300px;
        text-align: justify;
        color: #888888;
        margin-top: 5px;
        font-family: Kufam, sans-serif;
    }
`
export const ApodVideo = styled.div`
    iframe{
        max-width: 100%;
        width: 600px;
        height: 400px;
        @media(max-width: 400px){
            height: 200px;
        }
        border: 0;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    span{
        font-family: Kufam, sans-serif;
        color: #888888;
        text-align: justify;
        padding: 10px;
    }
`;