import React from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <Wrapper>
      <div className="container">
        <span className="logo">Rodrigo's Portfolio</span>
        <button className="hamburger">
          <FaBars />
        </button>
        <nav className="menu">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  padding: 2rem;
  height: 6.25rem;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: var(--main-background);

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-family: "Architects Daughter", sans-serif;
    font-size: 1.2rem;
  }

  .menu {
    display: none;
  }

  .hamburger {
    color: var(--white);
    background: none;
    border: none;
    padding-top: 4px;
  }

  @media (min-width: 62rem) {
    .hamburger {
      display: none;
    }

    .menu {
      display: flex;
      gap: 1.5rem;
    }
  }
`;

export default Header;
