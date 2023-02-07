import { Grid } from "@mui/material";
import styled from "@emotion/styled";

const ListWrap = styled.ul<{ layout?: string }>`
    display:flex;
    align-items:center;
    flex-direction:column;
    width:100%;
    margin-top:8px;

    li {
        display:flex;
        flex: 1;
        align-items:flex-start;
        width:100%;
        &:not(:first-of-type) {
            margin-top:8px;
        }
    }
    
    .thumb {
        overflow:hidden;
        flex:0 0 25%;
        height:80px;
        img {
            height:80px;
        }
    }
    .description {
        flex:1;
        padding: 0 10px;
        p {
            font-weight:bold;
            font-size:14px
        }
        span {
            font-size:12px
        }
    }

    ${(props) => props.layout === "square" && `
        flex-direction:row;
        flex-wrap:wrap;
        li {
            flex:0 0 50%;
            &:nth-of-type(n+3) {
                margin-top:8px;
            }
        }
    `}
`;

interface ILIstProps {
    layout?: string;
    data: any;
}

const List = ({ layout = "block", data }: ILIstProps) => {
    return (
        <ListWrap layout={layout}>
        {data?.map((item: any, index: number) => (
            <li key={index}>
                <div className="thumb">
                    <img src={item.firstimage2} alt={item.title} />
                </div>
                <div className="description">
                    <p>{item.title}</p>
                    <span>{item.tel}</span>
                </div>
            </li>
        ))}
        </ListWrap>
    )
}

export default List;