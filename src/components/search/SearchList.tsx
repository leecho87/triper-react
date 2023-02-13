import styled from "@emotion/styled"
import { Grid } from "@mui/material"
import { noImgPath } from "constant"
import { MainListType } from "types/MainListType"

const SearchWrap = styled.ul`
    position:relative;
    padding:20px;
    li {
        overflow:hidden;
        &:not(:first-of-type) {
            margin-top:12px;
        }
    }
    .thumb {
        float:left;
        width:22%;
        img {
            width:100%;
            max-height:80px;
        }
    }
    .info {
        overflow:hidden;
        padding:0 10px;
        p {
            font-size:12px;
            color:var(--sub-color);
            &.title {
                font-size:15px;
                font-weight:bold;
                color:#000;
            }
            &:not(:first-of-type) {
                margin-top:8px;
            }
        }
    }
    .empty {
        padding:40px 0;
        text-align:center;
        font-size:14px;
        color:var(--sub-color);
    }
`

const SearchList = ({ data }: any) => {
    return (
        <SearchWrap>
        {data ? 
            data.map((item: MainListType, index: number) => (
                <li key={`search-${index}`}>
                    <div className="thumb">
                        <img src={item.firstimage || item.firstimage2 || noImgPath} alt={item.title} />
                    </div>
                    <div className="info">
                        <p className="title">{item.title}</p>
                        <p className="addr">{item.addr1 || item.addr2}</p>
                        <p className="tel">{item.tel}</p>
                    </div>
                </li>      
            ))
         : (
            <li className="empty">검색 결과가 없습니다</li>
        )}
        </SearchWrap>
    )
}

export default SearchList;