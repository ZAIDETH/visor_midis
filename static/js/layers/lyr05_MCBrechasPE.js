

function style_MCBrechasPESJL_5_0(feature) {
    switch(String(feature.properties['gridcode'])) {
        case '1':
            return {
        pane: 'pane_MCBrechasPESJL_5',
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
        pane: 'pane_MCBrechasPESJL_5',
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
        pane: 'pane_MCBrechasPESJL_5',
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
        pane: 'pane_MCBrechasPESJL_5',
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
map.createPane('pane_MCBrechasPESJL_5');
map.getPane('pane_MCBrechasPESJL_5').style.zIndex = 405;
map.getPane('pane_MCBrechasPESJL_5').style['mix-blend-mode'] = 'normal';
var layer_MCBrechasPESJL_5 = new L.geoJson(json_MCBrechasPESJL_5, {
    attribution: '',
    interactive: false,
    dataVar: 'json_MCBrechasPESJL_5',
    layerName: 'layer_MCBrechasPESJL_5',
    pane: 'pane_MCBrechasPESJL_5',
    onEachFeature: pintarPopup('MCBrechasPESJL'),
    style: style_MCBrechasPESJL_5_0,
});
bounds_group.addLayer(layer_MCBrechasPESJL_5);
// map.addLayer(layer_MCBrechasPESJL_5);