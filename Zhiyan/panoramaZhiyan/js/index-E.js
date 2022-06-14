var pageScene="E1"; 
const gallery = <ReactGallery/>;
//const domContainer = document.querySelector('#react-gallery');
ReactDOM.render(gallery, document.getElementById('react-gallery'));


//a great pannellum tutorial but in Chinese: https://www.jianshu.com/p/fdbcb551d75b 

//generating the panorama
var v=pannellum.viewer('panorama', {
    "default":{
        "firstScene":"E1",
        "sceneFadeDuration": 1000
    },

    "scenes":{
        "A":{
            "title":"A. Half Moon Reservoir, Banyue Tang",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/panorama-pictures/A%20panorama.jpg",
            //angle range of horizontal view
            "haov": 360,
            //angle range of vertical view
            "vaov": 75.9,
            //vertical angle of the whole panorama
            "vOffset": 0,
            //default zoom-in control
            "hfov": 90,
            "pitch":0.4950347216871744,
            "yaw":98.53426094431822,
            //"hotSpotDebug":true,
            "autoLoad":true,
            "minPitch":-30,
            "maxPitch":30,
            "hotSpots": [
                {
                "pitch": 2.345475365114024,
                "yaw": 31.832136364839414, 
                "type": "info",
                "text": "Houses and mountains surrounding Half Moon Reservoir",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'DSC00012.JPG'},
                },
                {
                "pitch": 0.48989981323274423, 
                "yaw": 128.76527989776093, 
                "type": "info",
                "text": "Houses surrounding Half Moon Reservoir",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'DSC00014.JPG'},
                },
                {
                "pitch":  -1.0678504855662962, 
                "yaw": -170.41160237631047, 
                "type": "info",
                "text": "House of Great Peace",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'DSCN0225.JPG'},
                },
                {
                "pitch":  2.3050495502017054, 
                "yaw": 161.96623600826098, 
                "type": "info",
                "text": "House of Great Peace",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'DSCN0234.JPG'},
                },
                {
                "pitch": -0.282847007917533, 
                "yaw": -138.6910043261086, 
                "type": "info",
                "text":"Sign of Zhi Brook Village",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'DSCN1061.JPG'},
                },
                {
                    "pitch":-0.28860810255934893,
                    "yaw":77.74459708662397,
                    "type": "scene",
                    "text": "B.1 The Hall of Continuing Virtue, Yande Tang exterior",
                    "sceneID":"B1",
                    "clickHandlerFunc": toB1,
                }
            ]
        },

        "B1":{
            "title":"B1. The Hall of Continuing Virtue, Yande Tang exterior",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/panorama-pictures/B.1%20panorama.jpeg",
            //angle range of horizontal view
            "haov": 360,
            //angle range of vertical view
            "vaov": 75.9,
            //vertical angle of the whole panorama
            "vOffset": 0,
            //default zoom-in control
            "hfov": 90,
            "minPitch":-30,
            "maxPitch":30,
            "pitch":0.48785805876345967,
            "yaw":37.66738775223549,
            //"hotSpotDebug":true,
            "autoLoad":true,
            "hotSpots": [
                {
                "pitch": 0.5540749854981462, 
                "yaw": 33.034659913032385, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'P0002473.JPG'}
                },
                {
                    "pitch":-15.184729368304339,
                    "yaw":-121.68834802962877,
                    "type": "scene",
                    "text": "A. Half Moon Reservoir, Banyue Tang",
                    "sceneID":"A",
                    "clickHandlerFunc": toA,
                },
                {
                    "pitch":-8.290454109452979,
                    "yaw":33.52286591044591,
                    "type": "scene",
                    "text": "B2. The Hall of Continuing Virtue, Yande Tang",
                    "sceneID":"B2",
                    "clickHandlerFunc": toB2,
                },
                {
                    "pitch":-11.401247921602009,
                    "yaw":94.24309345307182,
                    "type": "scene",
                    "text": "C1. The Hall of Succeeding Glory, Chengxian Tang -- front room",
                    "sceneID":"C1",
                    "clickHandlerFunc": toC1,
                }
            ]
        },

        "B2":{
            "title":"B2. The Hall of Continuing Virtue, Yande Tang",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/panorama-pictures/B.2%20panorama.jpeg",
            //angle range of horizontal view
            "haov": 360,
            //angle range of vertical view
            "vaov": 75.9,
            //vertical angle of the whole panorama
            "vOffset": 0,
            //default zoom-in control
            "hfov": 90,
            "minPitch":-30,
            "maxPitch":30,
            "pitch":1.0975898880450663,
            "yaw":-105.48534675483569,
            //"hotSpotDebug":true,
            "autoLoad":true,
            "hotSpots": [
               
            {
            "pitch": -11.475739044729867, 
            "yaw": -105.93081011643514, 
            "type": "info",
            "text":"Overview of the hall, inside",
            "clickHandlerFunc" : expandImg,
            "clickHandlerArgs" : {"text":'1-YDT%20overview%20of%20temple%20hall.JPG'}
            },
            {
            "pitch": 3.4785978686062693, 
            "yaw": 83.10083853133199, 
            "type": "info",
            "text":"West pillar in Entrance hall",
            "clickHandlerFunc" : expandImg,
            "clickHandlerArgs" : {"text":'2-YDT%20west%20pillar%20in%20entrance%20hall.JPG'}
            },
            {
            "pitch": 20.545404379386582, 
            "yaw": 75.50957951042817, 
            "type": "info",
            "text":"Renovated beam structure",
            "clickHandlerFunc" : expandImg,
            "clickHandlerArgs" : {"text":'3-YDT_renovated_beam_structure_in_entrance.JPG'}
            },
            {
            "pitch": 23.207445945604665, 
            "yaw": -103.66550833155856, 
            "type": "info",
            "text":"Main hall sign",
            "clickHandlerFunc" : expandImg,
            "clickHandlerArgs" : {"text":'4-YDT_main_hall_sign.JPG'}
            },
            {
            "pitch": 18.531386545812264, 
            "yaw": 89.39950858579601, 
            "type": "info",
            "text":"Roof and supporting beam",
            "clickHandlerFunc" : expandImg,
            "clickHandlerArgs" : {"text":'5-YDT_roof_and_supporting_beam_for_main_hall.JPG'}
            },
            {
            "pitch": -8.514660248113652, 
            "yaw": 65.63853313590937, 
            "type": "info",
            "text":"`Sky Well` (small courtyard)",
            "clickHandlerFunc" : expandImg,
            "clickHandlerArgs" : {"text":'6-YDT_waterway_between_entrance_hall_and_main_hall.JPG'}
            },
            
            {
            "pitch": 9.522568936998807, 
            "yaw": 16.443618819429382, 
            "type": "info",
            "text":"East wall decoration",
            "clickHandlerFunc" : expandImg,
            "clickHandlerArgs" : {"text":'7-YDT_east_wall_decoration_of_main_hall.JPG'}
            },
            {
            "pitch": 4.729521133463686, 
            "yaw": -105.44059481611677, 
            "text":"ancestor tablet chest",
            "type": "info",
            "clickHandlerFunc" : expandImg,
            "clickHandlerArgs" : {"text":'8-YDT_ancestor_tablet_chest.JPG'}
            },
            {
            "pitch": 4.729521133463686, 
            "yaw": -111.19721629617068, 
            "text":"ancestor tablet inside chest",
            "type": "info",
            "clickHandlerFunc" : expandImg,
            "clickHandlerArgs" : {"text":'9-YDT_ancestor_tablets_inside_chest.JPG'}
            },
            {
            "pitch": 4.729521133463686, 
            "yaw": -115.76844826818753, 
            "type": "info",
            "text":"northwest side pillar",
            "clickHandlerFunc" : expandImg,
            "clickHandlerArgs" : {"text":'10-YDT_northwest_side_pillar_near_ancestor_tablet_chest.JPG'}
            },
            {
            "pitch": 4.729521133463686, 
            "yaw": -94.39815403306663, 
            "type": "info",
            "text":"East side pillar",
            "clickHandlerFunc" : expandImg,
            "clickHandlerArgs" : {"text":'11-YDT_east_pillar_in_main_hall.JPG'}
            },
            {
                "pitch":-12.798990600513335,
                "yaw":75.69933177125694,
                "type": "scene",
                "text": "B1. The Hall of Continuing Virtue, Yande Tang exterior",
                "sceneID":"B1",
                "clickHandlerFunc": toB1,
            },
            ]
        },

        "C1":{
            "title":"C1. The Hall of Succeeding Glory, Chengxian Tang -- front room",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/panorama-pictures/C.1%20panorama.jpeg",
            //angle range of horizontal view
            "haov": 360,
            //angle range of vertical view
            "vaov": 75.9,
            //vertical angle of the whole panorama
            "vOffset": 0,
            //default zoom-in control
            "hfov": 90,
            "minPitch":-30,
            "maxPitch":30,
            "pitch":0.6572235343677978,
            "yaw":13.380923525264993,
            //"hotSpotDebug":true,
            "autoLoad":true,
            "hotSpots": [
               {
                "pitch": 8.337252804835154, 
                "yaw": -166.01129634940142,
                "type": "info",
                "text":"Opera stage",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'DSC00006.JPG'}
                },
                {
                "pitch": 0.5553810146716338, 
                "yaw": -179.07250575593994, 
                "type": "info",
                "text":"Opera stage - Carcings on the front of stage 1",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'DSC00007.JPG'}
                },
                {
                "pitch": 1.0077390949549092, 
                "yaw": -152.20671950640084, 
                "type": "info",
                "text":"Opera stage - Carcings on the front of stage 2",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'DSC00008.JPG'}
                },
                {
                "pitch": -0.07695551466090804, 
                "yaw": -165.97167069315068, 
                "type": "info",
                "text":"Opera stage - Carcings on the front of stage 3",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'DSC00009.JPG'}
                },
                {
                "pitch": 7.787737392545937, 
                "yaw": 6.583098976303849, 
                "type": "info",
                "text":"Carved bracket with the pattern of a lion playing with a ball",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'DSC00012.JPG'}
                },
                {
                "pitch": 19.620647145724114, 
                "yaw": 13.022607809986482, 
                "type": "info",
                "text":"Hall of Succeeding Glory",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'DSC00014.JPG'}
                },
                {
                    "pitch":-16.90555683102463,
                    "yaw":11.543761398824886,
                    "type": "scene",
                    "text": "C2. The Hall of Succeeding Glory, Chengxian Tang -- back room",
                    "sceneID":"C2",
                    "clickHandlerFunc": toC2,
                },
                {
                    "pitch":-18.703607674387875,
                    "yaw":153.9352386247616,
                    "type": "scene",
                    "text": "B1. The Hall of Continuing Virtue, Yande Tang exterior",
                    "sceneID":"B1",
                    //"transform": "rotate(180deg)",
                    "clickHandlerFunc": toB1,
                },
                {
                    "pitch":-18.703607674387875,
                    "yaw":168.8327670126108,
                    "type": "scene",
                    "text": "D1. Entrance to the Hall of Promoting Goodness, Jimei Tang exterior",
                    "sceneID":"D1",
                    "clickHandlerFunc": toD1,
                }
            ]
        },

        "C2":{
            "title":"C2. The Hall of Succeeding Glory, Chengxian Tang -- back room",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/panorama-pictures/C.2%20panorama.jpeg",
            //angle range of horizontal view
            "haov": 360,
            //angle range of vertical view
            "vaov": 75.9,
            //vertical angle of the whole panorama
            "vOffset": 0,
            //default zoom-in control
            "hfov": 90,
            "minPitch":-30,
            "maxPitch":30,
            "pitch":0.7265671856573602,
            "yaw":119.87999401710053,
            //"hotSpotDebug":true,
            "autoLoad":true,
            "hotSpots": [
               //need to add hotspots of switching screen to screen
               {
                    "pitch":-11.53515617254781,
                    "yaw":-76.52906684194716,
                    "type": "scene",
                    "text": "C1. The Hall of Succeeding Glory, Chengxian Tang -- front room",
                    "sceneID":"C1",
                    "clickHandlerFunc": toC1,
                }
            
            ]
        },

        "D1":{
            "title":"D1. Entrance to the Hall of Promoting Goodness, Jimei Tang exterior",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/panorama-pictures/D.1%20panorama.jpeg",
            //angle range of horizontal view
            "haov": 360,
            //angle range of vertical view
            "vaov": 75.9,
            //vertical angle of the whole panorama
            "vOffset": 0,
            //default zoom-in control
            "hfov": 90,
            "minPitch":-30,
            "maxPitch":30,
            "pitch":1.0983116631691014,
            "yaw":-102.28891154610704,
            //"hotSpotDebug":true,
            "autoLoad":true,
            "hotSpots": [
            //need to add hotspots of switching screen to screen
              {
                    "pitch":-13.63851591949794,
                    "yaw":-103.28981818078637,
                    "type": "scene",
                    "text": "D2. Entrance to the Hall of Promoting Goodness, Jimei Tang",
                    "sceneID":"D2",
                    "clickHandlerFunc": toD2,
                },
                {
                    "pitch":-17.99866270523993,
                    "yaw":170.5062718172273,
                    "type": "scene",
                    "text": "E1. The Hall of Filial Devotion, Xiaosi Tang -- exterior",
                    "sceneID":"E1",
                    "clickHandlerFunc": toE1,
                },
                {
                    "pitch":-12.874567005200477,
                    "yaw":-16.82322493561017,
                    "type": "scene",
                    "text": "C1. The Hall of Succeeding Glory, Chengxian Tang -- front room",
                    "sceneID":"C1",
                    "clickHandlerFunc": toC1,
                }
            ]
        },
    
        "D2":{
            "title":"D2. Entrance to the Hall of Promoting Goodness, Jimei Tang",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/panorama-pictures/D.2%20panorama.jpeg",
            //angle range of horizontal view
            "haov": 360,
            //angle range of vertical view
            "vaov": 75.9,
            //vertical angle of the whole panorama
            "vOffset": 0,
            //default zoom-in control
            "hfov": 90,
            "minPitch":-30,
            "maxPitch":30,
            "pitch":0.3642837090303493,
            "yaw":-158.01214088624315,
            //"hotSpotDebug":true,
            "autoLoad":true,
            "hotSpots": [
                {
                "pitch": -3.760818178532821, 
                "yaw": -158.35870232115795, 
                "text":"Overview",
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'SANY0012.JPG'}
                },
                {
                "pitch": 16.170480122914704, 
                "yaw": -158.35870232115795, 
                "text":"Ancestral tablet chest",
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'SANY0013.JPG'}
                },
                {
                    "pitch":-13.924371653676996,
                    "yaw":23.3804782089114,
                    "type": "scene",
                    "text": "D1. Entrance to the Hall of Promoting Goodness, Jimei Tang exterior",
                    "sceneID":"D1",
                    "clickHandlerFunc": toD1,
                }
            ]
        },


        "E1":{
            "title":"E1. The Hall of Filial Devotion, Xiaosi Tang -- exterior",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/panorama-pictures/E.1%20panorama.jpeg",
            //angle range of horizontal view
            "haov": 360,
            //angle range of vertical view
            "vaov": 75.9,
            //vertical angle of the whole panorama
            "vOffset": 0,
            //default zoom-in control
            "hfov": 90,
            "minPitch":-30,
            "maxPitch":30,
            "pitch":0.7288870580340265,
            "yaw":-148.48137665165783,
            //"hotSpotDebug":true,
            "autoLoad":true,
            "hotSpots": [
                {
                "pitch": 5.226508027432661, 
                "yaw": -148.16532792205166, 
                "text":"Exterior of the Hall of Filial of Devotion - Gateway",
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'P0002466.JPG'}
                },
                {
                    "pitch":-9.125729333981946,
                    "yaw":-148.43665782064258,
                    "type": "scene",
                    "text": "E2. The Hall of Filial Devotion, Xiaosi Tang -- front hall",
                    "sceneID":"E2",
                    "clickHandlerFunc": toE2,
                },
                {
                    "pitch":-13.651314400582477,
                    "yaw":2.0570076064097593,
                    "type": "scene",
                    "text": "D1. Entrance to the Hall of Promoting Goodness, Jimei Tang exterior",
                    "sceneID":"D1",
                    "clickHandlerFunc": toD1,
                }
            ]
        },
        
        "E2":{
            "title":"E2. The Hall of Filial Devotion, Xiaosi Tang -- front hall",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/panorama-pictures/E.2%20panorama.jpeg",
            //angle range of horizontal view
            "haov": 360,
            //angle range of vertical view
            "vaov": 75.9,
            //vertical angle of the whole panorama
            "vOffset": 0,
            //default zoom-in control
            "hfov": 90,
            "minPitch":-30,
            "maxPitch":30,
            "pitch":0.6057653149603399,
            "yaw":-157.26912308153436,
            //"hotSpotDebug":true,
            "autoLoad":true,
            "hotSpots": [
                {
                "pitch": 35.4323565958816, 
                "yaw": 168.25801967097314, 
                "text":"Roof decoration of the front hall and a plaque 'Annual presented scholar'",
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'000384.JPG'}
                },
                {
                "pitch": 2.0790939136202424, 
                "yaw": 9.54830149384452, 
                "type": "info",
                "text":"View of entry from north",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'1-XST%20view%20of%20entry%20from%20north.JPG'}
                },
                {
                "pitch": 35.353551716816135, 
                "yaw": -157.14030934836703, 
                "type": "info",
                "text":"Plaque - 'Annual Presented Scholar'",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'2-XST%20main%20hall%20overhead%20signage.JPG'}
                },
                {
                "pitch": 13.175339463805967, 
                "yaw": -157.5265884950741, 
                "type": "info",
                "text":"Sign - Hall of Dilial of Devotion",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'3-XST%202nd%20sign%20facing%20north%20wall.JPG'}
                },
                {
                "pitch": 3.882713445189344, 
                "yaw": -168.4442534302401, 
                "type": "info",
                "text": "Pillars on the left side",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'4-XST%20left%20pillar%20middle%20of%20north%20wall.JPG'}
                },
                {
                "pitch": 3.882713445189344, 
                "yaw": -145.39975435944322, 
                "type": "info",
                "text": "Pillars on the right side",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'5-XST%20right%20pillar%20middle%20of%20north%20wall.JPG'}
                },
                {
                "pitch": 21.974044826378574, 
                "yaw": 173.4229904414446, 
                "type": "info",
                "text": "Beam structure",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'6-XST%20west%20wall%20beam%20structure.JPG'}
                },
                {
                "pitch": 22.87990277505625, 
                "yaw": 125.01395301587343, 
                "type": "info",
                "text": "Eaves structure",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'11-XST%20roof%20overhang%20SW%20corner.JPG'}
                },
                {
                "pitch": 1.4278914304471353, 
                "yaw": -90.54408794342466, 
                "type": "info",
                "text": "Buildings on the right hand side",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'12-XST%20space%20between%20main%20hall%20and%20%20E%20building.JPG'}
                },
                {
                "pitch": 1.7538858725839868, 
                "yaw": -100.79721433099853, 
                "type": "info",
                "text": "Buildings on the right hand side",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'13-XSWT%20outside%20view%20of%20east%20building.JPG'}
                },
                {
                    "pitch":-14.456730942196272,
                    "yaw":22.19062344000269,
                    "type": "scene",
                    "text": "E1. The Hall of Filial Devotion, Xiaosi Tang -- exterior",
                    "sceneID":"E1",
                    "clickHandlerFunc": toE1,
                },
                {
                    "pitch":-13.43549874821627,
                    "yaw":-65.33913327415188,
                    "type": "scene",
                    "text": "E3. The Hall of Filial Devotion, Xiaosi Tang -- back hall",
                    "sceneID":"E3",
                    "clickHandlerFunc": toE3,
                },
                {
                    "pitch":-13.43549874821627,
                    "yaw":110.81429153033766,
                    "type": "scene",
                    "text": "E3. The Hall of Filial Devotion, Xiaosi Tang -- back hall",
                    "sceneID":"E3",
                    "clickHandlerFunc": toE3,
                }
            ]
        },

        "E3":{
            "title":"E3. The Hall of Filial Devotion, Xiaosi Tang -- back hall",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/panorama-pictures/E.3%20panorama.jpeg",
            //angle range of horizontal view
            "haov": 360,
            //angle range of vertical view
            "vaov": 75.9,
            //vertical angle of the whole panorama
            "vOffset": 0,
            //default zoom-in control
            "hfov": 90,
            "minPitch":-30,
            "maxPitch":30,
            "pitch":0.6103280461592058,
            "yaw":107.70363726046892,
            //"hotSpotDebug":true,
            "autoLoad":true,
            "hotSpots": [
                {
                "pitch": 8.519409540434541, 
                "yaw": -134.90131326625982, 
                "text":"The back of the front hall",
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'000458.JPG'}
                },
                {
                "pitch": 24.055317183552656, 
                "yaw": -75.05233404942287, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'000460.JPG'}
                },
                {
                "pitch": 6.1925274840819675, 
                "yaw": 50.76059493272072, 
                "text":"Ancestral tablet chest",
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'000461.JPG'}
                },
                {
                "pitch": 13.72873567114599, 
                "yaw": 50.76059493272072, 
                "text":"Ancestral Spirit tablets",
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'000462.JPG'}
                },
                {
                "pitch": 3.8485911290349764, 
                "yaw": -16.77034632472374, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'000464.JPG'}
                },
                {
                    "pitch":-13.565045864306937,
                    "yaw":107.30268339073082,
                    "type": "scene",
                    "text": "E2. The Hall of Filial Devotion, Xiaosi Tang -- front hall",
                    "sceneID":"E2",
                    "clickHandlerFunc": toE2,
                },
                {
                    "pitch":-11.043975945133068,
                    "yaw":-69.49300150813578,
                    "type": "scene",
                    "text": "E2. The Hall of Filial Devotion, Xiaosi Tang -- front hall",
                    "sceneID":"E2",
                    "clickHandlerFunc": toE2,
                },
            ]
        },

        "F1":{
            "title":"F1. The Hall of Abundant Splendor, Guangyu Tang",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/panorama-pictures/F.1%20panorama.jpeg",
            //angle range of horizontal view
            "haov": 360,
            //angle range of vertical view
            "vaov": 75.9,
            //vertical angle of the whole panorama
            "vOffset": 0,
            //default zoom-in control
            "hfov": 90,
            "minPitch":-30,
            "maxPitch":30,
            "pitch": 0.7435286539872826, 
            "yaw": 173.51028586837054, 
            //"hotSpotDebug":true,
            "autoLoad":true,
            "hotSpots": [
                {
                "pitch": 4.538749535513733, 
                "yaw": 170.50101380207101, 
                "text":"The main gate of the Hall of Abundant Splendor",
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'SANY0015.JPG'}
                },
                {
                    "pitch":-17.732034608119175,
                    "yaw":171.66685192530863,
                    "type": "scene",
                    "text": "F2. The Hall of Abundant Splendor, Guangyu Tang",
                    "sceneID":"F2",
                    "clickHandlerFunc": toF2,
                }
                
            ]
        },

        "F2":{
            "title":"F2. The Hall of Abundant Splendor, Guangyu Tang",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/panorama-pictures/F.2%20panorama.jpeg",
            //angle range of horizontal view
            "haov": 360,
            //angle range of vertical view
            "vaov": 75.9,
            //vertical angle of the whole panorama
            "vOffset": 0,
            //default zoom-in control
            "hfov": 90,
            "minPitch":-30,
            "maxPitch":30,
            "pitch": 1.101096772917016, 
            "yaw": -161.4374636029392, 
            //"hotSpotDebug":true,
            "autoLoad":true,
            "hotSpots": [
                {
                "pitch": -1.0675129204364804, 
                "yaw": -161.4374636029392, 
                "text":"Ancestral tablet chest",
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'SANY0017.JPG'}
                },
                {
                "pitch": 7.89166328429929, 
                "yaw": -161.4374636029392, 
                "text":"plaque",
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'SANY0018.JPG'}
                },
                {
                    "pitch":-13.9166668354319,
                    "yaw":18.7867720050737,
                    "type": "scene",
                    "text": "F1. The Hall of Abundant Splendor, Guangyu Tang",
                    "sceneID":"F1",
                    "clickHandlerFunc": toF1,
                }
            ]
        },
       
},
}
);

//set the vertical bounds for the moving range of the view
//var bounds = [-30,30];
//v.setPitchBounds(bounds);

//to set horizontal bounds for the moving range of the view, use v.setYawBounds()

//generate the hotspots
function hotspot(hotSpotDiv, args) {
hotSpotDiv.classList.add('custom-tooltip');
var span = document.createElement('span');
span.innerHTML = args;
hotSpotDiv.appendChild(span);

span.style.width = span.scrollWidth - 20 + 'px';
span.style.marginLeft = -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + 'px';
span.style.marginTop = -span.scrollHeight - 12 + 'px';
}

//turn on/off the overlay effect
function on(image) {
    var expandImg = document.getElementById("expandedImg");
    expandImg.src = image.src;
    document.getElementById("overlay").style.display = "block";
    
  }

function off() {
    document.getElementById("overlay").style.display = "none";
}

//expand img when hotspots onclick, using clickHandlerFunc and clickHandlerArgs
function expandImg(hotspot,txt){
    //console.log(txt.text);
    //document.title = "index.html";
    var img = document.getElementById(txt.text);
    on(img);
};

function toA(){
    var i;
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="A. Half Moon Reservoir, Banyue Tang";
    var myCircles = document.getElementsByClassName('st0');
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('zhiyan-A');
    myCircle.style.fill = "#F26E22";
    v.loadScene("A");
    pageScene="A";
    const agallery = <ReactGallery/>;
    ReactDOM.render(agallery, document.getElementById('react-gallery'));
}

function toB1(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="B1. The Hall of Continuing Virtue, Yande Tang exterior";
    var myCircles = document.getElementsByClassName('st0');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('zhiyan-B');
    myCircle.style.fill = "#F26E22";
    v.loadScene("B1");
    pageScene="B1";
    console.log(pageScene);
    const bgallery = <ReactGallery/>;
    ReactDOM.render(bgallery, document.getElementById('react-gallery'));
}

function toB2(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="B2. The Hall of Continuing Virtue, Yande Tang";
    var myCircles = document.getElementsByClassName('st0');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('zhiyan-B');
    myCircle.style.fill = "#F26E22";
    v.loadScene("B2");
    pageScene="B2";
    console.log(pageScene);
    const bgallery = <ReactGallery/>;
    ReactDOM.render(bgallery, document.getElementById('react-gallery'));
}

function toC1(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="C1. The Hall of Succeeding Glory, Chengxian Tang -- front room";
    var myCircles = document.getElementsByClassName('st0');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('zhiyan-C');
    myCircle.style.fill = "#F26E22";
    v.loadScene("C1");
    pageScene="C1";
    console.log(pageScene);
    const cgallery = <ReactGallery/>;
    ReactDOM.render(cgallery, document.getElementById('react-gallery'));
}

function toC2(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="C2. The Hall of Succeeding Glory, Chengxian Tang -- back room";
    var myCircles = document.getElementsByClassName('st0');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('zhiyan-C');
    myCircle.style.fill = "#F26E22";
    v.loadScene("C2");
    pageScene="C2";
    console.log(pageScene);
    const cgallery = <ReactGallery/>;
    ReactDOM.render(cgallery, document.getElementById('react-gallery'));
}

function toD1(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="D1. Entrance to the Hall of Promoting Goodness, Jimei Tang exterior";
    var myCircles = document.getElementsByClassName('st0');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('zhiyan-D');
    myCircle.style.fill = "#F26E22";
    v.loadScene("D1");
    pageScene="D1";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}

function toD2(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="D2. Entrance to the Hall of Promoting Goodness, Jimei Tang";
    var myCircles = document.getElementsByClassName('st0');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('zhiyan-D');
    myCircle.style.fill = "#F26E22";
    v.loadScene("D2");
    pageScene="D2";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}

function toE1(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="E1. The Hall of Filial Devotion, Xiaosi Tang -- exterior";
    var myCircles = document.getElementsByClassName('st0');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('zhiyan-E');
    myCircle.style.fill = "#F26E22";
    v.loadScene("E1");
    pageScene="E1";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}

function toE2(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="E2. The Hall of Filial Devotion, Xiaosi Tang -- front hall";
    var myCircles = document.getElementsByClassName('st0');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('zhiyan-E');
    myCircle.style.fill = "#F26E22";
    v.loadScene("E2");
    pageScene="E2";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}

function toE3(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="E3. The Hall of Filial Devotion, Xiaosi Tang -- back hall";
    var myCircles = document.getElementsByClassName('st0');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('zhiyan-E');
    myCircle.style.fill = "#F26E22";
    v.loadScene("E3");
    pageScene="E3";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}


function toF1(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="F1. The Hall of Abundant Splendor, Guangyu Tang";
    var myCircles = document.getElementsByClassName('st0');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('zhiyan-F');
    myCircle.style.fill = "#F26E22";
    v.loadScene("F1");
    pageScene="F1";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}

function toF2(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="F2. The Hall of Abundant Splendor, Guangyu Tang";
    var myCircles = document.getElementsByClassName('st0');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('zhiyan-F');
    myCircle.style.fill = "#F26E22";
    v.loadScene("F2");
    pageScene="F2";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}