import React from "react";
import projects from "@/data/content/projects";
import ProjectCard from "./ProjectCard";
import { Project } from "types";

type ProjectProps = {
  overwriteProjects?: Project[];
};

function Projects({ overwriteProjects }: ProjectProps) {
  const projectsList = overwriteProjects || projects;

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
      {projectsList.map((item) => (
        <ProjectCard key={item.id} project={item} />
      ))}
    </div>
  );
}

export default Projects;
