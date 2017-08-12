---
layout : default
title: "Fietsdienstverleningen"
permalink: /home/fietsdienstverleningen/
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
          center: {lat: 51.042647976043, lng: 3.7234165533576}
        });
        var labels = ['f1','f2','f3','f4','f5'];
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
        {lat: 51.034556139344, lng: 3.7082800089006 },
        {lat: 51.042647976043, lng: 3.7234165533576},
        {lat: 51.059460736383, lng: 3.7194977237648},
        {lat: 51.056672478401, lng: 3.7401784317038},
        {lat: 51.054030204599, lng: 3.7240583331843}
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