import React from "react";
import Banner from "./Banner";
import WhyChoose from "./WhyChoose";
import About from "./AboutSection";
import WhyareweSec from "./WhyAreWeSec";
import Brand from "./Brand";
import TestimonialsSection from "./TestimonialsSection";
import PrincipalsMasonry from "./PrincipalsMasonry";
import VisionMission from "../../components/HomeTwo/VisionMission";

const HomeMain = () => {
  return (
    <React.Fragment>
      <Banner />
      <About />
      <VisionMission />
      {/* <ServicesOne /> */}
      <WhyChoose />
      {/* <Project /> */}
      <PrincipalsMasonry />
      {/* <Features /> */}
      <Brand />
      {/* <Team /> */}
      <WhyareweSec />

      <TestimonialsSection />
      {/* <Blog /> */}
    </React.Fragment>
  );
};

export default HomeMain;
