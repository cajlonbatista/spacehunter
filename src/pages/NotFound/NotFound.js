import React from 'react';
import styled from 'styled-components';

const ConteinerFound = styled.div`
    padding-top: 50vh;
    display: flex;
    justify-content: center;
    h1{
        color: #FF9906;
        font-size: 23px;
        font-family: Exo, sans-serif;
    }
`;

export default function NotFound(){
    return(
        <ConteinerFound>
            <h1>404 | Not Found</h1>
        </ConteinerFound>
    );
}