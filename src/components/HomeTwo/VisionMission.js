import React from "react";

// ⚠️ path adjust kar lena agar folder different ho
import processShapeImage from "../../assets/images/shapes/process-one-shape-1.png";

const VisionMission = () => {
  const processOneData = {
    tagline: "",
    title: "Our Vision & Our Mission",
    processes: [
      {
        shapeImage: processShapeImage,
        title: "Our Vision",
        description:
          "Our future is based on consistent advancement; however, our everyday tasks wouldn't be imaginable without our employees' commitment to direct business with strong integrity and incredible skill. We strongly believe that a service providing company is identified by their dedication and commitment. We feel proud to state that Progressive Engineering Company in their 16 years business history has never fallback with our pledge to any single client.",
      },
      {
        shapeImage: processShapeImage,
        title: "Our Mission",
        description:
          "Our mission is to deliver high-quality and cost-effective industrial process products while ensuring excellent customer satisfaction through continuous training and ongoing quality improvement. We strive to set new trends in development by supporting industry professionals in advancing their expertise. At the same time, we actively explore global markets to identify innovative solutions that can be introduced locally, helping enhance production efficiency and improve the quality of final products.",
      },
    ],
  };

  return (
    <section className="process-one vision">
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
              <div className="process-one__single1">
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

export default VisionMission;
