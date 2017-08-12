---
layout : base
title: "Stations"
permalink: /home/stations/
---


<dl>
<div class="container">
<div class="col-xs-12 block_top wrapper_3">
        <h3 class="text-center white padding-block">{{ page.title }}</h3>
</div>


<section>
    <div id="map"></div>
      <div class="col-xs-12">
        <section class="sidebar">
            <div class="loader"></div>
        </section>
      </div>
</section>


<script src="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js">
    </script>


    <script>
    function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: {lat: 51.036092064952, lng: 3.710813047709}
        });
        var labels = ['s1','s2','s3','s4','s5','s6','s7','s8','s9','s10'];
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
        {lat: 51.10717867966, lng: 3.702198037946 },
        {lat: 51.002608763091, lng: 3.7978791035356},
        {lat: 50.996414044263, lng: 3.649554715036},
        {lat: 51.06463049788, lng: 3.5757253106664},
        {lat: 51.089107501756, lng: 3.7194657085605},
        {lat: 51.047141444268, lng: 3.6557749635753},
        {lat: 51.019961209405, lng: 3.7643164113837},
        {lat: 51.038087620774, lng: 3.7569866859764}, 
        {lat: 51.036092064952, lng: 3.710813047709},
        {lat: 51.056226100879, lng: 3.740276101992},
      ]
    </script>

    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC74LKdgxQR0gpx6A9iAnxYEo3B0D9AobU&callback=initMap"
    type="text/javascript"></script>


    <section>
    <div class="col-xs-12 block_bottom wrapper_2">
    </div>
    </section>
    </div>
</dl>