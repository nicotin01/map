var mapa = L.map("contenedor-del-mapa").setView([-34.9199175,-57.9469103], 13);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {}).addTo(mapa);

var marcador= L.marker([-34.9178707,-57.9575706]).addTo(mapa)
marcador.bindPopup("Crisana plant based")

var circle = L.circle([4.613573, -74.063889], {
radius: 1000 ,
color : "green"
}).addTo(mapa)
circle.bindPopup("programacion")

function clicSobreMapa(evento){
    console.log(evento)
 alert(evento.latlng)
}

mapa.on("click", clicSobreMapa);

console.log(marcador)

var myIcon = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/3712/3712622.png',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
});

L.marker([-35,-58], {icon: myIcon}).addTo(mapa);

var marcador= L.marker([-34.911117467328566, -57.95863325191743]).addTo(mapa)
marcador.bindPopup("Tara verde.")
