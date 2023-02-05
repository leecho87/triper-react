import { useState, useEffect } from "react";
import { Box } from "@mui/material"
import styled from "@emotion/styled";
import { ListWrap, PageTitle } from "components/common";
import { CitiesList } from "components/main";

import { useMain } from "hooks/main/useMain";
import { Link } from "react-router-dom";
import axios from "axios";

interface IAreaCodeProps {
    code: string;
    name: string;
    rnum: number;
}

const SearchLinkBox = styled(Box)`
    padding:0 10px;
    a {
        display:block;
        padding:0 12px;
        height:38px;
        border:2px solid #ebebeb;
        border-radius:6px;
        font-size:16px;
        line-height:34px;
        color:#999;
    }
`

const MainPage = () => {
    const [areaCode, setAreaCode] = useState<IAreaCodeProps[] | null>(null);
    const [festival, setFestival] = useState<any>(null);
    const [stay, setStay] = useState<any>(null);
    const [fet, setFet] = useState<any>(null);
    const controller = useMain();

    useEffect(() => {
        if (!areaCode && controller) {
            const fetchingData = async () => {
                const { item: areaCodeResponse } = await controller.fetchAreaCode();
                const { item: festivalResponse } = await controller.fetchFestival();
                const { item: stayResponse } = await controller.fetchStay();
                // const { item: fetResponse } = await controller.fetchFet();
                
                console.log('[festivalResponse]', festivalResponse)
                console.log('[stayResponse]', stayResponse)
                // console.log('[fetResponse]', fetResponse)
                
                setAreaCode(areaCodeResponse);
            }
            fetchingData();
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