import { useState, useRef, useEffect } from "react"; 
import styled from "@emotion/styled";
import { Box, Grid, Button } from "@mui/material";
import { ArrowBackIos, Search } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import SearchList from "components/search/SearchList";

import { useSearch } from "hooks/search/useSearch";


const SearchWrap = styled.div`
    position:absolute;
    right:-100%;
    top:0;
    width:100%;
    height:100%;
    padding:20px 0;
    background-color:#fff;
`;

const SearchBar = styled.div`
    position:relative;
    width:100%;
    input {
        width:100%;
        padding:12px;
        height:38px;
        border:2px solid #000;
        border-radius:6px;
        font-size:16px;
        line-height:34px;
        color:#000;
    }
`;

interface ISearchChangeEvent {
    isComposing: boolean;
}

const SearchPage = () => {
    const [inProps, setInProps] = useState(true);
    const [keyword, setKeyword] = useState("");
    const [searchData, setSearchData] = useState(null);
    const navigate = useNavigate();
    const nodeRef = useRef(null);
    const controller = useSearch();

    const handleHistoryBack = () => {
        setInProps(false);
        setTimeout(() => {
            navigate(-1)
        }, 250)
    };

    const handleUpdateKeyword = (event: React.ChangeEvent<HTMLInputElement> | any) => {
        if (event.isComposing) return;

        setKeyword(event.target.value);
    }

    const handleSearch = async () => {
        try {
            const result = await controller.onSearch({
                keyword: keyword,
                numOfRows: 20
            });
            setSearchData(result.item);
        } catch (error) {
            console.log('error', error)
        }
    }

    return (
        <CSSTransition nodeRef={nodeRef} in={inProps} timeout={250} appear>
        {state => (
            <SearchWrap ref={nodeRef} className={`search-${state}`}>
                <Grid container>
                    <Grid item justifyItems={"space-between"} alignItems={"center"}>
                        <Button onClick={handleHistoryBack}>
                            <ArrowBackIos />
                        </Button>
                    </Grid>
                    <Grid item xs>
                        <SearchBar>
                            <input
                                type="text"
                                value={keyword}
                                onChange={(event) => handleUpdateKeyword(event)}
                                
                            />
                        </SearchBar>
                    </Grid>
                    <Grid item>
                        <Button onClick={() => handleSearch()}>
                            <Search />
                        </Button>
                    </Grid>
                </Grid>
                <Box>
                    <SearchList data={searchData} />
                </Box>
            </SearchWrap>
        )}
        </CSSTransition>
    )
}

export default SearchPage;