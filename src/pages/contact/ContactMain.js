import React from "react";
import useContactForm, {
  CONTACT_FORM_ACTION,
  CONTACT_FORM_EMAIL_TO,
} from "../../components/hooks/useContactForm";

const ContactMain = () => {
  const {
    formRef,
    handleSubmit,
    isSubmitting,
    toastMessage,
    isToastVisible,
  } = useContactForm();

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
                    <a href="tel:00922135250761">0092 21 35250761</a>
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
                    17-C, 1st Floor, Khayaban e Muslim,
                    <br /> Cinepex Cinema Road, DHA Phase 06, Karachi
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
                  <p>
                    <a href="mailto:muzamil@pecoengg.com">
                      muzamil@pecoengg.com
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
      <section className="contact-two mb-5">
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
                  ref={formRef}
                  className="contact-form-validated contact-two__form"
                  method="post"
                  action={CONTACT_FORM_ACTION}
                  onSubmit={handleSubmit}
                  noValidate="novalidate"
                >
                  <input
                    type="hidden"
                    name="email_to"
                    value={CONTACT_FORM_EMAIL_TO}
                  />
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
                          placeholder="Email"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-12">
                      <div className="contact-two__input-box">
                        <input
                          type="text"
                          name="subject"
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
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Submitting..." : "Submit Now"}
                          <span />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div
                  className={`contact-toast ${
                    isToastVisible ? "is-visible" : ""
                  }`}
                  role="status"
                  aria-live="polite"
                >
                  {toastMessage}
                </div>
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
    </React.Fragment>
  );
};

export default ContactMain;
