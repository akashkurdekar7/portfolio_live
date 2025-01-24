import React from "react";
import { EXPERIENCES } from "./../../constants/index";

const Experience = () => {
  return (
    <div className="pb-4">
      <h2 className="my-20 text-4xl text-center text-white font-black-side">
        Experience
      </h2>

      <div>
        {EXPERIENCES.map((e, index) => (
          <div key={index} className="flex flex-wrap mb-0 lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p className="mb-4 text-sm text-stone-400">{e.year}</p>
            </div>

            <div className="w-full max-w-xl mb-6 lg:w-3/4">
              <h3 className="mb-2 font-semibold">
                {e.role}
                <span className="text-sm text-stone-500">
                  {" "}
                  <span className="text-stone-100">-</span> {e.company}
                </span>
              </h3>

              <p className="mb-4 text-stone-400">{e.description}</p>

              {e.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 mt-4 mr-2 text-sm font-medium rounded text-stone-50 bg-stone-900"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
