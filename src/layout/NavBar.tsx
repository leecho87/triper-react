import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ROUTES from '@router/routes';

const NavBarWrapper = styled.nav`
  position: relative;
  display: flex;
  height: 50px;
  justify-content: space-between;

  .item {
    flex:1;
    text-align:center;
    line-height:50px;
  }
`;

const NavBar = () => {
  return (
    <NavBarWrapper>
      { ROUTES && ROUTES.map((item, index) => (
        <Link to={item.path} key={index} className="item">{item.title}</Link>
      ))}
    </NavBarWrapper>
  );
};

export default NavBar;
