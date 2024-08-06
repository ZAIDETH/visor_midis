


function style_PobrezaenMzINEI_2_0(feature) {
    switch(String(feature.properties['PobrINEI'])) {
        case '2':
            return {
        pane: 'pane_PobrezaenMzINEI_2',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(178,223,138,1.0)',
        interactive: true,
    }
            break;
        case '3':
            return {
        pane: 'pane_PobrezaenMzINEI_2',
        opacity: 1,
        color: 'rgba(35,35,35,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(247,247,0,1.0)',
        interactive: true,
    }
            break;
        case '4':
            return {
        pane: 'pane_PobrezaenMzINEI_2',
        opacity: 1,
        color: 'rgba(35,35,35,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(255,127,0,1.0)',
        interactive: true,
    }
            break;
        case '5':
            return {
        pane: 'pane_PobrezaenMzINEI_2',
        opacity: 1,
        color: 'rgba(128,14,16,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(250,10,26,1.0)',
        interactive: true,
    }
            break;
    }
}
map.createPane('pane_PobrezaenMzINEI_2');
map.getPane('pane_PobrezaenMzINEI_2').style.zIndex = 402;
map.getPane('pane_PobrezaenMzINEI_2').style['mix-blend-mode'] = 'normal';
var layer_PobrezaenMzINEI_2 = new L.geoJson(json_PobrezaenMzINEI_2, {
    attribution: '',
    interactive: true,
    dataVar: 'json_PobrezaenMzINEI_2',
    layerName: 'layer_PobrezaenMzINEI_2',
    pane: 'pane_PobrezaenMzINEI_2',
    onEachFeature: pintarPopup('Pobreza por Manzanas'),
    style: style_PobrezaenMzINEI_2_0,
});
bounds_group.addLayer(layer_PobrezaenMzINEI_2);
// map.addLayer(layer_PobrezaenMzINEI_2);