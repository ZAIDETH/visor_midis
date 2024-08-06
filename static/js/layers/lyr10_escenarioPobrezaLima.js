
function pop_EscenarioPobrezaLima_D_10(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['OBJECTID'] !== null ? autolinker.link(feature.properties['OBJECTID'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">gridcode</th>\
                <td>' + (feature.properties['gridcode'] !== null ? autolinker.link(feature.properties['gridcode'].toLocaleString()) : '') + '</td>\
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

function style_EscenarioPobrezaLima_D_10_0(feature) {
    switch(String(feature.properties['gridcode'])) {
        case '1':
            return {
        pane: 'pane_EscenarioPobrezaLima_D_10',
        opacity: 1,
        color: 'rgba(35,35,35,0.0)',
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
        case '2':
            return {
        pane: 'pane_EscenarioPobrezaLima_D_10',
        opacity: 1,
        color: 'rgba(35,35,35,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(247,247,8,1.0)',
        interactive: true,
    }
            break;
        case '3':
            return {
        pane: 'pane_EscenarioPobrezaLima_D_10',
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
        case '4':
            return {
        pane: 'pane_EscenarioPobrezaLima_D_10',
        opacity: 1,
        color: 'rgba(35,35,35,0.0)',
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
map.createPane('pane_EscenarioPobrezaLima_D_10');
map.getPane('pane_EscenarioPobrezaLima_D_10').style.zIndex = 410;
map.getPane('pane_EscenarioPobrezaLima_D_10').style['mix-blend-mode'] = 'normal';
var layer_EscenarioPobrezaLima_D_10 = new L.geoJson(json_EscenarioPobrezaLima_D_10, {
    attribution: '',
    interactive: true,
    dataVar: 'json_EscenarioPobrezaLima_D_10',
    layerName: 'layer_EscenarioPobrezaLima_D_10',
    pane: 'pane_EscenarioPobrezaLima_D_10',
    onEachFeature: pop_EscenarioPobrezaLima_D_10,
    style: style_EscenarioPobrezaLima_D_10_0,
});
bounds_group.addLayer(layer_EscenarioPobrezaLima_D_10);
// map.addLayer(layer_EscenarioPobrezaLima_D_10);