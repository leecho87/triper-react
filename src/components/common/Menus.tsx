import React from 'react';
import styled from 'styled-components';

const MenusWrapper = styled.div`
    z-index:1000;
    position:fixed;
    right:100%;
    top:0;
    width:70%;
    height:100%;
    background-color:#fff;
    box-shadow:-2px 0 4px 0 rgba(255, 255, 255, .5);
    &.active {
        right:0;
    }
`

const Menus = () => {
    return (
        <MenusWrapper>
            menus
        </MenusWrapper>
    )
}

export default Menus;