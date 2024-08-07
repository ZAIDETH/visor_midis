// Función auxiliar para generar el estilo
function generatePointStyle(fillColor) {
    return {
        pane: 'pane_HogaresconPension65PESJL_15',
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
function style_HogaresconPension65PESJL_15_0() {
    return generatePointStyle('rgba(62,111,227,1.0)');
}

map.createPane('pane_HogaresconPension65PESJL_15');
map.getPane('pane_HogaresconPension65PESJL_15').style.zIndex = 415;
map.getPane('pane_HogaresconPension65PESJL_15').style['mix-blend-mode'] = 'normal';
var layer_HogaresconPension65PESJL_15 = new L.geoJson(json_HogaresconPension65PESJL_15, {
    attribution: '',
    interactive: true,
    dataVar: 'json_HogaresconPension65PESJL_15',
    layerName: 'lyr15',
    pane: 'pane_HogaresconPension65PESJL_15',
    onEachFeature: pintarPopup('Hogares Pensión 65 PE'),
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, style_HogaresconPension65PESJL_15_0());
    },
});
bounds_group.addLayer(layer_HogaresconPension65PESJL_15);
// map.addLayer(layer_HogaresconPension65PESJL_15);

// Añadir la leyenda al mapa
(function() {
    var div = L.DomUtil.create('div', 'info legend', leyenda_container),
        categories_names = ['Hogares Pensión 65 PE'],
        labels = [];

    div.id = 'lyr15';
    div.innerHTML = '<h4>Hogares Pensión 65 PE</h4>';

    // Generar la etiqueta de la leyenda para el punto
    var style = style_HogaresconPension65PESJL_15_0();
    labels.push(
        '<i style="background:' + style.fillColor + '; width: 12px; height: 12px; display: inline-block; border-radius: 50%; margin-right: 5px;"></i> ' +
        categories_names[0]);

    div.innerHTML += labels.join('<br>');
    div.style.backgroundColor = 'white';  // Añadir fondo blanco
    div.style.padding = '10px';  // Añadir padding para mejor presentación
    div.style.display = 'none'; // Añadir display para ocultar la leyenda

})();
