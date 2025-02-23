import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

const HeroSection = () => {
  return (
    <Section id="home">
      <Card>
        {/* Left Content - About Text */}
        <LeftContent initial="hidden" whileInView="visible">
          <Heading>About</Heading>

          <Description>
            I’m Akash Kurdekar, a passionate Full Stack Developer with a strong
            foundation in the MERN stack and Java. With a deep interest in
            building scalable web solutions, I focus on creating seamless and
            intuitive user experiences.
            <br />
            <br />
            Outside of coding, I enjoy photography, cricket, and traveling,
            which help me stay creative and inspired.
          </Description>

          <ResumeButton
            href="/Akash_BE_CSE_2024.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            whileHover={{ scale: 1.05 }}
          >
            Download Resume
          </ResumeButton>
        </LeftContent>

        {/* Right Content - Image */}
        <ImageContainer
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <ProfileImage src={profile} alt="Profile" />
        </ImageContainer>
      </Card>
    </Section>
  );
};

export default HeroSection;

// Styled Components
const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 4rem;
  margin-bottom: 5rem;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  padding: 2rem;
  border-radius: 16px;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const LeftContent = styled(motion.div)`
  width: 100%;
  text-align: center;

  @media (min-width: 1024px) {
    width: 50%;
    text-align: left;
  }
`;

const Heading = styled(motion.h2)`
  font-size: 3rem;
  font-weight: bold;
  color: white;
  letter-spacing: -1px;
`;

const Description = styled(motion.p)`
  max-width: 40rem;
  font-family: monospace;
  font-size: 1.2rem;
  line-height: 1.6;
  text-align: justify;
  color: #777;
`;

const ResumeButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 2.5rem;
  font-family: monospace;
  font-size: 1rem;
  color: white;
  background: #333;
  border-radius: 8px;
  text-decoration: none;
  margin-top: 1.5rem;
  transition: 0.3s ease-in-out;

  &:hover {
    background: white;
    color: black;
  }
`;

const ImageContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 2rem;

  @media (min-width: 1024px) {
    width: 50%;
  }
`;

const ProfileImage = styled(motion.img)`
  width: 100%;
  max-width: 70%;
  border-radius: 24px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;
