
function style_MCContigoPESJL_6_0(feature) {
    switch(String(feature.properties['gridcode'])) {
        case '1':
            return {
        pane: 'pane_MCContigoPESJL_6',
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
        pane: 'pane_MCContigoPESJL_6',
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
        pane: 'pane_MCContigoPESJL_6',
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
        pane: 'pane_MCContigoPESJL_6',
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
map.createPane('pane_MCContigoPESJL_6');
map.getPane('pane_MCContigoPESJL_6').style.zIndex = 406;
map.getPane('pane_MCContigoPESJL_6').style['mix-blend-mode'] = 'normal';
var layer_MCContigoPESJL_6 = new L.geoJson(json_MCContigoPESJL_6, {
    attribution: '',
    interactive: false,
    dataVar: 'json_MCContigoPESJL_6',
    layerName: 'layer_MCContigoPESJL_6',
    pane: 'pane_MCContigoPESJL_6',
    onEachFeature: pintarPopup('MCContigoPESJL'),
    style: style_MCContigoPESJL_6_0,
});
bounds_group.addLayer(layer_MCContigoPESJL_6);
// map.addLayer(layer_MCContigoPESJL_6);