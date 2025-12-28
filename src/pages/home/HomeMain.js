import React from "react";
import Banner from "./Banner";
import ServicesOne from "./ServicesOne";
import WhyChoose from "./WhyChoose";
import Project from "./Project";
import About from "./AboutSection";
import WhyareweSec from "./WhyAreWeSec";
import Brand from "./Brand";
import TestimonialsSection from "./TestimonialsSection";
import FAQsection from "./FAQsection";
import PrincipalsMasonry from "./PrincipalsMasonry";
import VisionMission from "../../components/HomeTwo/VisionMission";

const HomeMain = () => {
  return (
    <React.Fragment>
      <Banner />
      <ServicesOne />
      <WhyChoose />
      <Project />
      <About />
      <PrincipalsMasonry />
      <VisionMission />
      {/* <Features /> */}
      <Brand />
      {/* <Team /> */}
      <WhyareweSec />
      <FAQsection />
      <TestimonialsSection />
      {/* <Blog /> */}
    </React.Fragment>
  );
};

export default HomeMain;
