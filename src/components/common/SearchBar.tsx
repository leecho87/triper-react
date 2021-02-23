import React from 'react';
import styled from 'styled-components';

const SearchBarWrapper = styled.div`
    overflow:hidden;
    position:relative;
    min-height:38px;
    width:80%;
    border-radius:8px;
    background-color:#fff;
`

const SearchBar:React.FC = () => {
    return (
        <SearchBarWrapper>
            검색!
        </SearchBarWrapper>
    )
}

export default SearchBar;