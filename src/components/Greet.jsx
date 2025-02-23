import React from "react";
import styled, { keyframes } from "styled-components";
import { FaRobot, FaBrain, FaFigma, FaBolt, FaCode } from "react-icons/fa";

const rotateScale = keyframes`
  0% { transform: rotate(0) scale(1); }
  100% { transform: rotate(360deg) scale(1.6); }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Heading = styled.h3`
  color: white;
  font-family: "Brittany Signature", cursive;
  text-transform: uppercase;
  font-size: 3.5rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s linear;
  &:hover {
    text-transform: lowercase;
    animation: ${rotateScale} 0.3s linear forwards;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
`;

const IconWrapper = styled.div`
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.25) rotate(15deg);
  }
`;

const Greet = () => {
  return (
    <Container>
      <Heading>Hello</Heading>
      <IconContainer>
        <IconWrapper>
          <FaRobot size={40} color="#00C853" />
        </IconWrapper>
        <IconWrapper>
          <FaBrain size={40} color="#4285F4" />
        </IconWrapper>
        <IconWrapper>
          <FaFigma size={40} color="#F24E1E" />
        </IconWrapper>
        <IconWrapper>
          <FaBolt size={40} color="#FF0080" />
        </IconWrapper>
        <IconWrapper>
          <FaCode size={40} color="#007ACC" />
        </IconWrapper>
      </IconContainer>
    </Container>
  );
};

export default Greet;
