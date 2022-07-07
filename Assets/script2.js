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
    console.log(userInput)
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + userInput + '&limit=&appid=2b4f64abd099e1c41243e3911cd18532'
    )
        .then(function (response){
            return response.json()
        })
        .then(function (response) {
    
            console.log(response);
            var temp = response.main.temp; 
            // - 273.15 * 1.8 +32;
            var wind = response.wind.speed;
            var humidity = response.main.humidity;
            var city = response.name;
            var icon = `https://api.openweathermap.org/img/w/${response.weather[0].icon}`
            var time = moment(response.dt * 1000).format("MM/DD/YYYY");
            console.log(time)

            var imageTag = document.createElement("img");
            imageTag.setAttribute("src",icon);
        


            $("#temp").append(" ",temp, " F");
            $("#wind").append(" ",wind, " MPH");
            $("#humidity").append(" ",humidity, "%");
            $("#city").append(" ", city);
            $("#time").append(" ", time);
        //need to get different api to get uv index specifically, not lat and long, still works
        fetch(
            "https://api.openweathermap.org/data/2.5/uvi?lat=" + response.coord.lat +
            "&lon=" + response.coord.lon + "&appid=2b4f64abd099e1c41243e3911cd18532")

            .then(function (response){
                return response.json()
            })
            .then(function (response) {
                console.log(response)

                var uvIndex = parseFloat(response.value);
                $("#uv").append(" ",uvIndex);

                if (uvIndex <= 2) {
                $()
                }
                else if (uvIndex <=7 ) {

                }


            });
            //forecast
            var cnt = 5;
        fetch(
            "https://api.openweathermap.org/data/2.5/forecast/daily?lat=" + response.coord.lat + "&lon=" + response.coord.lon + "&cnt=" + cnt+ "&appid=c10bb3bd22f90d636baa008b1529ee25"
        ) 
        .then(function (response){
            return response.json()
        })
        .then(function (response) {
            console.log(response)

            for (var i = 1; i < response.list.length; i++) {
                var timeWeek = moment(response.list[i].dt * 1000).format("MM/DD/YYYY")
                console.log(timeWeek)

                $("#timeWeek").append(" ", timeWeek);

                $(`#temp-${i}`).append(" ",response.list[i].temp.day, " F", imageTag);

                $(`#wind-${i}`).append(" ",response.list[i].speed, " MPH");

                $(`#humidity-${i}`).append(" ",response.list[i].humidity, "%");

                // $(`#uv-$`).append(" ",uvIndex);

                // $("#city").append(" ", city);

            

            }
            

        })

        })
        /// new functionForecast with another call for only 5 days.  i < response.daily.length

    // fetchWeather();
    
    // console.log(lon);
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
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function (weatherAPIInformation){
        console.log(weatherAPIInformation)

    })
    // renderWeather(data)
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