import React, { useState } from "react";

const faqData = [
  {
    key: 1,
    question: "What is PECO and when was it established?",
    answer:
      "Progressive Engineering Company (PECO) was established in 2006 in Karachi to cater to the needs of Pakistan’s Oil and Petrochemical industry. Since then, PECO has built a strong market reputation as a trusted supplier and engineering services provider.",
  },
  {
    key: 2,
    question: "Which industries does PECO serve?",
    answer:
      "PECO supports a wide range of sectors including Oil & Gas, Petrochemical, Refineries, Power Generation, Water, General Engineering, and Fertilizer industries across Pakistan.",
  },
  {
    key: 3,
    question: "What products does PECO supply?",
    answer:
      "PECO supplies Mass Transfer Components, Bulk Piping Materials, Valves, Hoses, and related Accessories. The company also stocks a wide range of spares and equipment to meet client requirements.",
  },
 
 
];

function FAQsection() {
  const [isActive, setIsActive] = useState({ status: false, key: 1 });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({ status: false, key: null });
    } else {
      setIsActive({ status: true, key });
    }
  };

  return (
    <section className="faq-one">
      <div className="faq-one__bg-color" />
      <div className="container">
        <div className="row">
          {/* LEFT FAQ */}
          <div className="col-xl-6 col-lg-6">
            <div className="faq-one__left">
              <div className="section-title text-left">
                <div className="section-title__tagline-box">
                  <span className="section-title__tagline">FAQ</span>
                </div>
                <h2 className="section-title__title">
                  Do You Have Any
                  <br /> Questions?
                </h2>
              </div>

              <div
                className="accrodion-grp faq-one-accrodion"
                data-grp-name="faq-one-accrodion-1"
              >
                {faqData.map((item) => (
                  <div
                    key={item.key}
                    className={
                      isActive.key === item.key ? "accrodion active" : "accrodion"
                    }
                    onClick={() => handleToggle(item.key)}
                  >
                    <div className="accrodion-title">
                      <h4>{item.question}</h4>
                    </div>

                    <div
                      className={
                        isActive.key === item.key
                          ? "accrodion-content current"
                          : "accrodion-content"
                      }
                    >
                      <div className="inner">
                        <p>{item.answer}</p>
                      </div>
                    </div>

                    <div className="faq-page__count"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT FORM (same as your layout) */}
          <div className="col-xl-6 col-lg-6">
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
                      <input type="text" name="name" placeholder="Your Name" required />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6">
                    <div className="faq-one__input-box">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
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

                  <div className="col-xl-6 col-lg-6">
                    <div className="faq-one__input-box">
                      <div className="select-box">
                        <select defaultValue="Choose an Option" className="selectmenu wide">
                          <option>Choose an Option</option>
                          <option>Product Supply Inquiry</option>
                          <option>Valves & Pipeline Systems</option>
                          <option>Mass Transfer Components</option>
                          <option>Engineering / Feasibility Study</option>
                          <option>Process Design Package</option>
                          <option>Detailed Engineering</option>
                        </select>
                      </div>
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
                        Submit Now<span />
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
