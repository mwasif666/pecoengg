import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";
import MobileMenu from "./MobileMenu";
import SearchPopup from "./SearchPopup";
import Sidebar from "./Sidebar";

import "./header-glass.css";

const Header = (props) => {
  const { parentMenu, secondParentMenu, activeMenu } = props;

  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // ✅ NEW: scroll-up par white theme
  const [isLight, setIsLight] = useState(false);

  const [isPopup, setIsPopup] = useState(false);
  const [isSidebar, setIsSidebar] = useState(false);

  const handleMobileMenu = () => {
    document.body.classList.toggle("mobile-menu-visible");
  };

  // Sticky/scroll effects disabled: keep default header state.

  return (
    <>
      <header
        className={[
          "econ-overlay-header",
          isScrolled ? "scrolled" : "",
          isHidden ? "hidden" : "",
          isLight ? "theme-light" : "theme-glass",
        ].join(" ")}
      >
        <nav className="econ-nav">
          <div className="container">
            <div className="econ-row">
              {/* LOGO */}
              <Link to="/" className="econ-logo" aria-label="Home">
                <img
                  src={
                    isScrolled
                      ? "https://res.cloudinary.com/dndfzn6h3/image/upload/v1766854166/Asset-9_iqnl4q.png"
                      : "https://res.cloudinary.com/dndfzn6h3/image/upload/v1770786270/Peccoengglogo_fl4fby.png"
                  }
                  alt="Logo"
                />
              </Link>

              {/* CENTER MENU */}
              <div className="econ-menu-pill">
                <div
                  className="econ-mobile-btn d-lg-none"
                  onClick={handleMobileMenu}
                  role="button"
                  aria-label="Open menu"
                >
                  <i className="fa fa-bars" />
                </div>

                <ul className="d-none d-lg-flex">
                  <MenuItems
                    parentMenu={parentMenu}
                    secondParentMenu={secondParentMenu}
                    activeMenu={activeMenu}
                    showClients
                  />
                </ul>
              </div>

              {/* CTA */}
              <Link
                to="/contact"
                rel="noreferrer"
                className="econ-cta reposnive-cta"
              >
                <span className="econ-cta-ic">
                  <svg
                    id="Layer_2"
                    width="14px"
                    data-name="Layer 2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 8.09 8.08"
                  >
                    <g id="Content">
                      <polygon
                        class="cls-1"
                        points="8.09 6.06 7.13 .94 2.04 0 .8 1.23 4.85 2.09 0 6.94 1.14 8.08 5.98 3.24 6.86 7.29 8.09 6.06"
                        fill="#004538"
                      ></polygon>
                    </g>
                  </svg>
                </span>
                <span className="econ-cta-txt">Contact Us</span>
              </Link>
            </div>
          </div>
        </nav>

        <MobileMenu handleMobileMenu={handleMobileMenu} />
      </header>

      <SearchPopup isPopup={isPopup} handlePopup={() => setIsPopup(!isPopup)} />
      <Sidebar
        isSidebar={isSidebar}
        handleSidebar={() => setIsSidebar(!isSidebar)}
      />
    </>
  );
};

export default Header;
