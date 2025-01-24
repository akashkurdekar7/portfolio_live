import React from "react";
import { CONTACT } from "../../constants/index.js";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa"; // Using icons for a modern touch
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="pb-20 text-white border-t border-stone-900">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-4xl text-center font-black-side font"
      >
        Get in touch
      </motion.h2>

      <div className="max-w-3xl mx-auto space-y-6 text-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center space-x-4"
        >
          <FaEnvelope size={24} />
          <p className="text-lg">{CONTACT.email}</p>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center space-x-4"
        >
          <FaPhoneAlt size={24} />
          <p className="text-lg">{CONTACT.phoneNo}</p>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center space-x-4"
        >
          <FaMapMarkerAlt size={24} />
          <p className="text-lg">{CONTACT.address}</p>
        </motion.div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm">
          &copy; 2025 Akash Kurdekar. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
