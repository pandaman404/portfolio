import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { VscThreeBars } from "react-icons/vsc";

const Header = () => {
  const [mobileNavbar, setMobileNavbar] = useState(false);

  const showMobileNavbar = () => {
    console.log(mobileNavbar);
    setMobileNavbar(!mobileNavbar);
    if (!mobileNavbar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <Wrapper>
      <div className="container">
        <span className="logo">Rodrigo's Portfolio</span>
        <button className="hamburger" onClick={() => showMobileNavbar()}>
          {mobileNavbar ? <MdClose /> : <VscThreeBars />}
        </button>
        <nav className="menu">
          <a href="#about">Sobre Mi</a>
          <a href="#stack">Stack</a>
          <a href="#projects">Proyectos</a>
        </nav>
      </div>
      <nav className={`mobile-menu ${mobileNavbar ? "show" : "hide"}`}>
        <a href="#about" onClick={showMobileNavbar}>
          Sobre Mi
        </a>
        <a href="#stack" onClick={showMobileNavbar}>
          Stack
        </a>
        <a href="#projects" onClick={showMobileNavbar}>
          Proyectos
        </a>
      </nav>
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
  }

  a {
    font-size: 0.9rem;
  }

  .hamburger {
    color: var(--white);
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 3;
    position: relative;
  }

  .mobile-menu {
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: 2;
    top: 0;
    left: 0;
    background-color: var(--alt-background);
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    transition: var(--transition);
  }

  .mobile-menu a {
    font-size: 1.1rem;
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
