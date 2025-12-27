import React from "react";
import WhyAreWe from "../../components/About/WhyAreWe";

const WhyAreWeSec = () => {
  const points = [
    {
      number: "50+",
      heading: "Reputed Clients",
      text: "We are proud to have worked with over 50+ well-known clients from various industries.",
      arrowIcon: "icon-arrow-down-left", // agar aapke layout me arrows use hote hain
    },
    {
      number: "20+",
      heading: "Different Industries",
      text: "We have the expertise to work with clients from over 20+ different industries.",
      arrowIcon: "icon-arrow-down-right",
    },
    {
      number: "15+",
      heading: "Years of Experience",
      text: "We bring 15+ years of experience delivering reliable solutions with proven client trust.",
      arrowIcon: "", // last me arrow optional
    },
  ];

  return (
    <WhyAreWe
      imageSrc1="https://res.cloudinary.com/dndfzn6h3/image/upload/v1766774495/GTC_i4mxjd.png"
      imageSrc2="https://res.cloudinary.com/dndfzn6h3/image/upload/v1766849686/young-engineer-adjusting-autonomous-heating-min-scaled-rf7u6yuhll77mdn1dxyi3fuqoiowpgu65kvs1gwj8w_joo26e.jpg"
      tagline="WHAT WE DO"
      title="WE ARE THE BEST AT WHAT WE DO."
      points={points}
      year="Since 2006"
      yearDescription="Delivering high-quality and cost-effective solutions with a strong focus on customer satisfaction, training, and continuous improvement."
    />
  );
};

export default WhyAreWeSec;
