import React from "react";
import ProjectCard from "../../components/Project/ProjectCard";

const ProjectMain = () => {
  // Example data
  const projectsData = [
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dndfzn6h3/image/upload/v1766698363/img-627x405_PumpComparison_pmlku1.png",
      title: "Centrifugal & Reciprocating Pumps",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dndfzn6h3/image/upload/v1766697606/ct_6_1_liquid_distributor_1920x1280_kvn1nj.jpg",
      title: "Column Internals, Trays & Packing",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/dndfzn6h3/image/upload/v1766697607/reciprocating-compressor_kaagnn.jpg",
      title: "Reciprocating Compressors",
    },
    {
      id: 5,
      image:
        "https://res.cloudinary.com/dndfzn6h3/image/upload/v1766697607/ProcessBurners-HP-Stock-scaled_a6ljm9.webp",
      title: "Process Burners & Heating",
    },
    {
      id: 6,
      image:
        "https://res.cloudinary.com/dndfzn6h3/image/upload/v1766699052/Air_-_AF_eowcn6.webp",
      title: "Flare Systems",
    },
    {
      id: 6,
      image:
        "https://res.cloudinary.com/dndfzn6h3/image/upload/v1766956481/project6_biq5jt.png",
      title: "Electrical Heaters & Heat Tracing",
    },
    {
      id: 7,
      image:
        "https://res.cloudinary.com/dndfzn6h3/image/upload/v1766957482/project7_ra35nx.png",
      title: "Valves, Pipe Fittings & Flanges",
    },
    {
      id: 6,
      image:
        "https://res.cloudinary.com/dndfzn6h3/image/upload/v1766957698/project8_dthqwz.png",
      title: "Studs, Bolts & Gaskets.",
    },
    // Add more project data here as needed
  ];

  return (
    <React.Fragment>
      {/*Project Page Start*/}
      <ProjectCard projects={projectsData} />
      {/*Project Page End*/}
    </React.Fragment>
  );
};

export default ProjectMain;
