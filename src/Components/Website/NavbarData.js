import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  background: #000;
  height: 80px;
`;
export const Bars = styled(Link)`
  color: #ccc;
`;

export const NavLink = styled(Link)`
  color: #bbb;

  &.active {
    color: #15cdfc;
  }
`;

export const NavBtn = styled(Link)`
  color: #e23;
`;

export const NavMenu = styled(Link)`
  color: #fff;
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
`;
