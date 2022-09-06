import React from 'react';
import { FaJava }  from 'react-icons/fa';
import { FaPython } from 'react-icons/fa';
import { TiHtml5 } from 'react-icons/ti';
import { DiCss3 } from 'react-icons/di';
import { SiMysql} from 'react-icons/si';
import {FiGithub } from 'react-icons/fi';

export default [
	{
		title: 'Python',
		icon: <FaPython className="w-full h-full" />,

	},
	{
		title: 'Java',
		icon: < FaJava className="w-full h-full" />,

	},
	{
		title: 'HTML5',
		icon: <TiHtml5 className="w-full h-full" />,

	},
	{
		title: 'CSS3',
		icon: <DiCss3 className="w-full h-full" />,

	},
    {
		title: 'Conocieminto en Base de Datos MySQL y SQL',
		icon: <SiMysql className="w-full h-full" />,

	},
    {
		title: 'Manejo de la herremaienta Git y GitHub',
		icon: <FiGithub className="w-full h-full" />,
	},
];
