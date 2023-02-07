import styled from "@emotion/styled";

const ListWrap = styled.ul`
  position:relative;

  ${(props) => props.className === "horizontal" && `
    position:sticky;
    background:yellow;
  `}

  ${(props) => props.className === "square" && `
    position:sticky;
    background:green;
  `}
`;

interface IListContainerProps {
  layout: string;
  children: any;
}

const ListContainer = (props: IListContainerProps) => {
  const { layout, children } = props;

  return (
    <ListWrap className={layout}>
      {children}
    </ListWrap>
  )
}

export default ListContainer;