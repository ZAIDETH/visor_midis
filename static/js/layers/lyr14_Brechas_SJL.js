function style_Brechas_SJL_14_0() {
    return {
        pane: 'pane_Brechas_SJL_14',
        radius: 2.2,
        opacity: 1,
        color: 'rgba(35,35,35,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(88,186,243,1.0)',
        interactive: true,
    }
}
map.createPane('pane_Brechas_SJL_14');
map.getPane('pane_Brechas_SJL_14').style.zIndex = 414;
map.getPane('pane_Brechas_SJL_14').style['mix-blend-mode'] = 'normal';
var layer_Brechas_SJL_14 = new L.geoJson(json_Brechas_SJL_14, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Brechas_SJL_14',
    layerName: 'layer_Brechas_SJL_14',
    pane: 'pane_Brechas_SJL_14',
    onEachFeature: pintarPopup('Brechas_SJL'),
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_Brechas_SJL_14_0(feature));
    },
});
bounds_group.addLayer(layer_Brechas_SJL_14);
// map.addLayer(layer_Brechas_SJL_14);