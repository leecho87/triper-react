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
    padding:10px;
    font-size:22px;
    font-weight:600;
    span {
      font-size:16px;
      color:#999;
    }
`

const PageTitle = ({ title }: IPageTitleProps) => {
  return (
    <Title variant="h1">
      <span>포켓투어</span> {title}
    </Title>
  );
};

export default PageTitle;
