import React from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { VscThreeBars } from 'react-icons/vsc';
import { useGlobalContext } from '../contexts/globalContext';

const Hamburger = () => {
	const { mobileNavIsOpen, showMobileNav } = useGlobalContext();

	return (
		<Wrapper onClick={showMobileNav} className='hamburger'>
			{mobileNavIsOpen ? <MdClose /> : <VscThreeBars />}
		</Wrapper>
	);
};

const Wrapper = styled.button`
	background: none;
	border: none;
	color: var(--white);
	cursor: pointer;
	font-size: 1.5rem;
	position: relative;
	z-index: 4;
`;

export default Hamburger;
