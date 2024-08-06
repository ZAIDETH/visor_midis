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
    onEachFeature: pintarPopup('Contigo_SJL'),
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