import styled from "styled-components";

 
export default {
    AppBar : styled.header`
        background: #181818;
        padding: 8px 15px;
        font-size: 30px;
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
        width: 50px;
    `,
    GuideList : styled.div`
        display: flex;
    `,
    Guide : styled.div`
        display: flex;
        margin-right: 20px;
        flex-direction: column;
        align-items: right;
        @media(max-width: 600px){
            display: none;
        }
    `,
    Locality : styled.div`
        font-family: Roboto, sans-serif;
        padding: 5px 0px;
        text-align: right;
        font-size: 13px;
    `,
    Item : styled.li`
        font-family: Archivo, sans-serif;
        font-size: 14px;
        transition: all 0.3s;
        margin-left: 5px;
        list-style: none;
        background: #181818;
        border-radius: 5px;
        font-weight: 500;
        padding: 7px 19px;
        cursor: pointer;
        :hover{
            background: #181818;
            color: #ffdd00;
        }
    `
}
