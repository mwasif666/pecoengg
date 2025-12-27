import React from "react";
import AboutOne from "../../components/About/AboutOne";
import aboutImage from "../../assets/images/shapes/about-one-shape-1.png";

const aboutImg =
  "https://res.cloudinary.com/dndfzn6h3/image/upload/v1766700442/Post-Images-6-1024x576_mvzkbp.png";

const About = () => {
  return (
    <>
      {/* ===== INTERNAL CSS FIXES ===== */}
      <style>
        {`
          /* ✅ SHOW DECORATIVE SHAPE */
          .about-one .about-one__shape,
          .about-one .about-one__shape-1,
          .about-one .decorative-shape,
          .about-one .about-one__bg-shape {
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
          }

          /* ❌ REMOVE TRUSTED CUSTOMER BADGE */
          .about-one .about-one__trusted,
          .about-one .about-one__trusted-box,
          .about-one .trusted-customer,
          .about-one .trusted-box {
            display: none !important;
          }

          /* ❌ REMOVE READ MORE BUTTON (IMPORTANT FIX) */
          .about-one .about-one__btn,
          .about-one .about-one__btn-box,
          .about-one .about-one__button,
          .about-one a.thm-btn,
          .about-one .read-more,
          .about-one .about-one__read-more {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
          }

          /* ✅ RIGHT IMAGE ALIGNMENT */
          .about-one .about-one__right,
          .about-one .about-one__img-box,
          .about-one .about-one__imgbox {
            display: flex;
            justify-content: flex-end;
            align-items: center;
          }

          /* ❌ HIDE SECOND IMAGE */
          .about-one .about-one__img-2 {
            display: none !important;
          }

          /* ✅ SINGLE LARGE IMAGE */
          .about-one .about-one__img-box img,
          .about-one .about-one__imgbox img,
          .about-one .about-one__img-1 img,
          .about-one .about-one__right img {
            width: 100% !important;
           
            height: 420px !important;
            object-fit: cover !important;
            border-radius: 28px !important;
            box-shadow: 0 20px 50px rgba(0,0,0,0.15) !important;
            display: block !important;
          }

          /* ✅ RESPONSIVE */
          @media (max-width: 991px) {
            .about-one .about-one__img-box,
            .about-one .about-one__imgbox {
              justify-content: center !important;
              margin-top: 25px;
            }

            .about-one .about-one__img-box img,
            .about-one .about-one__imgbox img,
            .about-one .about-one__img-1 img,
            .about-one .about-one__right img {
              height: 300px !important;
              border-radius: 22px !important;
            }
          }
        `}
      </style>

      {/* ===== ABOUT SECTION ===== */}
      <AboutOne
        className="about-one"
        tagline="About Us"
        title="Progressive Engineering Company (PECO)"
        description="Progressive Engineering Company (PECO), established in 2006 in Karachi, serves Pakistan’s Oil, Gas, Petrochemical, Refineries, Power Generation, Water and General Engineering sectors. PECO is a trusted supplier of Mass Transfer Components, Bulk Piping Material, Valves, Hoses, and Accessories, and also provides Engineering & Feasibility Studies, Process Design Packages, and Detailed Engineering."
        listItems={[
          {
            iconClass: "icon-conveyor-1",
            title:
              "Trusted supplier of valves, pipeline systems, and industrial components",
          },
          {
            iconClass: "icon-fragile",
            title:
              "Importer / Trader / Indenter with global sourcing from reputed manufacturers",
          },
          {
            iconClass: "icon-clock",
            title:
              "Engineering services including feasibility studies, process design packages & detailed engineering",
          },
        ]}
        images={{
          shapeImage: aboutImage,
          photo1: aboutImg,
        }}
        imgAltTexts={{
          photo1: "PECO industrial engineering facility",
        }}
      />
    </>
  );
};

export default About;
