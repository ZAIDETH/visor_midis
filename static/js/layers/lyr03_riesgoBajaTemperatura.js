// Función auxiliar para generar el estilo
function generateStyle(fillColor) {
    return {
        pane: 'pane_RiesgoBajasTemperaturas_3',
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
function style_RiesgoBajasTemperaturas_3_0(feature) {
    return style_RiesgoBajasTemperaturas_3_0_str(feature.properties['gridcode']);
}

// Función de estilo basada en valor directo
function style_RiesgoBajasTemperaturas_3_0_str(value) {
    const colors = {
        '2': 'rgba(246,246,6,1.0)',
        '3': 'rgba(255,127,0,1.0)',
        '4': 'rgba(255,0,0,1.0)',
    };
    return generateStyle(colors[value] || 'rgba(35,35,35,0.0)');
}

map.createPane('pane_RiesgoBajasTemperaturas_3');
map.getPane('pane_RiesgoBajasTemperaturas_3').style.zIndex = 403;
map.getPane('pane_RiesgoBajasTemperaturas_3').style['mix-blend-mode'] = 'normal';
var layer_RiesgoBajasTemperaturas_3 = new L.geoJson(json_RiesgoBajasTemperaturas_3, {
    attribution: '',
    interactive: false,
    dataVar: 'json_RiesgoBajasTemperaturas_3',
    layerName: 'lyr03',
    pane: 'pane_RiesgoBajasTemperaturas_3',
    onEachFeature: pintarPopup('Riesgo bajas temperatura'),
    style: style_RiesgoBajasTemperaturas_3_0,
});
bounds_group.addLayer(layer_RiesgoBajasTemperaturas_3);
// map.addLayer(layer_RiesgoBajasTemperaturas_3);

// Añadir la leyenda al mapa
(function() {
    var div = L.DomUtil.create('div', 'info legend', leyenda_container),
        categories = ['2', '3', '4'],  // Las categorías deben coincidir con los casos en la función de estilo
        categories_names = ['Riesgo Medio', 'Riesgo Alto', 'Riesgo Muy Alto'],
        labels = [];

    div.id = 'lyr03';
    div.innerHTML = '<h4>Riesgo Bajas Temperaturas</h4>';

    // Iterar sobre las categorías y generar etiquetas de la leyenda
    for (var i = 0; i < categories.length; i++) {
        var style = style_RiesgoBajasTemperaturas_3_0_str(categories[i]);
        labels.push(
            '<i style="background:' + style.fillColor + '; width: 18px; height: 18px; display: inline-block; margin-right: 5px;"></i> ' +
            categories[i] + ' - ' + categories_names[i]);
    }

    div.innerHTML += labels.join('<br>');
    div.style.backgroundColor = 'white';  // Añadir fondo blanco
    div.style.padding = '10px';  // Añadir padding para mejor presentación
    div.style.display = 'none'; // Añadir display para ocultar la leyenda

})();