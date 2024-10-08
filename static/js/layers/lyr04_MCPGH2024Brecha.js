// Función auxiliar para generar el estilo
function generateStyle(fillColor) {
    return {
        pane: 'pane_MCHogaresPGH2024BrechasSJL_4',
        opacity: 1,
        color: 'rgba(35,35,35,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: fillColor,
        interactive: false,
    };
}

// Función de estilo basada en propiedades de la característica
function style_MCHogaresPGH2024BrechasSJL_4_0(feature) {
    return style_MCHogaresPGH2024BrechasSJL_4_0_str(feature.properties['gridcode']);
}

// Función de estilo basada en valor directo
function style_MCHogaresPGH2024BrechasSJL_4_0_str(value) {
    const colors = {
        '1': 'rgba(178,223,138,1.0)',
        '2': 'rgba(247,247,8,1.0)',
        '3': 'rgba(255,127,0,1.0)',
        '4': 'rgba(250,10,26,1.0)',
    };
    return generateStyle(colors[value] || 'rgba(35,35,35,0.0)');
}

map.createPane('pane_MCHogaresPGH2024BrechasSJL_4');
map.getPane('pane_MCHogaresPGH2024BrechasSJL_4').style.zIndex = 404;
map.getPane('pane_MCHogaresPGH2024BrechasSJL_4').style['mix-blend-mode'] = 'normal';
var layer_MCHogaresPGH2024BrechasSJL_4 = new L.geoJson(json_MCHogaresPGH2024BrechasSJL_4, {
    attribution: '',
    interactive: false,
    dataVar: 'json_MCHogaresPGH2024BrechasSJL_4',
    layerName: 'lyr04',
    pane: 'pane_MCHogaresPGH2024BrechasSJL_4',
    onEachFeature: pintarPopup('MCHogaresPGH2024BrechasSJL'),
    style: style_MCHogaresPGH2024BrechasSJL_4_0,
});
bounds_group.addLayer(layer_MCHogaresPGH2024BrechasSJL_4);
// map.addLayer(layer_MCHogaresPGH2024BrechasSJL_4);

// Añadir la leyenda al mapa
(function() {
    var div = L.DomUtil.create('div', 'info legend', leyenda_container),
        categories = ['1', '2', '3', '4'],  // Las categorías deben coincidir con los casos en la función de estilo
        categories_names = ['Hogares - Concentración Baja', 'Hogares - Concentración Media', 'Hogares - Concentración Alta', 'Hogares - Concentración Muy Alta'],
        labels = [];

    div.id = 'lyr04';
    div.innerHTML = '<h4>Mapa de Calor PGH 2024 Brechas</h4>';

    // Iterar sobre las categorías y generar etiquetas de la leyenda
    for (var i = 0; i < categories.length; i++) {
        var style = style_MCHogaresPGH2024BrechasSJL_4_0_str(categories[i]);
        labels.push(
            '<i style="background:' + style.fillColor + '; width: 18px; height: 18px; display: inline-block; margin-right: 5px;"></i> ' +
            categories[i] + ' - ' + categories_names[i]);
    }

    div.innerHTML += labels.join('<br>');
    div.style.backgroundColor = 'white';  // Añadir fondo blanco
    div.style.padding = '10px';  // Añadir padding para mejor presentación
    div.style.display = 'none'; // Añadir display para ocultar la leyenda

})();
