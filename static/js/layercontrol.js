var baseMaps = {
    "OpenStreetMap": layer_OpenStreetMap_0
};

var overlayMaps = {
    "Distritos": layer_Distritos_Lima_1,
    "Pobreza por manzana": layer_PobrezaenMzINEI_2,
    "Riesgo Bajas temperaturas": layer_RiesgoBajasTemperaturas_3,
    "MC Hogares PGH": layer_MCHogaresPGH2024BrechasSJL_4,
    "Brecha SJL PE": layer_MCBrechasPESJL_5,
    "Contigo PE": layer_MCContigoPESJL_6,
    "Juntos PE": layer_MCJuntosPESJL_7,
    "Pensión 65": layer_MCPension65PESJL_8,
    "MCPGHPESJL": layer_MCPGHPESJL_9,
    "Escenario Pobreza Lima": layer_EscenarioPobrezaLima_D_10,
    "layer_HogaresPGH2024BrechasAtencionSJL_11": layer_HogaresPGH2024BrechasAtencionSJL_11,
    "layer_Juntos_SJL_12": layer_Juntos_SJL_12,
    "layer_Contigo_SJL_13": layer_Contigo_SJL_13,
    "layer_Brechas_SJL_14": layer_Brechas_SJL_14,
    "layer_HogaresconPension65PESJL_15": layer_HogaresconPension65PESJL_15,
    "layer_HogaresPGHPESJL_16": layer_HogaresPGHPESJL_16
};


var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);


map.on('overlayadd', function (eventLayer) {
    console.log(eventLayer.name);
});


// L.Control.CustomButtons = L.Control.Layers.extend({
//     // onAdd: function (map) {
//     //     this.initialize();
//     //     this._addMarker();
//     //     this._removeMarker();
//     //     this._update();
//     //     return this._container;
//     // },
//     // _addMarker: function () {
//     //     this.createButton("add", "add-button");
//     // },
//     // _removeMarker: function () {
//     //     this.createButton("remove", "remove-button");
//     // },
//     // createButton: function (type, className) {
//     //     const elements = this._container.getElementsByClassName(
//     //         "leaflet-control-layers-list"
//     //     );
//     //     const button = L.DomUtil.create(
//     //         "button",
//     //         `btn-markers ${className}`,
//     //         elements[0]
//     //     );
//     //     button.textContent = `${type} markers`;

//     //     L.DomEvent.on(button, "click", function (e) {
//     //         const checkbox = document.querySelectorAll(
//     //             ".leaflet-control-layers-overlays input[type=checkbox]"
//     //         );

//     //         // Remove/add all layer from map when click on button
//     //         [].slice.call(checkbox).map((el) => {
//     //             el.checked = type === "add" ? false : true;
//     //             el.click();
//     //         });
//     //     });
//     // },
// });

// Crear una instancia del control pero no añadirla al mapa
// const customControl = new L.Control.CustomButtons(null, overlayMaps, { collapsed: false });
// customControl.addTo(map);
// customControl.getContainer().style.display = 'none';

// Agregar el control al div existente
// document.getElementById('layer-control-container').appendChild(customControl.onAdd(map));