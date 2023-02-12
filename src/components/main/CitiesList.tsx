import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { CategoryHead, SwipeList } from "components/common";
import { citiesInfo } from "constant";
interface IAreaCodeProps {
    code: string;
    name: string;
    rnum: number;
}
interface ICitiesListProps {
    data?: IAreaCodeProps[] | null
    onChange: (arg: string) => void;
    selected: string;
}
const CitiesItem = styled.li`
    position:relative;
    flex:0 0 80px;
    height:80px;
    white-space:nowrap;
    overflow:hidden;
    border-radius:6px;
    img {
        width:100%;
        opacity:.8;
    }
    span {
        position:absolute;
        left:10px;
        top:10px;
        font-weight:bold;
        font-size:15px;
        color:#fff;
        text-shadow:var(--main-color) 1px 0 6px;
    }
    &.active {
        box-shadow: 0 0 0 5px #000 inset; 
    }
`;
const LocalList = styled.ul`
    position:relative;
    display:flex;
    flex-wrap:wrap;
    gap: 4px;
    margin-top:8px;
    li {
        font-size:12px;
        a {
            color:#000;
        }
    }
`;

const CitiesList = ({
    data,
    onChange,
    selected = "1"
}: ICitiesListProps) => {
    return (
        <Box>
            <CategoryHead title="도시" desc="둘러 볼 도시를 선택해 주세요" />
            <SwipeList>
                {data?.map((item: IAreaCodeProps, index: number) => (
                    <CitiesItem key={`areaCode-${index}`} onClick={() => onChange(item.code)} className={selected === item.code ? "active" : undefined}>
                        <img src={`/images/city_${item.code}.jpg`} alt={item.name} />
                        <span>{item.name.includes("세종") ? "세종시" : item.name}</span>
                    </CitiesItem>
                ))}
            </SwipeList>
            <Box style={{ marginTop: 10 }}>
                <CategoryHead title="지자체" desc="선택한 도시의 지자체 정보입니다" />
                {selected && (
                <LocalList>
                    {citiesInfo[selected].map((item: any, index: number) => (
                        <li key={index}><a href={item.areaHomepage} target="_blank" rel="noreferrer">{item.areaName}</a></li>
                    ))}
                </LocalList>
                )}
            </Box>
        </Box>
    )
}

export default CitiesList;