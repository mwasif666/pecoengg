import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../../assets/images/resources/footer-logo-1.png";

const MobileMenu = ({ handleMobileMenu }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };

  return (
    <>
      <div className="mobile-nav__wrapper">
        <div
          className="mobile-nav__overlay mobile-nav__toggler"
          onClick={handleMobileMenu}
        ></div>
        <div className="mobile-nav__content">
          <span
            className="mobile-nav__close mobile-nav__toggler"
            onClick={handleMobileMenu}
          >
            <i className="fa fa-times"></i>
          </span>

          <div className="logo-box">
            <Link to="/" aria-label="logo image">
              <img
                src="https://res.cloudinary.com/dndfzn6h3/image/upload/v1766005609/cae169ed-9dd2-4c60-a7ac-38744ce5a48f.png"
                width="150"
                alt="Logo"
                style={{
                  filter: "brightness(0) invert(1)",
                }}
              />
            </Link>
          </div>

          <div className="mobile-nav__container">
            <div
              className="collapse navbar-collapse show clearfix"
              id="navbarSupportedContent"
            >
              <ul className="main-menu__list">
                <li>
                  <Link to="/" onClick={handleMobileMenu}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" onClick={handleMobileMenu}>
                    About
                  </Link>
                </li>

                <li>
                  <Link to="/services" onClick={handleMobileMenu}>
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/project" onClick={handleMobileMenu}>
                    Projects
                  </Link>
                </li>

                <li>
                  <Link to="/contact" onClick={handleMobileMenu}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope"></i>
              <Link to="project@pecoengg.com">project@pecoengg.com</Link>
            </li>
            <li>
              <i className="fa fa-envelope"></i>
              <Link to="syedali@pecoengg.com">syedali@pecoengg.com</Link>
            </li>
            <li>
              <i className="fa fa-phone-alt"></i>
              <Link to="tel:+923042343554">+92 304 234 3554</Link>
            </li>
            <li>
              <i className="fa fa-phone-alt"></i>
              <Link to="tel:+9233232369094">+92 33 236 9094</Link>
            </li>
          </ul>
          {/* <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <Link to="#" className="fab fa-twitter"></Link>
              <Link to="#" className="fab fa-facebook-square"></Link>
              <Link to="#" className="fab fa-pinterest-p"></Link>
              <Link to="#" className="fab fa-instagram"></Link>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
