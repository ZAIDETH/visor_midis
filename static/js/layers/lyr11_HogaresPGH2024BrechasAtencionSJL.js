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
    onEachFeature: pintarPopup('HogaresPGH2024BrechasAtencionSJL'),
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