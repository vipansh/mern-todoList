import React from "react";
import NavbarItems from "./NavbarItems";

const Navbar = () => {
  return (
    <div style={nav_styles}>
      <NavbarItems path="/" value={"Home"} />
      <NavbarItems path="/add-todo" value={"Add Todo"} />
    </div>
  );
};

export default Navbar;

const nav_styles = {
  display: "flex",
};
