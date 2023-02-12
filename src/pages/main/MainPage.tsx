import { useState, useEffect } from "react";
import axios from "axios";
import { Box } from "@mui/material"
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { PageTitle } from "components/common";
import {
    CitiesList,
    CourseList,
    FestivalList,
    LeportsList,
    StayList
} from "components/main";
import { useMain } from "hooks/main/useMain";

const Wrap = styled.div`
    padding-top:220px;
    .mainTop {
        position:absolute;
        left:0;
        right:0;
        top:0;
        padding:20px;
        width:100%;
        height:220px;
        &:before {
            content: ' ';
            display: block;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            opacity: 0.8;
            background-image: url("/images/main_top2.jpg");
            background-repeat: no-repeat;
            background-position: 50% 0;
            background-size: cover;
        }
    }
    .mainContents {
        z-index:10;
        position:relative;
        padding:40px 20px;
        overflow:hidden;
        margin-top:-20px;
        border-top-left-radius:20px;
        border-top-right-radius:20px;
        background-color:#fff;
    }
`;
const SearchLinkBox = styled(Box)`
    position:relative;
    margin-top:20px;
    a {
        display:block;
        padding:0 12px;
        height:38px;
        border:2px solid #fff;
        border-radius:6px;
        font-size:16px;
        line-height:34px;
        color:#fff;
    }
`;
interface IAreaCodeProps {
    code: string;
    name: string;
    rnum: number;
};

const MainPage = () => {
    const [areaCode, setAreaCode] = useState<IAreaCodeProps[] | null>(null);
    const [festival, setFestival] = useState<any>(null);
    const [stay, setStay] = useState<any>(null);
    const [tourCourse, setTourCourse] = useState<any>(null);
    const [leports, setLeports] = useState<any>(null);
    const [shopping, setShopping] = useState<any>(null);
    const [selectedArea, setSelectedArea] = useState<string>("1");

    const controller = useMain();

    const handleAreaChange = (areaCode: string) => {
        setSelectedArea(areaCode);
    }

    const onUpdateAllData = (areaCode: string) => {
        return axios.all([
            controller.fetchAreaCode({ numOfRows: 17 }),
            controller.fetchFestival({
                eventStartDate: new Date(),
                areaCode: areaCode
            }),
            controller.fetchStay({ 
                arrange: 'B',
                areaCode: areaCode
            }),
            controller.fetchAreaBased({
                contentTypeId: 25,
                areaCode: areaCode
            }),
            controller.fetchAreaBased({
                contentTypeId: 28,
                areaCode: areaCode
            }),
            controller.fetchAreaBased({
                contentTypeId: 38,
                areaCode: areaCode
            })
        ])
        .then(axios.spread((...result) => {
            setAreaCode(result[0].item);
            setSelectedArea(areaCode)
            setFestival(result[1].item);
            setStay(result[2].item);
            setTourCourse(result[3].item)
            setLeports(result[4].item)
            setShopping(result[5].item)
        }))
        .catch((error) => {
            console.log(error)
        });
    }

    useEffect(() => {
        onUpdateAllData(selectedArea);
    }, [selectedArea]);

    return (
        <Wrap>
            <Box className="mainTop">
                <PageTitle title="TRIPER" color="fff" />
                <SearchLinkBox>
                    <Link to="/search">어디가 궁금하세요?</Link>
                </SearchLinkBox>
            </Box>
            <Box className="mainContents">
                <CitiesList
                    data={areaCode}
                    onChange={handleAreaChange}
                    selected={selectedArea}
                />
                <CourseList title="여행코스" data={tourCourse} />
                <FestivalList title="행사" data={festival} />
                <StayList title="숙박" data={stay} />
                <LeportsList title="레포츠" data={leports} />
                <LeportsList title="쇼핑" data={shopping} />
            </Box>
        </Wrap>
    )
}

export default MainPage;