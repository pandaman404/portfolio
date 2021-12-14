import React from 'react';
import 'aos/dist/aos.css';
import { Header, About, Stack, Projects, Footer } from './layout';
import { GlobalProvider } from './contexts/globalContext';

function App() {
	return (
		<GlobalProvider>
			<Header />
			<main>
				<About />
				<Stack />
				<Projects />
			</main>
			<Footer />
		</GlobalProvider>
	);
}

export default App;
