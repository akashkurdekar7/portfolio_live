import React from "react";
import { PROJECTS } from "../../constants";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section className="pb-12">
      {/* Heading */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-16 text-5xl text-center text-white font-black-side"
      >
        My Projects
      </motion.h2>

      {/* Projects Display */}
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {PROJECTS.map((project) => (
            <motion.div
              key={project.title}
              className="relative p-6 overflow-hidden rounded-lg shadow-lg group hover:shadow-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
            >
              {/* Project Image */}
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1 }}
                className="relative flex justify-center overflow-hidden rounded-lg"
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-64 transition-transform duration-300 rounded-lg group-hover:scale-105"
                  loading="lazy"
                />
              </motion.div>
              {/* Project Details */}
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 1 }}
                className="mt-6"
              >
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
              </motion.div>
              {/* Hover Overlay */}
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 text-lg font-semibold text-white transition duration-300 ease-in-out bg-gray-700 rounded-lg hover:bg-gray-800"
                >
                  GitHub Repo <FaGithub className="ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
