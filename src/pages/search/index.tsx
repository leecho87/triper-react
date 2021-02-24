import React from 'react';
import styled from 'styled-components';
import { SearchBar } from '@components/common'

const SearchWrapper = styled.article`
    position:relative;   
`

const Search:React.FC = () => {
    return (
        <SearchWrapper>
            <SearchBar />
        </SearchWrapper>
    )
}

export default Search;