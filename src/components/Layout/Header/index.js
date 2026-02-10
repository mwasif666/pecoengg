import React, { useEffect, useRef, useState } from "react";
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

  const lastY = useRef(0);
  const ticking = useRef(false);

  const [isPopup, setIsPopup] = useState(false);
  const [isSidebar, setIsSidebar] = useState(false);

  const handleMobileMenu = () => {
    document.body.classList.toggle("mobile-menu-visible");
  };

  useEffect(() => {
    lastY.current = window.scrollY || 0;

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const currentY = window.scrollY || 0;
        const delta = currentY - lastY.current;

        // after a little scroll -> scrolled
        const scrolledNow = currentY > 20;
        setIsScrolled(scrolledNow);

        // ignore tiny jitter
        if (Math.abs(delta) > 8) {
          const goingDown = delta > 0;
          const goingUp = delta < 0;

          // ✅ Econetix behavior:
          // scroll UP (and already scrolled) => white navbar
          if (goingUp && currentY > 60) setIsLight(true);
          if (goingDown) setIsLight(false);

          // ✅ hide only when going down (same as before)
          if (goingDown && currentY > 140) setIsHidden(true);
          else if (goingUp) setIsHidden(false);
          else if (currentY <= 140) setIsHidden(false);
        }

        // top reached => back to glass (overlay)
        if (currentY <= 30) {
          setIsLight(false);
          setIsHidden(false);
        }

        lastY.current = currentY;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
                  src="https://res.cloudinary.com/dndfzn6h3/image/upload/v1766854166/Asset-9_iqnl4q.png"
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
