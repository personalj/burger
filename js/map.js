function initMap() {

  var uluru = {lat: 59.93916998692174, lng: 30.309015096732622};


  var element =  document.getElementById('map'); 
  var options = {zoom: 11, center: uluru};
  
  var myMap = new google.maps.Map(element, options);

  addMarker({lat:59.94554327989287, lng: 30.38935262114668});
  addMarker({lat:59.91142323563909, lng: 30.50024587065841});
  addMarker({lat:59.88693161784606, lng: 30.319658102103713});
  addMarker({lat:59.97033574821672, lng: 30.315194906302924});

  function addMarker(coordinates) {
  var marker = new google.maps.Marker({
      position: coordinates, 
      map: myMap,
      icon: 'img/marker.png'
  });
}

  
}
