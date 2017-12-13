$(function(){
  getData();
  initMap();
});

function getLdnData(callback){
  $.get("http://api.openweathermap.org/data/2.5/weather?q=London&appid=02f1133b8a93879fb16830c3340d80a9", function(data, status){
        console.log(data);
        londonTemp = parseInt(data.main.temp-273.15);
        londonHumidity = (data.main.humidity);
        londonWindSpeed = parseInt(data.wind.speed*2.23);
        londonWindDir = parseInt(data.wind.deg);
        londonWeatherMain = (data.weather[0].main);
        londonWeatherDesc = (data.weather[0].description);
        londonIcon = (data.weather[0].icon);
        $(".londonCurrent").append("<p> Tempeture: "+londonTemp+"&#8451;"+"</p> <br> <p> Humidiity: "+londonHumidity+"% </p> <br> <p> Wind Speed: "+londonWindSpeed+" MPH</p>");
        if(callback) callback();
    });
}

function getLdnForecast(callback){
  $.get("http://api.openweathermap.org/data/2.5/forecast?q=London,us&appid=02f1133b8a93879fb16830c3340d80a9", function(data, status){
    console.log(data);
    var londonForecastIcon = [];
    var londonForecastMain = [];
    var londonForecastTempMax = [];
    var londonForecastTempMin = [];
      for(i = 0; i < (data.list).length; i++){
        londonDt = (data.list[i].dt);
        if(londonDt % 86400 == 0){
          for(j = 0; j <= 0; j++){
            londonForecastIcon[j] = (data.list[i].weather[0].icon);
            londonForecastMain[j] = (data.list[i].weather[0].main);
            londonForecastTempMax[j] = parseInt(data.list[i].main.temp_max-273.15);
            londonForecastTempMin[j] = parseInt(data.list[i].main.temp_min-273.15);
            $(".londonForecast").append("<div class='col-md-2'><img src='http://openweathermap.org/img/w/"+londonForecastIcon[j]+".png'></img> <br> <p>"+londonForecastMain[j]+"</p> <br> <p> Highs: "+londonForecastTempMax[j]+"</p> <br> <p> Lows: "+londonForecastTempMin[j]+"</p> </div>");
          }
        }
      }
      if(callback) callback();
  });
}

function getNycData(callback){
  $.get("http://api.openweathermap.org/data/2.5/weather?q=newYork&appid=02f1133b8a93879fb16830c3340d80a9", function(data, status){
        console.log(data);
        newYorkTemp = parseInt(data.main.temp-273.15);
        newYorkHumidity = (data.main.humidity);
        newYorkWindSpeed = parseInt(data.wind.speed*2.23);
        newYorkWindDir = parseInt(data.wind.speed);
        newYorkWeatherMain = (data.weather[0].main);
        newYorkWeatherDesc = (data.weather[0].description);
        newYorkIcon = (data.weather[0].icon);
        $(".newYorkCurrent").append("<p> Tempeture: "+newYorkTemp+"&#8451;"+"</p> <br> <p> Humidiity: "+newYorkHumidity+"% </p> <br> <p> Wind Speed: "+newYorkWindSpeed+" MPH</p>");
        if(callback) callback();
    });
}

function getNycForecast(callback){
  $.get("http://api.openweathermap.org/data/2.5/forecast?q=newYork,us&appid=02f1133b8a93879fb16830c3340d80a9", function(data, status){
    console.log(data);
    var newYorkForecastIcon = [];
    var newYorkForecastMain = [];
    var newYorkForecastTempMax = [];
    var newYorkForecastTempMin = [];
      for(i = 0; i < (data.list).length; i++){
        newYorkDt = (data.list[i].dt);
        if(newYorkDt % 86400 == 0){
          for(j = 0; j <= 0; j++){
            newYorkForecastIcon[j] = (data.list[i].weather[0].icon);
            newYorkForecastMain[j] = (data.list[i].weather[0].main);
            newYorkForecastTempMax[j] = parseInt(data.list[i].main.temp_max-273.15);
            newYorkForecastTempMin[j] = parseInt(data.list[i].main.temp_min-273.15);
            $(".newYorkForecast").append("<div class='col-md-2'><img src='http://openweathermap.org/img/w/"+newYorkForecastIcon[j]+".png'></img> <br> <p>"+newYorkForecastMain[j]+"</p> <br> <p> Highs: "+newYorkForecastTempMax[j]+"</p> <br> <p> Lows: "+newYorkForecastTempMin[j]+"</p> </div>");
          }
        }
      }
      if(callback) callback();
  });
}

function getGoogleMap(callback){
  $.getScript( "http://maps.googleapis.com/maps/api/js?v=3&callback=initMap", function() {
    if(callback) callback();
  });
}

function getData(){
  getLdnData(function(){
    getLdnForecast(function(){
      getNycData(function(){
        getNycForecast(function(){
          getGoogleMap(function(){
            console.log("done!");
          });
        });
      });
    });
  });
}

function initMap() {
  // Position Variables
    //Places
  var londonPos = new google.maps.LatLng(51.507354, -0.127695);
  var newYorkPos = new google.maps.LatLng(40.712655, -74.000301);

    //Attractions
  var empireStatePos = {lat: 40.7484405, lng: -73.9856644 }; // Think this should be changed to be within the marker
  var londonEyePos = {lat: 51.6, lng: -0.15}; // Dummy

  // Create a map object and specify the DOM element for display.
  var london = new google.maps.Map(document.getElementById('london'), {
    center: londonPos,
    scrollwheel: false,
    zoom: 10,
    suppressInfoWindows: true
  });

  var newYork = new google.maps.Map(document.getElementById('newYork'), {
    center: newYorkPos,
    scrollwheel: false,
    zoom: 10,
    suppressInfoWindows: true
  });

  //Marker variables
    //Places
  var londonMarker = new google.maps.Marker({
    position: londonPos,
    map: london,
    title: "London"
  });

  var newYorkMarker = new google.maps.Marker({
    position: newYorkPos,
    map: newYork,
    title: "New York"
  });

    // Attractions
  var empireState = new google.maps.Marker({
    position: empireStatePos,
    map: newYork,
    title: "New York"
  });

  var londonEye = new google.maps.Marker({
    position: londonEyePos,
    map: london,
    title: "London Eye"
  });

  //Info Windows Variables
  var infoWindowNewYork = new google.maps.InfoWindow({
    content: "<h5>New York City</h5><p> New York is a city with a population of 30 million </p>",
    position: newYorkPos,
    map: newYork
  });

  var infoWindowEmpireState = new google.maps.InfoWindow({
    content: "<p>Empire State Building</p>",
    position: empireStatePos,
    map: newYork
  });

  //FAKE
  var infoWindowLondonEye = new google.maps.InfoWindow({
    content: "<h2>London Eye</h2>",
    position: londonEyePos,
    map: london
  })

  //Info Event Listeners
  // REALLY BAD RESET CODE (Should be done better)//
  google.maps.event.addListener(newYork, 'idle', function(){
    infoWindowNewYork.close(newYork, this);
    infoWindowEmpireState.close(newYork, this);
    infoWindowLondonEye.close(london, this);
  });

  //Open & Close for each marker
  google.maps.event.addListener(newYorkMarker, 'mouseover', function() {
	  infoWindowNewYork.open(newYork, this);
  });
  google.maps.event.addListener(newYorkMarker, 'mouseout', function() {
	  infoWindowNewYork.close(newYork, this);
  });

  google.maps.event.addListener(empireState, 'mouseover', function() {
	  infoWindowEmpireState.open(newYork, this);
  });
  google.maps.event.addListener(empireState, 'mouseout', function() {
	  infoWindowEmpireState.close(newYork, this);
  });

	//Dummy
  google.maps.event.addListener(londonEye, 'mouseover', function() {
    infoWindowLondonEye.open(london, this);
  });
  google.maps.event.addListener(londonEye, 'mouseout', function() {
    infoWindowLondonEye.close(london, this);
  });
}
