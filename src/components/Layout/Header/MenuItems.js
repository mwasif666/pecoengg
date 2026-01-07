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
        <Link to="/about" className={activeMenu === "/#" ? "active-menu" : ""}>
          About
        </Link>
      </li>

      <li>
        <Link to="/principals">OUR PRINCIPALS</Link>
      </li>
      {/* <li>
        <Link to="/product-portfolio">Product Portfolio</Link>
      </li> */}

      <li className={parentMenu === "#" ? "current-menu-item" : ""}>
        <Link
          to="/contact"
          className={activeMenu === "/#" ? "active-menu" : ""}
        >
          Contact
        </Link>
      </li>
    </React.Fragment>
  );
};

export default MenuItems;
