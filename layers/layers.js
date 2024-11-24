var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ESGRAFIADO_1 = new ol.format.GeoJSON();
var features_ESGRAFIADO_1 = format_ESGRAFIADO_1.readFeatures(json_ESGRAFIADO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESGRAFIADO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESGRAFIADO_1.addFeatures(features_ESGRAFIADO_1);
var lyr_ESGRAFIADO_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESGRAFIADO_1, 
                style: style_ESGRAFIADO_1,
                popuplayertitle: "ESGRAFIADO",
                interactive: true,
                title: '<img src="styles/legend/ESGRAFIADO_1.png" /> ESGRAFIADO'
            });
var format_TESELAS_2 = new ol.format.GeoJSON();
var features_TESELAS_2 = format_TESELAS_2.readFeatures(json_TESELAS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TESELAS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TESELAS_2.addFeatures(features_TESELAS_2);
var lyr_TESELAS_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TESELAS_2, 
                style: style_TESELAS_2,
                popuplayertitle: "TESELAS",
                interactive: true,
                title: '<img src="styles/legend/TESELAS_2.png" /> TESELAS'
            });
var format_RELIEVEESCULTORICO_3 = new ol.format.GeoJSON();
var features_RELIEVEESCULTORICO_3 = format_RELIEVEESCULTORICO_3.readFeatures(json_RELIEVEESCULTORICO_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RELIEVEESCULTORICO_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RELIEVEESCULTORICO_3.addFeatures(features_RELIEVEESCULTORICO_3);
var lyr_RELIEVEESCULTORICO_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RELIEVEESCULTORICO_3, 
                style: style_RELIEVEESCULTORICO_3,
                popuplayertitle: "RELIEVE ESCULTORICO",
                interactive: true,
                title: '<img src="styles/legend/RELIEVEESCULTORICO_3.png" /> RELIEVE ESCULTORICO'
            });
var format_PINTURAMURAL_4 = new ol.format.GeoJSON();
var features_PINTURAMURAL_4 = format_PINTURAMURAL_4.readFeatures(json_PINTURAMURAL_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PINTURAMURAL_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PINTURAMURAL_4.addFeatures(features_PINTURAMURAL_4);
var lyr_PINTURAMURAL_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PINTURAMURAL_4, 
                style: style_PINTURAMURAL_4,
                popuplayertitle: "PINTURA MURAL",
                interactive: true,
                title: '<img src="styles/legend/PINTURAMURAL_4.png" /> PINTURA MURAL'
            });
var format_MURALCERAMICO_5 = new ol.format.GeoJSON();
var features_MURALCERAMICO_5 = format_MURALCERAMICO_5.readFeatures(json_MURALCERAMICO_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MURALCERAMICO_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MURALCERAMICO_5.addFeatures(features_MURALCERAMICO_5);
var lyr_MURALCERAMICO_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MURALCERAMICO_5, 
                style: style_MURALCERAMICO_5,
                popuplayertitle: "MURAL CERAMICO",
                interactive: true,
                title: '<img src="styles/legend/MURALCERAMICO_5.png" /> MURAL CERAMICO'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_ESGRAFIADO_1.setVisible(true);lyr_TESELAS_2.setVisible(true);lyr_RELIEVEESCULTORICO_3.setVisible(true);lyr_PINTURAMURAL_4.setVisible(true);lyr_MURALCERAMICO_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ESGRAFIADO_1,lyr_TESELAS_2,lyr_RELIEVEESCULTORICO_3,lyr_PINTURAMURAL_4,lyr_MURALCERAMICO_5];
lyr_ESGRAFIADO_1.set('fieldAliases', {'1_LUGAR': '1_LUGAR', '2_TIPO': '2_TIPO', '3_AUTOR': '3_AUTOR', '4_TITULO_D': '4_TITULO_D', '5_FECHA_DE': '5_FECHA_DE', '6_TEMATICA': '6_TEMATICA', '7_DIMENSIO': '7_DIMENSIO', '8_ESTADO': '8_ESTADO', '9_foto_lug': '9_foto_lug', 'lat_10_loc': 'lat_10_loc', 'long_10_lo': 'long_10_lo', });
lyr_TESELAS_2.set('fieldAliases', {'1_LUGAR': '1_LUGAR', '2_TIPO': '2_TIPO', '3_AUTOR': '3_AUTOR', '4_TITULO_D': '4_TITULO_D', '5_FECHA_DE': '5_FECHA_DE', '6_TEMATICA': '6_TEMATICA', '7_DIMENSIO': '7_DIMENSIO', '8_ESTADO': '8_ESTADO', '9_foto_lug': '9_foto_lug', 'lat_10_loc': 'lat_10_loc', 'long_10_lo': 'long_10_lo', });
lyr_RELIEVEESCULTORICO_3.set('fieldAliases', {'1_LUGAR': '1_LUGAR', '2_TIPO': '2_TIPO', '3_AUTOR': '3_AUTOR', '4_TITULO_D': '4_TITULO_D', '5_FECHA_DE': '5_FECHA_DE', '6_TEMATICA': '6_TEMATICA', '7_DIMENSIO': '7_DIMENSIO', '8_ESTADO': '8_ESTADO', '9_foto_lug': '9_foto_lug', 'lat_10_loc': 'lat_10_loc', 'long_10_lo': 'long_10_lo', });
lyr_PINTURAMURAL_4.set('fieldAliases', {'1_LUGAR': '1_LUGAR', '2_TIPO': '2_TIPO', '3_AUTOR': '3_AUTOR', '4_TITULO_D': '4_TITULO_D', '5_FECHA_DE': '5_FECHA_DE', '6_TEMATICA': '6_TEMATICA', '7_DIMENSIO': '7_DIMENSIO', '8_ESTADO': '8_ESTADO', '9_foto_lug': '9_foto_lug', 'lat_10_loc': 'lat_10_loc', 'long_10_lo': 'long_10_lo', });
lyr_MURALCERAMICO_5.set('fieldAliases', {'1_LUGAR': '1_LUGAR', '2_TIPO': '2_TIPO', '3_AUTOR': '3_AUTOR', '4_TITULO_D': '4_TITULO_D', '5_FECHA_DE': '5_FECHA_DE', '6_TEMATICA': '6_TEMATICA', '7_DIMENSIO': '7_DIMENSIO', '8_ESTADO': '8_ESTADO', '9_foto_lug': '9_foto_lug', 'lat_10_loc': 'lat_10_loc', 'long_10_lo': 'long_10_lo', });
lyr_ESGRAFIADO_1.set('fieldImages', {'1_LUGAR': 'TextEdit', '2_TIPO': 'TextEdit', '3_AUTOR': 'TextEdit', '4_TITULO_D': 'TextEdit', '5_FECHA_DE': 'TextEdit', '6_TEMATICA': 'TextEdit', '7_DIMENSIO': 'TextEdit', '8_ESTADO': 'TextEdit', '9_foto_lug': 'TextEdit', 'lat_10_loc': 'TextEdit', 'long_10_lo': 'TextEdit', });
lyr_TESELAS_2.set('fieldImages', {'1_LUGAR': 'TextEdit', '2_TIPO': 'TextEdit', '3_AUTOR': 'TextEdit', '4_TITULO_D': 'TextEdit', '5_FECHA_DE': 'TextEdit', '6_TEMATICA': 'TextEdit', '7_DIMENSIO': 'TextEdit', '8_ESTADO': 'TextEdit', '9_foto_lug': 'TextEdit', 'lat_10_loc': 'TextEdit', 'long_10_lo': 'TextEdit', });
lyr_RELIEVEESCULTORICO_3.set('fieldImages', {'1_LUGAR': 'TextEdit', '2_TIPO': 'TextEdit', '3_AUTOR': 'TextEdit', '4_TITULO_D': 'TextEdit', '5_FECHA_DE': 'TextEdit', '6_TEMATICA': 'TextEdit', '7_DIMENSIO': 'TextEdit', '8_ESTADO': 'TextEdit', '9_foto_lug': 'TextEdit', 'lat_10_loc': 'TextEdit', 'long_10_lo': 'TextEdit', });
lyr_PINTURAMURAL_4.set('fieldImages', {'1_LUGAR': 'TextEdit', '2_TIPO': 'TextEdit', '3_AUTOR': 'TextEdit', '4_TITULO_D': 'TextEdit', '5_FECHA_DE': 'TextEdit', '6_TEMATICA': 'TextEdit', '7_DIMENSIO': 'TextEdit', '8_ESTADO': 'TextEdit', '9_foto_lug': 'TextEdit', 'lat_10_loc': 'TextEdit', 'long_10_lo': 'TextEdit', });
lyr_MURALCERAMICO_5.set('fieldImages', {'1_LUGAR': 'TextEdit', '2_TIPO': 'TextEdit', '3_AUTOR': 'TextEdit', '4_TITULO_D': 'TextEdit', '5_FECHA_DE': 'TextEdit', '6_TEMATICA': 'TextEdit', '7_DIMENSIO': 'TextEdit', '8_ESTADO': 'TextEdit', '9_foto_lug': 'TextEdit', 'lat_10_loc': 'TextEdit', 'long_10_lo': 'TextEdit', });
lyr_ESGRAFIADO_1.set('fieldLabels', {'1_LUGAR': 'inline label - always visible', '2_TIPO': 'inline label - always visible', '3_AUTOR': 'inline label - always visible', '4_TITULO_D': 'inline label - always visible', '5_FECHA_DE': 'inline label - always visible', '6_TEMATICA': 'inline label - always visible', '7_DIMENSIO': 'inline label - always visible', '8_ESTADO': 'inline label - always visible', '9_foto_lug': 'inline label - always visible', 'lat_10_loc': 'inline label - always visible', 'long_10_lo': 'inline label - always visible', });
lyr_TESELAS_2.set('fieldLabels', {'1_LUGAR': 'inline label - always visible', '2_TIPO': 'inline label - always visible', '3_AUTOR': 'inline label - always visible', '4_TITULO_D': 'inline label - always visible', '5_FECHA_DE': 'inline label - always visible', '6_TEMATICA': 'inline label - always visible', '7_DIMENSIO': 'inline label - always visible', '8_ESTADO': 'inline label - always visible', '9_foto_lug': 'inline label - always visible', 'lat_10_loc': 'inline label - always visible', 'long_10_lo': 'inline label - always visible', });
lyr_RELIEVEESCULTORICO_3.set('fieldLabels', {'1_LUGAR': 'inline label - always visible', '2_TIPO': 'inline label - always visible', '3_AUTOR': 'inline label - always visible', '4_TITULO_D': 'inline label - always visible', '5_FECHA_DE': 'inline label - always visible', '6_TEMATICA': 'inline label - always visible', '7_DIMENSIO': 'inline label - always visible', '8_ESTADO': 'inline label - always visible', '9_foto_lug': 'inline label - always visible', 'lat_10_loc': 'inline label - always visible', 'long_10_lo': 'inline label - always visible', });
lyr_PINTURAMURAL_4.set('fieldLabels', {'1_LUGAR': 'inline label - always visible', '2_TIPO': 'inline label - always visible', '3_AUTOR': 'inline label - always visible', '4_TITULO_D': 'inline label - always visible', '5_FECHA_DE': 'inline label - always visible', '6_TEMATICA': 'inline label - always visible', '7_DIMENSIO': 'inline label - always visible', '8_ESTADO': 'inline label - always visible', '9_foto_lug': 'inline label - always visible', 'lat_10_loc': 'inline label - always visible', 'long_10_lo': 'inline label - always visible', });
lyr_MURALCERAMICO_5.set('fieldLabels', {'1_LUGAR': 'inline label - always visible', '2_TIPO': 'inline label - always visible', '3_AUTOR': 'inline label - always visible', '4_TITULO_D': 'inline label - always visible', '5_FECHA_DE': 'inline label - always visible', '6_TEMATICA': 'inline label - always visible', '7_DIMENSIO': 'inline label - always visible', '8_ESTADO': 'inline label - always visible', '9_foto_lug': 'inline label - always visible', 'lat_10_loc': 'inline label - always visible', 'long_10_lo': 'inline label - always visible', });
lyr_MURALCERAMICO_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});