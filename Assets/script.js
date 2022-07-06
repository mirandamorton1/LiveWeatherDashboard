var currentDate = moment().format("MMMM Do YYYY")
// var urlRequest = '"http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=Imperial" + "&APPID=c10bb3bd22f90d636baa008b1529ee25"'
var userInput = $('.userInput').val()
// console.log(userInput) //this works
//SEARCH
// grabbing values from search, to later use in our functions

$('.searchBtn').click(function (event){
    // console.log('user clicked');
    event.preventDefault();

    searchedCity.text(userInput + " " + currentDate)
    fetchLocation(userInput);
})


function searchHandle() {
    //grab the search content
    fetchLocation()
}
//FUNCTIONALITY FOR FETCHING LOCATION//
//activity 3
//call the location api

function fetchLocation(userInput) {
    console.log(userInput);
    fetch('"https://api.openweathermap.org/data/2.5/onecall?lat="${lat}"&lon="${lon}"&exclude="${part}"&appid="${77d064324a88c3f01d3e55ce2b602b2c}"')
    // fetch("https://api.openweathermap.org/data/2.5/weather?q=" + userInput + "&units=imperial&appid=c10bb3bd22f90d636baa008b1529ee25")
    var urlRequest = "https://api.openweathermap.org/data/2.5/weather?q=" + userInput + "&units=imperial&appid=c10bb3bd22f90d636baa008b1529ee25";
    $.ajax({
        url:urlRequest,
        method:"GET",
    })

        .then(function (data) {
            console.log(data)

        })

    }
    fetchLocation(userInput);
//activity 3. get some data pertaining to location - using api call
// fetchweather(data we received from fetchLocation)


//FUNCTIONALITY FOR FETCHING WEATHER//

function fetchWeather (location) {
// get some data for the weather in the lcoation we search using an api call
//call it

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