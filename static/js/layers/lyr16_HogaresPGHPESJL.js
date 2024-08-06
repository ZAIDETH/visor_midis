function style_HogaresPGHPESJL_16_0() {
    return {
        pane: 'pane_HogaresPGHPESJL_16',
        radius: 2.2,
        opacity: 1,
        color: 'rgba(35,35,35,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(106,88,243,1.0)',
        interactive: true,
    }
}
map.createPane('pane_HogaresPGHPESJL_16');
map.getPane('pane_HogaresPGHPESJL_16').style.zIndex = 416;
map.getPane('pane_HogaresPGHPESJL_16').style['mix-blend-mode'] = 'normal';
var layer_HogaresPGHPESJL_16 = new L.geoJson(json_HogaresPGHPESJL_16, {
    attribution: '',
    interactive: true,
    dataVar: 'json_HogaresPGHPESJL_16',
    layerName: 'layer_HogaresPGHPESJL_16',
    pane: 'pane_HogaresPGHPESJL_16',
    onEachFeature: pintarPopup('HogaresPGHPESJL'),
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_HogaresPGHPESJL_16_0(feature));
    },
});
bounds_group.addLayer(layer_HogaresPGHPESJL_16);
// map.addLayer(layer_HogaresPGHPESJL_16);