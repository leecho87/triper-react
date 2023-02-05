import styled from "@emotion/styled";
import { Typography } from "@mui/material";

interface IPageTitleProps {
  title: string;
}

const Title = styled(Typography)`
    display:flex;
    justify-content:center;
    align-items:center;
    gap:8px;
    padding:20px;
    font-size:20px;
    font-weight:600;
    div {
      position:relative;
      white-space:nowrap;
      span {
        position:absolute;
        left:-80%;
        top:50%;
        font-size:13px;
        color:#999;
        transform:translateY(-50%);
      }
    }
`

const PageTitle = ({ title }: IPageTitleProps) => {
  return (
    <Title variant="h1">
      <div>
        {title}
        <span>포켓투어</span>
      </div>
    </Title>
  );
};

export default PageTitle;
