import * as MODEL from "./model.js";

function initListeners() {
    console.log("testing");
    $("#gw").click((e) => {
        const location = $("#gwInput").val();
        if(location != "") {
            getWeather(location);
        } else {
            alert("Please enter a valid location");
        }
    })
}

function getWeather(location) {
    console.log("Weather " + location);
    MODEL.getCurrentWeather(location);
    document.getElementById("theWeather").innerHTML = location;
    $("#gwInput").val("");
}

$(document).ready(function () {
    initListeners();
})