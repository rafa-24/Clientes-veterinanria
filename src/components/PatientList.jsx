import Patients from "./Patients"


export default function PatientList({ patients, deletePatient, updatePatients }) {

      return (
            <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-scroll">
                  <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>

                  <p className="mt-5 text-xl mb-10 text-center">
                        Administra tus {''}
                        <span className="text-indigo-600 font-bold text-center">Pacientes y Citas</span>
                  </p>

                  {
                        patients.length === 0 ?
                              (
                                    <div className="bg-gray-950 border-l-4 border-green-900 text-yellow-500 p-4 rounded mb-7">
                                          Aun no hay pacientes
                                    </div>
                              )

                              : patients.map(patient => (
                                    <Patients
                                          patient={patient}
                                          key={patient.id}
                                          deletePatient={deletePatient}
                                          updatePatients={updatePatients}
                                    />
                              ))

                  }

            </div>
      )
}
