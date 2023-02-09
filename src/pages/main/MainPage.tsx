import { useState, useEffect } from "react";
import axios from "axios";
import { Box } from "@mui/material"
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { List, PageTitle, CategoryHead } from "components/common";
import { CitiesList } from "components/main";
import { useMain } from "hooks/main/useMain";


const Wrap = styled.div`
    position:relative;
    padding:0 20px;
`
interface IAreaCodeProps {
    code: string;
    name: string;
    rnum: number;
}

const SearchLinkBox = styled(Box)`
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
`;

const MainPage = () => {
    const [areaCode, setAreaCode] = useState<IAreaCodeProps[] | null>(null);
    const [festival, setFestival] = useState<any>(null);
    const [stay, setStay] = useState<any>(null);
    const [tourCourse, setTourCourse] = useState<any>(null);
    const [reports, setReports] = useState<any>(null);
    const [selectedArea, setSelectedArea] = useState<string>("1");

    const controller = useMain();

    const handleAreaChange = (areaCode:string) => {
        setSelectedArea(areaCode);
    }

    useEffect(() => {
        if (!areaCode && controller) {
            axios.all([
                controller.fetchAreaCode({ numOfRows: 17 }),
                controller.fetchFestival({eventStartDate:new Date()}),
                controller.fetchStay({arrange : 'B'}),
                controller.fetchAreaBased({contentTypeId : 25 }),
                controller.fetchAreaBased({contentTypeId : 28 })
            ])
            .then(axios.spread((...result) => {
                setAreaCode(result[0].item);
                setSelectedArea(result[0].item[0].code)
                setFestival(result[1].item);
                setStay(result[2].item);
                setTourCourse(result[3].item)
                setReports(result[4].item)
                console.log('result', result);
            }))
            .catch((error) => {
                console.log(error)
            });
        }
    }, [areaCode, controller]);

    return (
        <Wrap>
            <Link to="/detail">상세</Link>
            <PageTitle title="TRIPER" />
            <SearchLinkBox>
                <Link to="/search">어디가 궁금하세요?</Link>
            </SearchLinkBox>            
            <CitiesList
                data={areaCode}
                onChange={handleAreaChange}
                selected={selectedArea}
            />
            <CategoryHead title="행사" desc="최근 행사 정보 입니다" />
            <List data={festival} layout={"square"} />
            <CategoryHead title="숙소" desc="최근 숙박 정보 입니다" />
            <List data={stay} />
            <CategoryHead title="여행코스" desc="최근 여행코스 정보 입니다" />
            <List data={tourCourse} layout={"square"} />
            <CategoryHead title="레포츠" desc="최근 레포츠 정보 입니다" />
            <List data={reports} />
        </Wrap>
    )
}

export default MainPage;