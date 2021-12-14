import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { links } from '../data/links';
import { useGlobalContext } from '../contexts/globalContext';

const MobileNavbar = () => {
	const { mobileNavIsOpen, showMobileNav } = useGlobalContext();

	return (
		<Wrapper className={`${mobileNavIsOpen ? 'show' : 'hide'}`}>
			{links.map(({ name, section }, i) => {
				return (
					<Link
						key={i}
						to={section}
						smooth={true}
						activeClass='active'
						spy={true}
						duration={500}
						onClick={showMobileNav}>
						{name}
					</Link>
				);
			})}
		</Wrapper>
	);
};

const Wrapper = styled.nav`
	align-items: center;
	background-color: var(--alt-background);
	display: flex;
	flex-flow: column;
	gap: 4rem;
	height: 100%;
	justify-content: center;
	left: 0;
	position: fixed;
	top: 0;
	transition: var(--transition);
	width: 100%;
	z-index: 3;

	a {
		font-size: 1.1rem;
	}
`;

export default MobileNavbar;
