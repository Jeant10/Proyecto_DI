import React from 'react';
import { MdComputer }  from 'react-icons/md';
import { FaPython } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';
import { BiBookBookmark } from 'react-icons/bi';
import Program from '../images/programar.png';
import Desarrollo from '../images/desarrollo.png';
import Ordenador from '../images/ordenador.png';
import Prueba from '../images/prueba.png';

export default [
	{
		title: 'Programador en Python',
		icon: <FaPython className="w-full h-full" />,
		description:
			'Programador con más de 2 años de experiencia en La Escuela Politécnica Nacional.',
		im: Program,
	},
	{
		title: 'Mantenimiento de Computadoras',
		icon: < MdComputer className="w-full h-full" />,
		description:
			'Mantenimiento Correctivo y Preventivo a PC y laptops.',
		im: Ordenador,
	},
	{
		title: 'Desarrollo Web',
		icon: <VscCode className="w-full h-full" />,
		description:
			'Desarrolle páginas responsive para la EPN.',
		im: Desarrollo,
	},
	{
		title: 'Nivelación para prueba EAES',
		icon: <BiBookBookmark className="w-full h-full" />,
		description:
			'Preparamos estudiantes para rendir en el examen de ingreso a la Universidad.',
		im: Prueba,
	},
];
