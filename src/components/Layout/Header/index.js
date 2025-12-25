import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";
import MobileMenu from "./MobileMenu";
import SearchPopup from "./SearchPopup";
import Sidebar from "./Sidebar";

const Header = (props) => {
  const { parentMenu, secondParentMenu, activeMenu } = props;
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenu, setMobileMenu] = useState(false);
  const [isPopup, setIsPopup] = useState(false);
  const [isSidebar, setIsSidebar] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
    if (!isMobileMenu) {
      document.body.classList.add("mobile-menu-visible");
    } else {
      document.body.classList.remove("mobile-menu-visible");
    }
  };

  const handlePopup = () => {
    setIsPopup(!isPopup);
  };

  const handleSidebar = () => {
    setIsSidebar(!isSidebar);
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <React.Fragment>
      <header className={`main-header ${isVisible ? "fixed-header" : ""}`}>
        <nav className="main-menu">
          <div className="main-menu__wrapper">
            <div className="container">
              {/* ✅ Bootstrap Grid Added */}
              <div className="row align-items-center">
                {/* Left Side */}
                <div className="col-lg-9 col-md-8 col-12">
                  <div className="main-menu__left d-flex align-items-center justify-content-between">
                    <div className="main-menu__logo">
                      <Link to="/">
                        <img
                          src="https://res.cloudinary.com/dndfzn6h3/image/upload/v1766005609/cae169ed-9dd2-4c60-a7ac-38744ce5a48f.png"
                          alt="Logo"
                          style={{ width: "150px" }}
                        />
                      </Link>
                    </div>

                    <div className="main-menu__main-menu-box">
                      <div
                        className="mobile-nav__toggler d-lg-none"
                        onClick={handleMobileMenu}
                      >
                        <i className="fa fa-bars" />
                      </div>

                      <ul className="main-menu__list d-none d-lg-flex text-end mb-0">
                        <MenuItems
                          parentMenu={parentMenu}
                          secondParentMenu={secondParentMenu}
                          activeMenu={activeMenu}
                        />
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Right Side */}
                <div className="col-lg-3 col-md-4 col-12 d-none d-lg-block">
                  <div className="main-menu__right d-flex justify-content-lg-end justify-content-center mt-3 mt-md-0">
                    <div className="main-menu__search-nav-sidebar-btn-box">
                      <div className="main-menu__btn-box">
                        <Link to="/about" className="thm-btn main-menu__btn">
                          Read more
                          <span />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ✅ End Bootstrap Grid */}
            </div>
          </div>
        </nav>

        {/* Sticky Header */}
        <div
          className={`stricky-header stricked-menu main-menu ${
            isVisible ? "stricky-fixed" : ""
          }`}
        >
          <div className="sticky-header__content" />
          <nav className="main-menu">
            <div className="main-menu__wrapper">
              <div className="container">
                {/* ✅ Bootstrap Grid Added */}
                <div className="row align-items-center">
                  {/* Left Side */}
                  <div className="col-lg-9 col-md-8 col-12">
                    <div className="main-menu__left d-flex align-items-center justify-content-between">
                      <div className="main-menu__logo">
                        <Link to="/">
                          <img
                            src="https://res.cloudinary.com/dndfzn6h3/image/upload/v1766005609/cae169ed-9dd2-4c60-a7ac-38744ce5a48f.png"
                            alt="Logo"
                            style={{ width: "150px" }}
                          />
                        </Link>
                      </div>

                      <div className="main-menu__main-menu-box">
                        <div
                          className="mobile-nav__toggler d-lg-none"
                          onClick={handleMobileMenu}
                        >
                          <i className="fa fa-bars" />
                        </div>

                        <ul className="main-menu__list d-none d-lg-flex mb-0">
                          <MenuItems
                            parentMenu={parentMenu}
                            secondParentMenu={secondParentMenu}
                            activeMenu={activeMenu}
                          />
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Right Side */}
                  <div className="col-lg-3 col-md-4 col-12 d-none d-lg-block">
                    <div className="main-menu__right d-flex justify-content-lg-end justify-content-center mt-3 mt-md-0">
                      <div className="main-menu__search-nav-sidebar-btn-box">
                        <div className="main-menu__btn-box">
                          <Link to="/about" className="thm-btn main-menu__btn">
                            Read more
                            <span />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ✅ End Bootstrap Grid */}
              </div>
            </div>
          </nav>
        </div>

        <MobileMenu handleMobileMenu={handleMobileMenu} />
      </header>

      <SearchPopup isPopup={isPopup} handlePopup={handlePopup} />
      <Sidebar isSidebar={isSidebar} handleSidebar={handleSidebar} />
    </React.Fragment>
  );
};

export default Header;
