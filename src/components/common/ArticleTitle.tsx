import React from 'react'
import styled from 'styled-components';

interface IArticleTitleProps {
    children: any,
    color?: string;
}

const TitleEl = styled.h1<any>`
    position:relative;
    padding:15px 0 0 25px;
    font-size:20px;
    font-weight:bold;
    letter-spacing:-1.5px;
    color:${props => props.color};
    &:before {
        content:'';
        position:absolute;
        left:14px;
        bottom:0;
        width:3px;
        height:calc(100% - 16px);
        background-color:#ddd;
    }
`

const ArticleTitle:React.FC<IArticleTitleProps> = ({
    children,
    color = '#000'
}) => {
    return (
        <TitleEl color={color}>{children}</TitleEl>
    )
}

export default ArticleTitle
