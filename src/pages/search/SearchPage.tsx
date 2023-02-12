import { useState, useRef } from "react"; 
import { Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { CSSTransition } from "react-transition-group";
import { ArrowBackIos, Search } from '@mui/icons-material';

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
`

const SearchPage = () => {
    const [inProps, setInProps] = useState(true)
    const navigate = useNavigate();
    const nodeRef = useRef(null);
    
    const handleHistoryBack = () => {
        setInProps(false);
        setTimeout(() => {
            navigate(-1)
        }, 250)
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
                            <input type="text" />
                        </SearchBar>
                    </Grid>
                    <Grid item>
                        <Button>
                            <Search />
                        </Button>
                    </Grid>
                </Grid>
            </SearchWrap>
        )}
        </CSSTransition>
    )
}

export default SearchPage;