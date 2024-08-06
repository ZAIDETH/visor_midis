function style_Juntos_SJL_12_0() {
    return {
        pane: 'pane_Juntos_SJL_12',
        radius: 2.2,
        opacity: 1,
        color: 'rgba(35,35,35,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(111,22,244,1.0)',
        interactive: true,
    }
}
map.createPane('pane_Juntos_SJL_12');
map.getPane('pane_Juntos_SJL_12').style.zIndex = 412;
map.getPane('pane_Juntos_SJL_12').style['mix-blend-mode'] = 'normal';
var layer_Juntos_SJL_12 = new L.geoJson(json_Juntos_SJL_12, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Juntos_SJL_12',
    layerName: 'layer_Juntos_SJL_12',
    pane: 'pane_Juntos_SJL_12',
    onEachFeature: pintarPopup('Juntos_SJL'),
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_Juntos_SJL_12_0(feature));
    },
});
bounds_group.addLayer(layer_Juntos_SJL_12);
// map.addLayer(layer_Juntos_SJL_12);