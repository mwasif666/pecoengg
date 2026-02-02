import React from "react";


function FAQsection() {
  return (
    <section className="faq-one">
      <div className="container">
        <div className="row">
          {/* RIGHT FORM (same as your layout) */}
          <div className="col-xl-12">
            <div className="faq-one__right">
              <h3 className="faq-one__from-title">Get in Touch with PECO</h3>

              <form
                className="contact-form-validated faq-one__form"
                action="assets/inc/sendemail.php"
                method="post"
                noValidate="novalidate"
              >
                <div className="row">
                  <div className="col-xl-6 col-lg-6">
                    <div className="faq-one__input-box">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6">
                    <div className="faq-one__input-box">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="faq-one__input-box">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="faq-one__input-box text-message-box">
                      <textarea name="message" placeholder="Message here.." />
                    </div>
                  </div>

                  <div className="col-xl-12">
                    <div className="faq-one__btn-box">
                      <button type="submit" className="thm-btn faq-one__btn">
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
        </div>
      </div>
    </section>
  );
}

export default FAQsection;
