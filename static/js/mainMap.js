var map = L.map('map', {
    zoomControl:true, maxZoom:28, minZoom:1
}).fitBounds([[-12.047726051537177,-77.10106913766255],[-11.847435032199735,-76.75851080034725]]);
var hash = new L.Hash(map);
map.attributionControl.setPrefix('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a> &middot; <a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> &middot; <a href="https://qgis.org">QGIS</a> &middot; <a href="https://github.com/zaideth">Zaideth Rios</a>');
var autolinker = new Autolinker({truncate: {length: 30, location: 'smart'}});

function pintarPopup(layer_name) {
    return function(feature, layer){
        var popupContent = '<h2>'+layer_name+'</h2><table>';
        var arrayHiddenAttributes = ['OBJECTID', 'OBJECTID_1','ObjectID_2', 'Shape_Length','Shape_Area','LL']
        for (var property in feature.properties) {
            if (arrayHiddenAttributes.includes(property)){
                continue;
            }
            if (feature.properties.hasOwnProperty(property)) {
                popupContent += '<tr><td><strong>' + property + '</strong></td><td>' + feature.properties[property] + '</td></tr>';
            }
        }
        popupContent += '</table>';
        layer.bindPopup(popupContent);
    }    
}

document.querySelector(".leaflet-popup-pane").addEventListener("load", function(event) {
    var tagName = event.target.tagName,
        popup = map._popup;
    // Also check if flag is already set.
    if (tagName === "IMG" && popup && !popup._updated) {
        popup._updated = true; // Set flag to prevent looping.
        popup.update();
    }
}, true);
var bounds_group = new L.featureGroup([]);
function setBounds() {
}
map.createPane('pane_OpenStreetMap_0');
map.getPane('pane_OpenStreetMap_0').style.zIndex = 400;
var layer_OpenStreetMap_0 = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    pane: 'pane_OpenStreetMap_0',
    opacity: 1.0,
    attribution: '',
    minZoom: 1,
    maxZoom: 28,
    minNativeZoom: 0,
    maxNativeZoom: 19
});
layer_OpenStreetMap_0;
map.addLayer(layer_OpenStreetMap_0);


setBounds();
