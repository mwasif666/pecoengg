import React from "react";
import About from "../home/AboutSection";
import VisionMission from "../../components/HomeTwo/VisionMission";
import WhyChoose from "../home/WhyChoose";
import WhyAreWeSec from "../home/WhyAreWeSec";
import TestimonialsSection from "../home/TestimonialsSection";
import Brand from "../home/Brand";

const AboutMain = () => {
  return (
    <React.Fragment>
      <div className="mt-5 pt-5">
        <About />
      </div>
      <VisionMission />
      <WhyChoose />
      <div className="mb-5 pb-5">
        <Brand />
      </div>
      <WhyAreWeSec />
      <TestimonialsSection />
    </React.Fragment>
  );
};

export default AboutMain;
