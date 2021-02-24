import React, { useState } from 'react';
import styled from 'styled-components';

import { contentIdList } from '@service/ServiceList';

const SearchBarWrapper = styled.div`
    position:relative;
    padding:20px;
    form {
        display:flex;
    }
    select {
        box-sizing:border-box;
        flex:0 0 120px;
        height:36px;
        padding:0 10px;
        margin-right:10px;
        border:1px solid #ccc;
    }
    input {
        box-sizing:border-box;
        flex:1;
        height:36px;
        padding:0 10px;
        border:1px solid #ccc;
    }
`

const SearchBar:React.FC<any> = ({ onSubmit }) => {
    const contentKeyArr:any = Object.keys(contentIdList);
    const [ searchCategory, setSearchCategory ] = useState<string>(contentKeyArr[0]);
    const [ searchKeyword, setSearchKeyword ] = useState('');

    const handleChange = (event: any) => {
        setSearchCategory(event.target.value);
    };

    const handleKeyword = (event: any) => {
        setSearchKeyword(event.target.value);
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        onSubmit(searchCategory, searchKeyword);
    }

    return (
        <SearchBarWrapper>
            <form onSubmit={(e) => handleSubmit(e)}>
                <select
                    onChange={(e) => handleChange(e)}
                    value={searchCategory}
                >
                { contentIdList && Object.keys(contentIdList).map((item:any) => {
                    return (
                        <option key={contentIdList[item].code} value={item}>{contentIdList[item].name}</option>
                    )
                })}
                </select>
                <input type="text" onKeyUp={(e) => handleKeyword(e)}/>
            </form>
        </SearchBarWrapper>
    )
}

export default SearchBar;