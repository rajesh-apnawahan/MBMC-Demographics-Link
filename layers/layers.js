var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_MBMCStatsRev1_1 = new ol.format.GeoJSON();
var features_MBMCStatsRev1_1 = format_MBMCStatsRev1_1.readFeatures(json_MBMCStatsRev1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MBMCStatsRev1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MBMCStatsRev1_1.addFeatures(features_MBMCStatsRev1_1);
var lyr_MBMCStatsRev1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MBMCStatsRev1_1, 
                style: style_MBMCStatsRev1_1,
                popuplayertitle: "MBMC Stats Rev1",
                interactive: true,
                title: '<img src="styles/legend/MBMCStatsRev1_1.png" /> MBMC Stats Rev1'
            });
var format_MBMCStops_2 = new ol.format.GeoJSON();
var features_MBMCStops_2 = format_MBMCStops_2.readFeatures(json_MBMCStops_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MBMCStops_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MBMCStops_2.addFeatures(features_MBMCStops_2);
var lyr_MBMCStops_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MBMCStops_2, 
                style: style_MBMCStops_2,
                popuplayertitle: "MBMC Stops",
                interactive: true,
                title: '<img src="styles/legend/MBMCStops_2.png" /> MBMC Stops'
            });
var format_StopsInsideMBMCcsv_3 = new ol.format.GeoJSON();
var features_StopsInsideMBMCcsv_3 = format_StopsInsideMBMCcsv_3.readFeatures(json_StopsInsideMBMCcsv_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StopsInsideMBMCcsv_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StopsInsideMBMCcsv_3.addFeatures(features_StopsInsideMBMCcsv_3);
var lyr_StopsInsideMBMCcsv_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StopsInsideMBMCcsv_3, 
                style: style_StopsInsideMBMCcsv_3,
                popuplayertitle: "Stops Inside MBMC.csv",
                interactive: true,
                title: 'Stops Inside MBMC.csv'
            });
var format_Temples_4 = new ol.format.GeoJSON();
var features_Temples_4 = format_Temples_4.readFeatures(json_Temples_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Temples_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Temples_4.addFeatures(features_Temples_4);
var lyr_Temples_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Temples_4, 
                style: style_Temples_4,
                popuplayertitle: "Temples",
                interactive: true,
                title: '<img src="styles/legend/Temples_4.png" /> Temples'
            });
var format_Signals_5 = new ol.format.GeoJSON();
var features_Signals_5 = format_Signals_5.readFeatures(json_Signals_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Signals_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Signals_5.addFeatures(features_Signals_5);
var lyr_Signals_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Signals_5, 
                style: style_Signals_5,
                popuplayertitle: "Signals",
                interactive: true,
                title: '<img src="styles/legend/Signals_5.png" /> Signals'
            });
var format_Hospitals_6 = new ol.format.GeoJSON();
var features_Hospitals_6 = format_Hospitals_6.readFeatures(json_Hospitals_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hospitals_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hospitals_6.addFeatures(features_Hospitals_6);
var lyr_Hospitals_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hospitals_6, 
                style: style_Hospitals_6,
                popuplayertitle: "Hospitals",
                interactive: true,
                title: '<img src="styles/legend/Hospitals_6.png" /> Hospitals'
            });
var format_PSU_7 = new ol.format.GeoJSON();
var features_PSU_7 = format_PSU_7.readFeatures(json_PSU_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PSU_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PSU_7.addFeatures(features_PSU_7);
var lyr_PSU_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PSU_7, 
                style: style_PSU_7,
                popuplayertitle: "PSU",
                interactive: true,
                title: '<img src="styles/legend/PSU_7.png" /> PSU'
            });
var format_PrivateOffices_8 = new ol.format.GeoJSON();
var features_PrivateOffices_8 = format_PrivateOffices_8.readFeatures(json_PrivateOffices_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrivateOffices_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrivateOffices_8.addFeatures(features_PrivateOffices_8);
var lyr_PrivateOffices_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PrivateOffices_8, 
                style: style_PrivateOffices_8,
                popuplayertitle: "Private Offices",
                interactive: true,
                title: '<img src="styles/legend/PrivateOffices_8.png" /> Private Offices'
            });
var format_Education_9 = new ol.format.GeoJSON();
var features_Education_9 = format_Education_9.readFeatures(json_Education_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Education_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Education_9.addFeatures(features_Education_9);
var lyr_Education_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Education_9, 
                style: style_Education_9,
                popuplayertitle: "Education",
                interactive: true,
                title: '<img src="styles/legend/Education_9.png" /> Education'
            });
var format_GovtOffice_10 = new ol.format.GeoJSON();
var features_GovtOffice_10 = format_GovtOffice_10.readFeatures(json_GovtOffice_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GovtOffice_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GovtOffice_10.addFeatures(features_GovtOffice_10);
var lyr_GovtOffice_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GovtOffice_10, 
                style: style_GovtOffice_10,
                popuplayertitle: "Govt Office",
                interactive: true,
                title: '<img src="styles/legend/GovtOffice_10.png" /> Govt Office'
            });
var format_RailwayStn_11 = new ol.format.GeoJSON();
var features_RailwayStn_11 = format_RailwayStn_11.readFeatures(json_RailwayStn_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RailwayStn_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RailwayStn_11.addFeatures(features_RailwayStn_11);
var lyr_RailwayStn_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RailwayStn_11, 
                style: style_RailwayStn_11,
                popuplayertitle: "Railway Stn",
                interactive: true,
                title: '<img src="styles/legend/RailwayStn_11.png" /> Railway Stn'
            });
var format_StopPopWithinMBMC_12 = new ol.format.GeoJSON();
var features_StopPopWithinMBMC_12 = format_StopPopWithinMBMC_12.readFeatures(json_StopPopWithinMBMC_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StopPopWithinMBMC_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StopPopWithinMBMC_12.addFeatures(features_StopPopWithinMBMC_12);
var lyr_StopPopWithinMBMC_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StopPopWithinMBMC_12, 
                style: style_StopPopWithinMBMC_12,
                popuplayertitle: "Stop Pop Within MBMC",
                interactive: true,
                title: '<img src="styles/legend/StopPopWithinMBMC_12.png" /> Stop Pop Within MBMC'
            });
var format_MBMCStopPopDissolved_13 = new ol.format.GeoJSON();
var features_MBMCStopPopDissolved_13 = format_MBMCStopPopDissolved_13.readFeatures(json_MBMCStopPopDissolved_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MBMCStopPopDissolved_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MBMCStopPopDissolved_13.addFeatures(features_MBMCStopPopDissolved_13);
var lyr_MBMCStopPopDissolved_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MBMCStopPopDissolved_13, 
                style: style_MBMCStopPopDissolved_13,
                popuplayertitle: "MBMC Stop Pop Dissolved",
                interactive: true,
                title: '<img src="styles/legend/MBMCStopPopDissolved_13.png" /> MBMC Stop Pop Dissolved'
            });
var format_StopsinsideMBMC_14 = new ol.format.GeoJSON();
var features_StopsinsideMBMC_14 = format_StopsinsideMBMC_14.readFeatures(json_StopsinsideMBMC_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StopsinsideMBMC_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StopsinsideMBMC_14.addFeatures(features_StopsinsideMBMC_14);
var lyr_StopsinsideMBMC_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StopsinsideMBMC_14, 
                style: style_StopsinsideMBMC_14,
                popuplayertitle: "Stops inside MBMC",
                interactive: true,
                title: '<img src="styles/legend/StopsinsideMBMC_14.png" /> Stops inside MBMC'
            });
var format_PopulationMBMC_15 = new ol.format.GeoJSON();
var features_PopulationMBMC_15 = format_PopulationMBMC_15.readFeatures(json_PopulationMBMC_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PopulationMBMC_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PopulationMBMC_15.addFeatures(features_PopulationMBMC_15);
var lyr_PopulationMBMC_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PopulationMBMC_15, 
                style: style_PopulationMBMC_15,
                popuplayertitle: "Population MBMC",
                interactive: true,
    title: 'Population MBMC<br />\
    <img src="styles/legend/PopulationMBMC_15_0.png" /> 1 - 2069<br />\
    <img src="styles/legend/PopulationMBMC_15_1.png" /> 2069 - 4137<br />\
    <img src="styles/legend/PopulationMBMC_15_2.png" /> 4137 - 6205<br />\
    <img src="styles/legend/PopulationMBMC_15_3.png" /> 6205 - 8274<br />\
    <img src="styles/legend/PopulationMBMC_15_4.png" /> 8274 - 10342<br />\
    <img src="styles/legend/PopulationMBMC_15_5.png" /> 10342 - 12410<br />\
    <img src="styles/legend/PopulationMBMC_15_6.png" /> 12410 - 14478<br />\
    <img src="styles/legend/PopulationMBMC_15_7.png" /> 14478 - 16546<br />\
    <img src="styles/legend/PopulationMBMC_15_8.png" /> 16546 - 18614<br />\
    <img src="styles/legend/PopulationMBMC_15_9.png" /> 18614 - 20682<br />\
    <img src="styles/legend/PopulationMBMC_15_10.png" /> 20682 - 22750<br />\
    <img src="styles/legend/PopulationMBMC_15_11.png" /> 22750 - 24819<br />\
    <img src="styles/legend/PopulationMBMC_15_12.png" /> 24819 - 26887<br />\
    <img src="styles/legend/PopulationMBMC_15_13.png" /> 26887 - 28955<br />\
    <img src="styles/legend/PopulationMBMC_15_14.png" /> 28955 - 31023<br />'
        });
var format_MBMCWealthIndex_16 = new ol.format.GeoJSON();
var features_MBMCWealthIndex_16 = format_MBMCWealthIndex_16.readFeatures(json_MBMCWealthIndex_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MBMCWealthIndex_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MBMCWealthIndex_16.addFeatures(features_MBMCWealthIndex_16);
var lyr_MBMCWealthIndex_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MBMCWealthIndex_16, 
                style: style_MBMCWealthIndex_16,
                popuplayertitle: "MBMC Wealth Index",
                interactive: true,
    title: 'MBMC Wealth Index<br />\
    <img src="styles/legend/MBMCWealthIndex_16_0.png" /> -0.29 - -0.16<br />\
    <img src="styles/legend/MBMCWealthIndex_16_1.png" /> -0.16 - -0.03<br />\
    <img src="styles/legend/MBMCWealthIndex_16_2.png" /> -0.03 - 0.11<br />\
    <img src="styles/legend/MBMCWealthIndex_16_3.png" /> 0.11 - 0.24<br />\
    <img src="styles/legend/MBMCWealthIndex_16_4.png" /> 0.24 - 0.37<br />\
    <img src="styles/legend/MBMCWealthIndex_16_5.png" /> 0.37 - 0.51<br />\
    <img src="styles/legend/MBMCWealthIndex_16_6.png" /> 0.51 - 0.64<br />\
    <img src="styles/legend/MBMCWealthIndex_16_7.png" /> 0.64 - 0.77<br />\
    <img src="styles/legend/MBMCWealthIndex_16_8.png" /> 0.77 - 0.91<br />\
    <img src="styles/legend/MBMCWealthIndex_16_9.png" /> 0.91 - 1.04<br />\
    <img src="styles/legend/MBMCWealthIndex_16_10.png" /> 1.04 - 1.18<br />\
    <img src="styles/legend/MBMCWealthIndex_16_11.png" /> 1.18 - 1.31<br />\
    <img src="styles/legend/MBMCWealthIndex_16_12.png" /> 1.31 - 1.44<br />\
    <img src="styles/legend/MBMCWealthIndex_16_13.png" /> 1.44 - 1.58<br />\
    <img src="styles/legend/MBMCWealthIndex_16_14.png" /> 1.58 - 1.71<br />'
        });
var format_MBMCRoutesStats_17 = new ol.format.GeoJSON();
var features_MBMCRoutesStats_17 = format_MBMCRoutesStats_17.readFeatures(json_MBMCRoutesStats_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MBMCRoutesStats_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MBMCRoutesStats_17.addFeatures(features_MBMCRoutesStats_17);
var lyr_MBMCRoutesStats_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MBMCRoutesStats_17, 
                style: style_MBMCRoutesStats_17,
                popuplayertitle: "MBMC Routes Stats",
                interactive: true,
    title: 'MBMC Routes Stats<br />\
    <img src="styles/legend/MBMCRoutesStats_17_0.png" /> Route 1<br />\
    <img src="styles/legend/MBMCRoutesStats_17_1.png" /> Route 10<br />\
    <img src="styles/legend/MBMCRoutesStats_17_2.png" /> Route 10 AC<br />\
    <img src="styles/legend/MBMCRoutesStats_17_3.png" /> Route 12<br />\
    <img src="styles/legend/MBMCRoutesStats_17_4.png" /> Route 14<br />\
    <img src="styles/legend/MBMCRoutesStats_17_5.png" /> Route 15<br />\
    <img src="styles/legend/MBMCRoutesStats_17_6.png" /> Route 16<br />\
    <img src="styles/legend/MBMCRoutesStats_17_7.png" /> Route 17<br />\
    <img src="styles/legend/MBMCRoutesStats_17_8.png" /> Route 18<br />\
    <img src="styles/legend/MBMCRoutesStats_17_9.png" /> Route 19<br />\
    <img src="styles/legend/MBMCRoutesStats_17_10.png" /> Route 2<br />\
    <img src="styles/legend/MBMCRoutesStats_17_11.png" /> Route 20<br />\
    <img src="styles/legend/MBMCRoutesStats_17_12.png" /> Route 21<br />\
    <img src="styles/legend/MBMCRoutesStats_17_13.png" /> Route 22<br />\
    <img src="styles/legend/MBMCRoutesStats_17_14.png" /> Route 23<br />\
    <img src="styles/legend/MBMCRoutesStats_17_15.png" /> Route 24<br />\
    <img src="styles/legend/MBMCRoutesStats_17_16.png" /> Route 25<br />\
    <img src="styles/legend/MBMCRoutesStats_17_17.png" /> Route 28<br />\
    <img src="styles/legend/MBMCRoutesStats_17_18.png" /> Route 29<br />\
    <img src="styles/legend/MBMCRoutesStats_17_19.png" /> Route 29 AC<br />\
    <img src="styles/legend/MBMCRoutesStats_17_20.png" /> Route 4<br />\
    <img src="styles/legend/MBMCRoutesStats_17_21.png" /> Route 5<br />\
    <img src="styles/legend/MBMCRoutesStats_17_22.png" /> Route 6<br />\
    <img src="styles/legend/MBMCRoutesStats_17_23.png" /> <br />'
        });
var format_MBMCTerminals_18 = new ol.format.GeoJSON();
var features_MBMCTerminals_18 = format_MBMCTerminals_18.readFeatures(json_MBMCTerminals_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MBMCTerminals_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MBMCTerminals_18.addFeatures(features_MBMCTerminals_18);
var lyr_MBMCTerminals_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MBMCTerminals_18, 
                style: style_MBMCTerminals_18,
                popuplayertitle: "MBMC Terminals",
                interactive: true,
    title: 'MBMC Terminals<br />\
    <img src="styles/legend/MBMCTerminals_18_0.png" /> Adani Power House<br />\
    <img src="styles/legend/MBMCTerminals_18_1.png" /> Bhayandar Station East<br />\
    <img src="styles/legend/MBMCTerminals_18_2.png" /> Bhayandar Station West<br />\
    <img src="styles/legend/MBMCTerminals_18_3.png" /> Borivali National Park<br />\
    <img src="styles/legend/MBMCTerminals_18_4.png" /> Borivali Railway Station<br />\
    <img src="styles/legend/MBMCTerminals_18_5.png" /> Chimaji Appa Chouk<br />\
    <img src="styles/legend/MBMCTerminals_18_6.png" /> GCC School<br />\
    <img src="styles/legend/MBMCTerminals_18_7.png" /> GHARTAN PADA<br />\
    <img src="styles/legend/MBMCTerminals_18_8.png" /> Ghodbunder Depot<br />\
    <img src="styles/legend/MBMCTerminals_18_9.png" /> Golden Nest<br />\
    <img src="styles/legend/MBMCTerminals_18_10.png" /> Jain Mandir 2<br />\
    <img src="styles/legend/MBMCTerminals_18_11.png" /> Jogeshwari station West<br />\
    <img src="styles/legend/MBMCTerminals_18_12.png" /> JP Infra<br />\
    <img src="styles/legend/MBMCTerminals_18_13.png" /> Kashimira<br />\
    <img src="styles/legend/MBMCTerminals_18_14.png" /> KD Empire<br />\
    <img src="styles/legend/MBMCTerminals_18_15.png" /> Manori Tar<br />\
    <img src="styles/legend/MBMCTerminals_18_16.png" /> Mira Road Station<br />\
    <img src="styles/legend/MBMCTerminals_18_17.png" /> Modern Company<br />\
    <img src="styles/legend/MBMCTerminals_18_18.png" /> Morva Bhat<br />\
    <img src="styles/legend/MBMCTerminals_18_19.png" /> MTNL Office<br />\
    <img src="styles/legend/MBMCTerminals_18_20.png" /> Nagar Bhavan Mandi talav<br />\
    <img src="styles/legend/MBMCTerminals_18_21.png" /> Pagoda<br />\
    <img src="styles/legend/MBMCTerminals_18_22.png" /> POONAM SAGAR<br />\
    <img src="styles/legend/MBMCTerminals_18_23.png" /> Prakshal<br />\
    <img src="styles/legend/MBMCTerminals_18_24.png" /> RAM NAGAR<br />\
    <img src="styles/legend/MBMCTerminals_18_25.png" /> RASHMI COMPLEX<br />\
    <img src="styles/legend/MBMCTerminals_18_26.png" /> S.K STONE POLICE STATION<br />\
    <img src="styles/legend/MBMCTerminals_18_27.png" /> Salasar Nagar<br />\
    <img src="styles/legend/MBMCTerminals_18_28.png" /> Shantiwan<br />\
    <img src="styles/legend/MBMCTerminals_18_29.png" /> Silver Park<br />\
    <img src="styles/legend/MBMCTerminals_18_30.png" /> Swa Praful Patil Chowk Indralok Naka<br />\
    <img src="styles/legend/MBMCTerminals_18_31.png" /> Thane Station East Kopri<br />\
    <img src="styles/legend/MBMCTerminals_18_32.png" /> Tiwari College<br />\
    <img src="styles/legend/MBMCTerminals_18_33.png" /> Tunga Hospital<br />\
    <img src="styles/legend/MBMCTerminals_18_34.png" /> Uttan Naka<br />\
    <img src="styles/legend/MBMCTerminals_18_35.png" /> Vinay Nagar<br />\
    <img src="styles/legend/MBMCTerminals_18_36.png" /> Western Park E.<br />\
    <img src="styles/legend/MBMCTerminals_18_37.png" /> <br />'
        });
var format_MBMCStopsMapped_19 = new ol.format.GeoJSON();
var features_MBMCStopsMapped_19 = format_MBMCStopsMapped_19.readFeatures(json_MBMCStopsMapped_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MBMCStopsMapped_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MBMCStopsMapped_19.addFeatures(features_MBMCStopsMapped_19);
var lyr_MBMCStopsMapped_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MBMCStopsMapped_19, 
                style: style_MBMCStopsMapped_19,
                popuplayertitle: "MBMC Stops Mapped",
                interactive: true,
    title: 'MBMC Stops Mapped<br />\
    <img src="styles/legend/MBMCStopsMapped_19_0.png" /> Route 1<br />\
    <img src="styles/legend/MBMCStopsMapped_19_1.png" /> Route 10<br />\
    <img src="styles/legend/MBMCStopsMapped_19_2.png" /> Route 10 AC<br />\
    <img src="styles/legend/MBMCStopsMapped_19_3.png" /> Route 12<br />\
    <img src="styles/legend/MBMCStopsMapped_19_4.png" /> Route 14<br />\
    <img src="styles/legend/MBMCStopsMapped_19_5.png" /> Route 15<br />\
    <img src="styles/legend/MBMCStopsMapped_19_6.png" /> Route 16<br />\
    <img src="styles/legend/MBMCStopsMapped_19_7.png" /> Route 17<br />\
    <img src="styles/legend/MBMCStopsMapped_19_8.png" /> Route 18<br />\
    <img src="styles/legend/MBMCStopsMapped_19_9.png" /> Route 19<br />\
    <img src="styles/legend/MBMCStopsMapped_19_10.png" /> Route 2<br />\
    <img src="styles/legend/MBMCStopsMapped_19_11.png" /> Route 20<br />\
    <img src="styles/legend/MBMCStopsMapped_19_12.png" /> Route 21<br />\
    <img src="styles/legend/MBMCStopsMapped_19_13.png" /> Route 22<br />\
    <img src="styles/legend/MBMCStopsMapped_19_14.png" /> Route 23<br />\
    <img src="styles/legend/MBMCStopsMapped_19_15.png" /> Route 24<br />\
    <img src="styles/legend/MBMCStopsMapped_19_16.png" /> Route 25<br />\
    <img src="styles/legend/MBMCStopsMapped_19_17.png" /> Route 28<br />\
    <img src="styles/legend/MBMCStopsMapped_19_18.png" /> Route 29<br />\
    <img src="styles/legend/MBMCStopsMapped_19_19.png" /> Route 29 AC<br />\
    <img src="styles/legend/MBMCStopsMapped_19_20.png" /> Route 4<br />\
    <img src="styles/legend/MBMCStopsMapped_19_21.png" /> Route 5<br />\
    <img src="styles/legend/MBMCStopsMapped_19_22.png" /> Route 6<br />\
    <img src="styles/legend/MBMCStopsMapped_19_23.png" /> <br />'
        });
var format_AreaUncovered_20 = new ol.format.GeoJSON();
var features_AreaUncovered_20 = format_AreaUncovered_20.readFeatures(json_AreaUncovered_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaUncovered_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaUncovered_20.addFeatures(features_AreaUncovered_20);
var lyr_AreaUncovered_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AreaUncovered_20, 
                style: style_AreaUncovered_20,
                popuplayertitle: "Area Uncovered",
                interactive: true,
                title: '<img src="styles/legend/AreaUncovered_20.png" /> Area Uncovered'
            });
var format_AreaUncoveredPop_21 = new ol.format.GeoJSON();
var features_AreaUncoveredPop_21 = format_AreaUncoveredPop_21.readFeatures(json_AreaUncoveredPop_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaUncoveredPop_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaUncoveredPop_21.addFeatures(features_AreaUncoveredPop_21);
var lyr_AreaUncoveredPop_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AreaUncoveredPop_21, 
                style: style_AreaUncoveredPop_21,
                popuplayertitle: "Area Uncovered Pop",
                interactive: true,
    title: 'Area Uncovered Pop<br />\
    <img src="styles/legend/AreaUncoveredPop_21_0.png" /> 1 - 2069<br />\
    <img src="styles/legend/AreaUncoveredPop_21_1.png" /> 2069 - 4137<br />\
    <img src="styles/legend/AreaUncoveredPop_21_2.png" /> 4137 - 6205<br />\
    <img src="styles/legend/AreaUncoveredPop_21_3.png" /> 6205 - 8274<br />\
    <img src="styles/legend/AreaUncoveredPop_21_4.png" /> 8274 - 10342<br />\
    <img src="styles/legend/AreaUncoveredPop_21_5.png" /> 10342 - 12410<br />\
    <img src="styles/legend/AreaUncoveredPop_21_6.png" /> 12410 - 14478<br />\
    <img src="styles/legend/AreaUncoveredPop_21_7.png" /> 14478 - 16546<br />\
    <img src="styles/legend/AreaUncoveredPop_21_8.png" /> 16546 - 18614<br />\
    <img src="styles/legend/AreaUncoveredPop_21_9.png" /> 18614 - 20682<br />\
    <img src="styles/legend/AreaUncoveredPop_21_10.png" /> 20682 - 22750<br />\
    <img src="styles/legend/AreaUncoveredPop_21_11.png" /> 22750 - 24819<br />\
    <img src="styles/legend/AreaUncoveredPop_21_12.png" /> 24819 - 26887<br />\
    <img src="styles/legend/AreaUncoveredPop_21_13.png" /> 26887 - 28955<br />\
    <img src="styles/legend/AreaUncoveredPop_21_14.png" /> 28955 - 31023<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_MBMCStatsRev1_1.setVisible(true);lyr_MBMCStops_2.setVisible(true);lyr_StopsInsideMBMCcsv_3.setVisible(true);lyr_Temples_4.setVisible(true);lyr_Signals_5.setVisible(true);lyr_Hospitals_6.setVisible(true);lyr_PSU_7.setVisible(true);lyr_PrivateOffices_8.setVisible(true);lyr_Education_9.setVisible(true);lyr_GovtOffice_10.setVisible(true);lyr_RailwayStn_11.setVisible(true);lyr_StopPopWithinMBMC_12.setVisible(true);lyr_MBMCStopPopDissolved_13.setVisible(true);lyr_StopsinsideMBMC_14.setVisible(true);lyr_PopulationMBMC_15.setVisible(true);lyr_MBMCWealthIndex_16.setVisible(true);lyr_MBMCRoutesStats_17.setVisible(true);lyr_MBMCTerminals_18.setVisible(true);lyr_MBMCStopsMapped_19.setVisible(true);lyr_AreaUncovered_20.setVisible(true);lyr_AreaUncoveredPop_21.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_MBMCStatsRev1_1,lyr_MBMCStops_2,lyr_StopsInsideMBMCcsv_3,lyr_Temples_4,lyr_Signals_5,lyr_Hospitals_6,lyr_PSU_7,lyr_PrivateOffices_8,lyr_Education_9,lyr_GovtOffice_10,lyr_RailwayStn_11,lyr_StopPopWithinMBMC_12,lyr_MBMCStopPopDissolved_13,lyr_StopsinsideMBMC_14,lyr_PopulationMBMC_15,lyr_MBMCWealthIndex_16,lyr_MBMCRoutesStats_17,lyr_MBMCTerminals_18,lyr_MBMCStopsMapped_19,lyr_AreaUncovered_20,lyr_AreaUncoveredPop_21];
lyr_MBMCStatsRev1_1.set('fieldAliases', {'shapeName': 'shapeName', 'Area KM': 'Area KM', 'Perimeter': 'Perimeter', 'Pop': 'Pop', 'Pop/Km2': 'Pop/Km2', });
lyr_MBMCStops_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Sr__No_': 'Sr__No_', 'Depot_Name': 'Depot_Name', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_StopsInsideMBMCcsv_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'descriptio': 'descriptio', 'altitudeMo': 'altitudeMo', 'Sr__No_': 'Sr__No_', 'Depot_Name': 'Depot_Name', 'center_lat': 'center_lat', 'center_lon': 'center_lon', 'shapeName': 'shapeName', 'Area_KM': 'Area_KM', 'Perimeter': 'Perimeter', 'Pop': 'Pop', 'Pop_Km2': 'Pop_Km2', });
lyr_Temples_4.set('fieldAliases', {'religion': 'religion', 'amenity': 'amenity', 'name': 'name', });
lyr_Signals_5.set('fieldAliases', {'highway': 'highway', });
lyr_Hospitals_6.set('fieldAliases', {'amenity': 'amenity', 'addr_full': 'addr_full', 'name': 'name', });
lyr_PSU_7.set('fieldAliases', {'amenity': 'amenity', 'name': 'name', });
lyr_PrivateOffices_8.set('fieldAliases', {'office': 'office', 'name': 'name', });
lyr_Education_9.set('fieldAliases', {'amenity': 'amenity', 'name': 'name', });
lyr_GovtOffice_10.set('fieldAliases', {'addr_state': 'addr_state', 'addr_full': 'addr_full', 'addr_distr': 'addr_distr', 'website': 'website', 'phone': 'phone', 'opening_ho': 'opening_ho', 'descriptio': 'descriptio', 'name_en': 'name_en', 'amenity': 'amenity', 'name_hi': 'name_hi', 'addr_house': 'addr_house', 'layer': 'layer', });
lyr_RailwayStn_11.set('fieldAliases', {'network': 'network', 'name': 'name', });
lyr_StopPopWithinMBMC_12.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_MBMCStopPopDissolved_13.set('fieldAliases', {'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'Pop': 'Pop', 'City Pop': 'City Pop', 'Coverage': 'Coverage', });
lyr_StopsinsideMBMC_14.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Sr__No_': 'Sr__No_', 'Depot_Name': 'Depot_Name', 'center_lat': 'center_lat', 'center_lon': 'center_lon', 'shapeName': 'shapeName', 'Area KM': 'Area KM', 'Perimeter': 'Perimeter', 'Pop': 'Pop', 'Pop/Km2': 'Pop/Km2', });
lyr_PopulationMBMC_15.set('fieldAliases', {'fid': 'fid', 'h3': 'h3', 'population': 'population', 'shapeName': 'shapeName', 'Area KM': 'Area KM', 'Perimeter': 'Perimeter', 'Pop': 'Pop', 'Pop/Km2': 'Pop/Km2', });
lyr_MBMCWealthIndex_16.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'rwi': 'rwi', 'error': 'error', 'shapeName': 'shapeName', 'Area KM': 'Area KM', 'Perimeter': 'Perimeter', 'Pop': 'Pop', 'Pop/Km2': 'Pop/Km2', });
lyr_MBMCRoutesStats_17.set('fieldAliases', {'Name': 'Name', 'Length Km': 'Length Km', });
lyr_MBMCTerminals_18.set('fieldAliases', {'Name': 'Name', 'layer': 'layer', });
lyr_MBMCStopsMapped_19.set('fieldAliases', {'Name': 'Name', 'Sr__No_': 'Sr__No_', 'Depot_Name': 'Depot_Name', 'center_lat': 'center_lat', 'center_lon': 'center_lon', 'Name_2': 'Name_2', 'Length Km': 'Length Km', });
lyr_AreaUncovered_20.set('fieldAliases', {'shapeName': 'shapeName', 'Area KM': 'Area KM', 'Perimeter': 'Perimeter', 'Pop_2': 'Pop_2', 'Pop/Km2': 'Pop/Km2', 'Area UC KM': 'Area UC KM', 'Peri UC KM': 'Peri UC KM', 'Pop UC': 'Pop UC', 'NoCoverage': 'NoCoverage', });
lyr_AreaUncoveredPop_21.set('fieldAliases', {'shapeName': 'shapeName', 'Area KM': 'Area KM', 'Perimeter': 'Perimeter', 'Pop_2': 'Pop_2', 'Pop/Km2': 'Pop/Km2', 'Area UC KM': 'Area UC KM', 'Peri UC KM': 'Peri UC KM', 'Pop UC': 'Pop UC', 'NoCoverage': 'NoCoverage', 'fid': 'fid', 'h3': 'h3', 'population': 'population', });
lyr_MBMCStatsRev1_1.set('fieldImages', {'shapeName': 'TextEdit', 'Area KM': 'TextEdit', 'Perimeter': 'TextEdit', 'Pop': 'TextEdit', 'Pop/Km2': 'TextEdit', });
lyr_MBMCStops_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Sr__No_': 'TextEdit', 'Depot_Name': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', });
lyr_StopsInsideMBMCcsv_3.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'descriptio': '', 'altitudeMo': '', 'Sr__No_': '', 'Depot_Name': '', 'center_lat': '', 'center_lon': '', 'shapeName': '', 'Area_KM': '', 'Perimeter': '', 'Pop': '', 'Pop_Km2': '', });
lyr_Temples_4.set('fieldImages', {'religion': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', });
lyr_Signals_5.set('fieldImages', {'highway': 'TextEdit', });
lyr_Hospitals_6.set('fieldImages', {'amenity': 'TextEdit', 'addr_full': 'TextEdit', 'name': 'TextEdit', });
lyr_PSU_7.set('fieldImages', {'amenity': 'TextEdit', 'name': 'TextEdit', });
lyr_PrivateOffices_8.set('fieldImages', {'office': 'TextEdit', 'name': 'TextEdit', });
lyr_Education_9.set('fieldImages', {'amenity': 'TextEdit', 'name': 'TextEdit', });
lyr_GovtOffice_10.set('fieldImages', {'addr_state': 'TextEdit', 'addr_full': 'TextEdit', 'addr_distr': 'TextEdit', 'website': 'TextEdit', 'phone': 'TextEdit', 'opening_ho': 'TextEdit', 'descriptio': 'TextEdit', 'name_en': 'TextEdit', 'amenity': 'TextEdit', 'name_hi': 'TextEdit', 'addr_house': 'TextEdit', 'layer': 'TextEdit', });
lyr_RailwayStn_11.set('fieldImages', {'network': 'TextEdit', 'name': 'TextEdit', });
lyr_StopPopWithinMBMC_12.set('fieldImages', {'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_MBMCStopPopDissolved_13.set('fieldImages', {'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'Pop': 'Range', 'City Pop': 'Range', 'Coverage': 'Range', });
lyr_StopsinsideMBMC_14.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Sr__No_': 'TextEdit', 'Depot_Name': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', 'shapeName': 'TextEdit', 'Area KM': 'TextEdit', 'Perimeter': 'TextEdit', 'Pop': 'TextEdit', 'Pop/Km2': 'TextEdit', });
lyr_PopulationMBMC_15.set('fieldImages', {'fid': 'TextEdit', 'h3': 'TextEdit', 'population': 'TextEdit', 'shapeName': 'TextEdit', 'Area KM': 'TextEdit', 'Perimeter': 'TextEdit', 'Pop': 'TextEdit', 'Pop/Km2': 'TextEdit', });
lyr_MBMCWealthIndex_16.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'rwi': 'TextEdit', 'error': 'TextEdit', 'shapeName': 'TextEdit', 'Area KM': 'TextEdit', 'Perimeter': 'TextEdit', 'Pop': 'TextEdit', 'Pop/Km2': 'TextEdit', });
lyr_MBMCRoutesStats_17.set('fieldImages', {'Name': 'TextEdit', 'Length Km': '', });
lyr_MBMCTerminals_18.set('fieldImages', {'Name': 'TextEdit', 'layer': 'TextEdit', });
lyr_MBMCStopsMapped_19.set('fieldImages', {'Name': 'TextEdit', 'Sr__No_': 'TextEdit', 'Depot_Name': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', 'Name_2': 'TextEdit', 'Length Km': 'TextEdit', });
lyr_AreaUncovered_20.set('fieldImages', {'shapeName': 'TextEdit', 'Area KM': 'TextEdit', 'Perimeter': 'TextEdit', 'Pop_2': 'TextEdit', 'Pop/Km2': 'TextEdit', 'Area UC KM': 'TextEdit', 'Peri UC KM': 'TextEdit', 'Pop UC': 'TextEdit', 'NoCoverage': 'Range', });
lyr_AreaUncoveredPop_21.set('fieldImages', {'shapeName': 'TextEdit', 'Area KM': 'TextEdit', 'Perimeter': 'TextEdit', 'Pop_2': 'TextEdit', 'Pop/Km2': 'TextEdit', 'Area UC KM': 'TextEdit', 'Peri UC KM': 'TextEdit', 'Pop UC': 'TextEdit', 'NoCoverage': 'TextEdit', 'fid': 'TextEdit', 'h3': 'TextEdit', 'population': 'TextEdit', });
lyr_MBMCStatsRev1_1.set('fieldLabels', {'shapeName': 'header label - visible with data', 'Area KM': 'inline label - always visible', 'Perimeter': 'inline label - always visible', 'Pop': 'inline label - always visible', 'Pop/Km2': 'inline label - always visible', });
lyr_MBMCStops_2.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Sr__No_': 'hidden field', 'Depot_Name': 'hidden field', 'center_lat': 'inline label - visible with data', 'center_lon': 'inline label - visible with data', });
lyr_StopsInsideMBMCcsv_3.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'descriptio': 'no label', 'altitudeMo': 'no label', 'Sr__No_': 'no label', 'Depot_Name': 'no label', 'center_lat': 'inline label - always visible', 'center_lon': 'inline label - always visible', 'shapeName': 'inline label - always visible', 'Area_KM': 'inline label - always visible', 'Perimeter': 'inline label - always visible', 'Pop': 'inline label - always visible', 'Pop_Km2': 'inline label - always visible', });
lyr_Temples_4.set('fieldLabels', {'religion': 'inline label - always visible', 'amenity': 'inline label - always visible', 'name': 'header label - visible with data', });
lyr_Signals_5.set('fieldLabels', {'highway': 'header label - visible with data', });
lyr_Hospitals_6.set('fieldLabels', {'amenity': 'inline label - always visible', 'addr_full': 'inline label - always visible', 'name': 'header label - visible with data', });
lyr_PSU_7.set('fieldLabels', {'amenity': 'inline label - always visible', 'name': 'header label - visible with data', });
lyr_PrivateOffices_8.set('fieldLabels', {'office': 'inline label - always visible', 'name': 'header label - visible with data', });
lyr_Education_9.set('fieldLabels', {'amenity': 'inline label - always visible', 'name': 'header label - visible with data', });
lyr_GovtOffice_10.set('fieldLabels', {'addr_state': 'inline label - always visible', 'addr_full': 'hidden field', 'addr_distr': 'hidden field', 'website': 'hidden field', 'phone': 'hidden field', 'opening_ho': 'hidden field', 'descriptio': 'hidden field', 'name_en': 'hidden field', 'amenity': 'hidden field', 'name_hi': 'hidden field', 'addr_house': 'hidden field', 'layer': 'header label - visible with data', });
lyr_RailwayStn_11.set('fieldLabels', {'network': 'inline label - always visible', 'name': 'header label - visible with data', });
lyr_StopPopWithinMBMC_12.set('fieldLabels', {'ID': 'no label', 'CENTER_LON': 'inline label - always visible', 'CENTER_LAT': 'inline label - always visible', 'AA_MINS': 'inline label - always visible', 'AA_MODE': 'inline label - always visible', 'TOTAL_POP': 'header label - visible with data', });
lyr_MBMCStopPopDissolved_13.set('fieldLabels', {'AA_MINS': 'inline label - always visible', 'AA_MODE': 'inline label - always visible', 'Pop': 'inline label - always visible', 'City Pop': 'inline label - always visible', 'Coverage': 'header label - visible with data', });
lyr_StopsinsideMBMC_14.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Sr__No_': 'inline label - always visible', 'Depot_Name': 'inline label - always visible', 'center_lat': 'inline label - always visible', 'center_lon': 'inline label - always visible', 'shapeName': 'inline label - always visible', 'Area KM': 'inline label - always visible', 'Perimeter': 'inline label - always visible', 'Pop': 'inline label - always visible', 'Pop/Km2': 'inline label - always visible', });
lyr_PopulationMBMC_15.set('fieldLabels', {'fid': 'no label', 'h3': 'no label', 'population': 'header label - visible with data', 'shapeName': 'inline label - visible with data', 'Area KM': 'inline label - always visible', 'Perimeter': 'inline label - always visible', 'Pop': 'inline label - always visible', 'Pop/Km2': 'inline label - always visible', });
lyr_MBMCWealthIndex_16.set('fieldLabels', {'latitude': 'no label', 'longitude': 'no label', 'rwi': 'no label', 'error': 'no label', 'shapeName': 'no label', 'Area KM': 'no label', 'Perimeter': 'no label', 'Pop': 'no label', 'Pop/Km2': 'no label', });
lyr_MBMCRoutesStats_17.set('fieldLabels', {'Name': 'header label - visible with data', 'Length Km': 'inline label - always visible', });
lyr_MBMCTerminals_18.set('fieldLabels', {'Name': 'header label - visible with data', 'layer': 'inline label - always visible', });
lyr_MBMCStopsMapped_19.set('fieldLabels', {'Name': 'header label - visible with data', 'Sr__No_': 'inline label - always visible', 'Depot_Name': 'inline label - always visible', 'center_lat': 'inline label - always visible', 'center_lon': 'inline label - always visible', 'Name_2': 'inline label - always visible', 'Length Km': 'inline label - always visible', });
lyr_AreaUncovered_20.set('fieldLabels', {'shapeName': 'header label - visible with data', 'Area KM': 'inline label - always visible', 'Perimeter': 'inline label - always visible', 'Pop_2': 'inline label - always visible', 'Pop/Km2': 'inline label - always visible', 'Area UC KM': 'inline label - always visible', 'Peri UC KM': 'inline label - always visible', 'Pop UC': 'inline label - always visible', 'NoCoverage': 'inline label - always visible', });
lyr_AreaUncoveredPop_21.set('fieldLabels', {'shapeName': 'header label - visible with data', 'Area KM': 'inline label - always visible', 'Perimeter': 'inline label - always visible', 'Pop_2': 'inline label - always visible', 'Pop/Km2': 'inline label - always visible', 'Area UC KM': 'inline label - always visible', 'Peri UC KM': 'inline label - always visible', 'Pop UC': 'inline label - always visible', 'NoCoverage': 'inline label - always visible', 'fid': 'no label', 'h3': 'no label', 'population': 'header label - visible with data', });
lyr_AreaUncoveredPop_21.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});