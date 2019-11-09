var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_AlgaeRemovalTestPlots_1 = new ol.format.GeoJSON();
var features_AlgaeRemovalTestPlots_1 = format_AlgaeRemovalTestPlots_1.readFeatures(json_AlgaeRemovalTestPlots_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlgaeRemovalTestPlots_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlgaeRemovalTestPlots_1.addFeatures(features_AlgaeRemovalTestPlots_1);
var lyr_AlgaeRemovalTestPlots_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AlgaeRemovalTestPlots_1, 
                style: style_AlgaeRemovalTestPlots_1,
                interactive: true,
                title: '<img src="styles/legend/AlgaeRemovalTestPlots_1.png" /> Algae Removal Test Plots'
            });
var format_TemperatureLogger_2 = new ol.format.GeoJSON();
var features_TemperatureLogger_2 = format_TemperatureLogger_2.readFeatures(json_TemperatureLogger_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TemperatureLogger_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TemperatureLogger_2.addFeatures(features_TemperatureLogger_2);
var lyr_TemperatureLogger_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TemperatureLogger_2, 
                style: style_TemperatureLogger_2,
                interactive: true,
                title: '<img src="styles/legend/TemperatureLogger_2.png" /> Temperature Logger'
            });
var format_YSLSonde_3 = new ol.format.GeoJSON();
var features_YSLSonde_3 = format_YSLSonde_3.readFeatures(json_YSLSonde_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YSLSonde_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_YSLSonde_3.addFeatures(features_YSLSonde_3);
var lyr_YSLSonde_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_YSLSonde_3, 
                style: style_YSLSonde_3,
                interactive: true,
                title: '<img src="styles/legend/YSLSonde_3.png" /> YSL Sonde'
            });
var format_CoastalSprings_4 = new ol.format.GeoJSON();
var features_CoastalSprings_4 = format_CoastalSprings_4.readFeatures(json_CoastalSprings_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoastalSprings_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoastalSprings_4.addFeatures(features_CoastalSprings_4);
var lyr_CoastalSprings_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoastalSprings_4, 
                style: style_CoastalSprings_4,
                interactive: true,
                title: '<img src="styles/legend/CoastalSprings_4.png" /> Coastal Springs'
            });
var format_OlosegaValoniaSeverity_5 = new ol.format.GeoJSON();
var features_OlosegaValoniaSeverity_5 = format_OlosegaValoniaSeverity_5.readFeatures(json_OlosegaValoniaSeverity_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OlosegaValoniaSeverity_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OlosegaValoniaSeverity_5.addFeatures(features_OlosegaValoniaSeverity_5);
var lyr_OlosegaValoniaSeverity_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OlosegaValoniaSeverity_5, 
                style: style_OlosegaValoniaSeverity_5,
                interactive: true,
    title: 'Olosega Valonia Severity<br />\
    <img src="styles/legend/OlosegaValoniaSeverity_5_0.png" /> High (51 - 80% coverage)<br />\
    <img src="styles/legend/OlosegaValoniaSeverity_5_1.png" /> Severe (>80% coverage)<br />'
        });
var format_Pool200ValoniaSeverity_6 = new ol.format.GeoJSON();
var features_Pool200ValoniaSeverity_6 = format_Pool200ValoniaSeverity_6.readFeatures(json_Pool200ValoniaSeverity_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pool200ValoniaSeverity_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pool200ValoniaSeverity_6.addFeatures(features_Pool200ValoniaSeverity_6);
var lyr_Pool200ValoniaSeverity_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pool200ValoniaSeverity_6, 
                style: style_Pool200ValoniaSeverity_6,
                interactive: true,
    title: 'Pool 200 Valonia Severity<br />\
    <img src="styles/legend/Pool200ValoniaSeverity_6_0.png" /> High (51 - 80% coverage)<br />'
        });
var format_Pool300ValoniaSeverity_7 = new ol.format.GeoJSON();
var features_Pool300ValoniaSeverity_7 = format_Pool300ValoniaSeverity_7.readFeatures(json_Pool300ValoniaSeverity_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pool300ValoniaSeverity_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pool300ValoniaSeverity_7.addFeatures(features_Pool300ValoniaSeverity_7);
var lyr_Pool300ValoniaSeverity_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pool300ValoniaSeverity_7, 
                style: style_Pool300ValoniaSeverity_7,
                interactive: true,
    title: 'Pool 300 Valonia Severity<br />\
    <img src="styles/legend/Pool300ValoniaSeverity_7_0.png" /> High (51 - 80% coverage)<br />\
    <img src="styles/legend/Pool300ValoniaSeverity_7_1.png" /> Severe (>80% coverage)<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_AlgaeRemovalTestPlots_1.setVisible(true);lyr_TemperatureLogger_2.setVisible(true);lyr_YSLSonde_3.setVisible(true);lyr_CoastalSprings_4.setVisible(true);lyr_OlosegaValoniaSeverity_5.setVisible(true);lyr_Pool200ValoniaSeverity_6.setVisible(true);lyr_Pool300ValoniaSeverity_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_AlgaeRemovalTestPlots_1,lyr_TemperatureLogger_2,lyr_YSLSonde_3,lyr_CoastalSprings_4,lyr_OlosegaValoniaSeverity_5,lyr_Pool200ValoniaSeverity_6,lyr_Pool300ValoniaSeverity_7];
lyr_AlgaeRemovalTestPlots_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'y': 'y', 'x': 'x', 'name': 'name', });
lyr_TemperatureLogger_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'id': 'id', 'site': 'site', 'y': 'y', 'x': 'x', 'logger_id': 'logger_id', });
lyr_YSLSonde_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'id': 'id', 'site': 'site', 'y': 'y', 'x': 'x', });
lyr_CoastalSprings_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'id': 'id', 'gps_wp': 'gps_wp', 'y': 'y', 'x': 'x', 'site': 'site', 'wp_name': 'wp_name', 'date': 'date', });
lyr_OlosegaValoniaSeverity_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'id': 'id', 'date': 'date', 'location': 'location', 'coral_perc': 'coral_perc', 'coral_scal': 'coral_scal', 'val': 'val', 'cal': 'cal', 'choro': 'choro', 'dict': 'dict', 'cya': 'cya', 'hal': 'hal', 'notes': 'notes', 'y': 'y', 'x': 'x', });
lyr_Pool200ValoniaSeverity_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'id': 'id', 'date': 'date', 'location': 'location', 'coral_perc': 'coral_perc', 'coral_scal': 'coral_scal', 'val': 'val', 'cal': 'cal', 'choro': 'choro', 'dict': 'dict', 'cya': 'cya', 'hal': 'hal', 'notes': 'notes', 'y': 'y', 'x': 'x', });
lyr_Pool300ValoniaSeverity_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'id': 'id', 'date': 'date', 'location': 'location', 'coral_perc': 'coral_perc', 'coral_scal': 'coral_scal', 'val': 'val', 'cal': 'cal', 'choro': 'choro', 'dict': 'dict', 'cya': 'cya', 'hal': 'hal', 'notes': 'notes', 'y': 'y', 'x': 'x', });
lyr_AlgaeRemovalTestPlots_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'y': 'TextEdit', 'x': 'TextEdit', 'name': 'TextEdit', });
lyr_TemperatureLogger_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'id': 'TextEdit', 'site': 'TextEdit', 'y': 'TextEdit', 'x': 'TextEdit', 'logger_id': 'TextEdit', });
lyr_YSLSonde_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'id': 'TextEdit', 'site': 'TextEdit', 'y': 'TextEdit', 'x': 'TextEdit', });
lyr_CoastalSprings_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'id': 'TextEdit', 'gps_wp': 'TextEdit', 'y': 'TextEdit', 'x': 'TextEdit', 'site': 'TextEdit', 'wp_name': 'TextEdit', 'date': 'DateTime', });
lyr_OlosegaValoniaSeverity_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'id': 'TextEdit', 'date': 'TextEdit', 'location': 'TextEdit', 'coral_perc': 'TextEdit', 'coral_scal': 'TextEdit', 'val': 'TextEdit', 'cal': 'TextEdit', 'choro': 'TextEdit', 'dict': 'TextEdit', 'cya': 'TextEdit', 'hal': 'TextEdit', 'notes': 'TextEdit', 'y': 'TextEdit', 'x': 'TextEdit', });
lyr_Pool200ValoniaSeverity_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'id': 'TextEdit', 'date': 'TextEdit', 'location': 'TextEdit', 'coral_perc': 'TextEdit', 'coral_scal': 'TextEdit', 'val': 'TextEdit', 'cal': 'TextEdit', 'choro': 'TextEdit', 'dict': 'TextEdit', 'cya': 'TextEdit', 'hal': 'TextEdit', 'notes': 'TextEdit', 'y': 'TextEdit', 'x': 'TextEdit', });
lyr_Pool300ValoniaSeverity_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'id': 'TextEdit', 'date': 'TextEdit', 'location': 'TextEdit', 'coral_perc': 'TextEdit', 'coral_scal': 'TextEdit', 'val': 'TextEdit', 'cal': 'TextEdit', 'choro': 'TextEdit', 'dict': 'TextEdit', 'cya': 'TextEdit', 'hal': 'TextEdit', 'notes': 'TextEdit', 'y': 'TextEdit', 'x': 'TextEdit', });
lyr_AlgaeRemovalTestPlots_1.set('fieldLabels', {'OBJECTID': 'no label', 'ID': 'no label', 'y': 'no label', 'x': 'no label', 'name': 'no label', });
lyr_TemperatureLogger_2.set('fieldLabels', {'OBJECTID': 'no label', 'id': 'no label', 'site': 'no label', 'y': 'no label', 'x': 'no label', 'logger_id': 'no label', });
lyr_YSLSonde_3.set('fieldLabels', {'OBJECTID': 'no label', 'id': 'no label', 'site': 'no label', 'y': 'no label', 'x': 'no label', });
lyr_CoastalSprings_4.set('fieldLabels', {'OBJECTID': 'no label', 'id': 'no label', 'gps_wp': 'no label', 'y': 'no label', 'x': 'no label', 'site': 'no label', 'wp_name': 'no label', 'date': 'no label', });
lyr_OlosegaValoniaSeverity_5.set('fieldLabels', {'OBJECTID': 'no label', 'id': 'no label', 'date': 'no label', 'location': 'no label', 'coral_perc': 'no label', 'coral_scal': 'no label', 'val': 'no label', 'cal': 'no label', 'choro': 'no label', 'dict': 'no label', 'cya': 'no label', 'hal': 'no label', 'notes': 'no label', 'y': 'no label', 'x': 'no label', });
lyr_Pool200ValoniaSeverity_6.set('fieldLabels', {'OBJECTID': 'no label', 'id': 'no label', 'date': 'no label', 'location': 'no label', 'coral_perc': 'no label', 'coral_scal': 'no label', 'val': 'no label', 'cal': 'no label', 'choro': 'no label', 'dict': 'no label', 'cya': 'no label', 'hal': 'no label', 'notes': 'no label', 'y': 'no label', 'x': 'no label', });
lyr_Pool300ValoniaSeverity_7.set('fieldLabels', {'OBJECTID': 'no label', 'id': 'no label', 'date': 'no label', 'location': 'no label', 'coral_perc': 'no label', 'coral_scal': 'no label', 'val': 'no label', 'cal': 'no label', 'choro': 'no label', 'dict': 'no label', 'cya': 'no label', 'hal': 'no label', 'notes': 'no label', 'y': 'no label', 'x': 'no label', });
lyr_Pool300ValoniaSeverity_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});