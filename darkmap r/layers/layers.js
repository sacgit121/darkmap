var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_maplight_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "maplight",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/maplight_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-19525979.940400, -7783862.028288, 19245415.793400, 14745787.252188]
                            })
                        });
var lyr_imgpng_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "imgpng",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/imgpng_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-18973475.748000, -8440186.108746, 19518108.906900, 13928408.334646]
                            })
                        });

lyr_OSMStandard_0.setVisible(true);lyr_maplight_1.setVisible(true);lyr_imgpng_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_maplight_1,lyr_imgpng_2];
