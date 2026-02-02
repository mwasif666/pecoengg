import React, { useEffect, useState } from "react";
import BackToTop from "../../components/elements/BackToTop";
import Header from "../../components/Layout/Header";
import navImg1 from "../../assets/images/resources/logo-1.png";
import Footer from "../../components/Layout/Footer";
import SiteBreadcrumb from "../../components/Common/Breadcumb";
import ProjectMain from "./ProjectMain";

// Breadcrumbs Background Image

const Project = () => {
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
      <Header navImg={navImg1} parentMenu="projects" activeMenu="/projects" />
      {/* SiteBreadcrumb */}
      <SiteBreadcrumb
        pageTitle="Projects"
        pageName="Projects"
        breadcrumbsImg="https://res.cloudinary.com/dndfzn6h3/image/upload/v1766955827/project_wipmqv.png"
      />
      {/* SiteBreadcrumb */}
      <ProjectMain />
   
    
      {/*cta-section end */}
      <BackToTop scroll={isVisible} />
      <Footer />
    </React.Fragment>
  );
};

export default Project;
