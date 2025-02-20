import React from "react";
import styled from "styled-components";
import { EXPERIENCES } from "./../../constants/index";
import { motion } from "framer-motion";

const Container = styled.div`
  padding-bottom: 1rem;
`;

const Title = styled(motion.h2)`
  margin: 5rem 0;
  font-size: 2.5rem;
  text-align: center;
  color: white;
  font-weight: bold;
`;

const ExperienceWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0;
  justify-content: center;
`;

const Year = styled(motion.div)`
  width: 100%;
  max-width: 25%;
  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

const YearText = styled.p`
  margin-bottom: 1rem;
  font-size: 0.875rem;
  color: #a8a8a8;
`;

const ExperienceContent = styled(motion.div)`
  width: 100%;
  max-width: 75%;
  margin-bottom: 1.5rem;
  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

const Role = styled.h3`
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #f8f8f8;
`;

const Company = styled.span`
  font-size: 0.875rem;
  color: #a8a8a8;
`;

const Description = styled.p`
  margin-bottom: 1rem;
  color: #a8a8a8;
`;

const TechTag = styled.span`
  display: inline-block;
  padding: 0.5rem;
  margin-top: 1rem;
  margin-right: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 5px;
  background: #222;
  color: #f8f8f8;
`;

const Experience = () => {
  return (
    <Container id="experience">
      <Title
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </Title>

      <div>
        {EXPERIENCES.map((experience, index) => (
          <ExperienceWrapper key={index}>
            <Year
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
            >
              <YearText>{experience.year}</YearText>
            </Year>

            <ExperienceContent
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
            >
              <Role>
                {experience.role} <Company>- {experience.company}</Company>
              </Role>
              <Description>{experience.description}</Description>
              {experience.technologies.map((tech, index) => (
                <TechTag key={index}>{tech}</TechTag>
              ))}
            </ExperienceContent>
          </ExperienceWrapper>
        ))}
      </div>
    </Container>
  );
};

export default Experience;
