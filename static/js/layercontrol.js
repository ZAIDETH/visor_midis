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
        "MCPGHPESJL":layer_MCPGHPESJL_9,
        "Escenario Pobreza Lima": layer_EscenarioPobrezaLima_D_10,
        "layer_HogaresPGH2024BrechasAtencionSJL_11":layer_HogaresPGH2024BrechasAtencionSJL_11,
        "layer_Juntos_SJL_12": layer_Juntos_SJL_12,
        "layer_Contigo_SJL_13":layer_Contigo_SJL_13,
        "layer_Brechas_SJL_14":layer_Brechas_SJL_14,
        "layer_HogaresconPension65PESJL_15":layer_HogaresconPension65PESJL_15,
        "layer_HogaresPGHPESJL_16":layer_HogaresPGHPESJL_16
    };

var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);