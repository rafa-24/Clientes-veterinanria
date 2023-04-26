import Patients from "./Patients"

export default function PatientList({ patients }) {

      const generateId = () => {
            let timestamp = Date.now().toString(36);
            let randomChars = Math.random().toString(36).substring(2, 8);
            return timestamp + randomChars;
      }

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
                                    <div className="bg-blue-100 border-t-4 border-blue-500 rounded-b text-blue-800 px-4 py-3 shadow-md" role="alert">
                                          <div className="flex">
                                                <div className="py-1"><svg className="fill-current h-6 w-6 text-blue-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 110-12 6 6 0 010 12z" /></svg></div>
                                                <div>
                                                      <p className="font-bold">¡Alerta!</p>
                                                      <p className="text-sm">Aun no hay pacientes.</p>
                                                </div>
                                          </div>
                                    </div>
                              )
                              :
                              (
                                    patients.map((patient) => {
                                          return <Patients
                                                patient={patient}
                                                key={generateId()}
                                          />
                                    })
                              )
                  }

            </div>
      )
}
