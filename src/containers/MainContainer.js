import styled from 'styled-components';
import React from 'react';

const MainContainer = ({ children, title }) => {
    return (
        <MainContainerBody>
            <MainContainerTitle>
                { title }
            </MainContainerTitle>
            {children}
        </MainContainerBody>
    );
};


const MainContainerBody  = styled.div`
    padding: 20px 50px;
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.4);
    margin-top: -20px;
    margin: 30px;
    border-radius: 1%;
`;


const MainContainerTitle = styled.div`
    font-size: 20px;
    margin-bottom: 10px;
    font-weight: 100;
    border-bottom: 1px dotted darkgray;
    padding-right: 10px;
    padding-bottom: 10px;
`;

export default MainContainer;