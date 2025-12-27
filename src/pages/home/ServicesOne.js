import React from "react";
import { FaCheckCircle, FaShippingFast, FaCertificate } from "react-icons/fa";
import ServiceItem from "../../components/Service/ServiceItem";

const ServicesOne = () => {
  const services = [
    {
      icon: <FaCheckCircle />,
      title: "Highest Quality Standards",
      description:
        "We ensure the highest quality standards across all process industry equipment without any compromise.",
    },
    {
      icon: <FaShippingFast />,
      title: "Timely Delivery Commitment",
      description:
        "We are committed to timely delivery of goods and materials to meet project schedules.",
    },
    {
      icon: <FaCertificate />,
      title: "Certified Genuine Products",
      description:
        "We supply only genuine products certified by their respective international principals.",
    },
  ];

  return (
    <>
      {/* Services One Start */}
      <section className="services-one">
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline">QUALITY POLICY</span>
            </div>
            <h2 className="section-title__title">
              Commitment to Quality
              <br /> & Customer Satisfaction
            </h2>
          </div>

          <div className="row">
            {services.map((service, index) => (
              <div key={index} className="col-xl-4 col-lg-4">
                <ServiceItem
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Services One End */}
    </>
  );
};

export default ServicesOne;
