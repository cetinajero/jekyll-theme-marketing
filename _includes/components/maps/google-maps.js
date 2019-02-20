<script>
  var map;

  // Set icons
  let pin_image = 'https://s3-us-west-2.amazonaws.com/grupopv-public/assets/img/components/maps/google-maps/pin.png';
  let cluster_image = 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m';

  let markers_data = [
    {% for customer in site.data.customers %}{
        "title":"{{ customer[1].title }}",
        "website":"{{ customer[1].url }}",
        "phone":"{{ customer[1].address[0].phone[0].number }}",
        "address":"{{ customer[1].address[0].street }}, {{ customer[1].address[0].block }}, {{ customer[1].address[0].city }}",
        "map_url":"{{ customer[1].address[0].google-maps }}"
      },
    {% endfor %}
  ]

  function initMap() {
    // Map configuration
    var latlng = new google.maps.LatLng(23.2927863, -101.6617556);
    var mapOptions = {
      zoom: 5,
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

  function infoWindowContent(data) {
    return  '<div id="content" style="max-width:350px;">' +
              '<div class="text-center mt-2">' +
                '<img src="/img/common/logos/' + data.website.split('.')[1] + '.png" style="max-width:290px;" data-coordinates="' + getLat(data.map_url) + ', ' + getLng(data.map_url) + '"/>' +
              '</div>' +
              '<hr>' +
              '<h4 id="firstHeading" class="text-center">' + data.title + '</h4>' +
              '<div id="bodyContent">' +
                '<ul class="pl-2">' +
                  '<li class="mb-1">Dirección: <b>' + data.address + '</b></li>' +
                  '<li class="mb-1">Teléfono: <a href="tel:' + data.phone + '"><b>' + data.phone + '</b></a></li>' +
                  '<li class="mb-1">Página web: <a href="' + data.website + '"><b>' + data.website + '</b></a></li>' +
                '</ul>' +
              '</div>' +
            '</div>';
  }
</script>

<script
  src="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js">
</script>

<script async defer
  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDfjCM3jZpjmX0oQdHrxEb_1cZWR_BL9WI&callback=initMap">
</script>