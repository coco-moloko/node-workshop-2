var ForecastIo = require('forecastio');
var lat = "";
var lon = "";
var prompt = require('prompt');
var request = require('request');

prompt.start();

prompt.get(['location'], function (err, result) {
    if (err) {
        console.log("ya goofed", err);
    } else {
    console.log('Command-line input received:');
    console.log('  location: ' + result.location);
    
    var url ="https://maps.googleapis.com/maps/api/geocode/json?address=" + result.location;
    
    request(url, function(err, response) {
        if (err) {
            console.log("ya blew it!", err);
        } else {
            var city = JSON.parse(response.body);
            var cityLatitude = parseFloat(city.results[0].geometry.location.lat);
            var cityLongitude = parseFloat(city.results[0].geometry.location.lng);
            console.log(cityLatitude, cityLongitude);
    
            var newUrl = "https://api.darksky.net/forecast/ddf0dc512ea34f4346b069ba249bec49/" + cityLatitude + "," + cityLongitude;
            console.log(newUrl);
        }
    });
    
    }
});

