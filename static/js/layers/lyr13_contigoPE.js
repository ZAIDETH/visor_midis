
function pop_Contigo_SJL_13(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['OBJECTID'] !== null ? autolinker.link(feature.properties['OBJECTID'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['TARGET_FID'] !== null ? autolinker.link(feature.properties['TARGET_FID'].toLocaleString()) : '') + '</td>\
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
                <th scope="row">HOGAR_UBIGEO_CCPP</th>\
                <td>' + (feature.properties['HOGAR_UBIGEO_CCPP'] !== null ? autolinker.link(feature.properties['HOGAR_UBIGEO_CCPP'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">HOGAR_NOM_CCPP</th>\
                <td>' + (feature.properties['HOGAR_NOM_CCPP'] !== null ? autolinker.link(feature.properties['HOGAR_NOM_CCPP'].toLocaleString()) : '') + '</td>\
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
                <td colspan="2">' + (feature.properties['PGH_CONTIGO'] !== null ? autolinker.link(feature.properties['PGH_CONTIGO'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['UBIGEO'] !== null ? autolinker.link(feature.properties['UBIGEO'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['CODDEP'] !== null ? autolinker.link(feature.properties['CODDEP'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['NOMBDEP'] !== null ? autolinker.link(feature.properties['NOMBDEP'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['CODPROV'] !== null ? autolinker.link(feature.properties['CODPROV'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['NOMBPROV'] !== null ? autolinker.link(feature.properties['NOMBPROV'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['CODDIST'] !== null ? autolinker.link(feature.properties['CODDIST'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['NOMBDIST'] !== null ? autolinker.link(feature.properties['NOMBDIST'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['CAPITAL'] !== null ? autolinker.link(feature.properties['CAPITAL'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['HOGAR_UBIGEO_STRING'] !== null ? autolinker.link(feature.properties['HOGAR_UBIGEO_STRING'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">HOGAR_UBIGEO_CCPP_STR</th>\
                <td>' + (feature.properties['HOGAR_UBIGEO_CCPP_STR'] !== null ? autolinker.link(feature.properties['HOGAR_UBIGEO_CCPP_STR'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['UBIGEO_CCPP'] !== null ? autolinker.link(feature.properties['UBIGEO_CCPP'].toLocaleString()) : '') + '</td>\
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

function style_Contigo_SJL_13_0() {
    return {
        pane: 'pane_Contigo_SJL_13',
        radius: 2.2,
        opacity: 1,
        color: 'rgba(35,35,35,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(88,212,243,1.0)',
        interactive: true,
    }
}
map.createPane('pane_Contigo_SJL_13');
map.getPane('pane_Contigo_SJL_13').style.zIndex = 413;
map.getPane('pane_Contigo_SJL_13').style['mix-blend-mode'] = 'normal';
var layer_Contigo_SJL_13 = new L.geoJson(json_Contigo_SJL_13, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Contigo_SJL_13',
    layerName: 'layer_Contigo_SJL_13',
    pane: 'pane_Contigo_SJL_13',
    onEachFeature: pop_Contigo_SJL_13,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_Contigo_SJL_13_0(feature));
    },
});
bounds_group.addLayer(layer_Contigo_SJL_13);
// map.addLayer(layer_Contigo_SJL_13);