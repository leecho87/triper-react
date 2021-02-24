import React, { useState } from 'react';
import styled from 'styled-components';
import { SearchBar } from '@components/common'
import { join } from 'path';

const SearchWrapper = styled.article`
    position:relative;
`

const Search:React.FC = () => {
    // const [ searchValue, setSearchValue ] = useState({});
    const handleSubmit = (category: string, keyword: string) => {
        console.log('[handleSubmit] / category ', category);
        console.log('[handleSubmit] / keyword ', keyword);
    }

    return (
        <SearchWrapper>
            <SearchBar onSubmit={handleSubmit}/>
        </SearchWrapper>
    )
}

export default Search;