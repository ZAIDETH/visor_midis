function style_MCPGHPESJL_9_0(feature) {
    switch(String(feature.properties['gridcode'])) {
        case '1':
            return {
        pane: 'pane_MCPGHPESJL_9',
        opacity: 1,
        color: 'rgba(35,35,35,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(178,223,138,1.0)',
        interactive: false,
    }
            break;
        case '2':
            return {
        pane: 'pane_MCPGHPESJL_9',
        opacity: 1,
        color: 'rgba(35,35,35,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(247,247,8,1.0)',
        interactive: false,
    }
            break;
        case '3':
            return {
        pane: 'pane_MCPGHPESJL_9',
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
        pane: 'pane_MCPGHPESJL_9',
        opacity: 1,
        color: 'rgba(35,35,35,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(250,10,26,1.0)',
        interactive: false,
    }
            break;
    }
}
map.createPane('pane_MCPGHPESJL_9');
map.getPane('pane_MCPGHPESJL_9').style.zIndex = 409;
map.getPane('pane_MCPGHPESJL_9').style['mix-blend-mode'] = 'normal';
var layer_MCPGHPESJL_9 = new L.geoJson(json_MCPGHPESJL_9, {
    attribution: '',
    interactive: false,
    dataVar: 'json_MCPGHPESJL_9',
    layerName: 'layer_MCPGHPESJL_9',
    pane: 'pane_MCPGHPESJL_9',
    onEachFeature: pintarPopup('MCPGHPESJL'),
    style: style_MCPGHPESJL_9_0,
});
bounds_group.addLayer(layer_MCPGHPESJL_9);
// map.addLayer(layer_MCPGHPESJL_9);