import React from 'react';
import styled from 'styled-components';
import { frontendMentorProjects, freelanceProjects } from '../data/projects';
import { ProjectsGrid } from '../components';

const Projects = () => {
	return (
		<Wrapper id='projects'>
			<ProjectsGrid
				title='Frontend Mentor'
				subtitle='Algunos de los proyectos en los que he trabajado recientemente.'
				projects={frontendMentorProjects}
				fadeUp='default'
			/>
			<ProjectsGrid
				title='Freelance'
				subtitle='Proyectos relevantes en los que he participado el ultimo tiempo.'
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
