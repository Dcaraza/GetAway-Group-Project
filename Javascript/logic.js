
$(document).ready(function () {

    var APIKey = "de42150348a73a03e431860aa9d9a03b"

        function locationDetails() {
            $('.btn').on("click", function (event) {
                // event.preventdefault();
                console.log("check");
                var n = $("#search-map").val();
                console.log(n);

                place = n
                var newURL = "http://api.openweathermap.org/data/2.5/weather?q=" + place + "&units=standard" + "&APPID=" + APIKey;

                $.ajax({
                    url: newURL,
                    method: 'GET',

                }).then(function (response) {

                    var temp= response.main.temp
                    var tempF = Math.floor(((temp-273.15)*1.8)+32) + "°F";
                  
                    var humidity = response.main.humidity;
                    var wind = response.wind.speed;
                    
                    console.log(response);
                    console.log(response.weather[0].description);
                    
                    $("#temp").text("Temperature: " + tempF);
                    $("#humidity").text("Humidity: " + humidity);
                    $("#wind").text("Wind Speed: " + wind + " mph");
                   
                
                    
                });
            });
        }
        locationDetails(); 
        
        var APIKey = "de42150348a73a03e431860aa9d9a03b"

        function flightsDetails() {
            $('#flights').on("click", function (event) {
                // event.preventdefault();
                console.log("check");
                var n = $("#autocomplete-input").val();
                console.log(n);

                place = n
                var newURL = "http://api.openweathermap.org/data/2.5/weather?q=" + place + "&units=standard" + "&APPID=" + APIKey;

                $.ajax({
                    url: newURL,
                    method: 'GET',

                }).then(function (response) {
                    console.log(response)
                });
            });
        }
        flightsDetails(); 

        var APIKey = "de42150348a73a03e431860aa9d9a03b"

        function travelDetails() {
            $('#travel').on("click", function (event) {
                // event.preventdefault();
                console.log("check");
                var n = $("#autocomplete-input").val();
                console.log(n);

                place = n
                var newURL = "http://api.openweathermap.org/data/2.5/weather?q=" + place + "&units=standard" + "&APPID=" + APIKey;

                $.ajax({
                    url: newURL,
                    method: 'GET',

                }).then(function (response) {
                    console.log(response)
                });
            });
        }
        travelDetails(); 
});
