<script>
  var map;

  // Set icons
  let pin_image = 'https://s3-us-west-2.amazonaws.com/grupopv-public/assets/img/components/maps/google-maps/pin.png';
  let cluster_image = 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m';

  let markers_data = [
    {{ include.markers }}
  ]

  function initMap() {
    // Map configuration
    var latlng = new google.maps.LatLng({{ include.lat }}, {{ include.lng }});
    var mapOptions = {
      zoom: {{ include.zoom }},
      center: latlng
    }

    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    initClusters();
  }

  function initClusters() {
    // Add a marker clusterer to manage the markers
    var markerCluster = new MarkerClusterer(map, createMarkers(),
       { imagePath: cluster_image }
    );
    hideMarkersOnLatLng(markerCluster, 0, 0);
  }

  function createMarkers() {
    var markers = markers_data.map(function(location, i) {
      var marker = new google.maps.Marker({
        position: createLatLng(location.map_url),
        icon: pin_image,
        title: location.title
      });
      createInfoWindow(marker, location);
      return marker;
    });
    return markers;
  }

  function createLatLng(url) {
    // Create lat/long object
    var location_latlng = new google.maps.LatLng(
        getLat(url),
        getLng(url),
      );
    return location_latlng;
  }

  function getLat(url) {
    return url
    .replace(/^.*!3d/,'')
    .replace(/![23]m[23].*/,'')
  }

  function getLng(url) {
    return url
    .replace(/^.*!2d/,'')
    .replace(/!3d.*/,'')
  }

  function createInfoWindow(marker, data) {
    marker.addListener('click', function() {
      var infowindow = new google.maps.InfoWindow({
        content: infoWindowContent(data)
      });
      infowindow.open(map, marker);
    });
  }

  function hideMarkersOnLatLng(cluster, lat, lng) {
    markers = cluster.getMarkers();
    for (var i = 0; i < markers.length; i++) {
      if (markers[i].position.lat() == lat && markers[i].position.lng() == lng) {
        cluster.removeMarker(markers[i]);
        i--;
      }
    }
  }

  function infoWindowContent(data) {
    return  `{{ include.info_window }}`;
  }
</script>

<script
  src="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js">
</script>

<script async defer
  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDfjCM3jZpjmX0oQdHrxEb_1cZWR_BL9WI&callback=initMap">
</script>
