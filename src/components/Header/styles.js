import styled from "styled-components";


export default {
    AppBar: styled.header`
        background: #0f0900;
        padding: 8px 15px;
        display: flex;
        width: 100vw;
        position: fixed;
        top: 0;
        z-index: 10;
        align-items: center;
        justify-content: space-between;
    `,

    Logo: styled.img`
        width: 60px;
        @media(max-width: 425px){
            width: 45px;
        }
        transition: all 0.3s;
        :hover{
            opacity: 0.8;
        }
    `,
    MenuIcon: styled.img`
        width: 24px;
        @media(max-width: 425px){
            width: 20px;
        }
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
        align-items: center;
        flex-direction: column;
        span{
            font-family: Roboto Mono, sans-serif;
            font-size: 25px;
            color: #ff9900;
            @media(max-width: 425px){
                font-size: 24px;        
            }
        }
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
        width: 50%;
        text-align: center;
    `,

}
