var londonLon;
var londonLat;
var newyorkLon;
var newyorkLat;

$(function(){
  getLdnData();
  getNycData();
});

function getLdnData(){
  $.get("http://api.openweathermap.org/data/2.5/weather?q=London&appid=02f1133b8a93879fb16830c3340d80a9", function(data, status){
        //alert("Data: " + data + "\nStatus: " + status);
        console.log("London Data: "+data);
        londonLon = parseInt(data.coord.lon);
        londonLat = parseInt(data.coord.lat);
        console.log(londonLon);
        console.log(londonLat);
    });
}

function getNycData(){
  $.get("http://api.openweathermap.org/data/2.5/weather?q=newYork&appid=02f1133b8a93879fb16830c3340d80a9", function(data, status){
        //alert("Data: " + data + "\nStatus: " + status);
        console.log("New York Data: "+data);
        newyorkLon = parseInt(data.coord.lon);
        newyorkLat = parseInt(data.coord.lat);
    });
}
