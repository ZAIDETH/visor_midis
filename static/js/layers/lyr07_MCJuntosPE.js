

function style_MCJuntosPESJL_7_0(feature) {
    switch(String(feature.properties['gridcode'])) {
        case '1':
            return {
        pane: 'pane_MCJuntosPESJL_7',
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
        pane: 'pane_MCJuntosPESJL_7',
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
        pane: 'pane_MCJuntosPESJL_7',
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
        pane: 'pane_MCJuntosPESJL_7',
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
map.createPane('pane_MCJuntosPESJL_7');
map.getPane('pane_MCJuntosPESJL_7').style.zIndex = 407;
map.getPane('pane_MCJuntosPESJL_7').style['mix-blend-mode'] = 'normal';
var layer_MCJuntosPESJL_7 = new L.geoJson(json_MCJuntosPESJL_7, {
    attribution: '',
    interactive: false,
    dataVar: 'json_MCJuntosPESJL_7',
    layerName: 'layer_MCJuntosPESJL_7',
    pane: 'pane_MCJuntosPESJL_7',
    onEachFeature: pintarPopup('MCJuntosPESJL'),
    style: style_MCJuntosPESJL_7_0,
});
bounds_group.addLayer(layer_MCJuntosPESJL_7);
// map.addLayer(layer_MCJuntosPESJL_7);