import React from "react";
import BrandSlider1 from "../../components/slider/BrandSlider1";

const Brand = () => {
  return (
    <>
      {/*Brand One Start*/}
      <section className="brand-one slider-sec" id="clients">
        <div className="container">
          <h1 className="slider-heading">Our Valueable CLients</h1>
          <BrandSlider1 />
        </div>
      </section>
      {/*Brand One End*/}
    </>
  );
};
export default Brand;
