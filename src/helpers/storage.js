// Funciones para almacenar en el local storage

export const saveLocalStorage = (arr) => {
      const patientsJSON = JSON.stringify(arr);
      localStorage.setItem('dbPatients', patientsJSON);
}



