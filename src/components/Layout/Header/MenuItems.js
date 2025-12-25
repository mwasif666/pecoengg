import React from "react";
import { Link } from "react-router-dom";

const MenuItems = (props) => {
  const { parentMenu, secondParentMenu, activeMenu } = props;

  return (
    <React.Fragment>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li className={parentMenu === "about" ? "current-menu-item" : ""}>
        <Link
          to="/about"
          className={activeMenu === "/about" ? "active-menu" : ""}
        >
          About
        </Link>
      </li>

      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/project">Projects</Link>
      </li>

      <li className={parentMenu === "contact" ? "current-menu-item" : ""}>
        <Link
          to="/contact"
          className={activeMenu === "/contact" ? "active-menu" : ""}
        >
          Contact
        </Link>
      </li>
    </React.Fragment>
  );
};

export default MenuItems;
