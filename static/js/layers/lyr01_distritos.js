
function style_Distritos_Lima_1_0() {
    return {
        pane: 'pane_Distritos_Lima_1',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fillOpacity: 0,
        interactive: true,
    }
}
map.createPane('pane_Distritos_Lima_1');
map.getPane('pane_Distritos_Lima_1').style.zIndex = 401;
map.getPane('pane_Distritos_Lima_1').style['mix-blend-mode'] = 'normal';
var layer_Distritos_Lima_1 = new L.geoJson(json_Distritos_Lima_1, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Distritos_Lima_1',
    layerName: 'lyr01',
    pane: 'pane_Distritos_Lima_1',
    // onEachFeature: pop_Distritos_Lima_1,
    onEachFeature: pintarPopup('Distritos'),
    style: style_Distritos_Lima_1_0,
});
bounds_group.addLayer(layer_Distritos_Lima_1);
map.addLayer(layer_Distritos_Lima_1);

// Añadir la leyenda al mapa
(function() {
    var div = L.DomUtil.create('div', 'info legend', leyenda_container),
        categories_names = ['Distritos'],
        labels = [];

    div.id = 'lyr01';
    div.innerHTML = '<h4>Distritos</h4>';

    // Generar la etiqueta de la leyenda para el punto
    var style = style_Distritos_Lima_1_0();
    labels.push(
        '<i style="background: white' + '; border: 1px solid ' + style.color+'; width: 18px; height: 18px; display: inline-block; margin-right: 5px;"></i> '+
        categories_names[0]);

    div.innerHTML += labels.join('<br>');
    div.style.backgroundColor = 'white';  // Añadir fondo blanco
    div.style.padding = '10px';  // Añadir padding para mejor presentación

})();