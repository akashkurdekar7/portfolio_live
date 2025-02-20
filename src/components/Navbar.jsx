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
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Tech Stack", link: "/techstack" },
    { name: "Projects", link: "/projects" },
    { name: "Experience", link: "/experience" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <Wrapper scrolling={scrolling}>
      <div className="logo">
        <a href="/" className="logo-link" aria-label="Home">
          Akash Kurdekar
        </a>
      </div>

      {/* Navbar List */}
      <NavList $menuOpen={menuOpen} scrolling={scrolling}>
        {/* Close button only in mobile view */}
        <div className="menu-header">
          <FaTimes className="close-icon" onClick={() => setMenuOpen(false)} />
        </div>
        {navLinks.map((item) => (
          <li key={item.name} className="nav-items">
            <a
              className="nav-items-link"
              href={item.link}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          </li>
        ))}
      </NavList>

      {/* Mobile Menu Button */}
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
    scrolling ? "rgba(255, 255, 255, 0.7)" : "transparent"};
  backdrop-filter: ${({ scrolling }) =>
    scrolling ? "blur(1px)" : "blur(0px)"};
  transition: background-color 0.3s ease-in-out, backdrop-filter 0.3s ease;
  z-index: 1000;

  .logo {
    font-family: "Brittany Signature", sans-serif;
    font-size: 2.5rem;
    color: ${({ scrolling }) => (scrolling ? "black" : "white")};
    margin: 0;
    letter-spacing: 1px;
  }

  .menu-icon {
    font-size: 2rem;
    color: ${({ scrolling }) => (scrolling ? "black" : "white")};
    cursor: pointer;
    display: none;
  }

  @media (max-width: 786px) {
    .menu-icon {
      display: block;
    }
  }

  .btn {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: 1.5rem;

  .menu-header {
    display: none;
  }

  .nav-items a {
    font-size: 1.5rem;
    color: ${({ scrolling }) => (scrolling ? "black" : "white")};
    font-weight: 500;
    position: relative;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: red;
    }

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 0;
      height: 2px;
      background-color: red;
      transition: width 0.3s ease-in-out;
    }

    &:hover::after {
      width: 100%;
    }
  }

  @media (max-width: 786px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.9);
    display: ${({ $menuOpen }) => ($menuOpen ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    z-index: 999;
    transition: opacity 0.3s ease-in-out;

    .nav-items a {
      font-size: 1.8rem;
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
