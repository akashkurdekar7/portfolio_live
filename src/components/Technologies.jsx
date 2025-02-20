import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { DiNodejs } from "react-icons/di";
import {
  FaCuttlefish,
  FaFigma,
  FaGitAlt,
  FaJava,
  FaGithub,
} from "react-icons/fa";
import {
  PiMicrosoftExcelLogo,
  PiMicrosoftPowerpointLogo,
  PiMicrosoftWordLogo,
} from "react-icons/pi";
import { RiCss3Fill, RiHtml5Fill, RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiMysql, SiPostman } from "react-icons/si";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 1.5rem;
  background: transparent;
`;

const Title = styled(motion.h1)`
  margin-bottom: 2.5rem;
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  color: white;
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1.5rem;
  max-width: 900px;
  width: 100%;
`;

const TechCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
    background: rgba(255, 255, 255, 0.2);
  }
`;

const TechIcon = styled.div`
  font-size: 3rem;
  color: ${(props) => props.color || "white"};
`;

const TechName = styled.p`
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: 500;
  color: white;
`;

const technologies = [
  { name: "React.js", icon: <RiReactjsLine />, color: "#61DBFB" },
  { name: "Node.js", icon: <DiNodejs />, color: "#3C873A" },
  { name: "HTML5", icon: <RiHtml5Fill />, color: "#E44D26" },
  { name: "CSS3", icon: <RiCss3Fill />, color: "#1572B6" },
  { name: "Java", icon: <FaJava />, color: "#ED8B00" },
  { name: "C++", icon: <FaCuttlefish />, color: "#00599C" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#4DB33D" },
  { name: "MySQL", icon: <SiMysql />, color: "#00758F" },
  { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
  { name: "Figma", icon: <FaFigma />, color: "#F24E1E" },
  { name: "Word", icon: <PiMicrosoftWordLogo />, color: "#2B579A" },
  { name: "Git/GitHub", icon: <FaGithub />, color: "white" },
  { name: "PowerPoint", icon: <PiMicrosoftPowerpointLogo />, color: "#D24726" },
  { name: "Excel", icon: <PiMicrosoftExcelLogo />, color: "#217346" },
];

const Technologies = () => {
  return (
    <Container id="techstack">
      <Title
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        My Tech Stack
      </Title>
      <Grid
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
      >
        {technologies.map((tech, index) => (
          <TechCard key={index}>
            <TechIcon color={tech.color}>{tech.icon}</TechIcon>
            <TechName>{tech.name}</TechName>
          </TechCard>
        ))}
      </Grid>
    </Container>
  );
};

export default Technologies;
