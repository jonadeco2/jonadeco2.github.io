---
layout : base
title: "Taxilocaties"
permalink: /home/taxilocaties/
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
</section>



<script src="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js">
    </script>


    <script>
    function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: {lat: 51.048087100376, lng: 3.7305114083734}
        });

        var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
        var icons = {
          parking: {
            icon: iconBase + 'parking_lot_maps.png'
          },
          library: {
            icon: iconBase + 'library_maps.png'
          },
          info: {
            icon: iconBase + 'info-i_maps.png'
          }
        };




        var labels = ['t1','t2','t3','t4','t5','t6','t7','t8'];



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
        {lat: 51.053990017924, lng: 3.7216085170393 },
        {lat: 51.048087100376, lng: 3.7305114083734},
        {lat: 51.036168474463, lng: 3.7115750574136},
        {lat: 51.056357161705, lng: 3.7400863685371},
        {lat: 51.025415269708, lng: 3.6921087940007},
        {lat: 51.050724685357, lng: 3.7227812797699},
        {lat: 51.050722204274, lng: 3.7223285027056},
        {lat: 51.050634512282, lng: 3.7236881467039}, 
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
    </div><!-- end container -->
</dl>