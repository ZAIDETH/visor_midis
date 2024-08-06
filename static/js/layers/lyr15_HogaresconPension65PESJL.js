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
    onEachFeature: pintarPopup('HogaresconPension65PESJL'),
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