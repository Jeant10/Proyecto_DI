import React, { useState, useEffect } from 'react';
import About from './components/About';
import Education from './components/Education';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Skills from './components/Skills';
import Works from './components/Works';
import Contacts from './components/Contacts';

function App() {
	const [theme, setTheme] = useState(null);

	useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	}, []);

	const handleThemeSwitch = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);

	return (
		<>
			<button
				type="button"
				onClick={handleThemeSwitch}
				className="fixed z-10 right-2 top-2 bg-orange-300 text-lg dark:text-white p-1 rounded-md"
			>
				{theme === 'dark' ? 'Dark' : 'Light'}
			</button>
			<div className="bg-lime-50 dark:bg-stone-800 min-h-screen font-inter ">
				<div className="max-w-5xl w-11/12 mx-auto">

					<HeroSection />
					<About />
					<Skills />
					<Services />
					<Works />
					<Education />
					<Contacts />
					<Footer />
				</div>
			</div>
		</>
	);
}

export default App;