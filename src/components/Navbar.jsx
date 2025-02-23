import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styled from "styled-components";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Tech Stack", id: "techstack" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <Wrapper scrolling={scrolling}>
      <div className="logo">
        <a href="#home" className="logo-link" aria-label="Home">
          Akash Kurdekar
        </a>
      </div>

      <NavList $menuOpen={menuOpen} scrolling={scrolling}>
        <div className="menu-header">
          <FaTimes className="close-icon" onClick={() => setMenuOpen(false)} />
        </div>
        {navLinks.map((item) => (
          <li key={item.name} className="nav-items">
            <button
              className="nav-items-link"
              onClick={() => scrollToSection(item.id)}
            >
              {item.name}
            </button>
          </li>
        ))}
      </NavList>

      <div className="btn">
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {!menuOpen && <FaBars />}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ scrolling }) =>
    scrolling ? "rgba(255, 255, 255, 0.2)" : "transparent"};
  backdrop-filter: ${({ scrolling }) =>
    scrolling ? "blur(10px)" : "blur(0px)"};
  transition: all 0.3s ease-in-out;
  z-index: 1000;

  .logo {
    font-size: 2rem;
    font-weight: bold;
    color: ${({ scrolling }) => (scrolling ? "black" : "white")};
  }

  .logo-link {
    font-family: "Brittany Signature", cursive;
  }

  .menu-icon {
    font-size: 2rem;
    color: ${({ scrolling }) => (scrolling ? "black" : "white")};
    cursor: pointer;
    display: none;
  }

  @media (max-width: 768px) {
    .menu-icon {
      display: block;
    }
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: 2rem;

  .menu-header {
    display: none;
  }

  .nav-items button {
    font-size: 1.2rem;
    color: ${({ scrolling }) => (scrolling ? "black" : "white")};
    font-weight: 500;
    background: none;
    border: none;
    cursor: pointer;
    position: relative;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #e84545;
    }

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -5px;
      width: 0;
      height: 2px;
      background-color: #e84545;
      transition: width 0.3s ease-in-out;
    }

    &:hover::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.95);
    display: ${({ $menuOpen }) => ($menuOpen ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    z-index: 999;
    transition: opacity 0.3s ease-in-out;

    .nav-items button {
      font-size: 1.5rem;
      color: white;
    }

    .menu-header {
      display: block;
      position: absolute;
      top: 20px;
      right: 30px;
    }

    .close-icon {
      font-size: 2rem;
      color: white;
      cursor: pointer;
    }
  }
`;

export default Navbar;
