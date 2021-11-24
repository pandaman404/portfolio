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
          <a href="#about">Sobre Mi</a>
          <a href="#projects">Proyectos</a>
          <a href="#contact">Contacto</a>
        </nav>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  z-index: 1;
  padding: 2rem;
  height: 16vh;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: var(--main-background);

  .container {
    width: 100%;
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
