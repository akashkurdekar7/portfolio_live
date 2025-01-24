import React, { useState } from "react";
import { PROJECTS } from "../../constants";

const techFilters = [
  "All",
  "React",
  "Node.js",
  "MongoDB",
  "Express",
  "JavaScript",
];

const Projects = () => {
  const [filteredProjects, setFilteredProjects] = useState(PROJECTS);
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filterProjects = (tech) => {
    setSelectedFilter(tech);
    setFilteredProjects(
      tech === "All"
        ? PROJECTS
        : PROJECTS.filter((project) => project.technologies.includes(tech))
    );
  };

  return (
    <section className="pb-12">
      <h2 className="my-16 text-5xl text-center text-white font-black-side">
        My Projects
      </h2>

      <div className="flex justify-center mb-10 space-x-4">
        {techFilters.map((tech) => (
          <button
            key={tech}
            className={`px-4 py-2 text-sm font-semibold rounded-lg ${
              selectedFilter === tech
                ? "bg-blue-600 text-white"
                : "bg-gray-800 text-stone-300 hover:bg-gray-700"
            }`}
            onClick={() => filterProjects(tech)}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Projects Display */}
      <div className="grid gap-12 lg:grid-cols-2">
        {filteredProjects.map((project) => (
          <div
            key={project.title}
            className="relative w-auto p-6 rounded-lg shadow-lg group hover:shadow-2xl"
          >
            <div className="relative overflow-hidden text-center rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                width={250}
                height={250}
                className="transition-transform duration-300 rounded-lg group-hover:scale-105"
              />
            </div>
            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-4 text-stone-400">{project.description}</p>
              <div className="flex flex-wrap mt-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 m-1 text-sm font-medium bg-gray-800 rounded-full text-stone-300 hover:bg-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100">
              {/* View Project Button */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-lg font-semibold text-white bg-gray-700 rounded-lg  hover:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] transition duration-300 ease-in-out mr-4"
              >
                Live Project
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-lg font-semibold text-white  bg-gray-700 rounded-lg  hover:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] transition duration-300 ease-in-out mr-4"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
