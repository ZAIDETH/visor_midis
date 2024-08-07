// Función auxiliar para generar el estilo
function generatePointStyle(fillColor) {
    return {
        pane: 'pane_Juntos_SJL_12',
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
function style_Juntos_SJL_12_0() {
    return generatePointStyle('rgba(111,22,244,1.0)');
}

map.createPane('pane_Juntos_SJL_12');
map.getPane('pane_Juntos_SJL_12').style.zIndex = 412;
map.getPane('pane_Juntos_SJL_12').style['mix-blend-mode'] = 'normal';
var layer_Juntos_SJL_12 = new L.geoJson(json_Juntos_SJL_12, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Juntos_SJL_12',
    layerName: 'lyr12',
    pane: 'pane_Juntos_SJL_12',
    onEachFeature: pintarPopup('Hogares Juntos PE'),
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, style_Juntos_SJL_12_0());
    },
});
bounds_group.addLayer(layer_Juntos_SJL_12);
// map.addLayer(layer_Juntos_SJL_12);

// Añadir la leyenda al mapa
(function() {
    var div = L.DomUtil.create('div', 'info legend', leyenda_container),
        categories_names = ['Juntos SJL'],
        labels = [];

    div.id = 'lyr12';
    div.innerHTML = '<h4>Hogares Juntos PE</h4>';

    // Generar la etiqueta de la leyenda para el punto
    var style = style_Juntos_SJL_12_0();
    labels.push(
        '<i style="background:' + style.fillColor + '; width: 12px; height: 12px; display: inline-block; border-radius: 50%; margin-right: 5px;"></i> ' +
        categories_names[0]);

    div.innerHTML += labels.join('<br>');
    div.style.backgroundColor = 'white';  // Añadir fondo blanco
    div.style.padding = '10px';  // Añadir padding para mejor presentación
    div.style.display = 'none'; // Añadir display para ocultar la leyenda

})();
