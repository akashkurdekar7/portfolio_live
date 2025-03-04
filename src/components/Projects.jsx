import React from "react";
import { PROJECTS } from "../../constants";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <section className="pb-12" id="projects">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-12 text-4xl font-bold text-center text-white"
      >
        My Projects
      </motion.h2>

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {PROJECTS.map((project) => (
            <motion.div
              key={project.title}
              className="relative p-6 overflow-hidden rounded-lg shadow-lg group hover:shadow-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative flex justify-center overflow-hidden rounded-lg"
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-56 transition-transform duration-300 rounded-lg group-hover:scale-105"
                  loading="lazy"
                />
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="mt-4"
              >
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm text-stone-400">
                  {project.description.length > 100
                    ? project.description.substring(0, 100) + "..."
                    : project.description}
                </p>
                <div className="flex flex-wrap mt-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 m-1 text-xs font-medium bg-gray-800 rounded-full text-stone-300 hover:bg-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
              {/* Hover Overlay */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100"
                whileHover={{ opacity: 1 }}
              >
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-5 py-2 text-sm font-semibold text-white transition duration-300 ease-in-out bg-gray-700 rounded-lg hover:bg-gray-800"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    GitHub <FaGithub className="ml-2" />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-5 py-2 text-sm font-semibold text-white transition duration-300 ease-in-out bg-blue-700 rounded-lg hover:bg-blue-800"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      Live Demo <FaExternalLinkAlt className="ml-2" />
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
