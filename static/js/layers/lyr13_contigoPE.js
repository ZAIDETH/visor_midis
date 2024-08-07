// Función auxiliar para generar el estilo
function generatePointStyle(fillColor) {
    return {
        pane: 'pane_Contigo_SJL_13',
        radius: 2.2,
        opacity: 1,
        color: 'rgba(35,35,35,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: fillColor,
        interactive: true,
    };
}

// Función de estilo
function style_Contigo_SJL_13_0() {
    return generatePointStyle('rgba(88,212,243,1.0)');
}

map.createPane('pane_Contigo_SJL_13');
map.getPane('pane_Contigo_SJL_13').style.zIndex = 413;
map.getPane('pane_Contigo_SJL_13').style['mix-blend-mode'] = 'normal';
var layer_Contigo_SJL_13 = new L.geoJson(json_Contigo_SJL_13, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Contigo_SJL_13',
    layerName: 'lyr13',
    pane: 'pane_Contigo_SJL_13',
    onEachFeature: pintarPopup('Contigo_SJL'),
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, style_Contigo_SJL_13_0());
    },
});
bounds_group.addLayer(layer_Contigo_SJL_13);
// map.addLayer(layer_Contigo_SJL_13);

// Añadir la leyenda al mapa
(function() {
    var div = L.DomUtil.create('div', 'info legend', leyenda_container),
        categories_names = ['Hogares Contigo PE'],
        labels = [];

    div.id = 'lyr13';
    div.innerHTML = '<h4>Hogares Contigo PE</h4>';

    // Generar la etiqueta de la leyenda para el punto
    var style = style_Contigo_SJL_13_0();
    labels.push(
        '<i style="background:' + style.fillColor + '; width: 12px; height: 12px; display: inline-block; border-radius: 50%; margin-right: 5px;"></i> ' +
        categories_names[0]);

    div.innerHTML += labels.join('<br>');
    div.style.backgroundColor = 'white';  // Añadir fondo blanco
    div.style.padding = '10px';  // Añadir padding para mejor presentación
    div.style.display = 'none'; // Añadir display para ocultar la leyenda

})();
