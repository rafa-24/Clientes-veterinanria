import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import PatientList from './components/PatientList'
import { useState } from 'react'
import { saveLocalStorage } from './helpers/storage'



function App() {
  const [patients, setPatients] = useState([]);

  const [patient, setPatient] = useState({});

  const updatePatients = (data) => {
    setPatient(data);
  }

  const deletePatient = (id) => {
    const availablePatients = patients.filter((index) => index.id !== id);
    setPatients(availablePatients);
  }

  saveLocalStorage(patients);



  return (
    <div className='container mx-auto mt-20'>
      <Header />

      <div className='mt-12 md:flex'>
        <Form
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}

        />

        <PatientList
          patients={patients}
          deletePatient={deletePatient}
          updatePatients={updatePatients}
        />
      </div>

    </div>
  )
}

export default App
