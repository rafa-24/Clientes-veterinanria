import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import PatientList from './components/PatientList'
import { useState } from 'react'


function App() {
  const [patients, setPatients] = useState([]);

  const deletePatient = (id) => {
    const availablePatients = patients.filter((index) => index.id !== id);
    setPatients(availablePatients);
  }

  return (
    <div className='container mx-auto mt-20'>
      <Header />

      <div className='mt-12 md:flex'>
        <Form
          patients={patients}
          setPatients={setPatients}
        />

        <PatientList
          patients={patients}
          deletePatient={deletePatient}
        />
      </div>

    </div>
  )
}

export default App
