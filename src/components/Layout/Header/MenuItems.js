import React from "react";
import { Link } from "react-router-dom";

const MenuItems = (props) => {
  const { parentMenu, secondParentMenu, activeMenu } = props;

  return (
    <React.Fragment>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li className={parentMenu === "#" ? "current-menu-item" : ""}>
        <Link
          to="/#"
          className={activeMenu === "/#" ? "active-menu" : ""}
        >
          About
        </Link>
      </li>

      <li>
        <Link to="/#">Services</Link>
      </li>
      <li>
        <Link to="/#">Projects</Link>
      </li>

      <li className={parentMenu === "#" ? "current-menu-item" : ""}>
        <Link
          to="/#"
          className={activeMenu === "/#" ? "active-menu" : ""}
        >
          Contact
        </Link>
      </li>
    </React.Fragment>
  );
};

export default MenuItems;
