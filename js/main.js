//Initialize and add the map
function initMap() {
  // Your Location stored in a const binding
  const loc = { lat: -15.8301751, lng: -48.0104118 };
  
  //Center map on location chosen
  const map = new google.maps.Map(document.querySelector('#mapa'), 
  {
    center: loc,
    zoom: 16
  });
  //Add marker to be positioned at the location
  const marker = new google.maps.Marker( { position: loc, map: map } );
}

// -15.8301751,-48.0104118