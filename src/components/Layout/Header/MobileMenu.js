import { Link } from "react-router-dom";

const MobileMenu = ({ handleMobileMenu }) => {
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
                src="https://res.cloudinary.com/dndfzn6h3/image/upload/v1770786270/Peccoengglogo_fl4fby.png"
                width="150"
                alt="Logo"
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
                  <Link to="/principals" onClick={handleMobileMenu}>
                    Our Principals
                  </Link>
                </li>
                <li>
                  <Link to="/#clients" onClick={handleMobileMenu}>
                    Clients
                  </Link>
                </li>
                <li>
                  <Link to="/product-portfolio" onClick={handleMobileMenu}>
                    Product Portfolio
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
              <div className="contact-group">
                <Link to="mailto:project@pecoengg.com">
                  project@pecoengg.com
                </Link>
                <Link to="mailto:syedali@pecoengg.com">
                  syedali@pecoengg.com
                </Link>
                <Link to="mailto:muzamil@pecoengg.com">
                  muzamil@pecoengg.com
                </Link>
              </div>
            </li>
            <li>
              <i className="fa fa-phone-alt"></i>
              <div className="contact-group">
                <Link to="tel:00922135250761">0092 21 35250761</Link>
                <Link to="tel:+923332369094">+92 333 2369094</Link>
              </div>
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
