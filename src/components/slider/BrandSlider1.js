import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "../../assets/css/onpoint.css"; // ✅ GLOBAL CSS (NO MODULE)

import BrandSliderImg1 from "../../assets/images/brand/brand-1-1.png";
import BrandSliderImg2 from "../../assets/images/brand/brand-1-2.png";
import BrandSliderImg3 from "../../assets/images/brand/brand-1-3.png";
import BrandSliderImg4 from "../../assets/images/brand/brand-1-4.png";
import BrandSliderImg5 from "../../assets/images/brand/brand-1-5.png";
import BrandSliderImg6 from "../../assets/images/brand/brand-1-6.png";
import BrandSliderImg7 from "../../assets/images/brand/brand-1-7.png";
import BrandSliderImg8 from "../../assets/images/brand/brand-1-8.png";
import BrandSliderImg9 from "../../assets/images/brand/brand-1-9.png";
import BrandSliderImg10 from "../../assets/images/brand/brand-1-10.png";
import BrandSliderImg11 from "../../assets/images/brand/brand-1-11.png";
import BrandSliderImg12 from "../../assets/images/brand/brand-1-12.png";
import BrandSliderImg13 from "../../assets/images/brand/brand-1-13.png";
import BrandSliderImg14 from "../../assets/images/brand/brand-1-14.png";
import BrandSliderImg15 from "../../assets/images/brand/brand-1-15.png";
import BrandSliderImg16 from "../../assets/images/brand/brand-1-16.png";
import BrandSliderImg17 from "../../assets/images/brand/brand-1-17.png";
import BrandSliderImg18 from "../../assets/images/brand/brand-1-18.png";
import BrandSliderImg19 from "../../assets/images/brand/brand-1-19.png";
import BrandSliderImg20 from "../../assets/images/brand/brand-1-20.png";
import BrandSliderImg21 from "../../assets/images/brand/brand-1-21.png";


const brands = [
  BrandSliderImg1,
  BrandSliderImg2,
  BrandSliderImg3,
  BrandSliderImg4,
  BrandSliderImg5,
  BrandSliderImg6,
  BrandSliderImg7,
  BrandSliderImg8,
  BrandSliderImg9,
  BrandSliderImg10,
  BrandSliderImg11,
  BrandSliderImg12,
  BrandSliderImg13,
  BrandSliderImg14,
  BrandSliderImg15,
  BrandSliderImg16,
  BrandSliderImg17,
  BrandSliderImg18,
  BrandSliderImg19,
  BrandSliderImg20,
  BrandSliderImg21,
];

const base = {
  modules: [Autoplay],
  loop: true,
  speed: 5000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  allowTouchMove: false,
  slidesPerView: "auto",
  spaceBetween: 0,
};

export default function BrandSlider() {
  const top = [...brands, ...brands, ...brands];
  const bottom = [...brands, ...brands, ...brands];

  return (
    <section className="wrapper">
      {/* 🔹 TOP ROW (LEFT → RIGHT) */}
      <Swiper
        {...base}
        autoplay={{ ...base.autoplay, reverseDirection: true }}
        className="slider"
      >
        {top.map((img, i) => (
          <SwiperSlide key={`top-${i}`} className="slide">
            <div className="cell">
              <img src={img} alt="brand" className="logo" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 🔹 BOTTOM ROW (RIGHT → LEFT) */}
      <Swiper {...base} className="sliderBottom">
        {bottom.map((img, i) => (
          <SwiperSlide key={`bottom-${i}`} className="slide">
            <div className="cell">
              <img src={img} alt="brand" className="logo" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
