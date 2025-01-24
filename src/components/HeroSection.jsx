import React from "react";
import greet from "../assets/greet.png";
import { HERO_CONTENT } from "../../constants/index.js";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={greet}
              alt="Hello From Here"
              className="border-stone-900 rounded-3xl"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <motion.div className="flex flex-col items-center mt-10 lg:items-start">
            <h2 className="pb-2 text-4xl tracking-tighter text-white lg:text-8xl">
              Akash Kurdekar
            </h2>

            <span className="text-3xl tracking-tight text-transparent bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text">
              Full Stack Developer
            </span>
            <p className="max-w-lg py-6 text-xl leading-relaxed tracking-tighter text-transparent bg-gradient-to-r to-stone-300 from-stone-600 bg-clip-text">
              {HERO_CONTENT}
            </p>
            <a
              href="/Akash_BE_CSE_2024.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="p-4 mb-10 text-sm capitalize bg-white rounded-full text-stone-100 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] transition duration-300 ease-in-out"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
