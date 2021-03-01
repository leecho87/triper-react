import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import { contentIdList } from '@service/ServiceList';

const SearchBarWrapper = styled.div`
    z-index:50;
    position:fixed;
    left:0;
    top:0;
    right:0;
    width:100%;
    padding:20px;
    border-bottom:1px solid #ccc;
    background-color:#fff;

    .searchRow {
        display:flex;
    }
    select {
        box-sizing:border-box;
        flex:1;
        max-width:100px;
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

const SearchBar:React.FC<any> = ({
    keyword, category, onSubmit, onChangeKeyword, onChangeCategory
}) => {
    const searchInput:any = useRef(null);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        onSubmit();
        clearSubmit();
    }

    const clearSubmit = () => {
        searchInput.current.value = '';
        searchInput.current.focus();
    }

    return (
        <SearchBarWrapper>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="searchRow">
                    <select
                        onChange={(e) => onChangeCategory(e)}
                        value={category}
                    >
                    { contentIdList && Object.keys(contentIdList).map((item:any) => (
                        <option key={contentIdList[item].code} value={item}>{contentIdList[item].name}</option>
                    ))}
                    </select>
                    <input
                        autoFocus
                        type="text"
                        ref={searchInput}
                        value={keyword}
                        onChange={ (e) => onChangeKeyword(e) }
                    />
                </div>
            </form>
        </SearchBarWrapper>
    )
}

export default SearchBar;