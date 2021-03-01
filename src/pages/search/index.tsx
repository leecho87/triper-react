import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { ItemList, SearchBar } from '@components/common'

import requestAPI from '@service/Service';
import serviceList, { contentIdList } from '@service/ServiceList';

import qs from 'qs';
import { createJSDocCallbackTag, isJsxClosingElement } from 'typescript';

const SearchWrapper = styled.article`
    position:relative;
    padding:76px 0 0;
`;

const Search:React.FC = () => {
    const history = useHistory();
    const [ category, setCategory ] = useState<any>('attraction');
    const [ keyword, setKeyword ] = useState<any>('');
    const [ currentData, setCurrentData ] = useState<any>({});
    const [ searchingState, setSearchingState ] = useState<boolean>(false);

    const handleSubmit = () => {
        const qsParam = decodeURIComponent(qs.stringify({category: category, keyword: keyword}));
        history.push({ pathname: '/search', search: `?${qsParam}`});
        fetchSearch();
    };

    const handleSelect = (event: any) => {
        const value = event.target.value;
        setCategory(value);
    }

    const handleKeyword = (event: any) => {
        const value = event.target.value;
        setKeyword(value);
    }

    const fetchSearch = async () => {
        const { category, keyword } = getQueryParams();

        if ( category && keyword ) {
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
        }
    };

    const getQueryParams = () => {
        const params: qs.ParsedQs = qs.parse(window.location.search, { ignoreQueryPrefix: true });
        const paramCategory: any = params.category === undefined ? 'attraction' : params.category;
        const paramKeyword: any = params.keyword === undefined ? '' : params.keyword;
        setCategory(paramCategory);
        setKeyword(paramKeyword);

        return {
            category: decodeURIComponent(paramCategory),
            keyword: decodeURIComponent(paramKeyword),
        }
    }

    const initialize = async () => {
        await fetchSearch();
    };

    useEffect(() => {
        initialize();
    }, []);

    return (
        <SearchWrapper>
            <SearchBar
                keyword={keyword}
                category={category}
                onSubmit={handleSubmit}
                onChangeKeyword={handleKeyword}
                onChangeCategory={handleSelect}
            />
            <ItemList
                title={contentIdList[category].name}
                data={currentData}
                type="list"
                search
                searchingState={searchingState}
            />
        </SearchWrapper>
    )
}

export default Search;