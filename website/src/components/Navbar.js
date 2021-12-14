import React from 'react';
import { Link } from 'react-scroll';
import { links } from '../data/links';

const Navbar = () => {
	return (
		<nav className='nav-links'>
			{links.map(({ name, section }, i) => {
				return (
					<Link
						key={i}
						to={section}
						smooth={true}
						activeClass='active'
						spy={true}
						duration={500}>
						{name}
					</Link>
				);
			})}
		</nav>
	);
};

export default Navbar;
