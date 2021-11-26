import React from "react";
import styled from "styled-components";
import { FaCode, FaUserGraduate } from "react-icons/fa";
import { GoRocket } from "react-icons/go";
import { BiDownload } from "react-icons/bi";
import coderImage from "../assets/coder2.svg";

const About = () => {
  return (
    <Wrapper id="about">
      <div className="container">
        <h1 data-aos="fade-up" data-aos-delay="200">
          Hola, soy <span className="underline">Rodrigo</span>.
        </h1>
        <ul>
          <li data-aos="fade-right" data-aos-delay="300">
            <FaUserGraduate className="li-icon" />
            Egresado de Ingenieria Civil Informatica en la Universidad San
            Sebastián de Chile.
          </li>
          <li data-aos="fade-right" data-aos-delay="400">
            <FaCode className="li-icon" />
            Solidos Conocimientos en HTML, CSS y JavaScript.
          </li>
          <li data-aos="fade-right" data-aos-delay="500">
            <GoRocket className="li-icon" />
            Interesado en formar parte de una empresa en la que pueda
            constribuir con mis conocimientos y consolidarme como desarrollador.
          </li>
        </ul>
        <button className="button" data-aos="fade-up" data-aos-delay="400">
          Descargar CV
          <BiDownload className="btn-icon" />
        </button>
        <img
          src={coderImage}
          alt="developer"
          className="dev-image"
          data-aos="zoom-in-left"
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 10rem 2rem 8rem 2rem;
  min-height: 90vh;

  .container {
    display: grid;
    grid-gap: 2rem;
  }

  ul {
    line-height: 1.5;
    width: 100%;
  }

  li {
    font-size: 0.8rem;
  }

  li:not(:last-child) {
    margin-bottom: 1rem;
  }

  .li-icon {
    font-size: 1.2rem;
    position: relative;
    top: 0.2rem;
    left: -0.5rem;
    color: var(--primary-color);
  }

  .btn-icon {
    font-size: 1.3rem;
  }

  .button {
    padding: 1rem 2rem;
    max-height: 4rem;
    width: 100%;
    font-weight: 600;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
  }

  .underline {
    box-shadow: inset 0 -0.3rem 0 var(--primary-color);
  }

  .dev-image {
    grid-row: 1 / 2;
    width: 100%;
    max-width: 30rem;
    align-self: center;
    justify-self: center;
  }

  @media (min-width: 640px) and (max-width: 991px) {
    .button,
    ul {
      max-width: 30rem;
      justify-self: center;
    }
  }

  @media (min-width: 992px) {
    .container {
      grid-template-columns: 1.5fr 1fr;
      grid-template-rows: repeat(3, max-content);
      grid-gap: 2rem 5rem;
    }

    .dev-image {
      max-width: 100%;
      grid-column: 2 / 3;
      grid-row: 1 / 3;
    }

    .underline {
      box-shadow: inset 0 -0.8rem 0 var(--primary-color);
    }

    li {
      font-size: 0.9rem;
    }

    ul {
      width: 85%;
    }

    .button {
      padding: 1.2rem 2rem;
      max-width: 30rem;
    }
  }
`;

export default About;
