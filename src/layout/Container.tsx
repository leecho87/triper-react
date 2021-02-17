import React from 'react'
import styled from 'styled-components';
import NavBar from '@layout/NavBar';

const ContainerWrapper = styled.div`
    display:flex;
    flex-direction:column;
    position:relative;
    min-height:100%;
    height:100%;

    .container {
        flex:1;
    }
`;

const Container = ({children}: any) => {
    return (
        <ContainerWrapper>
            <div className="container">
                {children}
            </div>
            <NavBar />
        </ContainerWrapper>
    )
}

export default Container
