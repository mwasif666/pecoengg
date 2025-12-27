import React from "react";
import ProjectCard from "../../components/Project/ProjectCard";
import projectImg2 from "../../assets/images/project/project-2-2.jpg";
import projectImg3 from "../../assets/images/project/project-2-3.jpg";
import projectImg4 from "../../assets/images/project/project-2-4.jpg";
import projectImg5 from "../../assets/images/project/project-2-5.jpg";

const Project = () => {
  // Example data
  const projectsData = [
    {
      id: 1,
      category: "Express Logistics",
      title: "Delivering success through logistics",
      content: "Seamless logistics for your logo",
      link: "/project-details",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dndfzn6h3/image/upload/v1766698363/img-627x405_PumpComparison_pmlku1.png",
      title: "Centrifugal & Reciprocating Pumps",
      link: "/project-details",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dndfzn6h3/image/upload/v1766697606/ct_6_1_liquid_distributor_1920x1280_kvn1nj.jpg",
      title: "Column Internals, Trays & Packing",
      link: "/project-details",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/dndfzn6h3/image/upload/v1766697607/reciprocating-compressor_kaagnn.jpg",
      title: "Reciprocating Compressors",
      link: "/project-details",
    },
    {
      id: 5,
      image:
        "https://res.cloudinary.com/dndfzn6h3/image/upload/v1766697607/ProcessBurners-HP-Stock-scaled_a6ljm9.webp",
      title: "Process Burners & Heating",
      link: "/project-details",
    },
    {
      id: 6,
      image:
        "https://res.cloudinary.com/dndfzn6h3/image/upload/v1766699052/Air_-_AF_eowcn6.webp",
      title: "Flare & Piping Systems",
      link: "/project-details",
    },

    // Add more project data here as needed
  ];

  return (
    <>
      {/*Project Two Start*/}
      <ProjectCard projects={projectsData} />
      {/*Project Two End*/}
    </>
  );
};

export default Project;
