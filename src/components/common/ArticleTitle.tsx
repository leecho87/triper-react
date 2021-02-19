import React from 'react'
import styled from 'styled-components';

interface IArticleTitleProps {
    children: any,
    color?: string;
}

const TitleEl = styled.h1<any>`
    position:relative;
    padding:15px 15px 0;
    font-size:22px;
    font-weight:bold;
    letter-spacing:-1.5px;
    color:${props => props.color};
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
