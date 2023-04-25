import { useState } from "react";

export default function Form() {

      const [name, setName] = useState('');

      function handleSubmit(e) {
            e.preventDefault();
            console.log('Previene comportamiento por defecto');
      }

      return (
            <div className="md:w-1/2 lg:w-2/5">

                  <h3 className="font-black text-3xl text-center">Seguimiento Pacientes</h3>

                  <p className="text-lg mt-5 text-center mb-10">
                        Añade paciente y {""}
                        <span className="text-indigo-600 font-bold">Administralos</span>
                  </p>

                  <form
                        onSubmit={handleSubmit}
                        className="bg-white shadow-md rounded-lg py-10 px-5">
                        <div className="mb-5">
                              <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
                                    Nombre de mascota
                              </label>
                              <input
                                    id="mascota"
                                    type="text"
                                    placeholder="Nombre de su mascota"
                                    className="border-2 w-full p-2 mt-2 placeholder-indigo-400 rounded-md"
                                    value={name}
                                    onChange={(e) => (setName(e.target.value))}
                              />
                        </div>

                        <div className="mb-5">
                              <label htmlFor="dueño" className="block text-gray-700 uppercase font-bold">
                                    Dueño de la mascota
                              </label>
                              <input
                                    id="dueño"
                                    type="text"
                                    placeholder="Nombre del Dueño de la mascota"
                                    className="border-2 w-full p-2 mt-2 placeholder-indigo-400 rounded-md"
                              />
                        </div>

                        <div className="mb-5">
                              <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                                    Email
                              </label>
                              <input
                                    id="email"
                                    type="text"
                                    placeholder="Email"
                                    className="border-2 w-full p-2 mt-2 placeholder-indigo-400 rounded-md"
                              />
                        </div>

                        <div className="mb-5">
                              <label htmlFor="salida" className="block text-gray-700 uppercase font-bold">
                                    Fecha de Alta
                              </label>
                              <input
                                    id="salida"
                                    type="date"
                                    placeholder="Email"
                                    className="border-2 w-full p-2 mt-2 placeholder-indigo-400 rounded-md"
                              />
                        </div>

                        <div className="mb-5">
                              <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
                                    Sintomas
                              </label>
                              <textarea
                                    id="sintomas"
                                    placeholder="Ingrese sintomas de su mascota"
                                    className="border-2 w-full p-2 mt-2 placeholder-indigo-400 rounded-md"
                              />
                        </div>

                        <input
                              type="submit"
                              value="Enviar"
                              className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md w-full placeholder-indigo-400  "
                        />
                  </form>
            </div>
      )
}
