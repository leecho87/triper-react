import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Menus } from '@components/common';

const TopWrapper = styled.article`
    position:relative;
    min-height:280px;
    &:before {
        content:'';
        position:absolute;
        left:0;
        top:0;
        width:100%;
        height:100%;
        background:url('/images/home/main_top_bg.jpg') no-repeat;
        background-size:cover;
        background-position:center bottom;
    }
    h1 {
        position:absolute;
        left:20px;
        top:20px;
        font-size:22px;
        color:#fff;
        text-shadow:1px 1px 3px #fff;
    }

    .searchLink {
        position:absolute;
        width:80%;
        left:50%;
        bottom:50px;
        padding:0 25px;
        border-radius:20px;
        height:38px;
        line-height:38px;
        transform:translateX(-50%);
        background-color:#fff;
        background-image:url('/images/common/search.png');
        background-repeat:no-repeat;
        background-position:95% center;
        background-size:18px 18px;
    }
`

const Top:React.FC = () => {
    return (
        <TopWrapper>
            <h1>TRIPER</h1>
            <Link to="/search" className="searchLink">랜선으로 즐겨봐요 여행자님</Link>
            <Menus />
        </TopWrapper>
    )
}

export default Top;