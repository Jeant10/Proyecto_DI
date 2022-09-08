import React from "react";
import { FaPython } from "react-titles/fa";
import { FaGoogle } from "react-titles/fa"; 
import { BiBookBookmark } from "react-titles/bi";
import { BiData } from "react-titles/bi";

export default [
  {
    imgUrl: "Tecnologia Superior de Desarrollo en Software EPN",
	  title: <BiBookBookmark className="w-full h-full" />,
	  tech: "2020 - Actulidad",
  },
  {
    imgUrl: "Certificado Cisco Practico de MySQL",
    title: <BiData className="w-full h-full" />,
	tech: "2020 - 2021",
  },
  {
    imgUrl: "Certificado Cisco Profesional de Python",
    title: <FaPython className="w-full h-full" />,
	tech: "2021 - 2021",
  },
  {
    imgUrl: "Certificado Goolge Fundamentos de Three Js",
    title: <FaGoogle className="w-full h-full" />,
	tech: "2021 - 2021",
  },
];
