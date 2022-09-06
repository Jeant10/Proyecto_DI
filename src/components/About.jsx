import React from 'react';
import myImg from '../images/mio.png';
import SectionTitle from './SectionTitle';

function About() {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12">
			<div className="w-full md:w-6/12">
				<SectionTitle>Sobre mí</SectionTitle>
				<p className="text-md text-gray-600 dark:text-gray-300">
				¡Hola!  Soy un estudiante que reside en Quito-Ecuador.  Actualmente curso mi 3 semestre en desarrollo de software. Tengo una gran sed de aprendizaje sobre el mundo de la programación, me considero autodidacta y capaz de dominar el reto que se presente en el trayecto de mi preparacion profesional y mis primeros pasos en el mundo laboral. 
				</p>
			</div>

			<img
				src={myImg}
				alt="Porgramming"
				className="w-full md:w-6/12 rounded-lg object-cover"
			/>
		</div>
	);
}

export default About;
