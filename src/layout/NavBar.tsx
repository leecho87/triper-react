import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ROUTES from '@router/routes';

const NavBarWrapper = styled.nav`
  position: relative;
  display: flex;
  height: 60px;
  justify-content: space-between;

  .item {
    position:relative;
    flex:1;
    height:60px;
    padding:12px 0 0;
    text-align:center;
    border-top:1px solid #eee;
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
    }
    p {
      margin-top:6px;
      line-height:1;
    }
  }
`;

const NavBar = () => {
  return (
    <NavBarWrapper>
      { ROUTES && ROUTES.map((item, index) => (
        <Link to={item.path} key={index} className="item">
          <img src={`/images/common/nav/${item.key.toLocaleLowerCase()}.png`} alt={item.title} />
          <p>{item.title}</p>
        </Link>
      ))}
    </NavBarWrapper>
  );
};

export default NavBar;
