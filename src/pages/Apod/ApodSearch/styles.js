import styled from 'styled-components';


export const ConteinerApod = styled.div`
    margin-top: 90px;
    animation: bounce 1s linear;
`

export const HeaderApod = styled.div`
    display: flex;
    align-items: center;
    img {
        width: 140px;
        margin-right: 10px;
    }
    @media(max-width: 500px){
        flex-direction: column;
    }
`
export const SelectApod = styled.div`
    display: flex;
    align-items: center;
    
    p{
        margin: 10px;
        font-family: Rubik, sans-serif;
    }
    @media(max-width: 500px){
        flex-direction: column;
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
        max-width: 600px;
        border-radius: 5px;
    }

    span{
        width: 90%;
        max-width: 1300px;
        text-align: justify;
        color: white;
        margin-top: 5px;
        font-family: Kufam, sans-serif;
    }
`