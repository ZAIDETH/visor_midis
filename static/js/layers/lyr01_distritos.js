
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
    layerName: 'layer_Distritos_Lima_1',
    pane: 'pane_Distritos_Lima_1',
    // onEachFeature: pop_Distritos_Lima_1,
    onEachFeature: pintarPopup('Distritos'),
    style: style_Distritos_Lima_1_0,
});
bounds_group.addLayer(layer_Distritos_Lima_1);
map.addLayer(layer_Distritos_Lima_1);