import React from 'react';
import BrandSlider1 from '../../components/slider/BrandSlider1'
import CounterUp from 'react-countup'; // Make sure you have this installed

const Brand = ( ) => {
    
    return (
        <>
            {/*Brand One Start*/}
            <section className="brand-one slider-sec">
              <div className="container">
                <h1 className="slider-heading">
                  Trusted By
                </h1>
                <BrandSlider1/>
              </div>
            </section>
            {/*Brand One End*/}
        </>
    );
}
export default Brand;