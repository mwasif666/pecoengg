import React from "react";
import { Link } from "react-router-dom";
import WhyChooseImg1 from "../../assets/images/resources/why-choose-one-img-1.jpg";
import { BsCheckCircleFill } from "react-icons/bs";
import ProcessOne from "../../components/HomeTwo/ProcessOne";

const WhyChoose = () => {
  const services = [
    {
      name: "Technological know-how",
      active: false,
    },
    {
      name: "Focused on assisting our clients with arriving at their objectives.",
      active: true,
    },
    {
      name: "Strong grip on root cause analysis.",
      active: false,
    },
    {
      name: "We are always trying to improve and adapt.",
      active: false,
    },
    {
      name: "Guarantee the best worth is acquired.",
      active: false,
    },
    {
      name: "A one-stop solution for everything you need",
      active: false,
    },
  ];

  return (
    <>
      {/* Why Choose One Start */}
      <section className="why-choose-one">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="why-choose-one__left">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                    <span className="section-title__tagline">
                      Why Choose us
                    </span>
                  </div>
                  <h2 className="section-title__title">
                    The Difference <br />
                    That Sets Us Apart
                  </h2>
                </div>

                <div className="services-details__services-box">
                  {/* <h3 className="services-details__services-list-title">Reasons To Choose Us</h3> */}
                  <ul className="services-details__service-list list-unstyled">
                    {services.map((service, index) => (
                      <li
                        key={index}
                        className={service.active ? "active" : ""}
                      >
                        <div className="icon">
                          <span className="icon-dabble-arrow" />
                        </div>
                        <p>
                          <Link to={service.link}>{service.name}</Link>
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="why-choose-one__btn-box">
                  <Link to="/about" className="thm-btn why-choose-one__btn">
                    Download Brochure
                    <span />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="why-choose-one__right">
                <div
                  className="why-choose-one__img wow slideInRight"
                  data-wow-delay="100ms"
                  data-wow-duration="2500ms"
                >
                  <img src={WhyChooseImg1} alt="Why Choose Us" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="work-process">
        <div className="container">
          <ProcessOne />
        </div>
      </section>
    </>
  );
};

export default WhyChoose;
