import { Grid } from "@mui/material";
import styled from "@emotion/styled";

const List = styled.ul<any>`
    display:flex;
    align-items:center;
    li {
        padding:20px;
    }
    ${(props) => props.layout === "horizontal" && `
        display:block;
        white-space:nowrap;
        li {
            background:red;
        }
    `}
`;

interface ILIstWrapProps {
    layout: string;
    children: any;
}

const ListWrap = (props: ILIstWrapProps) => {
    const { layout, children } = props;

    return (
        <List layout={layout}>
            {children}
        </List>
    )
}

export default ListWrap;