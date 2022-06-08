// Geolocation options <!-- getCurrentPosition, watchPosition, clearPostion -->

// use modernizr to check support
function determineLocation() {
  if (Modernizr.geolocation) {
    navigator.geolocation.getCurrentPosition(displayOnMap);
  } else {
    // geolocation is not supported in this browser
  }
}

//button listener
let geobutton = document.getElementById('geobutton');
geobutton.addEventListener('click', determineLocation);

//display in google maps
function displayOnMap(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  // Let’s use Google Maps to display the location
  let myOptions = {
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };
  var map = new google.maps.Map(document.getElementById('geoForm'), myOptions);

  var initialLocation = new google.maps.LatLng(latitude, longitude);

  var marker = new google.maps.Marker({
    position: initialLocation,
    map: map,
    title: 'Hello World!',
  });
}
