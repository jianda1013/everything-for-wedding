import React from "react";
import { NavbarContainer, NavItem } from "./styles";

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <NavItem to="/home">Home</NavItem>
      <NavItem to="/story">Our Story</NavItem>
      <NavItem to="/home#details">Itinerary</NavItem>
      <NavItem to="/gallery">Gallery</NavItem>
      <NavItem to="/home#rsvp">Post Card</NavItem>
    </NavbarContainer>
  );
};

export default Navbar;
