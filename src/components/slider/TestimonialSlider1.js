import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import testimonialImg1 from '../../assets/images/testimonial/testimonial-1-1.jpg';
import testimonialImg2 from '../../assets/images/testimonial/testimonial-1-2.jpg';
import testimonialImg3 from '../../assets/images/testimonial/testimonial-1-3.jpg';
import testimonialImg4 from '../../assets/images/testimonial/testimonial-1-4.jpg';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 2000,
    loop: true,
    pagination: {
        el: '.swiper-dot-style1',
        type: 'bullets',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1',
    },
    autoplay: { delay: 9000 },
    breakpoints: {
        0: {
            spaceBetween: 0,
            slidesPerView: 1,
        },
        375: {
            spaceBetween: 0,
            slidesPerView: 1,
        },
        575: {
            spaceBetween: 0,
            slidesPerView: 1,
        },
        768: {
            spaceBetween: 30,
            slidesPerView: 1,
        },
        992: {
            spaceBetween: 30,
            slidesPerView: 1,
        },
        1200: {
            spaceBetween: 30,
            slidesPerView: 1,
        },
        1320: {
            spaceBetween: 30,
            slidesPerView: 1,
        },
    },
};

export default function TestimonialSlider1() {
    return (
        <Swiper {...swiperOptions} className="thm-swiper__slider swiper-container">
            <SwiperSlide className="swiper-slide">
                <div className="testimonial-one__single">
                    <div className="testimonial-one__quote">
                        <span className="icon-quote" />
                    </div>
                    <div className="testimonial-one__client-img">
                        {/* <img src={testimonialImg1} alt="Testimonial from Pervaiz Rizvi" /> */}
                    </div>
                    <div className="testimonial-one__ratting">
                        <span className="icon-star" />
                        <span className="icon-star" />
                        <span className="icon-star" />
                        <span className="icon-star" />
                        <span className="icon-star last-star" />
                    </div>
                    <h3 className="testimonial-one__client-name">
                        Pervaiz Rizvi
                    </h3>
                    <p className="testimonial-one__client-sub-title">
                        Process Consultant, ENAR Petroleum Refining Facility (EPRF)
                    </p>
                    <p className="testimonial-one__text">
                        I know Progressive Engineering Company for many years and found them very responsive, technically sound, and reliable partners in Refinery’s equipment supplies. We also have good experience working with their principals like Sulzer pumps, Sulzer Chemtech and GTC Technologies.
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <div className="testimonial-one__single">
                    <div className="testimonial-one__quote">
                        <span className="icon-quote" />
                    </div>
                    <div className="testimonial-one__client-img">
                        {/* <img src={testimonialImg2} alt="Testimonial from Fahad Ejaz" /> */}
                    </div>
                    <div className="testimonial-one__ratting">
                        <span className="icon-star" />
                        <span className="icon-star" />
                        <span className="icon-star" />
                        <span className="icon-star" />
                        <span className="icon-star last-star" />
                    </div>
                    <h3 className="testimonial-one__client-name">
                        Fahad Ejaz
                    </h3>
                    <p className="testimonial-one__client-sub-title">
                        Dalda Foods Ltd.
                    </p>
                    <p className="testimonial-one__text">
                        I know Progressive Engineering Company from the days I had been working for National Refinery, SIAD Compressor supplied by them in NRL and Dalda Foods are reliable machines, also Sulzer pumps supplied to NRL are also robust pumps.
                    </p>
                </div>
            </SwiperSlide>
          
        </Swiper>
    );
}
