
function pop_HogaresPGH2024BrechasAtencionSJL_11(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['OBJECTID'] !== null ? autolinker.link(feature.properties['OBJECTID'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">ubigeo</th>\
                <td>' + (feature.properties['ubigeo'] !== null ? autolinker.link(feature.properties['ubigeo'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">departamento</th>\
                <td>' + (feature.properties['departamento'] !== null ? autolinker.link(feature.properties['departamento'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">provincia</th>\
                <td class="visible-with-data" id="provincia">' + (feature.properties['provincia'] !== null ? autolinker.link(feature.properties['provincia'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">distrito</th>\
                <td>' + (feature.properties['distrito'] !== null ? autolinker.link(feature.properties['distrito'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">centropoblado</th>\
                <td>' + (feature.properties['centropoblado'] !== null ? autolinker.link(feature.properties['centropoblado'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">co_hogar</th>\
                <td>' + (feature.properties['co_hogar'] !== null ? autolinker.link(feature.properties['co_hogar'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">ambito</th>\
                <td>' + (feature.properties['ambito'] !== null ? autolinker.link(feature.properties['ambito'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['latitud'] !== null ? autolinker.link(feature.properties['latitud'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['longitud'] !== null ? autolinker.link(feature.properties['longitud'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">decil</th>\
                <td>' + (feature.properties['decil'] !== null ? autolinker.link(feature.properties['decil'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">ccpp_STR</th>\
                <td>' + (feature.properties['ccpp_STR'] !== null ? autolinker.link(feature.properties['ccpp_STR'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">brechas</th>\
                <td>' + (feature.properties['brechas'] !== null ? autolinker.link(feature.properties['brechas'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
    var popup = layer.getPopup();
    var content = popup.getContent();
    var updatedContent = removeEmptyRowsFromPopupContent(content, feature);
    popup.setContent(updatedContent);
}

function style_HogaresPGH2024BrechasAtencionSJL_11_0() {
    return {
        pane: 'pane_HogaresPGH2024BrechasAtencionSJL_11',
        radius: 2.2,
        opacity: 1,
        color: 'rgba(35,35,35,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(139,88,243,1.0)',
        interactive: true,
    }
}
map.createPane('pane_HogaresPGH2024BrechasAtencionSJL_11');
map.getPane('pane_HogaresPGH2024BrechasAtencionSJL_11').style.zIndex = 411;
map.getPane('pane_HogaresPGH2024BrechasAtencionSJL_11').style['mix-blend-mode'] = 'normal';
var layer_HogaresPGH2024BrechasAtencionSJL_11 = new L.geoJson(json_HogaresPGH2024BrechasAtencionSJL_11, {
    attribution: '',
    interactive: true,
    dataVar: 'json_HogaresPGH2024BrechasAtencionSJL_11',
    layerName: 'layer_HogaresPGH2024BrechasAtencionSJL_11',
    pane: 'pane_HogaresPGH2024BrechasAtencionSJL_11',
    onEachFeature: pop_HogaresPGH2024BrechasAtencionSJL_11,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_HogaresPGH2024BrechasAtencionSJL_11_0(feature));
    },
});
bounds_group.addLayer(layer_HogaresPGH2024BrechasAtencionSJL_11);
// map.addLayer(layer_HogaresPGH2024BrechasAtencionSJL_11);