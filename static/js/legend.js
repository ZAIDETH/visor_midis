L.Control.Layers.include({
    getOverlays: function () {
        var control, layers;
        layers = {};
        control = this;
        control._layers.forEach(function (obj) {
            var layerName;
            if (obj.overlay) {
                layerName = obj.name;
                return layers[layerName] = control._map.hasLayer(obj.layer);
            }
        });
        return layers;
    }
});




function showLegend(layerId) {
    // var item = ".legend > div > span:contains(" + layer + ")";
    var item = "#"+layerId;
    $(item).show();
}

function hideLegend(layerId) {
    // var item = ".legend > div > span:contains(" + layer + ")";
    var item = "#"+layerId;
    $(item).hide();
}

map.on('overlayadd', function (eventLayer) {
    debugger
    showLegend(eventLayer.name);
});

map.on('overlayremove', function (eventLayer) {
    debugger
    hideLegend(eventLayer.name);
});

// $(".leaflet-control-layers").hover(function () {
//     $(".info").toggle();
// });

