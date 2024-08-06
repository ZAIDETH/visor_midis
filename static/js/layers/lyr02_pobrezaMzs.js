
function pop_PobrezaenMzINEI_2(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['OBJECTID'] !== null ? autolinker.link(feature.properties['OBJECTID'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">ESTRATO</th>\
                <td>' + (feature.properties['ESTRATO'] !== null ? autolinker.link(feature.properties['ESTRATO'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">PobrINEI</th>\
                <td>' + (feature.properties['PobrINEI'] !== null ? autolinker.link(feature.properties['PobrINEI'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">SUM_POBLACION</th>\
                <td>' + (feature.properties['SUM_POBLACION'] !== null ? autolinker.link(feature.properties['SUM_POBLACION'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">SUM_HOGAR</th>\
                <td>' + (feature.properties['SUM_HOGAR'] !== null ? autolinker.link(feature.properties['SUM_HOGAR'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Shape_Length'] !== null ? autolinker.link(feature.properties['Shape_Length'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Shape_Area'] !== null ? autolinker.link(feature.properties['Shape_Area'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
    var popup = layer.getPopup();
    var content = popup.getContent();
    var updatedContent = removeEmptyRowsFromPopupContent(content, feature);
    popup.setContent(updatedContent);
}

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
    onEachFeature: pop_PobrezaenMzINEI_2,
    style: style_PobrezaenMzINEI_2_0,
});
bounds_group.addLayer(layer_PobrezaenMzINEI_2);
// map.addLayer(layer_PobrezaenMzINEI_2);