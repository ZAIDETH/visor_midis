
function style_MCPension65PESJL_8_0(feature) {
    switch(String(feature.properties['gridcode'])) {
        case '1':
            return {
        pane: 'pane_MCPension65PESJL_8',
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
        pane: 'pane_MCPension65PESJL_8',
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
        pane: 'pane_MCPension65PESJL_8',
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
        pane: 'pane_MCPension65PESJL_8',
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
map.createPane('pane_MCPension65PESJL_8');
map.getPane('pane_MCPension65PESJL_8').style.zIndex = 408;
map.getPane('pane_MCPension65PESJL_8').style['mix-blend-mode'] = 'normal';
var layer_MCPension65PESJL_8 = new L.geoJson(json_MCPension65PESJL_8, {
    attribution: '',
    interactive: false,
    dataVar: 'json_MCPension65PESJL_8',
    layerName: 'layer_MCPension65PESJL_8',
    pane: 'pane_MCPension65PESJL_8',
    onEachFeature: pintarPopup('MCPension65PESJL'),
    style: style_MCPension65PESJL_8_0,
});
bounds_group.addLayer(layer_MCPension65PESJL_8);
// map.addLayer(layer_MCPension65PESJL_8);