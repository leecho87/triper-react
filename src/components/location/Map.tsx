import React from 'react';
import styled from 'styled-components';

const MapWrapper = styled.div`
    position:fixed;
    top:0;
    right:0;
    left:0;
    bottom:60px;
    width:100%;
    height:calc(100% - 60px);
`


const Map:React.FC<any> = ({ id }) => {
    return (
        <MapWrapper id={id}></MapWrapper>
    )
}

export default Map;