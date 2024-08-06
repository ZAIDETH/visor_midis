
function style_MCHogaresPGH2024BrechasSJL_4_0(feature) {
    switch(String(feature.properties['gridcode'])) {
        case '1':
            return {
        pane: 'pane_MCHogaresPGH2024BrechasSJL_4',
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
        pane: 'pane_MCHogaresPGH2024BrechasSJL_4',
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
        pane: 'pane_MCHogaresPGH2024BrechasSJL_4',
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
        pane: 'pane_MCHogaresPGH2024BrechasSJL_4',
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
map.createPane('pane_MCHogaresPGH2024BrechasSJL_4');
map.getPane('pane_MCHogaresPGH2024BrechasSJL_4').style.zIndex = 404;
map.getPane('pane_MCHogaresPGH2024BrechasSJL_4').style['mix-blend-mode'] = 'normal';
var layer_MCHogaresPGH2024BrechasSJL_4 = new L.geoJson(json_MCHogaresPGH2024BrechasSJL_4, {
    attribution: '',
    interactive: false,
    dataVar: 'json_MCHogaresPGH2024BrechasSJL_4',
    layerName: 'layer_MCHogaresPGH2024BrechasSJL_4',
    pane: 'pane_MCHogaresPGH2024BrechasSJL_4',
    onEachFeature: pintarPopup('MCHogaresPGH2024BrechasSJL'),
    style: style_MCHogaresPGH2024BrechasSJL_4_0,
});
bounds_group.addLayer(layer_MCHogaresPGH2024BrechasSJL_4);
// map.addLayer(layer_MCHogaresPGH2024BrechasSJL_4);