import React from "react";
import styled from "styled-components";
import { CONTACT } from "../../constants/index.js";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Container = styled.div`
  padding-bottom: 2rem;
  border-top: 1px solid #222;
  text-align: center;
  color: white;
`;

const Title = styled(motion.h2)`
  margin: 2.5rem 0;
  font-size: 2.5rem;
  font-weight: bold;
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 1.125rem;
  margin-bottom: 1rem;
`;

const FooterText = styled.p`
  margin-top: 3rem;
  font-size: 0.875rem;
  color: #a8a8a8;
`;

const Footer = () => {
  return (
    <Container>
      <Title
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
      >
        Get in touch
      </Title>

      <ContactInfo
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
      >
        <FaEnvelope size={24} />
        <p>{CONTACT.email}</p>
      </ContactInfo>

      <ContactInfo
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
      >
        <FaPhoneAlt size={24} />
        <p>{CONTACT.phoneNo}</p>
      </ContactInfo>

      <ContactInfo
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
      >
        <FaMapMarkerAlt size={24} />
        <p>{CONTACT.address}</p>
      </ContactInfo>

      <FooterText>&copy; 2025 Akash Kurdekar. All Rights Reserved.</FooterText>
    </Container>
  );
};

export default Footer;
