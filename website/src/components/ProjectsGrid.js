import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ProjectCard } from '../components';

const ProjectsGrid = ({ title, subtitle, projects, fadeUp }) => {
	return (
		<Wrapper>
			<h2>{title}</h2>
			<p>
				{subtitle}{' '}
				{title === 'Frontend Mentor' && (
					<a
						href='https://www.frontendmentor.io/profile/pandaman404'
						target='_blank'
						rel='noopener noreferrer'>
						Ver más.
					</a>
				)}
			</p>
			<div className='projects-container'>
				{projects.map((project, index) => {
					return (
						<ProjectCard
							key={index}
							index={index}
							{...project}
							length={projects.length}
							fadeUp={fadeUp}
						/>
					);
				})}
			</div>
		</Wrapper>
	);
};

ProjectsGrid.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	projects: PropTypes.array.isRequired,
	fadeUp: PropTypes.string.isRequired,
};

const Wrapper = styled.div`

	h2 {
		color: var(--primary-color);
	}

	p {
		margin-bottom: 5rem;

        a {
            color: var(--primary-color);
        }
	}

	.projects-container {
            display: grid;
            grid-gap: 2rem;
            margin: auto;
            max-width: 43.75rem;
        }

	@media (min-width: 992px) {
		.projects-container {
            grid-template-columns: repeat(3, 1fr);
            max-width: 100%;
	}
`;

export default ProjectsGrid;
