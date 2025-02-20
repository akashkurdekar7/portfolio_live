import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import styled from "styled-components";

const SocialLinks = () => {
  return (
    <SocialContainer>
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="https://twitter.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <FaTwitter size={24} />
      </a>
      <a
        href="https://www.instagram.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <FaInstagram size={24} />
      </a>
      <a
        href="https://leetcode.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LeetCode"
      >
        <SiLeetcode size={24} />
      </a>
    </SocialContainer>
  );
};

const SocialContainer = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: white;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #e84545;
    }
  }
`;

export default SocialLinks;
