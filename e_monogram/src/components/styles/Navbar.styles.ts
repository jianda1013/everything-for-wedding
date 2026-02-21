import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  z-index: 10;
  font-family: "ChenYuluoyan 2.0", Arial, sans-serif;
  background-color: #d6ddcd;

  @media (max-width: 768px) {
    gap: 0rem;
    margin: 0 0rem;
  }
`;

import { Link } from "react-router-dom";

export const NavItem = styled(Link)`
  flex: 1;
  text-transform: uppercase;
  font-size: 64px;
  cursor: pointer;
  text-decoration: none;
  font-weight: 500;
  color: #4a3b32;

  &:hover {
    color:;
    background-color: #ffffff55;
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 12px 0px;
    text-align: center;
  }
`;
