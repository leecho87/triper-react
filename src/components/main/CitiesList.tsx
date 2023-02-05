import styled from "@emotion/styled";
import { citiesInfo } from "constants/Cities";
interface IAreaCodeProps {
    code: string;
    name: string;
    rnum: number;
}

interface ICitiesListProps {
    data?: IAreaCodeProps[] | null
}

const CitiesListWrap = styled.ul`
    display:inline-flex;
    width:100%;
    margin-top:20px;
    flex-wrap:nowrap;
    overflow-x:auto;
    gap:8px;
    padding:0 8px;
    &::-webkit-scrollbar {
        display: none;
    }
    li {
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
    }
`;

const CitiesList = ({ data }: ICitiesListProps) => {
    return (
        <CitiesListWrap>
        {data?.map((item: IAreaCodeProps, index: number) => (
            <li key={`areaCode-${index}`}>
                <img src={`/images/city_${item.code}.jpg`} alt={item.name} />
                <span>{item.name.includes("세종") ? "세종시" : item.name}</span>
            </li>
        ))}
        </CitiesListWrap>
    )
}

export default CitiesList;