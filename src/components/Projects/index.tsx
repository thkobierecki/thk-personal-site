import React from "react";
import Image from "next/image";
import Card from "../Card";

const projectsData = [
  {
    id: 1,
    title: "E-commerce Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium, nisl vel elementum blandit, nisi dolor gravida urna, sed pulvinar ipsum sapien non nibh. Suspendisse vel tortor eget mauris faucibus volutpat sit amet ut sapien. Fusce vel nunc urna. ",
    image: "https://source.unsplash.com/random/800x600",
    link: "/project/1",
  },
  {
    id: 2,
    title: "Travel Blog",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium, nisl vel elementum blandit, nisi dolor gravida urna, sed pulvinar ipsum sapien non nibh. Suspendisse vel tortor eget mauris faucibus volutpat sit amet ut sapien. Fusce vel nunc urna. ",
    image: "https://source.unsplash.com/random/800x600",
    link: "/project/2",
  },
  {
    id: 3,
    title: "Recipe App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium, nisl vel elementum blandit, nisi dolor gravida urna, sed pulvinar ipsum sapien non nibh. Suspendisse vel tortor eget mauris faucibus volutpat sit amet ut sapien. Fusce vel nunc urna. ",
    image: "https://source.unsplash.com/random/800x600",
    link: "/project/3",
  },
];


const Projects = () => {
  return (
    <div className="py-10 lg:py-10">
      <div className="flex-col mb-10 lg:mb-20">
        <h2 className="text-2xl lg:text-4xl font-bold text-primary">
          Projects
        </h2>
        <div className="mt-3">
          <Image src="/zigzag.svg" alt="Zigzag" width={180} height={20} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row mx-auto">
        {projectsData.map((project) => (
          <Card
            key={project.id}
            title={project.title}
            image={project.image}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
