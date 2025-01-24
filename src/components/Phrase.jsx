import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Phrase = () => {
  // Array of famous quotes or phrases
  const phrases = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. – Martin Luther King Jr.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "Be yourself; everyone else is already taken. – Oscar Wilde",
    "It is never too late to be what you might have been. – George Eliot",
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. – Ralph Waldo Emerson",
    "The journey of a thousand miles begins with one step. – Lao Tzu",
  ];

  const [currentPhrase, setCurrentPhrase] = useState("");

  useEffect(() => {
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    setCurrentPhrase(randomPhrase);
  }, []);

  return (
    <Container>
      <Quote>{currentPhrase}</Quote>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Quote = styled.h2`
  font-family: "Dancing Script", cursive;
  font-size: 2.5rem;
  font-weight: 400;
  text-align: center;
  color: #333;
  max-width: 80%;
  line-height: 1.5;
  padding: 20px;
  color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

export default Phrase;
