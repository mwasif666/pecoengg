import React from "react";

// ⚠️ path adjust kar lena agar folder different ho
import processShapeImage from "../../assets/images/shapes/process-one-shape-1.png";

const VisionMission = () => {
  const processOneData = {
    tagline: "",
    title: "Our Commitment & Our Future Plan",
    processes: [
      {
        shapeImage: processShapeImage,
        title: "Our Commitment",
        description:
          "Our future is based on consistent advancement; however, our everyday tasks wouldn't be imaginable without our employees' commitment to direct business with strong integrity and incredible skill. We strongly believe that a service providing company is identified by their dedication and commitment. We feel proud to state that Progressive Engineering Company in their 16 years business history has never fallback with our pledge to any single client.",
      },
      {
        shapeImage: processShapeImage,
        title: "Our Future Plan",
        description:
          "Introduce Innovative technology and products to Pakistan Industrial sector. To set-up state-of-the-art Rotary workshop in Collaboration with our foreign Principal and technology transfer. Provide products/services for power conservation projects. To provide asset management techniques and create network among Pakistan’s industries to sale/purchase surplus assets within Pakistan.",
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

export default VisionMission;
