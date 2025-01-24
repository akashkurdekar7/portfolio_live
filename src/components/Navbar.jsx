import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-2">
      <div className="flex items-center flex-shrink-0">
        <a href="/" aria-label="Home">
          {/* <img src={logo} className="mx-2" width={50} height={33} alt="logo" /> */}
          <h3 className="text-4xl text-white font-brittany-signature">
            Akash Kurdekar
          </h3>
        </a>
      </div>

      <div className="flex items-center justify-center gap-4 m-8 text-2xl text-white">
        <a
          href="https://www.linkedin.com/in/akashkurdekar/"
          target="_blank"
          aria-label="Linkedin"
          rel="noopener noreferrer"
          className="p-2 transition duration-300 rounded-full hover:text-white"
        >
          <FaLinkedin className="transition duration-300 hover:scale-125" />
        </a>
        <a
          href="https://github.com/akashkurdekar7"
          target="_blank"
          aria-label="Github"
          rel="noopener noreferrer"
          className="p-2 transition duration-300 rounded-full hover:text-white"
        >
          <FaGithub className="transition duration-300 hover:scale-125" />
        </a>
        <a
          href="https://www.instagram.com/unlikeakash_/"
          target="_blank"
          aria-label="Instagram"
          rel="noopener noreferrer"
          className="p-2 transition duration-300 rounded-full hover:text-white"
        >
          <FaInstagram className="transition duration-300 hover:scale-125" />
        </a>
        <a
          href="https://leetcode.com/u/akash_kurdekar/"
          target="_blank"
          aria-label="Twitter"
          rel="noopener noreferrer"
          className="p-2 transition duration-300 hover:text-white"
        >
          <SiLeetcode className="transition duration-300 hover:scale-125" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
