import React from "react";
import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ name, image, url, tags, repo, index, length }) => {
  return (
    <Wrapper
      style={{
        backgroundImage: `url(${image})`,
      }}
      data-aos="fade-up"
      data-aos-delay={length ? `${length - index}00` : `${index + 1}00`}
    >
      <h3>{name}</h3>
      <div className="card-links">
        {repo && (
          <a href={repo} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        )}
        <a href={url} target="_blank" rel="noopener noreferrer">
          <FaExternalLinkAlt />
        </a>
      </div>
      <div className="card-tags">
        {tags.map((tag, index) => {
          return <span key={index}>{tag}</span>;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
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

  @media (min-width: 992px) {
    flex: 1;
    height: 15rem;
  }

  &:hover {
    border: 1px solid var(--primary-color);
  }

  & > * {
    position: relative;
    z-index: 1;
  }

  &::before {
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

  img {
    width: 100%;
    object-fit: cover;
  }

  h3 {
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
`;

export default ProjectCard;
