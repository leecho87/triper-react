import { useState, useEffect } from "react";
import { Box } from "@mui/material"
import styled from "@emotion/styled";
import { ListWrap, PageTitle } from "components/common";
import { CitiesList } from "components/main";

import { useMain } from "hooks/main/useMain";
import { Link } from "react-router-dom";

interface IAreaCodeProps {
    code: string;
    name: string;
    rnum: number;
}

const SearchLinkBox = styled(Box)`
    padding:10px;
    a {
        display:block;
        padding:0 8px;
        height:32px;
        border:2px solid #ebebeb;
        border-radius:6px;
        font-size:16px;
        line-height:28px;
        color:#999;
    }
`

const MainPage = () => {
    const [areaCode, setAreaCode] = useState<IAreaCodeProps[] | null>(null);
    const controller = useMain();

    useEffect(() => {
        if (!areaCode) {
            const handleGetAreaCode = async () => {
                const { item } = await controller.fetchAreaCode();
                setAreaCode(item);
            }
            handleGetAreaCode();
        }
    }, [areaCode, controller])

    return (
        <>
            <PageTitle title="TRIPER" />
            <SearchLinkBox>
                <Link to="/search">어디가 궁금하세요?</Link>
            </SearchLinkBox>            
            <CitiesList data={areaCode} />
        </>
    )
}

export default MainPage;