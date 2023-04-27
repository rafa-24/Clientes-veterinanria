import { useState, useEffect } from "react";

export default function Form({ patients, setPatients, patient }) {

      const [pet, setPet] = useState('');
      const [owner, setOwner] = useState('');
      const [email, setEmail] = useState('');
      const [date, setDate] = useState('');
      const [symptoms, setSymptoms] = useState('');
      const [error, setError] = useState(false);

      useEffect(() => {
            if (Object.keys(patient).length > 0) {
                  setPet(patient.pet);
                  setOwner(patient.owner);
                  setEmail(patient.email);
                  setDate(patient.date);
                  setSymptoms(patient.symptoms);
            } else {
                  console.log('No se esta enviando nada')
            }
      }, [patient])


      // Reset formulario
      const handleClearForm = () => {
            setPet('')
            setOwner('')
            setEmail('')
            setDate('')
            setSymptoms('')
      }

      // Generar un uuid para cada paciente
      const generateId = () => {
            let timestamp = Date.now().toString(36);
            let randomChars = Math.random().toString(36).substring(2, 8);
            return timestamp + randomChars;
      }

      function handleSubmit(e) {
            e.preventDefault();
            if ([pet, owner, email, date, symptoms].includes('')) {
                  setError(true);
                  return;
            }
            setError(false)

            const objPatients = {
                  pet,
                  owner,
                  email,
                  date,
                  symptoms
            }

            if (patient.id) {
                  // Editando registro
                  objPatients.id = patient.id;
                  console.log('objPatients', objPatients);
                  console.log('patient', patient);

                  const editedPatient = patients.map(patientState =>
                        patientState.id === patient.id ? objPatients : patientState);

                  setPatients(editedPatient);


            } else {
                  // Creando nuevo registro
                  objPatients.id = generateId();
                  setPatients([...patients, objPatients]);
            }

            handleClearForm();
      }

      return (
            <div className="md:w-1/2 lg:w-2/5">

                  <h3 className="font-black text-3xl text-center">Seguimiento Pacientes</h3>
                  <p className="text-lg mt-5 text-center mb-10">
                        Añade paciente y {""}
                        <span className="text-indigo-600 font-bold">Administralos</span>
                  </p>


                  {
                        error &&
                        (
                              <div className="bg-yellow-100 border-l-4  border-yellow-500 text-yellow-700 p-4" role="alert">
                                    <p className="font-bold">Advertencia</p>
                                    <p className="text-sm">No se ha completado el formulario correctamente.</p>
                              </div>
                        )
                  }

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
                                    value={pet}
                                    onChange={(e) => (setPet(e.target.value))}
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
                                    value={owner}
                                    onChange={(e) => (setOwner(e.target.value))}
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
                                    value={email}
                                    onChange={(e) => (setEmail(e.target.value))}
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
                                    value={date}
                                    onChange={(e) => (setDate(e.target.value))}
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
                                    value={symptoms}
                                    onChange={(e) => (setSymptoms(e.target.value))}
                              />
                        </div>

                        <input
                              type="submit"
                              value={patient.id ? 'Editar registro' : 'Enviar registro'}
                              className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md w-full placeholder-indigo-400  "
                        />
                  </form>
            </div>
      )
}
