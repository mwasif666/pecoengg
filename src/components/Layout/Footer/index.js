import React from "react";
import { Link } from "react-router-dom";

// Import default images
import footerLogo1 from "../../../assets/images/resources/footer-logo-1.png";
import FAQsection from "../../../pages/home/FAQsection";

const Footer = ({
  footerLogo = footerLogo1,

  footerClass = "site-footer",
  aboutText = "Progressive Engineering Company (PECO), established in 2006 in Karachi, serves Pakistan’s Oil, Gas, Petrochemical, Refineries, Power Generation, Water and General Engineering sectors. PECO is a trusted supplier of Mass Transfer Components, Bulk Piping Material, Valves, Hoses, and Accessories, and also provides Engineering & Feasibility Studies, Process Design Packages, and Detailed Engineering.",
  contactInfo = [
    {
      icon: "icon-envolop email-icon",
      text: "project@pecoengg.com",
      link: "mailto:project@pecoengg.com",
    },
    {
      icon: "icon-location location-icon",
      text: "10-C 3rd Floor Khayaban-e-Bukhari",
    },
    {
      icon: "icon-call phone-call",
      text: "0092 213 525 0176",
      link: "tel:00922135250176",
    },
  ],
  companyLinks = [
    { text: "About Us", link: "/about" },
    { text: "Product Portfolio", link: "/project" },
    { text: "Contact Us", link: "/contact" },
  ],

  newsletterUrl = "MC_FORM_URL",
  newsletterText = "Financial planners help people to gain knowledge about",

  copyrightText = "© Pecoengg 2025 | All Rights Reserved",
}) => {
  return (
    <>
      {/*Site Footer Start*/}
      <footer className={footerClass}>
        <div className="site-footer__top">
          <div className="container">
            <div className="site-footer__top-inner">
              <div className="row">
                <div
                  className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  <div className="footer-widget__column footer-widget__company">
                    <div className="footer-widget__title-box">
                      <h3 className="footer-widget__title">Usefull Links</h3>
                    </div>
                    <ul className="footer-widget__company-list list-unstyled">
                      {companyLinks.map((link, index) => (
                        <li key={index}>
                          <Link to={link.link}>{link.text}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="400ms"
                >
                  <div className="footer-widget__column footer-widget__newsletter">
                    <div className="footer-widget__title-box">
                      <h3 className="footer-widget__title">Contact Us</h3>
                    </div>
                    <ul className="footer-widget__about-contact list-unstyled">
                      {contactInfo.map((info, index) => (
                        <li key={index}>
                          <div className="icon">
                            <span className={info.icon} />
                          </div>
                          <p>
                            {info.link ? (
                              <a href={info.link}>{info.text}</a>
                            ) : (
                              info.text
                            )}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <div className="mc-form__response" />
                  </div>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-12">
                  <FAQsection />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <div className="container">
            <div className="site-footer__bottom-inner">
              <p className="site-footer__bottom-text">{copyrightText}</p>
              <p className="site-footer__bottom-text">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="text-white"
                  href="https://innovationpixel.com"
                >
                  Develop by innovationpixel
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/*Site Footer End*/}
    </>
  );
};

export default Footer;
