/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


const postData = async ( url = '', data = {})=>{
    console.log(data);
      const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
     // Body data type must match "Content-Type" header        
      body: JSON.stringify(data), 
    });

      try {
        const newData = await response.json();
        console.log(newData);
        return newData;
      }catch(error) {
      console.log("error", error);
      }
  }


let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
let apiKey = '&appid=dd71a08fdad0830475aea10b97a39ec6';


document.querySelector('button').addEventListener('click', performAction);

function performAction(e) {
    const zipCode = document.getElementById('zip').value;
    getWeather(baseURL,zipCode,apiKey);
}

const getWeather = async (baseURL, zipCode, apiKey)=>{

    const res = await fetch(baseURL+zipCode+apiKey)
    try {
  
      const data = await res.json();
      console.log(data)
      return data;
    }  catch(error) {
      console.log("error", error);
      // appropriately handle the error
    }
  }



