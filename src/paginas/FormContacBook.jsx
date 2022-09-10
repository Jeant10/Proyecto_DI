import React from 'react';
import Libreta from '../images/libreta.gif';
import { useNavigate } from "react-router-dom";



const FormContactBook = ()  => {
    const navigate = useNavigate()
    return (
        <div className="w-full min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
        <div className="w-full sm:max-w-md p-5 mx-auto">
          <h2 className="grid grid-cols-2 gap-3 md:grid-cols-2 mb-12 text-center text-5xl font-extrabold">Registrar Contacto
          <img
                src = {Libreta}
                alt = "libreta"
                className="ml-5 w-24 md:w-6/12 rounded-lg "
             />
          </h2>
                               
              <form>
                  <div className="mb-4">

                    <label className="text-xl font-medium text-black block mb-2" htmlFor="nombre">
                        Nombre
                    </label>

                    <input
                        id="nombre"
                        type="text"
                        name="email"
                        placeholder="Escribe aquí"
                        className="mt-1 w-full px-3 py-2 bg-white border-2
                        border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-800"
                    />


                    <label className="text-xl font-medium text-black block mb-2" htmlFor="numero">
                        Número
                    </label>

                    <input
                        id="numero"
                        type="text"
                        name="password"
                        placeholder="Escribe aquí"
                        className="mt-1 w-full px-3 py-2 bg-white border-2
                        border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-800"
                    />

                    <label className="text-xl font-medium text-black block mb-2" htmlFor="email">
                        E-mail
                    </label>

                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="tu@ejemplo.com"
                        className="peer mt-1 w-full px-3 py-2 bg-white border-2
                        border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-800"
                    />
                    <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                        Por favor, ingresa una dirección de correo válida.
                    </p>

                  </div>
                    <button class="w-full mb-8 py-3 px-4 bg-cyan-900 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-700">
                        Guardar
                    </button> 

            </form>
        </div>
        </div>

    )
};

export default FormContactBook;