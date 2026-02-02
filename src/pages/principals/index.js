import React, { useEffect, useState } from "react";
import BackToTop from "../../components/elements/BackToTop";
import Header from "../../components/Layout/Header";
import navImg1 from "../../assets/images/resources/logo-1.png";
import Footer from "../../components/Layout/Footer";
import SiteBreadcrumb from "../../components/Common/Breadcumb";
import PrincipalsMasonry from "../home/PrincipalsMasonry";

// Breadcrumbs Background Image

const Principals = () => {
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
      <Header navImg={navImg1} parentMenu="/services" activeMenu="/services" />
      {/* SiteBreadcrumb */}
      <SiteBreadcrumb
        pageTitle="OUR PRINCIPALS"
        pageName="OUR PRINCIPALS"
        breadcrumbsImg="https://res.cloudinary.com/dndfzn6h3/image/upload/v1766960914/principal_vi29gv.png"
      />
      <div className="pb-5 mb-5">
        <PrincipalsMasonry />
      </div>

      <BackToTop scroll={isVisible} />
      <Footer />
    </React.Fragment>
  );
};

export default Principals;
