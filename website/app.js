/* Global Variables */
let weatherData = '';
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

 

const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&appid=dd71a08fdad0830475aea10b97a39ec6';


document.querySelector('button').addEventListener('click', performAction);


function performAction(e) {
    const zipCode = document.getElementById('zip').value;
    const feeling = document.getElementById('feelings').value;

    getWeather(baseURL,zipCode,apiKey)
    
    .then(function(data) {
        weatherData = data.main.temp;
        postData('/projectData', {userFeeling: feeling, weather: weatherData, date: newDate});
    }) 
    
    .then (()=>updateUI());
}


const updateUI = async() => {
    const request = await fetch('/projectData');
    try {
        const allData = await request.json();
        console.log(allData);
        document.getElementById('date').innerHTML = `Date is ${allData[allData.length-1].date}`;
        document.getElementById('temp').innerHTML = `Temperature is ${allData[allData.length-1].temperature}`;
        document.getElementById('content').innerHTML = `Feeling is ${allData[allData.length-1].userResponse}`;
    } catch(error) {
        console.log("error", error);
    }
}

const getWeather = async (baseURL, zipCode, apiKey)=>{

    const res = await fetch(baseURL+zipCode+apiKey);
    try {
      const data = await res.json();
      console.log(data)
      return data;
    }  catch(error) {
      console.log("error", error);
      // appropriately handle the error
    }
  }

  const postData = async ( url = '', data = {})=>{
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