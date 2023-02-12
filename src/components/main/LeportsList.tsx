import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { Box, Grid } from "@mui/material";
import { CategoryHead, SwipeList } from "components/common";
import { noImgPath } from "constant";

import { MainListType } from "types/MainListType";

interface IFestivalListProps {
  data: MainListType[];
  title: string;
}

const Item = styled.li`
  .thumb {
    width:160px;
    height:auto;
    max-height:100px;
  }
  .addr {
    font-size:12px;
    color:var(--sub-color);
  }
  .tel {
    font-size:12px;
    color:var(--sub-color);
  }
`;
const More = styled(Link)`
  font-size:12px;
  color:var(--sub-color);
  text-decoration:underline;
`

const LeportsList = ({ data, title }: IFestivalListProps) => {
  return (
    <Box style={{ marginTop: 40 }}>
      <Grid container alignItems={"center"} justifyContent={"space-between"}>
        <Grid item>
          <CategoryHead title={title} />
        </Grid>
        <Grid item>
          <More to="/detail">더보기</More>
        </Grid>
      </Grid>
      <SwipeList>
        {data?.map((item: MainListType, index: number) => (
          <Item key={`leportsList-${index}`}>
            <img
              className="thumb"
              src={item.firstimage || item.firstimage2 || noImgPath}
              alt={item.title}
            />
            <p>{item.title}</p>
            {item.tel && <p className="tel">{item.tel}</p>}
            {(item.addr1 || item.addr2) && (
              <p className="addr">{item.addr1 || item.addr2}</p>
            )}
          </Item>
        ))}
      </SwipeList>
    </Box>
  )
}

export default LeportsList;