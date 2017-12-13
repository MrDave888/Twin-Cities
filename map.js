function initMap() {
  // Position Variables
    //Places
  var londonPos = {lat: londonLat, lng: londonLon};
  var newyorkPos = {lat: newyorkLat, lng: newyorkLon};

  console.log(londonPos);
  console.log(newyorkPos);

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
    center: newyorkPos,
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
    position: newyorkPos,
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
    position: londonLoc,
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
