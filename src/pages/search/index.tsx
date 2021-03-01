import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { ItemList, SearchBar } from '@components/common'

import requestAPI from '@service/Service';
import serviceList, { contentIdList } from '@service/ServiceList';

import qs from 'qs';
import { isJsxClosingElement } from 'typescript';

const SearchWrapper = styled.article`
    position:relative;
    padding:76px 0 0;
`;

const Search:React.FC = () => {
    const history = useHistory();
    const [ currentCategory, setCurrentCategory ] = useState<any>('attraction');
    const [ currentKeyword, setCurrentKeyword ] = useState<any>('');
    const [ currentData, setCurrentData ] = useState<any>({});
    const [ searchingState, setSearchingState ] = useState<boolean>(false);

    const handleSubmit = () => {
        const qsParam = decodeURIComponent(qs.stringify({category: currentCategory, keyword: currentKeyword}));
        history.push({ pathname: '/search', search: `?${qsParam}`});
        fetchSearch();
    };

    const handleSelect = (event: any) => {
        const category = event.target.value;
        setCurrentCategory(category);
    }

    const handleKeyword = (event: any) => {
        const keyword = event.target.value;
        setCurrentKeyword(keyword);
    }

    const fetchSearch = async () => {
        console.log('[fetchSearch] - ', currentCategory);
        console.log('[fetchSearch] - ', currentKeyword);

        if ( currentCategory && currentKeyword && currentKeyword.length > 0 ) {
            const data = await requestAPI({
                service: serviceList.searchKeyword,
                param: {
                    contentTypeId: contentIdList[currentCategory].code,
                    keyword: currentKeyword,
                    numOfRows: 20
                }
            });
            const { item } = data.data.response.body.items;
            setCurrentData(item);
        }
    };

    const setQueryParams = async () => {
        const params: qs.ParsedQs = qs.parse(window.location.search, { ignoreQueryPrefix: true });
        const category: any = params.category === undefined ? 'attraction' : params.category;
        const keyword: any = params.keyword === undefined ? '' : params.keyword;

        console.log('[setQueryParams] - ', category);
        console.log('[setQueryParams] - ', keyword);

        setCurrentCategory(decodeURIComponent(category));
        setCurrentKeyword(decodeURIComponent(keyword));
    }

    const initialize = async () => {
        await setQueryParams();
        await fetchSearch();
    };

    useEffect(() => {
        initialize();
    }, []);

    return (
        <SearchWrapper>
            <SearchBar
                keyword={currentKeyword}
                category={currentCategory}
                onSubmit={handleSubmit}
                onChangeKeyword={handleKeyword}
                onChangeCategory={handleSelect}
            />
            <ItemList
                title={contentIdList[currentCategory].name}
                data={currentData}
                type="list"
                search
                searchingState={searchingState}
            />
        </SearchWrapper>
    )
}

export default Search;