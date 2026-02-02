import React, { useEffect, useState } from "react";
import BackToTop from "../../components/elements/BackToTop";
import Header from "../../components/Layout/Header";
import navImg1 from "../../assets/images/resources/logo-1.png";
import Footer from "../../components/Layout/Footer";
import SiteBreadcrumb from "../../components/Common/Breadcumb";
import AboutMain from "./AboutMain";

// Breadcrumbs Background Image

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <React.Fragment>
      <Header navImg={navImg1} parentMenu="about" activeMenu="/about" />
      {/* SiteBreadcrumb */}
      <SiteBreadcrumb
        pageTitle="About US"
        pageName="About US"
        breadcrumbsImg="https://res.cloudinary.com/dndfzn6h3/image/upload/v1766954901/about_o2siit.png"
      />
      {/* SiteBreadcrumb */}
      <AboutMain />

      <BackToTop scroll={isVisible} />
      <Footer />
    </React.Fragment>
  );
};

export default About;
