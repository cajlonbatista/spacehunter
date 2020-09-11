import styled from "styled-components";

 
export default {
    AppBar : styled.header`
        background: #181818;
        padding: 8px 15px;
        display: flex;
        width: 100vw;
        position: fixed;
        top: 0;
        z-index: 10;
        align-items: center;
        box-shadow: 3px 3px 5px -1px rgba(0,0,0,0.42);
        justify-content: space-between;
    `,
    
    Logo : styled.img`
        width: 60px;
        @media(max-width: 425px){
            width: 45px;
        }
    `,
    GuideList : styled.div`
        display: flex;
    `,
    Guide : styled.div`
        display: flex;
        margin-right: 20px;
        flex-direction: column;
        align-items: right;
        @media(max-width: 1010px){
            display: none;
        }
    `,
    Locality : styled.div`
        font-family: Roboto, sans-serif;
        padding: 5px 0px;
        text-align: right;
        font-size: 13px;
    `
}
