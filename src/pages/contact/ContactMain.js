import React from "react";
import CtaSection from "../../components/Common/CtaSection";
import bannerbg from "../../assets/images/resources/cta-one-bg-img.jpg";
import shapeImageUrl from "../../assets/images/shapes/cta-one-shape-1.png";
import ContactMainImg from "../../assets/images/resources/contact-two-img-1.jpg";

const ContactMain = () => {
  return (
    <React.Fragment>
      {/*Contact One Start*/}
      <section className="contact-one">
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline">Contact us</span>
            </div>
            <h2 className="section-title__title">Get in Touch With Us</h2>
          </div>
          <div className="contact-one__inner">
            <ul className="contact-one__contact-list list-unstyled">
              <li>
                <div className="icon">
                  <span className="icon-call" />
                </div>
                <div className="content">
                  <h3>Lets Talk us</h3>
                  <p>
                    <a href="tel:+923042343554">+92 304 2343554</a>
                  </p>
                  <p>
                    <a href="tel:+923332369094">+92 333 2369094</a>
                  </p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <span className="icon-location location-icon" />
                </div>
                <div className="content">
                  <h3>Address</h3>
                  <p>
                    Head Office 10-C 3rd Floor
                    <br /> Khayaban-e-Bukhari, Phase 6 DHA
                  </p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <span className="icon-envolop email-icon" />
                </div>
                <div className="content">
                  <h3>Send us email</h3>
                  <p>
                    <a href="mailto:project@pecoengg.com">
                      project@pecoengg.com
                    </a>
                  </p>
                  <p>
                    <a href="mailto:syedali@pecoengg.com">
                      syedali@pecoengg.com
                    </a>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/*Contact One End*/}
      {/*Contact Two Start*/}
      <section className="contact-two">
        <div className="container">
          <div className="row">
            <div className="col-xl-7">
              <div className="contact-two__left">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                    <span className="section-title__tagline">Contact</span>
                  </div>
                  <h2 className="section-title__title">Get Touch Here</h2>
                </div>
                <form
                  className="contact-form-validated contact-two__form"
                  action="assets/inc/sendemail.php"
                  method="post"
                  noValidate="novalidate"
                >
                  <div className="row">
                    <div className="col-xl-6 col-lg-6">
                      <div className="contact-two__input-box">
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="contact-two__input-box">
                        <input
                          type="email"
                          name="email"
                          placeholder="E-mail"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-12">
                      <div className="contact-two__input-box">
                        <input
                          type="text"
                          name="text"
                          placeholder="Subject"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="contact-two__input-box text-message-box">
                        <textarea
                          name="message"
                          placeholder="Message"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className=" col-xl-12">
                      <div className="contact-two__btn-box">
                        <button
                          type="submit"
                          className="thm-btn contact-two__btn"
                        >
                          Submit Now
                          <span />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="result" />
              </div>
            </div>
            <div className="col-xl-5">
              <div className="contact-two__right">
                <div className="contact-two__img">
                  <img
                    src="https://res.cloudinary.com/dndfzn6h3/image/upload/v1766958567/contactform_gjw116.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Contact Two End*/}
      {/*Google Map Start*/}
      <section className="google-map-one google-map-two">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d226.37719910949625!2d67.06300762761704!3d24.79424866166014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ceeb8266663%3A0xb5b6274e1b3ae31d!2s10%20Khayaban-e-Bukhari%2C%20Bukhari%20Commercial%20Area%20Phase%206%20Defence%20Housing%20Authority%2C%20Karachi%2C%2075500%2C%20Pakistan!5e0!3m2!1sen!2s!4v1766958905469!5m2!1sen!2s"
          className="google-map__one"
          allowFullScreen=""
          title="Google Map showing Costco Wholesale location"
        />
      </section>

      {/*Google Map End*/}
    </React.Fragment>
  );
};

export default ContactMain;
