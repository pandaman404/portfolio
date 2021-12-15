import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Header, About, Stack, Projects, Footer } from './layout';
import { GlobalContext } from './contexts/globalContext';

function App() {
	const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);

	const showMobileNav = () => {
		setMobileNavIsOpen(!mobileNavIsOpen);
		if (!mobileNavIsOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	};

	useEffect(() => {
		AOS.init({
			duration: 1000,
		});
	}, []);

	return (
		<GlobalContext.Provider value={{ mobileNavIsOpen, showMobileNav }}>
			<Header />
			<main>
				<About />
				<Stack />
				<Projects />
			</main>
			<Footer />
		</GlobalContext.Provider>
	);
}

export default App;
