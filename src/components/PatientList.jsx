import Patients from "./Patients"

export default function PatientList() {
      return (
            <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-scroll">
                  <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>

                  <p className="mt-5 text-xl mb-10 text-center">
                        Administra tus {''}
                        <span className="text-indigo-600 font-bold text-center">Pacientes y Citas</span>
                  </p>

                  <Patients />
                  <Patients />
                  <Patients />
                  <Patients />
                  <Patients />
                  <Patients />
            </div>
      )
}
