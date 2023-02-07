import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material"
import { Link } from "react-router-dom";

const Text = styled(Typography)<{tag: string}>`
  ${(props) => props.tag === "h2" && `
      font-weight:bold;
      font-size:18px;
  `}
  ${(props) => props.tag === "span" && `
      font-weight:light;
      font-size:13px;
      color:#999;
  `}
`;

const GridBar = styled(Grid)`
  padding:0 8px;
  color:#999;
`

interface ICategoryHeadProps {
  title: string;
  desc?: string;
  path?: string;
}

const CategoryHead = ({ title, desc, path }: ICategoryHeadProps) => {
  return (
    <Grid container alignItems="center" style={{ marginTop: 20 }}>
      <Grid item>
        <Text tag="h2">{title}</Text>
      </Grid>
      {desc && (
        <>
          <GridBar item>|</GridBar>
          <Grid item><Text tag="span">{desc}</Text></Grid>
        </>
      )}
      {path && (
        <Grid item>
          <Link to={path}>더보기</Link>
        </Grid>
      )}
    </Grid>
  )
}

export default CategoryHead;