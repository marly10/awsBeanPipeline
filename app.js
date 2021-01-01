function weather() {
  var location = document.getElementById("location");
  var apiKey = "0dc57f59ad2b4381bb6a15ce20b3e60a";
  var url = "https://api.forecast.io/forecast/";

  navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    location.innerHTML =
      "Latitude is " + latitude + "° Longitude is " + longitude + "°";

    $.getJSON(
      url + apiKey + "/" + latitude + "," + longitude + "?callback=?",
      function(data) {
        $("#temp").html(data.currently.temperature + "° F");
        $("#minutely").html(data.minutely.summary);
      }
    );
  }

  function error() {
    location.innerHTML = "Unable to retrieve your location";
  }

  location.innerHTML = "Locating...";
}
 
weather();

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      
        var element = document.getElementById('text');
      
        if (isMobile) {
            element.innerHTML = "You are using Mobile";
        } else {
            element.innerHTML = "You are using Desktop";
        }



var test = navigator.appVersion;

document.getElementById("test").innerHTML = test;
