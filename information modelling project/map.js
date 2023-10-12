var map = L.map('map').setView([41.961462340681386, 25.240441126302898], 5);

var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
})
osm.addTo(map);


const OlympusIcon = L.icon({
iconUrl:"/img/olympus-icon.png",
iconSize:[15, 15],
iconAnchor: [10, 10] ,
})

const PlainIcon = L.icon({
iconUrl:"/img/plain-icon.png",
iconSize:[15, 15],
iconAnchor: [10, 10] ,
})

const RiverIcon = L.icon({
iconUrl:"/img/river-icon.png",
iconSize:[15, 15],
iconAnchor: [10, 10] ,
})

const CityIcon = L.icon({
iconUrl:"/img/city-icon.png",
iconSize:[15, 15],
iconAnchor: [10, 10] ,
})

const IslandIcon = L.icon({
iconUrl:"/img/island-icon.png",
iconSize:[15, 15],
iconAnchor: [10, 10] ,
})



// Add markers directly to the map
var marker1 = L.marker([39.961462340681386, 26.240441126302898], { icon: CityIcon }).addTo(map);
var marker2 = L.marker([39.558413985710835, 26.569490132413435], { icon: PlainIcon  }).addTo(map); //Scamandrian plains
var marker3 = L.marker([39.992722, 26.208647], { icon: RiverIcon }).addTo(map); //Simois river
var marker4 = L.marker([39.650356, 31.978243], { icon: CityIcon }).addTo(map); // Phrygia capital
var marker5 = L.marker([45.300181089333854, 34.39997853899846], { icon: CityIcon }).addTo(map); // Chersonese
var marker6 = L.marker([38.366667, 20.716667], { icon: IslandIcon }).addTo(map); // Ithaca island
var marker7 = L.marker([40.085556, 22.358611], { icon: OlympusIcon }).addTo(map); // Olympus mountains
var marker8 = L.marker([37.730278, 22.7575], { icon: CityIcon }).addTo(map); // Mycene
var marker9 = L.marker([37.983800, 23.727500], { icon: CityIcon }).addTo(map); // ancient Athens
var marker10 = L.marker([42.25, 42.7], { icon: CityIcon }).addTo(map); // Colchis
var marker11 = L.marker([37.938611, 22.927222], { icon: CityIcon }).addTo(map); // Corinth

// Bind popups to markers
marker1.bindPopup( "<a href='https://en.wikipedia.org/wiki/Troy'>Ancient City of Troy</a>");
marker2.bindPopup("Scamandrian plain");
marker3.bindPopup("<a href='https://en.wikipedia.org/wiki/Simoeis'>Simois River</a>");
marker4.bindPopup("<a href='https://en.wikipedia.org/wiki/Phrygia'>Phrygia</a>");
marker5.bindPopup("<a href='https://en.wikipedia.org/wiki/Chersonesus'>Chersonese</a>");
marker6.bindPopup("<a href='https://en.wikipedia.org/wiki/Homer%27s_Ithaca'>Ithaca island</a>");
marker7.bindPopup("<a href='https://en.wikipedia.org/wiki/Mount_Olympus'>Olympus mountains</a>");
marker8.bindPopup("<a href='https://en.wikipedia.org/wiki/Mycenae'>Mycene</a>");
marker9.bindPopup("<a href='https://en.wikipedia.org/wiki/History_of_Athens#Antiquity'>ancient Athens</a>");
marker10.bindPopup("<a href='https://en.wikipedia.org/wiki/Colchis'>Colchis</a>");
marker11.bindPopup("<a href='https://en.wikipedia.org/wiki/Colchis'>Corinth</a>");


