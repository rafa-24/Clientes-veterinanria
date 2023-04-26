export default function Patients({ patient }) {
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
            </div>
      )
}
