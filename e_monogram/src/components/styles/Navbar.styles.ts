import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 1.5rem 0;
  background-color: transparent;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 10;

  @media (max-width: 768px) {
    gap: 1rem;
    padding: 1rem 0;
  }
`;

import { Link } from "react-router-dom";

export const NavItem = styled(Link)`
  text-transform: uppercase;
  font-size: 18px;
  color: #262815;
  cursor: pointer;
  text-decoration: none;
  font-weight: 500;
  padding: 12px 12px;

  &:hover {
    color:;
    background-color: #ffffff55;
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 12px 8px;
  }
`;
