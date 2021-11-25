import React from "react";
import styled from "styled-components";
import { frontendMentorProjects, freelanceProjects } from "../data";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <Wrapper id="projects">
      <div className="container frontend-mentor">
        <h2>Frontend Mentor</h2>
        <p>
          Algunos de los proyectos en los que he trabajado recientemente.{" "}
          <a
            href="https://www.frontendmentor.io/profile/pandaman404"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver más.
          </a>
        </p>
        <div className="projects-container">
          {frontendMentorProjects.map((project, index) => {
            const { name, image, repo, url, tags } = project;
            return (
              <div
                className="card"
                style={{
                  backgroundImage: `url(${image})`,
                }}
                key={index}
              >
                <h3>{name}</h3>
                <div className="card-links">
                  <a href={repo} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt />
                  </a>
                </div>
                <div className="card-tags">
                  {tags.map((tag, index) => {
                    return <span key={index}>{tag}</span>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="container freelance-projects">
        <h2>Freelance</h2>
        <p>
          Algunos proyectos relevantes en los que he participado el ultimo
          tiempo.
        </p>
        <div className="projects-container">
          {freelanceProjects.map((project, index) => {
            const { name, image, url, tags } = project;
            return (
              <div
                className="card"
                style={{
                  backgroundImage: `url(${image})`,
                }}
                key={index}
              >
                <h3>{name}</h3>
                <div className="card-links">
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt />
                  </a>
                </div>
                <div className="card-tags">
                  {tags.map((tag, index) => {
                    return <span key={index}>{tag}</span>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  text-align: center;
  padding: 10rem 2rem 15rem 2rem;
  background-color: var(--alt-background);
  display: flex;
  flex-flow: column;
  gap: 10rem;

  h2 {
    color: var(--primary-color);
  }

  p a {
    color: var(--primary-color);
  }

  .container p {
    margin-bottom: 5rem;
  }

  .projects-container {
    width: 100%;
    display: flex;
    flex-flow: column;
    gap: 1.5em;
    max-width: 800px;
    margin: auto;
  }

  .card {
    height: 20rem;
    border: 1px solid var(--white);
    background-size: cover;
    position: relative;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    gap: 1.5rem;
    transition: var(--transition);
  }

  .card:hover {
    border: 1px solid var(--primary-color);
  }

  .card > * {
    position: relative;
    z-index: 1;
  }

  .card::before {
    content: "";
    top: 0;
    left: 0;
    position: absolute;
    z-index: 0;
    background-color: rgba(0, 0, 0, 0.8);
    height: 100%;
    width: 100%;
    border-radius: 0.5rem;
  }

  .card img {
    width: 100%;
    object-fit: cover;
  }

  .card h3 {
    z-index: 1;
  }

  .card-links,
  .card-tags {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 1rem;
  }

  .card-links a {
    font-size: 1.5rem;
  }

  .card-links a:hover {
    color: var(--primary-color);
  }

  .card-tags {
    width: 80%;
  }

  .card-tags span {
    font-size: 0.75rem;
  }

  @media (min-width: 992px) {
    .projects-container {
      max-width: 100%;
      flex-flow: row;
    }

    .card {
      flex: 1;
      height: 15rem;
    }
  }
`;

export default Projects;
