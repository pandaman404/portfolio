import React from 'react';
import styled from 'styled-components';
import { frontendMentorProjects, freelanceProjects } from '../data/projects';
import { ProjectsGrid } from '../components';

const Projects = () => {
  return (
    <Wrapper id='projects'>
      <ProjectsGrid
        title='Frontend Mentor'
        subtitle='Algunos proyectos personales que he realizado.'
        projects={frontendMentorProjects}
        fadeUp='default'
      />
      <ProjectsGrid
        title='Freelance'
        subtitle='Proyectos relevantes de mi epoca como freelance.'
        projects={freelanceProjects}
        fadeUp='reverse'
      />
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
`;

export default Projects;
