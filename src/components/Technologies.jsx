import React from "react";
import { DiNodejs } from "react-icons/di";
import { FaCuttlefish, FaFigma, FaGitAlt, FaJava } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import {
  PiMicrosoftExcelLogo,
  PiMicrosoftPowerpointLogo,
  PiMicrosoftWordLogo,
} from "react-icons/pi";
import { RiCss3Fill, RiHtml5Fill, RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiMysql, SiPostman } from "react-icons/si";
import { motion } from "framer-motion";

const IconVariant = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -20],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 bg-transparent">
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        transition={{
          duration: 1.5,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mb-10 text-4xl font-bold tracking-wide text-white font-black-side"
      >
        My Tech Stack
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={IconVariant(1.5)}
          className="flex flex-col items-center justify-center p-6 transition duration-300 ease-in-out border-2 border-transparent rounded-lg shadow-blue group hover:shadow-lg"
        >
          <RiReactjsLine className="text-6xl text-blue-500 transition-transform duration-200 ease-in-out group-hover:scale-110" />
          <p className="mt-4 font-medium text-gray-800">React.js</p>
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={IconVariant(2.5)}
          className="flex flex-col items-center justify-center p-6 transition duration-300 ease-in-out border-2 border-transparent rounded-lg shadow-green group hover:shadow-lg"
        >
          <DiNodejs className="text-6xl text-green-500 transition-transform duration-200 ease-in-out group-hover:scale-110" />
          <p className="mt-4 font-medium text-gray-800">Node.js</p>
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={IconVariant(3.5)}
          className="flex flex-col items-center justify-center p-6 transition duration-300 ease-in-out border-2 border-transparent rounded-lg shadow-orange group hover:shadow-lg"
        >
          <RiHtml5Fill className="text-6xl text-orange-500 transition-transform duration-200 ease-in-out group-hover:scale-110" />
          <p className="mt-4 font-medium text-gray-800">HTML5</p>
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={IconVariant(1.5)}
          className="flex flex-col items-center justify-center p-6 transition duration-300 ease-in-out border-2 border-transparent rounded-lg shadow-blue group hover:shadow-lg"
        >
          <RiCss3Fill className="text-6xl text-blue-600 transition-transform duration-200 ease-in-out group-hover:scale-110" />
          <p className="mt-4 font-medium text-gray-800">CSS3</p>
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={IconVariant(2.5)}
          className="flex flex-col items-center justify-center p-6 transition duration-300 ease-in-out border-2 border-transparent rounded-lg shadow-green group hover:shadow-lg"
        >
          <FaJava className="text-6xl text-red-600 transition-transform duration-200 ease-in-out group-hover:scale-110" />
          <p className="mt-4 font-medium text-gray-800">Java</p>
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={IconVariant(3.5)}
          className="flex flex-col items-center justify-center p-6 transition duration-300 ease-in-out border-2 border-transparent rounded-lg shadow-purple group hover:shadow-lg"
        >
          <FaCuttlefish className="text-6xl text-purple-600 transition-transform duration-200 ease-in-out group-hover:scale-110" />
          <p className="mt-4 font-medium text-gray-800">C++</p>
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={IconVariant(1.5)}
          className="flex flex-col items-center justify-center p-6 transition duration-300 ease-in-out border-2 border-transparent rounded-lg shadow-green group hover:shadow-lg"
        >
          <SiMongodb className="text-6xl text-green-600 transition-transform duration-200 ease-in-out group-hover:scale-110" />
          <p className="mt-4 font-medium text-gray-800">MongoDB</p>
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={IconVariant(2.5)}
          className="flex flex-col items-center justify-center p-6 transition duration-300 ease-in-out border-2 border-transparent rounded-lg shadow-blue group hover:shadow-lg"
        >
          <SiMysql className="text-6xl text-blue-500 transition-transform duration-200 ease-in-out group-hover:scale-110" />
          <p className="mt-4 font-medium text-gray-800">MySQL</p>
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={IconVariant(3.5)}
          className="flex flex-col items-center justify-center p-6 transition duration-300 ease-in-out border-2 border-transparent rounded-lg shadow-orange group hover:shadow-lg"
        >
          <SiPostman className="text-6xl text-orange-500 transition-transform duration-200 ease-in-out group-hover:scale-110" />
          <p className="mt-4 font-medium text-gray-800">Postman</p>
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={IconVariant(2.5)}
          className="flex flex-col items-center justify-center p-6 transition duration-300 ease-in-out border-2 border-transparent rounded-lg shadow-purple group hover:shadow-lg"
        >
          <FaFigma className="text-6xl text-purple-500 transition-transform duration-200 ease-in-out group-hover:scale-110" />
          <p className="mt-4 font-medium text-gray-800">Figma</p>
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={IconVariant(3.5)}
          className="flex flex-col items-center justify-center p-6 transition duration-300 ease-in-out border-2 border-transparent rounded-lg shadow-blue group hover:shadow-lg"
        >
          <PiMicrosoftWordLogo className="text-6xl text-blue-700 transition-transform duration-200 ease-in-out group-hover:scale-110" />
          <p className="mt-4 font-medium text-gray-800">Word</p>
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={IconVariant(0.5)}
          className="flex flex-col items-center justify-center p-6 transition duration-300 ease-in-out border-2 border-transparent rounded-lg shadow-pink group hover:shadow-lg"
        >
          <FaGithub className="text-6xl text-white transition-transform duration-200 ease-in-out group-hover:scale-110" />
          <p className="mt-4 font-medium text-gray-800">Git/GitHub</p>
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={IconVariant(3.5)}
          className="flex flex-col items-center justify-center p-6 transition duration-300 ease-in-out border-2 border-transparent rounded-lg shadow-red group hover:shadow-lg"
        >
          <PiMicrosoftPowerpointLogo className="text-6xl text-red-600 transition-transform duration-200 ease-in-out group-hover:scale-110" />
          <p className="mt-4 font-medium text-gray-800">PowerPoint</p>
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={IconVariant(0.5)}
          className="flex flex-col items-center justify-center p-6 transition duration-300 ease-in-out border-2 border-transparent rounded-lg shadow-green group hover:shadow-lg"
        >
          <PiMicrosoftExcelLogo className="text-6xl text-green-700 transition-transform duration-200 ease-in-out group-hover:scale-110" />
          <p className="mt-4 font-medium text-gray-800">Excel</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
