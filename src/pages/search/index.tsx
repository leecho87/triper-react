import React, { useState } from 'react';
import styled from 'styled-components';
import { SearchBar } from '@components/common'

import requestAPI from '@service/Service';
import serviceList, { contentIdList } from '@service/ServiceList';

const SearchWrapper = styled.article`
    position:relative;
`

const Search:React.FC = () => {
    const handleSubmit = (category: string, keyword: string) => {
        fetchSearch(category, keyword);
    };

    const fetchSearch = async (category: string, keyword: string) => {
        const data = await requestAPI({
            service: serviceList.searchKeyword,
            param: {
                contentTypeId: contentIdList[category].code,
                keyword: keyword,
                numOfRows: 20
            }
        });
        console.log('[fetchSearch]', data);
    }

    return (
        <SearchWrapper>
            <SearchBar onSubmit={handleSubmit}/>
        </SearchWrapper>
    )
}

export default Search;