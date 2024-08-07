// Función auxiliar para generar el estilo
function generatePointStyle(fillColor) {
    return {
        pane: 'pane_Brechas_SJL_14',
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
function style_Brechas_SJL_14_0() {
    return generatePointStyle('rgba(88,186,243,1.0)');
}

map.createPane('pane_Brechas_SJL_14');
map.getPane('pane_Brechas_SJL_14').style.zIndex = 414;
map.getPane('pane_Brechas_SJL_14').style['mix-blend-mode'] = 'normal';
var layer_Brechas_SJL_14 = new L.geoJson(json_Brechas_SJL_14, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Brechas_SJL_14',
    layerName: 'lyr14',
    pane: 'pane_Brechas_SJL_14',
    onEachFeature: pintarPopup('Hogares Brechas de Atención PE'),
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, style_Brechas_SJL_14_0());
    },
});
bounds_group.addLayer(layer_Brechas_SJL_14);
// map.addLayer(layer_Brechas_SJL_14);

// Añadir la leyenda al mapa
(function() {
    var div = L.DomUtil.create('div', 'info legend', leyenda_container),
        categories_names = ['Brechas SJL'],
        labels = [];

    div.id = 'lyr14';
    div.innerHTML = '<h4>Hogares Brechas de Atención PE</h4>';

    // Generar la etiqueta de la leyenda para el punto
    var style = style_Brechas_SJL_14_0();
    labels.push(
        '<i style="background:' + style.fillColor + '; width: 12px; height: 12px; display: inline-block; border-radius: 50%; margin-right: 5px;"></i> ' +
        categories_names[0]);

    div.innerHTML += labels.join('<br>');
    div.style.backgroundColor = 'white';  // Añadir fondo blanco
    div.style.padding = '10px';  // Añadir padding para mejor presentación
    div.style.display = 'none'; // Añadir display para ocultar la leyenda

})();
