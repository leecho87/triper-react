import React from "react";
import styled from "@emotion/styled";

const ListWrap = styled.ul`
  position:relative;
  display:inline-flex;
  flex-wrap:nowrap;
  overflow:auto;
  gap:8px;
  margin-top:10px;
  width:100%;

  &::-webkit-scrollbar {
    display: none;
  }
  li {
    position:relative;
    max-width:180px;
    img {
      min-width:120px;
      height:80px;
    }
    p {
      margin-top:8px;
      width:100%;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      word-break:keep-all;
    }
  }
`

const SwipeList = ({ children }: any) => {
  return (
    <ListWrap>
      {children}
    </ListWrap>
  )
}

export default SwipeList;