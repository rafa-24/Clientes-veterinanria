// Funciones para almacenar en el local storage

export const saveLocalStorage = (arr) => {
      const patientsJSON = JSON.stringify(arr);
      localStorage.setItem('dbPatients', patientsJSON);
}


export const getDataLocalStorage = (key) => {
      let storedData = localStorage.getItem(key);
      let arrRecovered = JSON.parse(storedData);
      console.log(arrRecovered);
}



