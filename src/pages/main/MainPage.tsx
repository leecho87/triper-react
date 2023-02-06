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
    const [selectedArea, setSelectedArea] = useState<string>("1");

    const controller = useMain();

    const handleAreaChange = (areaCode:string) => {
        setSelectedArea(areaCode);
    }

    useEffect(() => {
        if (!areaCode && controller) {
            axios.all([
                controller.fetchAreaCode(),
                controller.fetchFestival(),
                controller.fetchStay()
            ])
            .then(axios.spread((...result) => {
                setAreaCode(result[0].item);
                setFestival(result[1].item);
                setStay(result[2].item);
                setSelectedArea(result[0].item[0].code)
            }))
            .catch((error) => {
                console.log(error)
            });
        }
    }, [areaCode, controller])

    return (
        <>
            <PageTitle title="TRIPER" />
            <SearchLinkBox>
                <Link to="/search">어디가 궁금하세요?</Link>
            </SearchLinkBox>            
            <CitiesList
                data={areaCode}
                onChange={handleAreaChange}
                selected={selectedArea}
            />
        </>
    )
}

export default MainPage;