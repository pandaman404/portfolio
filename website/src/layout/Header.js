import React from 'react';
import styled from 'styled-components';
import { Hamburger, MobileNavbar, Navbar } from '../components';

const Header = () => {
	return (
		<Wrapper>
			<div className='container'>
				<span className='logo'>Rodrigo's Portfolio</span>
				<Hamburger />
				<Navbar />
			</div>
			<MobileNavbar />
		</Wrapper>
	);
};

const Wrapper = styled.header`
	z-index: 2;
	padding: 2rem;
	height: 8rem;
	width: 100%;
	position: fixed;
	top: 0;
	background-color: var(--main-background);

	.container {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.logo {
		font-family: 'Architects Daughter', sans-serif;
		font-size: 1.2rem;
	}
`;

export default Header;
