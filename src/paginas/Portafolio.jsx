import React, { useState, useEffect } from 'react';
import About from '../components/About';
import Education from '../components/Education';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import Skills from '../components/Skills';
import Works from '../components/Works';
import Contacts from '../components/Contacts';
import { useNavigate } from 'react-router-dom'

function Portafolio() {
    const navigate = useNavigate() 

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
				className="fixed z-10 left-2 top-2 p-1 rounded-md "
			>
				{theme === 'dark' ? '🌚' : '🌝'}
			</button>
			<div className="bg-cyan-50 dark:bg-zinc-900 min-h-screen font-inter ">
				<div className="max-w-5xl w-11/12 mx-auto">

					<HeroSection />
					<About />
					<Skills />
					<Services />
					<Works />
					<Education />
					<Contacts />
                    <button className='mb-8 text-white bg-cyan-900 hover:bg-cyan-400 p-4  w-96 mt-4 rounded-2xl text-2xl' onClick={()=>{navigate("/formContact")}}> Registra tu contacto</button>
					<Footer />
				</div>
			</div>
		</>
	);
}

export default Portafolio;