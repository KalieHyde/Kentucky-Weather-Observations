var wms_layers = [];


        var lyr_ESRIDarkGray_0 = new ol.layer.Tile({
            'title': 'ESRI Dark Gray',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_KentuckyWeatherObservationPoints_1 = new ol.format.GeoJSON();
var features_KentuckyWeatherObservationPoints_1 = format_KentuckyWeatherObservationPoints_1.readFeatures(json_KentuckyWeatherObservationPoints_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KentuckyWeatherObservationPoints_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KentuckyWeatherObservationPoints_1.addFeatures(features_KentuckyWeatherObservationPoints_1);
var lyr_KentuckyWeatherObservationPoints_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KentuckyWeatherObservationPoints_1, 
                style: style_KentuckyWeatherObservationPoints_1,
                popuplayertitle: 'KentuckyWeatherObservationPoints',
                interactive: true,
                title: '<img src="styles/legend/KentuckyWeatherObservationPoints_1.png" /> KentuckyWeatherObservationPoints'
            });

lyr_ESRIDarkGray_0.setVisible(true);lyr_KentuckyWeatherObservationPoints_1.setVisible(true);
var layersList = [lyr_ESRIDarkGray_0,lyr_KentuckyWeatherObservationPoints_1];
lyr_KentuckyWeatherObservationPoints_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'title': 'title', 'summary': 'summary', 'weblink': 'weblink', 'local_time': 'local_time', 'network': 'network', 'stid': 'stid', 'location': 'location', 'county': 'county', 'state': 'state', 'latitude': 'latitude', 'longitude': 'longitude', 'elevation': 'elevation', 'observation_group_name': 'observation_group_name', 'utme': 'utme', 'utme_awips': 'utme_awips', 'ltme': 'ltme', 'stme': 'stme', 'air_temperature': 'air_temperature', 'relative_humidity': 'relative_humidity', 'dewpoint': 'dewpoint', 'wind_speed': 'wind_speed', 'wind_direction': 'wind_direction', 'peak_wind': 'peak_wind', 'solar_radiation': 'solar_radiation', 'precipitation_today': 'precipitation_today', 'rotation': 'rotation', 'filename': 'filename', 'air_temp_num': 'air_temp_num', 'dewpoint_num': 'dewpoint_num', 'site_camera': 'site_camera', });
lyr_KentuckyWeatherObservationPoints_1.set('fieldImages', {'OBJECTID': '', 'title': '', 'summary': '', 'weblink': '', 'local_time': '', 'network': '', 'stid': '', 'location': '', 'county': '', 'state': '', 'latitude': '', 'longitude': '', 'elevation': '', 'observation_group_name': '', 'utme': '', 'utme_awips': '', 'ltme': '', 'stme': '', 'air_temperature': '', 'relative_humidity': '', 'dewpoint': '', 'wind_speed': '', 'wind_direction': '', 'peak_wind': '', 'solar_radiation': '', 'precipitation_today': '', 'rotation': '', 'filename': '', 'air_temp_num': '', 'dewpoint_num': '', 'site_camera': '', });
lyr_KentuckyWeatherObservationPoints_1.set('fieldLabels', {'OBJECTID': 'inline label - visible with data', 'title': 'inline label - visible with data', 'summary': 'inline label - visible with data', 'weblink': 'inline label - visible with data', 'local_time': 'inline label - visible with data', 'network': 'inline label - visible with data', 'stid': 'inline label - visible with data', 'location': 'inline label - visible with data', 'county': 'inline label - visible with data', 'state': 'inline label - visible with data', 'latitude': 'inline label - visible with data', 'longitude': 'inline label - visible with data', 'elevation': 'inline label - visible with data', 'observation_group_name': 'inline label - visible with data', 'utme': 'inline label - visible with data', 'utme_awips': 'inline label - visible with data', 'ltme': 'inline label - visible with data', 'stme': 'inline label - visible with data', 'air_temperature': 'inline label - visible with data', 'relative_humidity': 'inline label - visible with data', 'dewpoint': 'inline label - visible with data', 'wind_speed': 'inline label - visible with data', 'wind_direction': 'inline label - visible with data', 'peak_wind': 'inline label - visible with data', 'solar_radiation': 'inline label - visible with data', 'precipitation_today': 'inline label - visible with data', 'rotation': 'inline label - visible with data', 'filename': 'inline label - visible with data', 'air_temp_num': 'inline label - visible with data', 'dewpoint_num': 'inline label - visible with data', 'site_camera': 'inline label - visible with data', });
lyr_KentuckyWeatherObservationPoints_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});