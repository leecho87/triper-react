import React from 'react'
import styled from 'styled-components';
import NavBar from '@layout/NavBar';
import { Helmet } from 'react-helmet';

const ContainerWrapper = styled.div`
    display:flex;
    flex-direction:column;
    position:relative;
    min-height:100%;
    height:100%;

    .container {
        flex:1;
        overflow-x:hidden;
        overflow-y:auto;
    }
`;

const Container = ({children}: any) => {
    return (
        <ContainerWrapper className="app">
            <Helmet>
                <meta property="og:url" content={ window.location.href } />
                <meta property="og:type" content="article" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:site_name" content="트라이퍼" />
                <meta property="og:type" content="website" />
            </Helmet>

            <div className="container">
                {children}
            </div>
            
            <NavBar />
        </ContainerWrapper>
    )
}

export default Container;
