import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGithub,
} from "react-icons/fa";

const Greet = () => {
  return (
    <div className="relative flex h-[550px] flex-col items-center justify-center ">
      <div className="relative z-10 ">
        <h3 className="text-white font-brittany-signature uppercase  hover:lowercase text-7xl transform hover:font-black-side hover:rotate-[360deg] hover:scale-[160%] transition duration-300 ease-linear cursor-pointer text-center">
          Hello
        </h3>
      </div>

      <div className="absolute inset-0 flex items-center justify-center w-full">
        <div className="relative w-[100%] h-[400px]">
          <div className="absolute top-0 transition duration-300 ease-in-out transform -translate-x-1/2 left-1/2 hover:scale-125 hover:rotate-45">
            <FaReact size={40} className="text-blue-500" />
          </div>

          <div className="absolute right-0 transition duration-300 ease-in-out transform -translate-y-1/2 top-1/2 hover:scale-125">
            <FaNodeJs size={40} className="text-green-500" />
          </div>

          <div className="absolute bottom-0 transition duration-300 ease-in-out transform -translate-x-1/2 left-1/2 hover:scale-125">
            <FaHtml5 size={40} className="text-orange-500" />
          </div>

          {/* CSS3 Icon */}
          <div className="absolute left-0 transition duration-300 ease-in-out transform -translate-y-1/2 top-1/2 hover:scale-125">
            <FaCss3Alt size={40} className="text-blue-600" />
          </div>

          {/* JavaScript Icon */}
          <div className="absolute top-[15%] left-[23%] hover:scale-125 transition duration-300 ease-in-out">
            <FaJsSquare size={40} className="text-yellow-500" />
          </div>

          {/* GitHub Icon */}
          <div className="absolute bottom-[15%] right-[15%] hover:scale-125 transition duration-300 ease-in-out">
            <FaGithub size={40} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greet;
