import styled from "styled-components";


export default {
    AppBar: styled.header`
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

    Logo: styled.img`
        width: 60px;
        @media(max-width: 425px){
            width: 45px;
        }
    `,
    MenuIcon: styled.img`
        width: 30px;
    `,
    DrawerButton: styled.div`
        width: 60px;
        display: flex;
        justify-content: flex-end;
        @media( min-width: 1011px) {
            display: none;
        }
    `,
    LogoMenu: styled.div`
        font-family: Roboto Mono, sans-serif;
        font-size: 24px;
        color: #ff9900;
        align-items: center;
        display: flex;
        @media(max-width: 425px){
            font-size: 18px;        
        }
    `,
    LogoConteiner: styled.div`
        display: flex;
        justify-content: center;
    `,
    GuideList: styled.div`
        display: flex;
    `,
    Guide: styled.div`
        display: flex;
        margin-right: 20px;
        flex-direction: column;
        align-items: right;
        @media(max-width: 1010px){
            display: none;
        }
    `,
    LogoDrawer: styled.img`
        width: 130px;
        text-align: center;
    `,
    LinkMenu: styled.a`
        font-size: 13px;
        margin-left: 15px;
        font-family: "Exo", sans-serif;
        padding: 7px 10px;
        border-radius: 5px;
        display: flex;
        transition: all 0.4s;
        justify-content: center;
        align-items: center;
        color: whitesmoke;
        img {
            width: 22px;
            margin-right: 10px;
        }
        :hover{
            color: white;
            background: #ff9900b2;
        }
    `,
    MenuItem: styled.a`
        font-size: 1.7rem;
        font-weight: 600;
        color: #f5f5f5;
        display: flex;
        align-items: center;
        font-family: Archivo, sans-serif;
        width: 100%; 
        img {
            width: 30px;
            margin-right: 20px;
        }
        :hover{
            color: #ff9900;
        }
    `,
}
