import styled from 'styled-components';


export const ConteinerApod = styled.div`
    margin-top: 90px;
    animation: bounce 1s linear;
`

export const HeaderApod = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    img {
        width: 140px;
        margin-right: 10px;
    }
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