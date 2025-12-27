import React from "react";

const PrincipalsMasonry = () => {
  const principals = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dndfzn6h3/image/upload/v1766774495/chemtech_cnysqg.png",
      category: "Our Principals",
      title: "Sulzer Chemtech",
      description: "Process technology & separation solutions",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dndfzn6h3/image/upload/v1766774493/pumps_wfr1ds.png",
      category: "Our Principals",
      title: "Sulzer Pumps",
      description: "Industrial pumping systems & support",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dndfzn6h3/image/upload/v1766774495/turbo_zkrqzr.png",
      category: "Our Principals",
      title: "Sulzer Turbo Machinery",
      description: "High-performance rotating equipment",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/dndfzn6h3/image/upload/v1766774495/GTC_i4mxjd.png",
      category: "Our Principals",
      title: "Sulzer GTC",
      description: "Gas treatment & process expertise",
    },
    {
      id: 5,
      image:
        "https://res.cloudinary.com/dndfzn6h3/image/upload/v1766774495/siad_vkalom.png",
      category: "Our Principals",
      title: "SIAD Macchine Impianti",
      description: "Compression & industrial gas systems",
    },
    {
      id: 6,
      image:
        "https://res.cloudinary.com/dndfzn6h3/image/upload/v1766774494/Chromalox_zzgtzm.png",
      category: "Our Principals",
      title: "Chromalox",
      description: "Electrical process heaters & tracing",
    },
    {
      id: 7,
      image:
        "https://res.cloudinary.com/dndfzn6h3/image/upload/v1766774493/Filters_eycxg4.png",
      category: "Our Principals",
      title: "Filters",
      description: "Filtration solutions for industry",
    },
    {
      id: 8,
      image:
        "https://res.cloudinary.com/dndfzn6h3/image/upload/v1766774495/Peroni_jtcrl0.png",
      category: "Our Principals",
      title: "Peroni Pompe",
      description: "Reliable pump technologies",
    },
    {
      id: 9,
      image:
        "https://res.cloudinary.com/dndfzn6h3/image/upload/v1766774495/JST_s3kkql.png",
      category: "Our Principals",
      title: "JST Pipes",
      description: "Piping solutions & components",
    },
    {
      id: 10,
      image:
        "https://res.cloudinary.com/dndfzn6h3/image/upload/v1766774494/Euro_nulvzo.png",
      category: "Our Principals",
      title: "Euro Gas System",
      description: "Gas systems & safety solutions",
    },
    {
      id: 11,
      image:
        "https://res.cloudinary.com/dndfzn6h3/image/upload/v1766774494/filteration_cnvbot.png",
      category: "Our Principals",
      title: "Filtration Technologies",
      description: "High-efficiency filtration for industrial processes",
    },
  ];

  return (
    <section
      className="projects-one"
      style={{
        paddingTop: "80px",
        paddingBottom: "80px",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div className="container">
        <div className="section-title text-center">
          <div className="section-title__tagline-box">
            <span className="section-title__tagline">OUR PRINCIPALS</span>
          </div>
          <h2 className="section-title__title">
            Trusted Global Partners
            <br /> We Represent
          </h2>
        </div>

        {/* ✅ Masonry grid */}
        <div className="masonry-portfolio">
          {principals.map((item) => (
            <div key={item.id} className="masonry-item">
              <div className="masonry-card">
                <img
                  className="masonry-img"
                  src={item.image}
                  alt={item.title}
                />

                {/* ✅ Hover overlay card (bottom) */}
                <div className="masonry-overlay">
                  {/* <span className="masonry-cat">{item.category}</span> */}
                  <h3 className="project-two__title">{item.title}</h3>
                  <p className="masonry-desc">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrincipalsMasonry;
