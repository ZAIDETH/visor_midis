// Función auxiliar para generar el estilo
function generateStyle(fillColor) {
    return {
        pane: 'pane_PobrezaenMzINEI_2',
        opacity: 1,
        color: 'rgba(35,35,35,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: fillColor,
        interactive: true,
    };
}

// Función de estilo basada en propiedades de la característica
function style_PobrezaenMzINEI_2_0(feature) {
    return style_PobrezaenMzINEI_2_0_str(feature.properties['PobrINEI']);
}

// Función de estilo basada en valor directo
function style_PobrezaenMzINEI_2_0_str(value) {
    const colors = {
        '2': 'rgba(178,223,138,1.0)',
        '3': 'rgba(247,247,0,1.0)',
        '4': 'rgba(255,127,0,1.0)',
        '5': 'rgba(250,10,26,1.0)'
    };
    return generateStyle(colors[value] || 'rgba(35,35,35,1.0)');
}

map.createPane('pane_PobrezaenMzINEI_2');
map.getPane('pane_PobrezaenMzINEI_2').style.zIndex = 402;
map.getPane('pane_PobrezaenMzINEI_2').style['mix-blend-mode'] = 'normal';
var layer_PobrezaenMzINEI_2 = new L.geoJson(json_PobrezaenMzINEI_2, {
    attribution: '',
    interactive: true,
    dataVar: 'json_PobrezaenMzINEI_2',
    layerName: 'lyr02',
    pane: 'pane_PobrezaenMzINEI_2',
    onEachFeature: pintarPopup('Pobreza por manzana'),
    style: style_PobrezaenMzINEI_2_0,
});
bounds_group.addLayer(layer_PobrezaenMzINEI_2);
// map.addLayer(layer_PobrezaenMzINEI_2);


// Añadir la leyenda al mapa
(function() {
    var div = L.DomUtil.create('div', 'info legend', leyenda_container),
        categories = ['2', '3', '4', '5'],  // Las categorías deben coincidir con los casos en la función de estilo
        categories_names = ['Nivel de Pobreza Baja', 'Nivel de Pobreza Media', 'Nivel de Pobreza Alta', 'Nivel de Pobreza Muy Alta'],
        labels = []; 
    div.id= 'lyr02';
    div.innerHTML = '<h4>Nivel de Pobreza </h4>'
    // Iterar sobre las categorías y generar etiquetas de la leyenda
    for (var i = 0; i < categories.length; i++) {
        var style = style_PobrezaenMzINEI_2_0_str(categories[i]);
        labels.push(
            '<i style="background:' + style.fillColor + '; width: 18px; height: 18px; display: inline-block; margin-right: 5px;"></i> ' +
            categories[i] + ' - ' + categories_names[i]);
    }

    div.innerHTML += labels.join('<br>');
    div.style.backgroundColor = 'white';  // Añadir fondo blanco
    div.style.padding = '10px';  // Añadir padding para mejor presentación
    // div.style.border = '2px solid #ccc';  // Añadir borde
    div.style.display = 'none';
})();




