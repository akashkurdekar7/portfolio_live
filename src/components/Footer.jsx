import React from "react";
import { CONTACT } from "../../constants/index.js";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa"; // Using icons for a modern touch

const Footer = () => {
  return (
    <div className="pb-20 text-white border-t border-stone-900">
      <h2 className="my-10 text-4xl text-center font-black-side font">
        Get in touch
      </h2>

      <div className="max-w-3xl mx-auto space-y-6 text-center">
        <div className="flex items-center justify-center space-x-4">
          <FaEnvelope size={24} />
          <p className="text-lg">{CONTACT.email}</p>
        </div>

        <div className="flex items-center justify-center space-x-4">
          <FaPhoneAlt size={24} />
          <p className="text-lg">{CONTACT.phoneNo}</p>
        </div>

        <div className="flex items-center justify-center space-x-4">
          <FaMapMarkerAlt size={24} />
          <p className="text-lg">{CONTACT.address}</p>
        </div>
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
