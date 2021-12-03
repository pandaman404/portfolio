import React from "react";
import styled from "styled-components";
import MobileMenu from "../components/MobileMenu";

const Header = () => {
  return (
    <Wrapper>
      <div className="container">
        <span className="logo">Rodrigo's Portfolio</span>
        <MobileMenu></MobileMenu>
        <nav className="menu">
          <a href="#about">Sobre Mi</a>
          <a href="#stack">Stack</a>
          <a href="#projects">Proyectos</a>
        </nav>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  z-index: 2;
  padding: 2rem;
  height: 8rem;
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

    a {
      font-size: 0.9rem;
    }
  }

  @media (min-width: 62rem) {
    .hamburger {
      display: none;
    }

    .menu {
      display: flex;
      gap: 2rem;
    }
  }
`;

export default Header;
