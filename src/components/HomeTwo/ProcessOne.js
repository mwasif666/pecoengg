import React from "react";

// ⚠️ path adjust kar lena agar folder different ho
import processShapeImage from "../../assets/images/shapes/process-one-shape-1.png";

const ProcessOne = () => {
  const processOneData = {
    tagline: "",
    title: "Our Commitment & Our Future Plan",
    processes: [
      {
        shapeImage: processShapeImage,
        title: "Our Commitment",
        description:
          "Our future is built on continuous progress, but our daily operations are driven by the dedication, integrity, and expertise of our people. We believe a service-oriented company is defined by commitment. Proudly, Progressive Engineering Company has consistently honored every promise throughout sixteen years of trusted business relationships.",
      },
      {
        shapeImage: processShapeImage,
        title: "Our Future Plan",
        description:
          "Our future plan focuses on introducing innovative technologies to Pakistan’s industrial sector, establishing a state-of-the-art rotary workshop with international principals, enabling technology transfer, supporting power conservation initiatives, & developing asset management networks that allow industries to efficiently trade surplus assets within Pakistan.",
      },
    ],
  };

  return (
    <section className="process-one">
      <div className="container">
        {/* Heading */}
        <div className="section-title text-center">
          <div className="section-title__tagline-box">
            <span className="section-title__tagline">
              {processOneData.tagline}
            </span>
          </div>

          <h2
            className="section-title__title"
            dangerouslySetInnerHTML={{ __html: processOneData.title }}
          />
        </div>

        {/* Cards */}
        <div className="row">
          {processOneData.processes.map((process, index) => (
            <div
              key={index}
              className="col-xl-6 col-lg-6 wow fadeInUp"
              data-wow-delay={`${100 * (index + 1)}ms`}
            >
              <div className="process-one__single">
                {/* Number */}
                <div className="process-one__count">
                  {/* {String(index + 1).padStart(2, "0")} */}
                </div>

                <h3 className="process-one__title">{process.title}</h3>

                {/* ✅ Icon removed */}
                <div className="process-one__icon-and-text">
                  <p>{process.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessOne;
