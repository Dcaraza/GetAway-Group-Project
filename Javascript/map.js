var map;

function createMap(){
  var options = {
    center: {
      lat: 43.654, 
      lng: -79.383, },

    zoom: 10
  };

  map = new google.map.createMap(document.getElementById("map-body"), options);
}


//Logic for displaying Map

var map;

function createMap () {
  var options = {
    center: { lat: 25.7617, lng: -80.1918 }, 
    zoom: 10
  };
  debugger
  map = new google.maps.Map(document.getElementById('map-body'), options);

  var input = document.getElementById('search-map');
  var searchBox = new google.maps.places.SearchBox(input);

  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  var markers = [];
  
  searchBox.addListener('places_changed', function () {
    var places = searchBox.getPlaces();

    if (places.length == 0)
      return;

    markers.forEach(function (m) { m.setMap(null); });
    markers = [];

    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(p) {
      if (!p.geometry)
        return;

      markers.push(new google.maps.Marker({
        map: map,
        title: p.name,
        position: p.geometry.location
      }));

      if (p.geometry.viewport)
        bounds.union(p.geometry.viewport);
      else
        bounds.extend(p.geometry.location);
    });
    
    map.fitBounds(bounds);
  });
}  