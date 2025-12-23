// import Swiper core and required modules
import { Link } from "react-router-dom";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import BannerTitleIcon from "../../assets/images/icon/main-slider-sub-title-icon.png";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

function Banner() {
  return (
    <>
      <section className="main-slider">
        <Swiper
          {...swiperOptions}
          className="swiper-container thm-swiper__slider"
        >
          {/* Slide 1 – Oil Refinery */}
          <SwiperSlide>
            <div
              className="main-slider__bg"
              style={{
                backgroundImage: `url(https://res.cloudinary.com/dndfzn6h3/image/upload/v1766005561/582256640-refinery-16x9_gt2vtx.jpg)`,
              }}
            />
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="main-slider__content">
                    <div className="main-slider__sub-title-box">
                      <div className="main-slider__sub-title-icon">
                        <img src={BannerTitleIcon} alt="" />
                      </div>
                      <p className="main-slider__sub-title">
                        Progressive Engineering Company
                      </p>
                    </div>

                    <h2 className="main-slider__title">
                      Oil <span>Refinery</span> <br /> Engineering Solutions
                    </h2>

                    <div className="main-slider__call">
                      <div className="main-slider__call-icon">
                        <span className="icon-phone" />
                      </div>
                      <div className="main-slider__call-number">
                        <p>Need help?</p>
                        <h5>
                          <Link to="tel:307555-0133">(307) 555-0133</Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 – Crude Oil Pipelines */}
          <SwiperSlide>
            <div
              className="main-slider__bg"
              style={{
                backgroundImage: `url(https://res.cloudinary.com/dndfzn6h3/image/upload/v1766006410/cea000dc-9555-485d-a9cb-b6512cc8395c.png)`,
              }}
            />
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="main-slider__content">
                    <div className="main-slider__sub-title-box">
                      <div className="main-slider__sub-title-icon">
                        <img src={BannerTitleIcon} alt="" />
                      </div>
                      <p className="main-slider__sub-title">
                        Progressive Engineering Company
                      </p>
                    </div>

                    <h2 className="main-slider__title">
                      Crude Oil <span>Pipeline</span> <br /> Systems & Valves
                    </h2>

                    <div className="main-slider__call">
                      <div className="main-slider__call-icon">
                        <span className="icon-phone" />
                      </div>
                      <div className="main-slider__call-number">
                        <p>Need help?</p>
                        <h5>
                          <Link to="tel:307555-0133">(307) 555-0133</Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 – Gas Turbine */}
          <SwiperSlide>
            <div
              className="main-slider__bg"
              style={{
                backgroundImage: `url(https://res.cloudinary.com/dndfzn6h3/image/upload/v1766006248/597b1ecf-29f3-4265-a02e-a8aeb6afc678.png)`,
              }}
            />
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="main-slider__content">
                    <div className="main-slider__sub-title-box">
                      <div className="main-slider__sub-title-icon">
                        <img src={BannerTitleIcon} alt="" />
                      </div>
                      <p className="main-slider__sub-title">
                        Progressive Engineering Company
                      </p>
                    </div>

                    <h2 className="main-slider__title">
                      Gas <span>Turbine</span> <br /> Power Generation Solutions
                    </h2>

                    <div className="main-slider__call">
                      <div className="main-slider__call-icon">
                        <span className="icon-phone" />
                      </div>
                      <div className="main-slider__call-number">
                        <p>Need help?</p>
                        <h5>
                          <Link to="tel:307555-0133">(307) 555-0133</Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
              
        <div className="swiper-pagination" id="main-slider-pagination" />
      </section>
    </>
  );
}

export default Banner;
