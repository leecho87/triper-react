import styled from "@emotion/styled";
import { Typography } from "@mui/material";

interface IPageTitleProps {
  title: string;
  color?: string;
}

const Title = styled(Typography)<{ color?: string }>`
    display:flex;
    justify-content:center;
    align-items:center;
    gap:8px;
    padding:20px;
    font-size:24px;
    font-weight:bold;
    color: ${props => props.color === "fff" ? "#Ffff" : "#000"};
    div {
      position:relative;
      white-space:nowrap;
      span {
        position:absolute;
        left:-65%;
        top:50%;
        font-size:13px;
        color: ${props => props.color === "fff" ? props.color : "#999"};
        transform:translateY(-50%);
      }
    }
`

const PageTitle = ({ title, color }: IPageTitleProps) => {
  return (
    <Title variant="h1" color={color}>
      <div>
        {title}
        <span>포켓투어</span>
      </div>
    </Title>
  );
};

export default PageTitle;
