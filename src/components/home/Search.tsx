import React from 'react';
import styled from 'styled-components';

import { Menus } from '@components/common';

const SearchWrapper = styled.article`
    position:relative;
    min-height:250px;
    &:before {
        content:'';
        position:absolute;
        left:0;
        top:0;
        width:100%;
        height:100%;
        background:url('/images/home/main_top_bg.jpg') no-repeat;
        background-size:cover;
        background-position:center center;
    }
    h1 {
        position:absolute;
        left:20px;
        top:20px;
        font-size:22px;
        color:#fff;
        text-shadow:1px 1px 3px #fff;
    }
`

const Search:React.FC = () => {
    return (
        <SearchWrapper>
            <h1>TRIPER</h1>
            <Menus />
        </SearchWrapper>
    )
}

export default Search;