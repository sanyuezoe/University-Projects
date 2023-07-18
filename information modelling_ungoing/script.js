
  var map = L.map('map').setView([40.52474877640787, 25.971700671950884], 7);

  var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
})
osm.addTo(map);

var marker = L.marker([41.84755848226148, 25.356466306182472]).addTo(map);

var circle = L.circle([41.84755848226148, 25.356466306182472], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 500
}).addTo(map);

circle.bindPopup("Here is Ancient City of Troy.")


$(document).ready(function() {
  $('input[type="radio"]').change(function() {
    var selectedValue = $(this).val();
    $('.metadata-radios label').removeClass('highlight');
    $('.metadata-radios label[for="' + selectedValue + '"]').addClass('highlight');
    $('.name, .place').removeClass('highlight');
    $('.' + selectedValue).addClass('highlight');
  });
});