
function style_RiesgoBajasTemperaturas_3_0(feature) {
    switch(String(feature.properties['gridcode'])) {
        case '2':
            return {
        pane: 'pane_RiesgoBajasTemperaturas_3',
        opacity: 1,
        color: 'rgba(35,35,35,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(246,246,6,1.0)',
        interactive: false,
    }
            break;
        case '3':
            return {
        pane: 'pane_RiesgoBajasTemperaturas_3',
        opacity: 1,
        color: 'rgba(35,35,35,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(255,127,0,1.0)',
        interactive: false,
    }
            break;
        case '4':
            return {
        pane: 'pane_RiesgoBajasTemperaturas_3',
        opacity: 1,
        color: 'rgba(35,35,35,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(255,127,0,1.0)',
        interactive: false,
    }
            break;
    }
}
map.createPane('pane_RiesgoBajasTemperaturas_3');
map.getPane('pane_RiesgoBajasTemperaturas_3').style.zIndex = 403;
map.getPane('pane_RiesgoBajasTemperaturas_3').style['mix-blend-mode'] = 'normal';
var layer_RiesgoBajasTemperaturas_3 = new L.geoJson(json_RiesgoBajasTemperaturas_3, {
    attribution: '',
    interactive: false,
    dataVar: 'json_RiesgoBajasTemperaturas_3',
    layerName: 'layer_RiesgoBajasTemperaturas_3',
    pane: 'pane_RiesgoBajasTemperaturas_3',
    onEachFeature: pintarPopup('Riesgo bajas temperatura'),
    style: style_RiesgoBajasTemperaturas_3_0,
});
bounds_group.addLayer(layer_RiesgoBajasTemperaturas_3);
// map.addLayer(layer_RiesgoBajasTemperaturas_3);