import React from "react";
import WhyAreWe from "../../components/About/WhyAreWe";
import image1 from "../../assets/images/resources/why-are-we-img-1.jpg";
import image2 from "../../assets/images/resources/why-are-we-img-2.jpg";
import About from "../home/AboutSection";
import VisionMission from "../../components/HomeTwo/VisionMission";
import WhyChoose from "../home/WhyChoose";
import WhyAreWeSec from "../home/WhyAreWeSec";
import TestimonialsSection from "../home/TestimonialsSection";
import Brand from "../home/Brand";

const AboutMain = () => {
  const counters = [
    {
      iconClass: "icon-schedule",
      end: 100,
      suffix: "+",
      text: "Our Happy Customers",
    },
    {
      iconClass: "icon-schedule",
      end: 2,
      suffix: "k",
      plus: true,
      text: "Our Team Members",
    },
    {
      iconClass: "icon-schedule",
      end: 3,
      suffix: "k",
      plus: true,
      text: "Our Client Reviews",
    },
  ];
  const points = [
    {
      iconClass: "why-are-we__icon",
      arrowIcon: "icon-arrow-down-left",
      icon: "icon-location why-are-we__location",
      heading: "Real Time tracking",
      text: "Logistic service involves the implementation and control",
    },
    {
      iconClass: "why-are-we__icon-2",
      arrowIcon: "icon-arrow-down-right",
      icon: "icon-shopping-cart why-are-we__cart",
      heading: "On time delivery",
      text: "Logistic service involves the implementation and control",
    },
    {
      iconClass: "",
      arrowIcon: "",
      icon: "icon-call why-are-we__call",
      heading: "24/7 online support",
      text: "Logistic service involves the implementation and control",
    },
  ];

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
