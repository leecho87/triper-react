import styled from "@emotion/styled";

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
        flex:0 0 100px;
        height:100px;
        white-space:nowrap;
        overflow:hidden;
        border-radius:6px;
        img {
            width:100%;
        }
        span {
            position:absolute;
            left:10px;
            top:10px;
            font-weight:bold;
            font-size:18px;
            color:#fff;
        }
    }
`;

const CitiesList = ({ data }: ICitiesListProps) => {
    return (
        <CitiesListWrap>
        {data?.map((item: IAreaCodeProps, index: number) => (
            <li key={`areaCode-${index}`}>
                <img src={`/images/city_${item.code}.jpg`} alt={item.name} />
                <span>{item.name}</span>
            </li>
        ))}
        </CitiesListWrap>
    )
}

export default CitiesList;