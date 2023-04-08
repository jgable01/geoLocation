/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

  API Assignment 4
  Joshua Gable


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

"use strict";

// Mapbox API

mapboxgl.accessToken =
  "pk.eyJ1IjoiamdhYmxlMSIsImEiOiJjbGcxMGZscGExNGphM2psYWZsNzBsdXh6In0.JMpYZaaV_-uUcnGypBb3Jg";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [-79.4512, 43.6568],
  zoom: 13,
});

function getLocation(position) {
  const { latitude, longitude } = position.coords;

  map.flyTo({
    center: [longitude, latitude],
    essential: true,
  });

}

function error() {
  console.log("Unable to retrieve your location");
}

const options = {
  enableHighAccuracy: true,
};

function locationPrompt() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getLocation, error, options);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

locationPrompt();
