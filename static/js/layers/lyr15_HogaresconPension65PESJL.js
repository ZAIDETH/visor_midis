
function pop_HogaresconPension65PESJL_15(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['OBJECTID'] !== null ? autolinker.link(feature.properties['OBJECTID'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['PGH'] !== null ? autolinker.link(feature.properties['PGH'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['HOGAR_ID'] !== null ? autolinker.link(feature.properties['HOGAR_ID'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">HOGAR_UBIGEO</th>\
                <td>' + (feature.properties['HOGAR_UBIGEO'] !== null ? autolinker.link(feature.properties['HOGAR_UBIGEO'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">HOGAR_DEPARTAMENTO</th>\
                <td>' + (feature.properties['HOGAR_DEPARTAMENTO'] !== null ? autolinker.link(feature.properties['HOGAR_DEPARTAMENTO'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">HOGAR_PROVINCIA</th>\
                <td>' + (feature.properties['HOGAR_PROVINCIA'] !== null ? autolinker.link(feature.properties['HOGAR_PROVINCIA'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">HOGAR_DISTRITO</th>\
                <td>' + (feature.properties['HOGAR_DISTRITO'] !== null ? autolinker.link(feature.properties['HOGAR_DISTRITO'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">HOGAR_CSE_NIV_POBREZA</th>\
                <td>' + (feature.properties['HOGAR_CSE_NIV_POBREZA'] !== null ? autolinker.link(feature.properties['HOGAR_CSE_NIV_POBREZA'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['NU_LATITUD'] !== null ? autolinker.link(feature.properties['NU_LATITUD'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['NU_LONGITUD'] !== null ? autolinker.link(feature.properties['NU_LONGITUD'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['PERSONA_TIPO_DOC'] !== null ? autolinker.link(feature.properties['PERSONA_TIPO_DOC'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['PERSONA_NRO_DOC'] !== null ? autolinker.link(feature.properties['PERSONA_NRO_DOC'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['PGH_PENSION65'] !== null ? autolinker.link(feature.properties['PGH_PENSION65'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['PENSION65_PADRON_ACTUAL'] !== null ? autolinker.link(feature.properties['PENSION65_PADRON_ACTUAL'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['HOGAR_UBIGEO_STRING'] !== null ? autolinker.link(feature.properties['HOGAR_UBIGEO_STRING'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['HOGAR_UBIGEO_CCPP_STR'] !== null ? autolinker.link(feature.properties['HOGAR_UBIGEO_CCPP_STR'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">UBIGEO_CCPP</th>\
                <td>' + (feature.properties['UBIGEO_CCPP'] !== null ? autolinker.link(feature.properties['UBIGEO_CCPP'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['DNI_COUNT'] !== null ? autolinker.link(feature.properties['DNI_COUNT'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
    var popup = layer.getPopup();
    var content = popup.getContent();
    var updatedContent = removeEmptyRowsFromPopupContent(content, feature);
    popup.setContent(updatedContent);
}

function style_HogaresconPension65PESJL_15_0() {
    return {
        pane: 'pane_HogaresconPension65PESJL_15',
        radius: 2.2,
        opacity: 1,
        color: 'rgba(35,35,35,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(62,111,227,1.0)',
        interactive: true,
    }
}
map.createPane('pane_HogaresconPension65PESJL_15');
map.getPane('pane_HogaresconPension65PESJL_15').style.zIndex = 415;
map.getPane('pane_HogaresconPension65PESJL_15').style['mix-blend-mode'] = 'normal';
var layer_HogaresconPension65PESJL_15 = new L.geoJson(json_HogaresconPension65PESJL_15, {
    attribution: '',
    interactive: true,
    dataVar: 'json_HogaresconPension65PESJL_15',
    layerName: 'layer_HogaresconPension65PESJL_15',
    pane: 'pane_HogaresconPension65PESJL_15',
    onEachFeature: pop_HogaresconPension65PESJL_15,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_HogaresconPension65PESJL_15_0(feature));
    },
});
bounds_group.addLayer(layer_HogaresconPension65PESJL_15);
// map.addLayer(layer_HogaresconPension65PESJL_15);