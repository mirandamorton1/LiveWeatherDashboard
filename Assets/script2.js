var currentDate = moment().format("MMMM do YYYY");
var citySearch = $(".citySearch");
console.log(citySearch)
var userInput = $('#userInput').val()

//SEARC
//grab values from search to use later in functions
$("#searchBtn").click(function (event){
    event.preventDefault();

    var userInput = $("#userInput").val();
    console.log(userInput);

    citySearch.text(userInput + " " + currentDate);

    fetchLocation(userInput);

});

//FUNCTIONALITY FOR FETCHING LOCATION
// activity 3
// call the location api

function fetchLocation(userInput) {
    //get some data pertaining to location -using api call
    // fetch Weather(data we recieved from fetchlocation)
    fetch(
        'http://api.openweathermap.org/geo/1.0/direct?q=' + userInput + '&limit=&appid=2b4f64abd099e1c41243e3911cd18532'
    )
        .then(function (getLocationAPI){
            return getLocationAPI.json()
        })
        .then(function (locationAPIInformation) {
            var lat = locationAPIInformation[0].lat;
            var lon = locationAPIInformation[0].lon;
            console.log(locationAPIInformation);
        })
    fetchWeather(lat,lon);
    console.log(lat);
    console.log(lon);
};

//FUNCTIONALITY FOR FETCHING WEATHER//

function fetchWeather (lat, lon) {
    console.log(lat);
    console.log(lon);
    // get some data for the weather in the lcoation we search using an api call
    //call it
    
    fetch(
        'https://api.openweathermap.org/data/2.5/onecall?lat' + lat + "&lon" + lon + '&units=imperial&appid=2b4f64abd099e1c41243e3911cd18532'
        )
    .then(function (getWeatherAPI) {
        console.log(getWeatherAPI);
        return response.json();
    })
    .then(function (weatherAPIInformation){

    })
    renderWeather(data)
    }
    
//FUNCTIONALITY FOR RENDERING CONTENT
function renderWeather(data) {
    //render the weather
    }
    // data.temp
    // data.wind
    // data.humidity
    // data.uv
    //HISTORY FEATURE
    //local storage