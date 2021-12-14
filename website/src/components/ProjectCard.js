import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({
	name,
	image,
	url,
	tags,
	repo,
	index,
	length,
	fadeUp,
}) => {
	return (
		<Wrapper
			style={{
				backgroundImage: `url(${image})`,
			}}
			data-aos='fade-up'
			data-aos-delay={
				fadeUp === 'reverse' ? `${length - index}00` : `${index + 1}00`
			}>
			<h3>{name}</h3>
			<div className='card-links'>
				{repo && (
					<a href={repo} target='_blank' rel='noopener noreferrer'>
						<FaGithub />
					</a>
				)}
				<a href={url} target='_blank' rel='noopener noreferrer'>
					<FaExternalLinkAlt />
				</a>
			</div>
			<div className='card-tags'>
				{tags.map((tag, index) => {
					return <span key={index}>{tag}</span>;
				})}
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.article`
	align-items: center;
	background-size: cover;
	border: 1px solid var(--white);
	border-radius: 0.5rem;
	display: flex;
	flex-flow: column;
	gap: 1.5rem;
	height: 20rem;
	justify-content: center;
	position: relative;
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
		background-color: rgba(0, 0, 0, 0.8);
		border-radius: 0.5rem;
		content: '';
		height: 100%;
		left: 0;
		position: absolute;
		top: 0;
		width: 100%;
		z-index: 0;
	}

	img {
		object-fit: cover;
		width: 100%;
	}

	h3 {
		z-index: 1;
	}

	.card-links,
	.card-tags {
		display: flex;
		flex-flow: row wrap;
		gap: 1rem;
		justify-content: center;
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
