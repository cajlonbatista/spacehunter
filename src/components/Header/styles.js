import styled from "styled-components";

export default {
    AppBar: styled.header`
        background: #161311;
        padding: 8px 15px;
        display: flex;
        box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
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
    DialogFull: styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        background-color: #22201E;
        padding: 10px;
        ul{
            width: 100%;
            li{
                border-radius: 10px;
            }
        }
    `,
    DialogHeader: styled.header`
        width: 100%;
        position: fixed;
        top: 0;
        z-index: 20;
        padding: 8px 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        >img{
            width: 60px;
            @media(max-width: 425px){
                width: 45px;
            }
            transition: all 0.3s;
            :hover{
                opacity: 0.8;
            }
        }
        button{
            img{
                width: 25px;
            }
        }
    `
}
