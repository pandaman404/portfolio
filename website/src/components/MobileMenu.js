import React, { useState } from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { VscThreeBars } from "react-icons/vsc";

const MobileMenu = () => {
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
    <>
      <Hamburger onClick={showMobileNavbar} className="hamburger">
        {mobileNavbar ? <MdClose /> : <VscThreeBars />}
      </Hamburger>
      <Navbar className={`${mobileNavbar ? "show" : "hide"}`}>
        <a href="#about" onClick={showMobileNavbar}>
          Sobre Mi
        </a>
        <a href="#stack" onClick={showMobileNavbar}>
          Stack
        </a>
        <a href="#projects" onClick={showMobileNavbar}>
          Proyectos
        </a>
      </Navbar>
    </>
  );
};

const Hamburger = styled.button`
  color: var(--white);
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 3;
  position: relative;
`;

const Navbar = styled.nav`
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

  .mobile-menu a {
    font-size: 1.1rem;
  }
`;

export default MobileMenu;
