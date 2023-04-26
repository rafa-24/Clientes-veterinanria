export default function Patients({ patient, deletePatient }) {
      return (
            <div className="m-3 bg-white shadow-md px-5 py-5 rounded-xl">
                  <p className="font-bold mb-3 text-gray-700 uppercase">
                        Nombre: {''}
                        <span className="font-normal normal-case">{patient.pet}</span>
                  </p>

                  <p className="font-bold mb-3 text-gray-700 uppercase">
                        Mascota: {''}
                        <span className="font-normal normal-case">{patient.owner}</span>
                  </p>

                  <p className="font-bold mb-3 text-gray-700 uppercase">
                        Email: {''}
                        <span className="font-normal normal-case">{patient.email}</span>
                  </p>

                  <p className="font-bold mb-3 text-gray-700 uppercase">
                        Fecha de Alta: {''}
                        <span className="font-normal normal-case">{patient.date}</span>
                  </p>

                  <p className="font-bold mb-3 text-gray-700 uppercase">
                        Sintomas: {''}
                        <span className="font-normal normal-case">{patient.symptoms}</span>
                  </p>

                  <div className="flex">
                        <button onClick={() => deletePatient(patient.id)} className="bg-red-500  text-white font-bold py-2 px-4 rounded mr-2">
                              Eliminar
                        </button>

                        <button className="bg-yellow-500  text-white font-bold py-2 px-4 rounded ml-2">
                              Editar
                        </button>
                  </div>
            </div>
      )
}
