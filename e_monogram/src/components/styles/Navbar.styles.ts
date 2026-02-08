import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 1.5rem 0;
  background-color: #ffffff55;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 10;
`;

import { Link } from "react-router-dom";

export const NavItem = styled(Link)`
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 1px;
  color: #262815;
  cursor: pointer;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    color: #26288f;
  }
`;
