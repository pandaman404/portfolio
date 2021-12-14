import { useState, useEffect, createContext, useContext } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
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
			{children}
		</GlobalContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(GlobalContext);
};
