mapboxgl.accessToken = 'pk.eyJ1IjoiaG9qaWFrYmFyIiwiYSI6ImNrazk5dmY5eTB1aHIyeW8wbWVhcjlqejcifQ.64D0dODOaXsztlG186ckrQ';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
});

function successLocation(position) {
  console.log(position);
  setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
  console.log([-126.9, 37.56]);
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: center,
    zoom: 15
  }); 

  const nav = new mapboxgl.NavigationControl()
  map.addControl(nav)

  var directions = new MapboxDirections({ 
    accessToken: mapboxgl.accessToken
  });

  map.addControl(directions, 'top-left')
  
}

