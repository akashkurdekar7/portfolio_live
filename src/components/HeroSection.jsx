import React from "react";
import profile from "../assets/profile.jpg";
import { ABOUT_TEXT } from "../../constants/index.js";
import { motion } from "framer-motion";

const ContainerVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, staggerChildren: 0.5 },
  },
};

const ChildVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center pb-4 lg:mb-20">
      {/* Card Section */}
      <div className="flex flex-col w-full max-w-full p-8 shadow-lg rounded-xl lg:flex-row">
        {/* Left Content - About Text */}
        <div className="w-full mb-6 text-center lg:w-1/2 lg:text-left lg:mb-0">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={ContainerVariant}
            className="flex flex-col items-center lg:items-start"
          >
            <motion.h2
              variants={ChildVariant}
              className="pb-2 text-5xl tracking-tighter text-white lg:text-6xl font-black-side"
            >
              About
            </motion.h2>

            <motion.p
              variants={ChildVariant}
              className="max-w-lg py-6 text-xl leading-relaxed tracking-tighter text-stone-600"
            >
              I’m Akash Kurdekar, a passionate Full Stack Developer with a
              strong foundation in the MERN stack and Java. With a deep interest
              in building scalable web solutions, I focus on creating seamless
              and intuitive user experiences. My journey in web development
              started with a keen interest in technology and design, and over
              time, I’ve developed expertise in both frontend and backend
              development.
              <br />
              <br />
              Alongside my technical skills, I am constantly exploring new ways
              to enhance my abilities and stay updated with industry trends. I’m
              driven by the challenge of creating products that not only meet
              user needs but also push the boundaries of what’s possible in web
              development.
              <br />
              <br />
              Outside of coding, I enjoy photography, cricket, and traveling,
              which help me stay creative and inspired.
            </motion.p>
          </motion.div>
        </div>

        {/* Right Content - Image */}
        <div className="flex justify-center w-full mb-6 lg:w-1/2 lg:mb-0">
          <motion.img
            src={profile}
            alt="Hello From Here"
            className="w-full shadow-lg border-stone-900 rounded-3xl lg:w-auto"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          />
        </div>
      </div>

      {/* Download Button - Centered Below Card */}
      <div className="flex justify-center mt-8">
        <motion.a
          variants={ChildVariant}
          href="/Akash_BE_CSE_2024.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="p-4 text-sm capitalize bg-white rounded-full text-stone-900 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] transition duration-300 ease-in-out"
        >
          Download Resume
        </motion.a>
      </div>
    </div>
  );
};

export default HeroSection;
