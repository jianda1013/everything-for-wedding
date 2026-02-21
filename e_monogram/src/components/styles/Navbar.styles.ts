import { Link } from "react-router-dom";
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

export const NavItem = styled(Link)`
  flex: 1;
  text-transform: uppercase;
  font-size: 32px;
  padding: 12px 0px;
  cursor: pointer;
  text-decoration: none;
  font-weight: 500;
  color: #4a3b32;
  text-align: center;
  transition:
    transform 0.15s ease,
    background-color 0.2s ease;
  display: inline-block;

  &:hover {
    color: inherit;
    background-color: #ffffff55;
    border-radius: 4px;
  }

  &:active {
    animation: navPress 0.25s ease forwards;
  }

  @keyframes navPress {
    0% {
      transform: scale(1);
    }
    40% {
      transform: scale(0.92);
    }
    100% {
      transform: scale(1);
    }
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
