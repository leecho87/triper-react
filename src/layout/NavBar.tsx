import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ROUTES from '@router/routes';

const NavBarWrapper = styled.nav`
  position: relative;
  display: flex;
  flex:0 0 60px;
  justify-content: space-between;

  .item {
    position:relative;
    flex:1;
    height:60px;
    padding:12px 0 0;
    text-align:center;
    border-top:1px solid #eee;
    color:#999;
    &:not(:first-of-type) {
      &:after {
        content:'';
        position:absolute;
        left:-1px;
        top:50%;
        width:1px;
        height:50%;
        transform:translateY(-50%);
        background-color:#eee;
      }
    }
    img {
      width:20px;
      opacity:.5;
    }
    p {
      margin-top:6px;
      line-height:1;
    }

    &.selected {
      color:#333;
      img {
        opacity:1;
      }
    }
  }
`;

const NavBar = () => {
  return (
    <NavBarWrapper>
      <NavLink to="/" exact className="item" activeClassName="selected">
        <img src={`/images/common/nav/home.png`} alt="홈" />
        <p>홈</p>
      </NavLink>
      <NavLink to="/search" exact className="item" activeClassName="selected">
        <img src={`/images/common/nav/search.png`} alt="검색" />
        <p>검색</p>
      </NavLink>
      <NavLink to="/location" exact className="item" activeClassName="selected">
        <img src={`/images/common/nav/location.png`} alt="주변" />
        <p>주변</p>
      </NavLink>
      <NavLink to="member" exact className="item" activeClassName="selected">
        <img src={`/images/common/nav/member.png`} alt="내정보" />
        <p>내정보</p>
      </NavLink>
    </NavBarWrapper>
  );
};

export default NavBar;
