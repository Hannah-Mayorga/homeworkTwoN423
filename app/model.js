var key = "53599ec288054906a0a203018222908";
var baseURL = "http://api.weatherapi.com/v1/";

// Built in functions to get full date
function getCurrentDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();
    const fullDate = `${year}-${day}-${month}`;
    console.log(fullDate);
    return fullDate;
}

function getCurrentWeather(location) {
    const currentDate = getCurrentDate();
    // filling in the blanks of the API
    $.get(`${baseURL}forecast.json?key=${key}&q=${location}&aqi=no${currentDate}`, (data) => {
        console.log(data);
        document.getElementById("dataElement").innerHTML = data;
        // trying to display the data, not sure why this wont work 
      //  for (let i = 0; i < data.length; i++) {
        //    const element = data[i];
          //  console.log(element.name);
           // $("#dataElement").append('<p>${element.name}</p>');

        // }
    }
    ).fail(function (e) {
         alert("Servers Currently Unavaliable");
});
}

export {getCurrentWeather};