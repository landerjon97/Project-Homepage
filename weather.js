/*
Project: Home Page
Author: Jonathan Lander
Other: Create web page for launching websites
 */
//THIS IS API FOUND AT WEBSITE BELOW VERY SIMPLE TO USE
//MUST USE JQUERY

// Docs at http://simpleweatherjs.com
/*************************************************************************************************************/
//MAIN
/*************************************************************************************************************/
$(document).ready(function() {
    $.simpleWeather({
        //location to get weather
        location: 'Clarion, PA',
        woeid: '',
        //kind of degree
        unit: 'f',
        //adding it the the html file anymore information look at simpleweatherjs.com
        success: function(weather) {
            html = '<h1>Current:</h1>'+
                '<h1>'+weather.temp+'&deg;'+weather.units.temp+'<br>'
                +weather.currently+'</h1>';

            $("#weather").html(html);

            html = '<h1> Today: </h1>'+
                '<h1>High: '+weather.forecast[0].high+'&deg;'+weather.units.temp+'<br> Low:  '
                +weather.forecast[0].low+'&deg;'+weather.units.temp+'</h1>';

            $("#future").html(html);
            html = '<h1> Tomorrow: </h1>'+
                '<h1>High: '+weather.forecast[1].high+'&deg;'+weather.units.temp+'<br> Low:  '
                +weather.forecast[1].low+'&deg;'+weather.units.temp+'</h1>';

            $("#tomorrow").html(html);
        },
        error: function(error) {
            $("#weather").html('<p>'+error+'</p>');
        }
    });
});

