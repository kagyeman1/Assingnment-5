let myMap = L.map("map").setView([43.61, -99.011], 10);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 20
}).addTo(myMap);

let First_marker = L.marker([37.618, -122.375]).addTo(myMap);
let Second_marker = L.marker([37.710, -122.224]).addTo(myMap);
let Third_marker = L.marker([41.87, -87.629]).addTo(myMap);

let GWB= L.circle([40.8517, -73.9527], {
    color: "violet",
    fillColor: "#4C1130",
    fillOpacity: "0.5",
    radius: 1500
}).addTo(myMap);


First_marker.bindPopup("<b>First_marker</b>");
Second_marker.bindPopup("<b>Second_Marker</b>");
Third_marker.bindPopup("<b>Third_Marker</b>");
GWB.bindPopup("<b>George Washington Bridge</b>");
