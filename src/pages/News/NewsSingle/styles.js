import styled from "styled-components";

const styles = {
    NewsMore: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
    `,
    NewsMoreBanner: styled.img`
        
    `,
    NewsMoreBody: styled.section`
        
    `,
    NewsMoreContainer: styled.div`
        width: 90%;
        max-width: 700px;
    `,
    NewsTitle: styled.h1`
        color: #00d9ff;
        font-family: Rubik, sans-serif ;
        text-align: center;
    `,
    NewsSubtitle: styled.h4`
        text-align: end;
    `,
    NewsContent: styled.article`
        display: flex;
        flex-direction: column;
        align-items: center;
    `
}
export default styles;