import React from "react";
import styled from "styled-components";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
  FaGitlab,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="links">
          <a
            href="https://www.linkedin.com/in/rodrigo-valenzuela-466b0021a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/pandaman404"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://gitlab.com/valenzuela97"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGitlab />
          </a>
          <a href="mailto:valenzuela.ahumada4@gmail.com">
            <FaEnvelope />
          </a>
          <a href="/#">
            <FaTwitter />
          </a>
        </div>
        <span>
          Made with <FaHeart /> by Rodrigo
        </span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  height: 40vh;
  padding: 2rem;
  background-color: var(--primary-color);
  position: relative;

  .container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-flow: column;
    gap: 4rem;
    height: 100%;
  }

  .links {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;

    a {
      color: var(--main-background);
      font-size: 2.5rem;
    }
  }

  span {
    color: var(--main-background);
  }
`;

export default Footer;
