import React from "react";
import greet from "../assets/Profile.webp";
import { HERO_CONTENT } from "../../constants/index.js";
import { easeInOut, motion, transform } from "framer-motion";

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
    <div className="pb-4 lg:mb-20">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={greet}
              alt="Hello From Here"
              className="border-stone-900 rounded-3xl"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            // animate="visible"
            whileInView="visible"
            variants={ContainerVariant}
            className="flex flex-col items-center mt-10 lg:items-start"
          >
            <motion.h2
              variants={ChildVariant}
              className="pb-2 text-4xl tracking-tighter text-white lg:text-8xl"
            >
              Akash Kurdekar
            </motion.h2>

            <motion.span
              variants={ChildVariant}
              className="text-3xl tracking-tight text-transparent bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={ChildVariant}
              className="max-w-lg py-6 text-xl leading-relaxed tracking-tighter text-transparent bg-gradient-to-r to-stone-300 from-stone-600 bg-clip-text"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              variants={ChildVariant}
              href="/Akash_BE_CSE_2024.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="p-4 mb-10 text-sm capitalize bg-white rounded-full text-stone-100 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] transition duration-300 ease-in-out"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
