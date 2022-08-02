var pageScene="H"; 
const gallery = <ReactGallery/>;
//const domContainer = document.querySelector('#react-gallery');
ReactDOM.render(gallery, document.getElementById('react-gallery'));


//a great pannellum tutorial but in Chinese: https://www.jianshu.com/p/fdbcb551d75b 

//generating the panorama
var v=pannellum.viewer('panorama', {
    "default":{
        "firstScene":"H",
        "sceneFadeDuration": 1000
    },

    "scenes":{
        "A":{
            "title":"A. Street to the Compound",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/chengyang02/ChinaLocalHistory/main/Lu/panoramaLu/panorama-pictures/A%20panorama.jpg",
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
                    "pitch":1,
                    "yaw":1,
                    "type": "scene",
                    "text": "B",
                    "sceneID":"B",
                    "clickHandlerFunc": toB,
                }
            ]
        },

        "B":{
            "title":"B. Formal Entrance",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/panorama-pictures/B%20panorama.jpg",
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
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"001054.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"001058.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"001071.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"001165.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"001167.jpg"}
                },
            ]
        },

        "C":{
            "title":"C. His Lordship`s Mansion, Daifu Di 大夫第",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/panorama-pictures/C%20panorama.jpg",
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
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"001060.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"001062.jpg"}
                },
            ]
        },

        "D":{
            "title":"D. Head Gate/Victory Report Gate, Jiebao Men 捷報門",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/panorama-pictures/D%20panorama.jpg",
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
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000791.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000792.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000793.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000794.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000795.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000796.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000816.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"001064.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"001065.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"001169.jpg"}
                },
            ]
        },

        "E":{
            "title":"E. Ceremonial Gate/Glory of the Nation Gate, Guoguang Men 國光門",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/panorama-pictures/E%20panorama.jpg",
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
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000798.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000804.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000807.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000814.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000815.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"001170.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"002734.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"002747.jpg"}
                },
            ]
        },
        

        "F":{
            "title":"F. Seriousness and Consonance Hall, Suyong Hall, Suyong Tang 肅雍堂",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/panorama-pictures/F%20panorama.jpg",
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
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000935.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000942.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000943.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000944.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000946.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000949.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000950.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000951.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000952.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000953.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000955.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000956.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000957.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000958.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000959.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000961.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000963.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000964.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000966.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000967.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000971.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000972.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000973.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000974.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"001172.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"002745.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"002749.jpg"}
                },
                
            ]
        },

        "G":{
            "title":"G. The Hallway 穿堂",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/panorama-pictures/G%20panorama.jpg",
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
            //"hotSpots": [
            //]
        },

        "H":{
            "title":"H. Long Life Hall, Tongshou Tang 同壽堂",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/panorama-pictures/H%20panorama.jpg",
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
            "hotSpotDebug":true,
            "autoLoad":true,
            //"hotSpots": [
            //]
        },

        "I":{
            "title":"I. Stone Gate/Enjoy Longevity Hall/Leshou Hall, Leshou Tang 樂壽堂",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/panorama-pictures/I%20panorama.jpg",
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
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000817.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000818.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000819.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000820.jpg"}
                },
            ]
        },

        "J1":{
            "title":"J.1 Harmony Through Generations Gate",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/panorama-pictures/J.1%20panorama.jpg",
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
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000821.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000822.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000823.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000824.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000825.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000826.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000827.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000829.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000831.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000832.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000833.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000834.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000835.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000836.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000837.jpg"}
                },
            ]
        },

        "J2":{
            "title":"J.2 Harmony Through the Generations Hall",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/panorama-pictures/J.2%20panorama.jpg",
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
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000978.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000981.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000982.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000983.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000984.jpg"}
                },
            ]
        },

        "J3":{
            "title":"J.3 Harmony Through the Generations Middle Hall",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/panorama-pictures/J.3%20panorama.jpg",
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
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"An%20overview%20of%20the%20eastern%20wall.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"he%20bracket%20of%20the%20hall.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Introduction%20to%20the%20Middle%20Hall.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20overview%20of%20the%20courtyard%20from%20the%20northwestern%20corner%20.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20western%20room.jpg"}
                },
            ]
        },

        "J4":{
            "title":"J.4 Harmony Through the Generations Back Hall",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/panorama-pictures/J.4%20panorama.jpg",
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
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Ancestral%20portrait%20and%20offerings.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Chinese%20introduction%20to%20the%20offerings.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Hallway%20of%20the%20eastern%20wing.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Introduction%20to%20the%20back%20hall.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Stone%20carving%20of%20the%20wall.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20ancestral%20portrait.%20One%20pair%20of%20the%20couplets%20say.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20bracket%20on%20the%20left%20side%20of%20the%20hall.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20lattice%20of%20the%20window.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20lattice%20of%20the%20window2.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20stone%20base%20of%20the%20pillar.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20stone%20pavement%20of%20the%20courtyard.jpg"}
                },
            ]
        },

        "K":{
            "title":"K. Virtue Through the Generations Gateway, Shide Menfang 世德門坊",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/panorama-pictures/K%20panorama.jpg",
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
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20stone%20pavement.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20tiles%20of%20the%20roof.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20tiles%20of%20the%20roof2.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20stone%20carving%20on%20the%20bottom%20of%20the%20gate%20frame.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20overview%20of%20the%20gateway.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20side%20door.%20The%20plaque%20on%20the%20top%20`Extraordinary%20fraternity`.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Chinese%20introduction%20to%20the%20gate.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"English%20introduction%20to%20the%20gate.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20left-hand%20side%20door.jpg"}
                },
            ]
        },


        "L":{
            "title":"L. Surfeit of Kindness Hall, Dunyu Tang 惇裕堂",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/panorama-pictures/L%20panorama.jpg",
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
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"A%20sculpture%20of%20qilin.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"A%20wooden%20wall%20displayed%20on%20the%20left-hand%20side%20of%20the%20hall.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"A%20wooden%20wall%20displayed%20on%20the%20north-western%20side%20of%20the%20hall.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"A%20wooden%20wall%20displayed%20on%20the%20north-western%20side%20of%20the%20hall3.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"A%20wooden%20wall%20displayed%20on%20the%20north-western%20side%20of%20the%20hall4.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"An%20overview%20of%20the%20gate.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"An%20overview%20of%20the%20gate1.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20bracket%20of%20the%20hall.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20carvings%20of%20nine%20lions%20on%20the%20beams1.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20carvings%20of%20nine%20lions%20on%20the%20beams2.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20details%20of%20the%20carving.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20lion%20carvings%20on%20the%20ceiling.jpeg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20overview%20of%20the%20hall.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20plaque%20`Surfeit%20of%20Kindness%20Hall`.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20stone%20pavement.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20wooden%20wall%20displayed%20in%20the%20hall.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20wooden%20wall%20displayed%20in%20the%20hall4.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20wooden%20wall%20displayed%20in%20the%20hall5.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Wooden%20doors%20on%20the%20left-hand%20side%20of%20the%20courtyard.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Wooden%20doors%20on%20the%20left-hand%20side%20of%20the%20courtyard1.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Wooden%20walls%20on%20the%20left-hand%20side%20of%20the%20courtyard1.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Wooden%20walls%20on%20the%20left-hand%20side%20of%20the%20courtyard2.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Wooden%20walls%20on%20the%20left-hand%20side%20of%20the%20courtyard3.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Wooden%20walls%20on%20the%20left-hand%20side%20of%20the%20courtyard4.jpg"}
                },
            ]
        },

        "M":{
            "title":"M. Cordial Meetings Hall, Jiahui Tang 嘉會堂",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/panorama-pictures/M%20panorama.jpg",
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
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"A%20painting%20behind%20the%20plague%20of%20`Cordial%20Meetings%20Hall`.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Chinese%20introduction%20to%20the%20hall.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"English%20introduction%20to%20the%20hall.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20ceiling%20structure.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20overview%20of%20the%20hall.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20overview%20of%20the%20lattice%20in%20the%20middle%20of%20the%20hall.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20plaque%20`Cordial%20Meetings`.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20plaque%20`First%20Ranking%20Provincial%20Graduate`.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20plaque%20`Metropolitan%20graduate`.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20plaque%20`Provincial%20Commissioner.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20plaque%20`Provincial%20Commissioner1.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20right-hand%20part%20of%20the%20lattice.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"the%20roof%20of%20the%20northeastern%20corner.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Wooden%20carving%20displayed%20in%20the%20hall.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Wooden%20carving%20displayed%20in%20the%20hall1.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Wooden%20carving%20displayed%20in%20the%20hall2.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Wooden%20carving%20displayed%20in%20the%20hall3.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Wooden%20carving%20displayed%20in%20the%20hall4.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Wooden%20carving%20displayed%20in%20the%20hall15.jpg"}
                },
            ]
        },

        "N1":{
            "title":"N.1 Virtue Through the Generations Back Hall",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/panorama-pictures/N.1%20panorama.jpg",
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
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Brackets%20displayed%20in%20the%20hall.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Brackets%20displayed%20in%20the%20hall1.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Brackets%20displayed%20in%20the%20hall2.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20corner%20roof%20line%20in%20right%20corner%20of%20the%20courtyard.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20entry%20door%20to%20the%20courtyard.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20lattice%20of%20the%20window.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20overview%20of%20the%20hall.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20right%20side%20door%20to%20the%20walkway.jpg"}
                },
            ]
        },

        "N2":{
            "title":"N.2 Virtue Through the Generations Main Hall",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/panorama-pictures/N.2%20panorama.jpg",
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
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Chinese%20introduction%20to%20the%20hall.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"English%20introduction%20to%20the%20hall.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20ancestral%20tablets.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20carved%20stone%20foundation,%20which%20probably%20is%20the%20original%20work%20from%20the%20Ming%20Dynasty.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20interior%20roof%20line%20on%20the%20left%20side%20of%20main%20hall.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20side%20garden%20of%20Virtue%20through%20the%20Generations%20Main%20hall.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20support%20beams%20on%20the%20left-hand%20side%20with%20paintings1.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20support%20beams%20on%20the%20right-hand%20side.jpg"}
                },
            ]
        },

        "O":{
            "title":"O. Good Blessings Hall, Shanqing Tang 善慶堂",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/panorama-pictures/O%20panorama.jpg",
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
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Beam%20decoration.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Chinese%20introduction%20to%20the%20hall.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"English%20introduction%20to%20the%20hall.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20introducion%20to%20the%20exhibiton%20of%20the%20portraits%20of%20famous%20historical%20figures%20in%20this%20hall.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20introducion%20to%20the%20exhibiton%20of%20the%20portraits%20of%20famous%20historical%20figures%20in%20this%20hall1.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20introducion%20to%20the%20exhibiton%20of%20the%20portraits%20of%20famous%20historical%20figures%20in%20this%20hall2.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20lantern%20displayed%20in%20the%20hall.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20overview%20of%20the%20hall.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20plaque%20`Good%20Blessings`.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Wall%20painting.jpg"}
                },
            ]
        },

        "P":{
            "title":"P. Pleasant Gatherings Hall, Dunxu Tang 惇敘堂",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/panorama-pictures/P%20panorama.jpg",
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
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"A%20millstone%20in%20the%20courtyard.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Chinese%20introduction%20to%20the%20hall.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"English%20introduction%20to%20the%20hall.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20beam%20structure.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20bracket%20with%20a%20lion%20head.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20overview%20of%20the%20hall.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20plaque%20`Pleasant%20Gatherings`.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20side%20room.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20southeastern%20corner%20of%20the%20courtyard.jpg"}
                },
            ]
        },

        "Q1":{
            "title":"Q.1 Planting Virue Front Hall",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/panorama-pictures/Q.1%20panorama.jpg",
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
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Chinese%20introduction%20to%20the%20hall.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"English%20introduction%20to%20the%20hall.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Front%20gate%20of%20Planting%20Virue%20Front%20Hall.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Front%20gate%20of%20Planting%20Virue%20Front%20Hall1.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Introduction%20to%20the%20stone%20steles%20and%20inscriptions%20displayed%20in%20the%20hall.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Stone%20steles.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Stone%20steles1.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Stone%20steles2.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Stone%20steles3.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Stone%20steles4.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Stone%20steles5.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Stone%20steles6.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Stone%20steles7.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20beam%20structure%20of%20the%20front%20hall.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20bracket%20on%20the%20right-hand%20side.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20right-hand%20side%20doorway%20of%20the%20hall.%20The%20top%20plaque%20`Rising%20phoenix`.jpg"}
                },
            ]
        },

        "Q2":{
            "title":"Q.2 Planting Virue Hall",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/panorama-pictures/Q.2%20panorama.jpg",
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
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Chinese%20introduction%20to%20the%20hall.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"English%20introduction%20to%20the%20hall.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20beam%20structure%20of%20the%20hall.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20beam%20structure%20of%20the%20hall1.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20overview%20of%20the%20main%20hall.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20overview%20of%20the%20main%20hall1.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20overview%20of%20the%20main%20hall2.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20western%20side%20of%20the%20hall.jpg"}
                },
            ]
        },

        "Q3":{
            "title":"Q.3 Planting Virue Back Hall",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/panorama-pictures/Q.3%20panorama.jpg",
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
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"A%20bracket%20with%20a%20god%20riding%20a%20lion%20as%20an%20opera%20show.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"A%20side%20doorway%20on%20the%20eastern%20side%20of%20the%20hall.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"A%20side%20doorway%20on%20the%20western%20side%20of%20the%20hall..jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Chinese%20introduction%20to%20the%20hall.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20overview%20of%20the%20hall.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20overview%20of%20the%20hall1.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20overview%20of%20the%20hall2.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20overview%20of%20the%20hall3.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Tiles%20on%20the%20wall%20of%20the%20courtyard.jpg"}
                },
            ]
        },

        "R":{
            "title":"R. East Chanting Hall, Dongyin Tang 東吟堂",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/panorama-pictures/R%20panorama.jpg",
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
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Chinese%20translation%20to%20the%20hall.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"English%20introduction%20to%20the%20hall.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Inside%20overview%20of%20the%20hall.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Inside%20overview%20of%20the%20hall1.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20beam%20structure%20and%20the%20carving%20of%20the%20beam.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20beam%20structure%20and%20the%20carving%20of%20the%20beam1.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20bracket%20on%20the%20eastern%20side.jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20tiles%20of%20the%20roof%20line.jpg"}
                },
            ]
        },

        "S1":{
            "title":"S.1 Lotus Pavilion Academy",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/chengyang02/ChinaLocalHistory/main/Lu/panoramaLu/panorama-pictures/S.1%20panorama.jpg",
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
            //"hotSpots": [
            //]
        },

        "S2":{
            "title":"S.2 Lotus Pavilion Academy",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/chengyang02/ChinaLocalHistory/main/Lu/panoramaLu/panorama-pictures/S.2%20panorama.jpg",
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
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"A%20carving%20of%20dragons%20displayed%20in%20the%20room..jpg"}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20plaque.United%20by%20marriage%20forever.jpg"}
                },
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
    currentSceneTxt.innerText="A. Street to the Compound";
    var myCircles = document.getElementsByClassName('st0');
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('Lu-A');
    myCircle.style.fill = "#F26E22";
    v.loadScene("A");
    pageScene="A";
    const agallery = <ReactGallery/>;
    ReactDOM.render(agallery, document.getElementById('react-gallery'));
}

function toB(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="B. Formal Entrance";
    var myCircles = document.getElementsByClassName('st0');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('Lu-B');
    myCircle.style.fill = "#F26E22";
    v.loadScene("B");
    pageScene="B";
    console.log(pageScene);
    const bgallery = <ReactGallery/>;
    ReactDOM.render(bgallery, document.getElementById('react-gallery'));
}

function toC(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="C. His Lordship`s Mansion, Daifu Di 大夫第";
    var myCircles = document.getElementsByClassName('st0');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('Lu-C');
    myCircle.style.fill = "#F26E22";
    v.loadScene("C");
    pageScene="C";
    console.log(pageScene);
    const cgallery = <ReactGallery/>;
    ReactDOM.render(cgallery, document.getElementById('react-gallery'));
}

function toD(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="D. Head Gate/Victory Report Gate, Jiebao Men 捷報門";
    var myCircles = document.getElementsByClassName('st0');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('Lu-D');
    myCircle.style.fill = "#F26E22";
    v.loadScene("D");
    pageScene="D";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}

function toE(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="E. Ceremonial Gate/Glory of the Nation Gate, Guoguang Men 國光門";
    var myCircles = document.getElementsByClassName('st0');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('Lu-E');
    myCircle.style.fill = "#F26E22";
    v.loadScene("E");
    pageScene="E";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}

function toF(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="F. Seriousness and Consonance Hall, Suyong Hall, Suyong Tang 肅雍堂";
    var myCircles = document.getElementsByClassName('st0');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('Lu-F');
    myCircle.style.fill = "#F26E22";
    v.loadScene("F");
    pageScene="F";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}

function toG(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="G. The Hallway 穿堂";
    var myCircles = document.getElementsByClassName('st0');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('Lu-G');
    myCircle.style.fill = "#F26E22";
    v.loadScene("G");
    pageScene="G";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}

function toH(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="H. Long Life Hall, Tongshou Tang 同壽堂";
    var myCircles = document.getElementsByClassName('st0');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('Lu-H');
    myCircle.style.fill = "#F26E22";
    v.loadScene("H");
    pageScene="H";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}

function toI(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="I. Stone Gate/Enjoy Longevity Hall/Leshou Hall, Leshou Tang 樂壽堂";
    var myCircles = document.getElementsByClassName('st0');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('Lu-I');
    myCircle.style.fill = "#F26E22";
    v.loadScene("I");
    pageScene="I";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}

function toJ1(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="J.1 Harmony Through Generations Gate";
    var myCircles = document.getElementsByClassName('st0');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('Lu-J1');
    myCircle.style.fill = "#F26E22";
    v.loadScene("J1");
    pageScene="J1";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}

function toJ2(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="J.2 Harmony Through the Generations Hall";
    var myCircles = document.getElementsByClassName('st0');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('Lu-J2');
    myCircle.style.fill = "#F26E22";
    v.loadScene("J2");
    pageScene="J2";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}

function toJ3(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="J.3 Harmony Through the Generations Middle Hall";
    var myCircles = document.getElementsByClassName('st0');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('Lu-J3');
    myCircle.style.fill = "#F26E22";
    v.loadScene("J3");
    pageScene="J3";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}

function toJ4(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="J.4 Harmony Through the Generations Back Hall";
    var myCircles = document.getElementsByClassName('st0');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('Lu-J4');
    myCircle.style.fill = "#F26E22";
    v.loadScene("J4");
    pageScene="J4";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}

function toK(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="K. Virtue Through the Generations Gateway, Shide Menfang 世德門坊";
    var myCircles = document.getElementsByClassName('st0');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('Lu-K');
    myCircle.style.fill = "#F26E22";
    v.loadScene("K");
    pageScene="K";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}

function toL(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="L. Surfeit of Kindness Hall, Dunyu Tang 惇裕堂";
    var myCircles = document.getElementsByClassName('st0');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('Lu-L');
    myCircle.style.fill = "#F26E22";
    v.loadScene("L");
    pageScene="L";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}

function toM(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="M. Cordial Meetings Hall, Jiahui Tang 嘉會堂";
    var myCircles = document.getElementsByClassName('st0');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('Lu-M');
    myCircle.style.fill = "#F26E22";
    v.loadScene("M");
    pageScene="M";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}

function toN1(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="N.1 Virtue Through the Generations Back Hall";
    var myCircles = document.getElementsByClassName('st0');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('Lu-N');
    myCircle.style.fill = "#F26E22";
    v.loadScene("N1");
    pageScene="N1";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}

function toN2(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="N.2 Virtue Through the Generations Main Hall";
    var myCircles = document.getElementsByClassName('st0');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('Lu-N');
    myCircle.style.fill = "#F26E22";
    v.loadScene("N2");
    pageScene="N2";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}

function toO(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="O. Good Blessings Hall, Shanqing Tang 善慶堂";
    var myCircles = document.getElementsByClassName('st0');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('Lu-O');
    myCircle.style.fill = "#F26E22";
    v.loadScene("O");
    pageScene="O";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}

function toP(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="P. Pleasant Gatherings Hall, Dunxu Tang 惇敘堂";
    var myCircles = document.getElementsByClassName('st0');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('Lu-P');
    myCircle.style.fill = "#F26E22";
    v.loadScene("P");
    pageScene="P";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}

function toQ1(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="Q.1 Planting Virue Front Hall";
    var myCircles = document.getElementsByClassName('st0');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('Lu-Q');
    myCircle.style.fill = "#F26E22";
    v.loadScene("Q1");
    pageScene="Q1";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}

function toQ2(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="Q.2 Planting Virue Hall";
    var myCircles = document.getElementsByClassName('st0');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('Lu-Q');
    myCircle.style.fill = "#F26E22";
    v.loadScene("Q2");
    pageScene="Q2";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}

function toQ3(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="Q.3 Planting Virue Back Hall";
    var myCircles = document.getElementsByClassName('st0');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('Lu-Q');
    myCircle.style.fill = "#F26E22";
    v.loadScene("Q3");
    pageScene="Q3";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}

function toR(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="R. East Chanting Hall, Dongyin Tang 東吟堂";
    var myCircles = document.getElementsByClassName('st0');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('Lu-R');
    myCircle.style.fill = "#F26E22";
    v.loadScene("R");
    pageScene="R";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}

function toS1(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="S.1 Lotus Pavilion Academy";
    var myCircles = document.getElementsByClassName('st0');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('Lu-S');
    myCircle.style.fill = "#F26E22";
    v.loadScene("S1");
    pageScene="S1";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}

function toS2(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="S.2 Lotus Pavilion Academy";
    var myCircles = document.getElementsByClassName('st0');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('Lu-S');
    myCircle.style.fill = "#F26E22";
    v.loadScene("S2");
    pageScene="S2";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}