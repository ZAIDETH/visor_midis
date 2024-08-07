// Función auxiliar para generar el estilo
function generatePointStyle(fillColor) {
    return {
        pane: 'pane_HogaresPGH2024BrechasAtencionSJL_11',
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
function style_HogaresPGH2024BrechasAtencionSJL_11_0() {
    return generatePointStyle('rgba(139,88,243,1.0)');
}

map.createPane('pane_HogaresPGH2024BrechasAtencionSJL_11');
map.getPane('pane_HogaresPGH2024BrechasAtencionSJL_11').style.zIndex = 411;
map.getPane('pane_HogaresPGH2024BrechasAtencionSJL_11').style['mix-blend-mode'] = 'normal';
var layer_HogaresPGH2024BrechasAtencionSJL_11 = new L.geoJson(json_HogaresPGH2024BrechasAtencionSJL_11, {
    attribution: '',
    interactive: true,
    dataVar: 'json_HogaresPGH2024BrechasAtencionSJL_11',
    layerName: 'lyr11',
    pane: 'pane_HogaresPGH2024BrechasAtencionSJL_11',
    onEachFeature: pintarPopup('HogaresPGH2024BrechasAtencionSJL'),
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, style_HogaresPGH2024BrechasAtencionSJL_11_0());
    },
});
bounds_group.addLayer(layer_HogaresPGH2024BrechasAtencionSJL_11);
// map.addLayer(layer_HogaresPGH2024BrechasAtencionSJL_11);

// Añadir la leyenda al mapa
(function() {
    var div = L.DomUtil.create('div', 'info legend', leyenda_container),
        categories_names = ['Hogares PGH 2024 Brechas Atencion'],
        labels = [];

    div.id = 'lyr11';
    div.innerHTML = '<h4>Hogares PGH 2024 - Brechas de Atención</h4>';

    // Generar la etiqueta de la leyenda para el punto
    var style = style_HogaresPGH2024BrechasAtencionSJL_11_0();
    labels.push(
        '<i style="background:' + style.fillColor + '; width: 12px; height: 12px; display: inline-block; border-radius: 50%; margin-right: 5px;"></i> ' +
        categories_names[0]);

    div.innerHTML += labels.join('<br>');
    div.style.backgroundColor = 'white';  // Añadir fondo blanco
    div.style.padding = '10px';  // Añadir padding para mejor presentación
    div.style.display = 'none'; // Añadir display para ocultar la leyenda

})();
