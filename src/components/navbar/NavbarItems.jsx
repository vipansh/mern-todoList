import React from "react";
import { Link } from "react-router-dom";

const NavbarItems = ({ value, path }) => {
  return <Link to={path}>{value}</Link>;
};

export default NavbarItems;
