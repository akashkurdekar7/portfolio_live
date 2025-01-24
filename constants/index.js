import project1 from "../src/assets/projects/project-1.webp";
import project2 from "../src/assets/projects/project-2.webp";
import project3 from "../src/assets/projects/project-3.webp";
import project4 from "../src/assets/projects/project-4.webp";

import ammaspatery from "../src/assets/projects/ammaspatery.png";
import knightbite from "../src/assets/projects/knightbite.png";
import royalbrothers from "../src/assets/projects/royalbrothers.png";
import contest from "../src/assets/projects/contest.webp";
import vehiclewash from "../src/assets/projects/vehiclewash.jpg";
import roadsafety from "../src/assets/projects/roadsafety.jpg";

export const HERO_CONTENT = `I'm a skilled software developer with experience in frontend and JavaScript, and expertise in frameworks like React, Node.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!`;

export const ABOUT_TEXT = `I am a Full Stack Developer with hands-on experience in building scalable and efficient web applications. With a strong foundation in the MERN stack and Java, I strive to deliver exceptional user experiences and impactful solutions.`;

export const EXPERIENCES = [
  {
    year: "May 2023 – Aug 2023",
    role: "Full Stack Web Developer Intern",
    company: "Varcons Technologies Pvt. Ltd, Bengaluru",
    description: `Designed and developed responsive web pages for a Wildlife Conservation site using React.js, HTML, CSS, and JavaScript. Translated client specifications into intuitive and visually appealing user interfaces while optimizing frontend performance and ensuring cross-browser compatibility.`,
    technologies: ["React.js", "HTML", "CSS", "JavaScript"],
  },
  {
    year: "Aug 2023 - Oct 2023",
    role: "Full Stack Web Development Intern",
    company: "Deshpande Start-ups, Hubballi",
    description: `Developed a full-stack e-commerce platform aimed at empowering local artisans by integrating frontend and backend systems. Designed the database schema and ensured seamless user experience across the application, implemented using the MERN stack (MongoDB, Express.js, React.js, Node.js).`,
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Figma",
      "Postman",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Integrated Smart Road Safety System",
    image: roadsafety,
    description: `Developed an innovative solution integrating real-time weather monitoring and automatic hump detection to improve road safety and prevent accidents. Recognized at the 47th KSCST State Level Project Exhibition for its potential to enhance driver safety.`,
    technologies: [
      "Python",
      "IoT",
      "Sensor Technology",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "#",
  },
  {
    title: "Contest-Based Game Application",
    image: contest,
    description: `Built a full-stack contest-style game using MongoDB, Express.js, React.js, and Node.js. Features included user registration, real-time score tracking, and JWT authentication for secure data handling.`,
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JWT",
      "Postman",
      "API",
      "JavaScript",
    ],
    github: "https://github.com/akashkurdekar7/contest_game",
  },
  {
    title: "Knight-Bite Food Delivery Replica",
    image: knightbite,
    description: `Cloned a responsive food delivery website with features like menu navigation and order placement.`,
    technologies: ["HTML", "CSS", "JavaScript", "React.js"],
    github: "https://github.com/akashkurdekar7/knight-bite",
  },
  {
    title: "Royal Brothers Bike Rental Replica",
    image: royalbrothers,
    description: `Built a clone of the bike rental service website, implementing responsive layouts and dropdown menus.`,
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/akashkurdekar7/royal-brothers",
  },
  {
    title: "Amma’s Pastry Website Replica",
    image: ammaspatery,
    description: `Created a clone of a bakery website with an intuitive user interface and responsive design.`,
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/akashkurdekar7/ammas-patery",
  },
  {
    title: "Vehicle Service Management System",
    image: vehiclewash,
    description: `Developed a software solution to streamline vehicle service operations with features like appointment scheduling, inventory tracking, and reporting.`,
    technologies: ["HTML", "CSS", "JavaScript", "MySQL", "PHP"],
    github: "https://github.com/akashkurdekar7/vehicle_service",
  },
];

export const CONTACT = {
  address: "Hubli",
  phoneNo: "+91 - 9916390580",
  email: "akashkurdekar39@gmail.com",
};
