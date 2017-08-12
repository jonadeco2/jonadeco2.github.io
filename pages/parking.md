---
layout : default
title: "Parking"
permalink: /home/parking/
---


<dl>
<div class="container">
<div class="row">
<div class="col-xs-12 block_top wrapper_3">
        <h3 class="text-center white padding-block">{{ page.title }}</h3>
</div>
</div>



<section>
    <div class="row">
      <div class="col-xs-12" id="map">
      </div>
    </div>
</section>
<section>
    <div class="row">
      <div class="col-xs-12">
        <section class="sidebar">
            <div class="loader"></div>
        </section>
      </div>
    </div>
</section><!-- end container -->





    <script src="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js">
    </script>


    <script>
    function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: {lat: 51.05367, lng: 3.7186}
        });
        var labels = ['p7','p10','p1','p4','p8','p2'];
        var markers = locations.map(function(location, i) {
          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
          });
        });
        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
      }
      var locations = [
        {lat: 51.05367, lng: 3.7186},
        {lat: 51.04171, lng: 3.72557},
        {lat: 51.05652, lng: 3.72595},
        {lat: 51.04862, lng: 3.72225},
        {lat: 51.05532, lng: 3.71653},
        {lat: 51.05207, lng: 3.72981},
      ]
    </script>

    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC74LKdgxQR0gpx6A9iAnxYEo3B0D9AobU&callback=initMap"
    type="text/javascript"></script>

    <section>
    <div class="row">
    <div class="col-xs-12 block_bottom wrapper_2">
    </div>
    </div>
    </section>



</div>
</dl>
