import React, { useState } from 'react';
import styled from 'styled-components';
import { ItemList, SearchBar } from '@components/common'

import requestAPI from '@service/Service';
import serviceList, { contentIdList } from '@service/ServiceList';

const SearchWrapper = styled.article`
    position:relative;
    padding:76px 0 0;
`

const Search:React.FC = () => {
    const [ currentCategory, setCurrentCategory ] = useState<string>('');
    const [ currentKeyword, setCurrentKeyword ] = useState<string>('');
    const [ currentData, setCurrentData ] = useState<any>({});

    const handleSubmit = (category: string, keyword: string) => {
        setCurrentCategory(contentIdList[category].name);
        setCurrentKeyword(keyword);
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
        const { item } = data.data.response.body.items;
        setCurrentData(item);
    };

    return (
        <SearchWrapper>
            <SearchBar onSubmit={handleSubmit}/>
            <ItemList search title={currentCategory} data={currentData} type="list" />
        </SearchWrapper>
    )
}

export default Search;