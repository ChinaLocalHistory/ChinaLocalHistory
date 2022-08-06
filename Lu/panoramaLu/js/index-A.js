var pageScene="A"; 
const gallery = <ReactGallery/>;
//const domContainer = document.querySelector('#react-gallery');
ReactDOM.render(gallery, document.getElementById('react-gallery'));


//a great pannellum tutorial but in Chinese: https://www.jianshu.com/p/fdbcb551d75b 

//generating the panorama
var v=pannellum.viewer('panorama', {
    "default":{
        "firstScene":"A",
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
            "pitch":0.4904953731431615,
            "yaw":15.997229775743802,
            //"hotSpotDebug":true,
            "autoLoad":true,
            "minPitch":-30,
            "maxPitch":30,
            "hotSpots": [
                {
                    "pitch":-12.417558788796144,
                    "yaw":15.905029275636261,
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
            "pitch":0.7367084095079226,
            "yaw":-131.23515028336402,
            //"hotSpotDebug":true,
            "autoLoad":true,
            "hotSpots": [
                {
                "pitch": 13.359301617215312, 
                "yaw": 50.62999675536314, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"001054.jpg"}
                },
                {
                "pitch": 0.6307329175577401, 
                "yaw": -70.90268163960926, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"001165.jpg"}
                },
                {
                "pitch": 11.431972302640437, 
                "yaw": -131.52638403647478, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"001167.jpg"}
                },
                {
                    "pitch":-17.47266940389584,
                    "yaw":-33.6887397770412,
                    "type": "scene",
                    "text": "A",
                    "sceneID":"A",
                    "clickHandlerFunc": toA,
                },
                {
                    "pitch":-8.874303997687202,
                    "yaw":-131.52638403647478,
                    "type": "scene",
                    "text": "C",
                    "sceneID":"C",
                    "clickHandlerFunc": toC,
                },
                {
                    "pitch":-12.777485663865786,
                    "yaw":128.09917075018146,
                    "type": "scene",
                    "text": "S",
                    "sceneID":"S1",
                    "clickHandlerFunc": toS1,
                }
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
            "pitch":0.5120175632608269,
            "yaw":-163.59917182472407,
            //"hotSpotDebug":true,
            "autoLoad":true,
            "hotSpots": [
                {
                "pitch": 9.482868303810328, 
                "yaw": 22.08946870280376, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"001058.jpg"}
                },
               {
                "pitch": 6.327951992669704, 
                "yaw": -163.82820852711077, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"001060.jpg"}
                },
                {
                    "pitch":-8.057593190905811,
                    "yaw":22.08946870280376,
                    "type": "scene",
                    "text": "B",
                    "sceneID":"B",
                    "clickHandlerFunc": toB,
                },
                {
                    "pitch":-10.42040894342801,
                    "yaw":107.79979575766147,
                    "type": "scene",
                    "text": "D",
                    "sceneID":"D",
                    "clickHandlerFunc": toD,
                },
                {
                    "pitch":-12.636493870792743,
                    "yaw":-163.82820852711077,
                    "type": "scene",
                    "text": "R",
                    "sceneID":"R",
                    "clickHandlerFunc": toR,
                }
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
            "pitch":0.5621391291817096,
            "yaw":17.04453247068289,
            //"hotSpotDebug":true,
            "autoLoad":true,
            "hotSpots": [
            //need to add hotspots of switching screen to screen
              {
                "pitch": 5.269386708804303, 
                "yaw": 17.04453247068289, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000791.jpg"}
                },
                {
                "pitch": 8.480598366736029, 
                "yaw": 10.790114905989242, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000792.jpg"}
                },
                {
                "pitch": 8.480598366736029, 
                "yaw": 23.478437791937722, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000793.jpg"}
                },
                {
                "pitch": 10.304420068096523, 
                "yaw": 17.04453247068289, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000794.jpg"}
                },
                {
                "pitch": 10.304420068096523, 
                "yaw": 17.08227696547317, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000795.jpg"}
                },
                {
                "pitch": 10.871717984356499, 
                "yaw": 35.852839595687726, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000796.jpg"}
                },
                {
                "pitch": 4.012711013965403, 
                "yaw": 20.35909772682654, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000816.jpg"}
                },
                {
                "pitch": 4.868747227123547, 
                "yaw": -166.8199521917405, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"001064.jpg"}
                },
                {
                "pitch": 9.636503470194091, 
                "yaw": 35.05611312472962, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"001065.jpg"}
                },
                /*
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"001169.jpg"}
                },*/
                {
                    "pitch":-12.910103277751883,
                    "yaw":108.77052309074134,
                    "type": "scene",
                    "text": "C",
                    "sceneID":"C",
                    "clickHandlerFunc": toC,
                },
                {
                    "pitch":-10.617932052098812,
                    "yaw":17.04453247068289,
                    "type": "scene",
                    "text": "E",
                    "sceneID":"E",
                    "clickHandlerFunc": toE,
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
            "pitch":0.9853730214692153,
            "yaw":50.753719502438685,
            //"hotSpotDebug":true,
            "autoLoad":true,
            "hotSpots": [
                {
                "pitch": 27.6306820419044, 
                "yaw": 51.86206517191198, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000798.jpg"}
                },
                {
                "pitch": -1.8531076108673188, 
                "yaw": 58.177108667622406, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000804.jpg"}
                },
                {
                "pitch": 18.96582654698778, 
                "yaw": 51.703571936653304, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000807.jpg"}
                },
                {
                "pitch": 5.822331405723715, 
                "yaw": 60.049224286644346, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000814.jpg"}
                },
                {
                "pitch": 5.952594824511853, 
                "yaw": 42.28633530029009, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000815.jpg"}
                },
                {
                "pitch": 2.427327975858825, 
                "yaw": 51.0192996046993, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"002734.jpg"}
                },
                {
                "pitch": 3.711500429711232, 
                "yaw": -129.14487085743755, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"002747.jpg"}
                },
                {
                    "pitch":-4.2473889771394155,
                    "yaw":-129.42317058068716,
                    "type": "scene",
                    "text": "D",
                    "sceneID":"D",
                    "clickHandlerFunc": toD,
                },
                {
                    "pitch":-3.67343584846192,
                    "yaw":51.14298585724383,
                    "type": "scene",
                    "text": "F",
                    "sceneID":"F",
                    "clickHandlerFunc": toF,
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
            "pitch": 0.6596940771133831, 
            "yaw": -131.24703480601545, 
            //"hotSpotDebug":true,
            "autoLoad":true,
            "hotSpots": [
                {
                "pitch": 6.626459786619339, 
                "yaw": -158.72007134359907, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000942.jpg"}
                },
                {
                "pitch": 14.135706465641478, 
                "yaw": -157.69585137809645, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000943.jpg"}
                },
                {
                "pitch": 13.439089546290173, 
                "yaw": -148.1880399673987, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000944.jpg"}
                },
                {
                "pitch": 13.807607377510724, 
                "yaw": -127.33413338136788, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000946.jpg"}
                },
                {
                "pitch": 6.58391144160702, 
                "yaw": -104.17326334140667, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000955.jpg"}
                },
                {
                "pitch": 13.454475657867755, 
                "yaw": -114.26114979879966, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000956.jpg"}
                },
                {
                "pitch": 1.2437686673910013, 
                "yaw": -131.34515174397487, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000957.jpg"}
                },
                {
                "pitch": 15.848404846971054, 
                "yaw": -131.34531523723032, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000958.jpg"}
                },
                {
                "pitch": 15.170005273183397, 
                "yaw": -148.09971557483647, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000959.jpg"}
                },
                {
                "pitch": 16.00569003699832, 
                "yaw": -140.10591174408356, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000963.jpg"}
                },
                {
                "pitch": 3.631555000134403, 
                "yaw": -131.27726028291522, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000964.jpg"}
                },
                {
                "pitch": 12.493457229723456, 
                "yaw": -117.70598265585679, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000966.jpg"}
                },
                {
                "pitch": 15.082096633773054, 
                "yaw": -121.2957597602358, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000967.jpg"}
                },
                {
                "pitch": 3.0792641372799654, 
                "yaw": 14.415575497494444, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000971.jpg"}
                },
                {
                "pitch": 3.1793123515577486, 
                "yaw": 22.5583985303915, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000972.jpg"}
                },
                {
                "pitch": 5.109587183576932, 
                "yaw": -83.6418363110937, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000973.jpg"}
                },
                {
                "pitch": 3.3886564331352376, 
                "yaw": -83.6418363110937, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000974.jpg"}
                },
                {
                    "pitch":-5.807045982156433,
                    "yaw":-131.70031518143287,
                    "type": "scene",
                    "text": "G",
                    "sceneID":"G",
                    "clickHandlerFunc": toG,
                },
                {
                    "pitch":-5.804108842537962,
                    "yaw":47.40647336784965,
                    "type": "scene",
                    "text": "E",
                    "sceneID":"E",
                    "clickHandlerFunc": toE,
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
            "pitch":1.0612381448641894,
            "yaw":-77.74418092945761,
            //"hotSpotDebug":true,
            "autoLoad":true,
            "hotSpots": [
                {
                    "pitch":-14.540696068291458,
                    "yaw":-77.85146282215605,
                    "type": "scene",
                    "text": "H",
                    "sceneID":"H",
                    "clickHandlerFunc": toH,
                },
                {
                    "pitch":-7.762501597047894,
                    "yaw":100.56246548180013,
                    "type": "scene",
                    "text": "F",
                    "sceneID":"F",
                    "clickHandlerFunc": toF,
                },
            ]
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
            "pitch":0.8258102539750828,
            "yaw":-157.7065205016064,
            //"hotSpotDebug":true,
            "autoLoad":true,
            "hotSpots": [
                {
                    "pitch":-13.195882553600956,
                    "yaw":21.600436664733195,
                    "type": "scene",
                    "text": "G",
                    "sceneID":"G",
                    "clickHandlerFunc": toG,
                },
                {
                    "pitch":-16.10776971796576,
                    "yaw":-165.74235374587067,
                    "type": "scene",
                    "text": "I",
                    "sceneID":"I",
                    "clickHandlerFunc": toI,
                },
            ]
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
            "pitch":0.9840484731633079,
            "yaw":-34.579228140361884,
            //"hotSpotDebug":true,
            "autoLoad":true,
            "hotSpots": [
               {
                "pitch": 4.259058227316046, 
                "yaw": -16.580025147919773, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000817.jpg"}
                },
                {
                "pitch": 4.301824039334201, 
                "yaw": -14.014789705472086, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000818.jpg"}
                },
                {
                "pitch": -2.0346896853846377, 
                "yaw": -56.93404602135085, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000819.jpg"}
                },
                {
                "pitch": 17.357418478449873, 
                "yaw": -35.88374331659992, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000820.jpg"}
                },
                {
                    "pitch":-18.96150139984159,
                    "yaw":147.21715178570543,
                    "type": "scene",
                    "text": "H",
                    "sceneID":"H",
                    "clickHandlerFunc": toH,
                },
                {
                    "pitch":-12.970621370580734,
                    "yaw":-36.08823376281001,
                    "type": "scene",
                    "text": "J1",
                    "sceneID":"J1",
                    "clickHandlerFunc": toJ1,
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
            "pitch":1.0585191644975236,
            "yaw":46.71737304725285,
            //"hotSpotDebug":true,
            "autoLoad":true,
            "hotSpots": [
                {
                "pitch": 3.6890118704367385, 
                "yaw": 57.4060991202215, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000823.jpg"}
                },
                {
                "pitch": 3.6890118704367385, 
                "yaw": 36.976224677096525, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000824.jpg"}
                },
                {
                "pitch": 10.212671721664782, 
                "yaw": 157.41514332617083, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000826.jpg"}
                },
                {
                "pitch": 23.886999310744827, 
                "yaw": 124.60043591358081, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000829.jpg"}
                },
                {
                "pitch": 29.348464617794658, 
                "yaw": 92.10994895490573, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000831.jpg"}
                },
                {
                "pitch": 12.467478022945874, 
                "yaw": 42.869016338037376, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000833.jpg"}
                },
                {
                "pitch": 10.758954517808291, 
                "yaw": 81.89756081792328, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000834.jpg"}
                },
                {
                "pitch": -5.0943886310546285, 
                "yaw": 39.63293586784191, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000835.jpg"}
                },
                {
                "pitch": -5.93265744908688, 
                "yaw": 29.646324516560277, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000836.jpg"}
                },
                {
                "pitch": 20.833391957504592, 
                "yaw": 67.59933303253933, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000837.jpg"}
                },
                {
                    "pitch":-9.568483108437857,
                    "yaw":-135.59976471724372,
                    "type": "scene",
                    "text": "I",
                    "sceneID":"I",
                    "clickHandlerFunc": toI,
                },
                {
                    "pitch":-3.3665769212621357,
                    "yaw":47.31588228796594,
                    "type": "scene",
                    "text": "J2",
                    "sceneID":"J2",
                    "clickHandlerFunc": toJ2,
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
            "pitch":0.6690189464290073,
            "yaw":27.157935149088843,
            //"hotSpotDebug":true,
            "autoLoad":true,
            "hotSpots": [
                {
                "pitch": -1.1289329975401834, 
                "yaw": 178.05439162419387, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000981.jpg"}
                },
                {
                "pitch": -0.9356267589189691, 
                "yaw": -119.47640701222883, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000982.jpg"}
                },
                {
                "pitch": 4.771371848669187, 
                "yaw": 166.90866453133668, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000983.jpg"}
                },
                {
                "pitch": 4.97474786124033, 
                "yaw": -111.34507908329661, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"000984.jpg"}
                },
                {
                    "pitch":-8.82968761828907,
                    "yaw":-151.7711301349208,
                    "type": "scene",
                    "text": "J1",
                    "sceneID":"J1",
                    "clickHandlerFunc": toJ1,
                },
                {
                    "pitch":-12.83462001409595,
                    "yaw":25.4445491992455,
                    "type": "scene",
                    "text": "J3",
                    "sceneID":"J3",
                    "clickHandlerFunc": toJ3,
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
            "pitch":0.822595278782591,
            "yaw":73.95784726097425,
            //"hotSpotDebug":true,
            "autoLoad":true,
            "hotSpots": [
               {
                "pitch": 13.203240353097982, 
                "yaw": 7.085742557857387, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"An%20overview%20of%20the%20eastern%20wall.jpg"}
                },
                {
                "pitch": 13.72742388689442, 
                "yaw": -52.13657853794983, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"he%20bracket%20of%20the%20hall.jpg"}
                },
                {
                "pitch": 13.5180265309380916, 
                "yaw": -0.08130640592764848, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Introduction%20to%20the%20Middle%20Hall.jpg"}
                },
                {
                "pitch": 8.273753764390081, 
                "yaw": 33.374591215707454, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20overview%20of%20the%20courtyard%20from%20the%20northwestern%20corner%20.jpg"}
                },
                {
                "pitch": 0.9051409947157152, 
                "yaw": 72.82032314696824, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20western%20room.jpg"}
                },
                {
                    "pitch":-9.310445385970228,
                    "yaw":-102.68267335971717,
                    "type": "scene",
                    "text": "J2",
                    "sceneID":"J2",
                    "clickHandlerFunc": toJ2,
                },
                {
                    "pitch":-8.84660342753118,
                    "yaw":72.82040298082302,
                    "type": "scene",
                    "text": "J4",
                    "sceneID":"J4",
                    "clickHandlerFunc": toJ4,
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
            "pitch":0.273260475007742,
            "yaw":37.32439587483043,
            //"hotSpotDebug":true,
            "autoLoad":true,
            "hotSpots": [
               {
                "pitch": -0.19858876265054193, 
                "yaw": 39.19651149385237, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Ancestral%20portrait%20and%20offerings.jpg"}
                },
                {
                "pitch": 4.465553972264669, 
                "yaw": 28.33140285406199, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Chinese%20introduction%20to%20the%20offerings.jpg"}
                },
                {
                "pitch": 2.2847818550966954, 
                "yaw": 86.08903903241139, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Hallway%20of%20the%20eastern%20wing.jpg"}
                },
                {
                "pitch": 5.042250530604931, 
                "yaw": 55.28864875302577, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Introduction%20to%20the%20back%20hall.jpg"}
                },
                {
                "pitch": -6.440034410678434, 
                "yaw": -91.10807352176586, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Stone%20carving%20of%20the%20wall.jpg"}
                },
                {
                "pitch": 6.560156585099659, 
                "yaw": 39.452540192435265, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20ancestral%20portrait.%20One%20pair%20of%20the%20couplets%20say.jpg"}
                },
                {
                "pitch": 15.014064603450276, 
                "yaw": -10.508005294385852, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20bracket%20on%20the%20left%20side%20of%20the%20hall.jpg"}
                },
                {
                "pitch": 8.708274902897289, 
                "yaw": 6.923437730821647, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20lattice%20of%20the%20window.jpg"}
                },
                {
                "pitch": 6.4875312909832585, 
                "yaw": -28.030038316558397, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20lattice%20of%20the%20window2.jpg"}
                },
                {
                "pitch": -8.149954084746712, 
                "yaw": 13.981162339377054, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20stone%20base%20of%20the%20pillar.jpg"}
                },
                {
                "pitch": -22.444189632097814, 
                "yaw": -98.98832965501072, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20stone%20pavement%20of%20the%20courtyard.jpg"}
                },
                {
                    "pitch":-12.61134139140638,
                    "yaw":-137.33697439643967,
                    "type": "scene",
                    "text": "J3",
                    "sceneID":"J3",
                    "clickHandlerFunc": toJ3,
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
            "pitch":0.5108023990781186,
            "yaw":45.4359229094328,
            //"hotSpotDebug":true,
            "autoLoad":true,
            "hotSpots": [
               {
                "pitch": -13.083340676888476, 
                "yaw": 100.9152953991447, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20stone%20pavement.jpg"}
                },
                {
                "pitch": 22.11345184721646, 
                "yaw": 62.37849651737148, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20tiles%20of%20the%20roof.jpg"}
                },
                {
                "pitch": 12.568629487997004, 
                "yaw": 5.577297053081632, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20tiles%20of%20the%20roof2.jpg"}
                },
                {
                "pitch": -12.092502931778242, 
                "yaw": 56.59305986803169, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20stone%20carving%20on%20the%20bottom%20of%20the%20gate%20frame.jpg"}
                },
                {
                "pitch": 10.287015989718764, 
                "yaw": 44.91236855215257, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20overview%20of%20the%20gateway.jpg"}
                },
                {
                "pitch": 0.6780657741714811, 
                "yaw": -26.424954414746793, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20side%20door.%20The%20plaque%20on%20the%20top%20`Extraordinary%20fraternity`.jpg"}
                },
                {
                "pitch": 3.065138320008446, 
                "yaw": 68.39704577549541, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Chinese%20introduction%20to%20the%20gate.jpg"}
                },
                {
                "pitch": 3.714289026446765, 
                "yaw": 19.713838775913427, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"English%20introduction%20to%20the%20gate.jpg"}
                },
                {
                "pitch": 0.6772122186737598, 
                "yaw": -1.948749696383664, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20left-hand%20side%20door.jpg"}
                },
                {
                    "pitch":-6.907472661295142,
                    "yaw":141.48607214152068,
                    "type": "scene",
                    "text": "Q",
                    "sceneID":"Q1",
                    "clickHandlerFunc": toQ1,
                },
                {
                    "pitch":-6.907472661295142,
                    "yaw":148.35455366386248,
                    "type": "scene",
                    "text": "R",
                    "sceneID":"R",
                    "clickHandlerFunc": toR,
                },
                {
                    "pitch":-11.507425374927386,
                    "yaw":45.14470959044074,
                    "type": "scene",
                    "text": "L",
                    "sceneID":"L",
                    "clickHandlerFunc": toL,
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
            "pitch":0.6688714621521539,
            "yaw":35.91472174638638,
            //"hotSpotDebug":true,
            "autoLoad":true,
            "hotSpots": [
               {
                "pitch": -3.4334041831775997, 
                "yaw": 36.07213212305451, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"A%20sculpture%20of%20qilin.jpg"}
                },
                {
                "pitch": 4.250826303740705, 
                "yaw": -7.577359637905456, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"A%20wooden%20wall%20displayed%20on%20the%20left-hand%20side%20of%20the%20hall.jpg"}
                },
                {
                "pitch": 3.4315841241555614, 
                "yaw": 7.8645181608115085, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"A%20wooden%20wall%20displayed%20on%20the%20north-western%20side%20of%20the%20hall.jpg"}
                },
                {
                "pitch": 4.369210233213129, 
                "yaw": 0.307523887621592, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"A%20wooden%20wall%20displayed%20on%20the%20north-western%20side%20of%20the%20hall3.jpg"}
                },
                {
                "pitch": 4.188025352162585, 
                "yaw": 2.448287020782665, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"A%20wooden%20wall%20displayed%20on%20the%20north-western%20side%20of%20the%20hall4.jpg"}
                },
                {
                "pitch": 12.21139112070434, 
                "yaw": -143.63287989034458, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"An%20overview%20of%20the%20gate.jpg"}
                },
                {
                "pitch": 12.21139112070434, 
                "yaw": -137.94505902566104, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"An%20overview%20of%20the%20gate1.jpg"}
                },
                {
                "pitch": 11.92971815666508, 
                "yaw": 174.89540907481626, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20bracket%20of%20the%20hall.jpg"}
                },
                {
                "pitch": 3.294418830341336, 
                "yaw": 67.12583560726438, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20carvings%20of%20nine%20lions%20on%20the%20beams1.jpg"}
                },
                {
                "pitch": 8.797009768557208, 
                "yaw": 71.75631224875774, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20carvings%20of%20nine%20lions%20on%20the%20beams2.jpg"}
                },
                {
                "pitch": 9.469508251984621, 
                "yaw": 83.5449755308363, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20details%20of%20the%20carving.jpg"}
                },
                {
                "pitch": 29.5011184682104, 
                "yaw": 76.04140608480324, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20lion%20carvings%20on%20the%20ceiling.jpeg"}
                },
                {
                "pitch": 9.147420062418856, 
                "yaw": 35.272634381887485, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20overview%20of%20the%20hall.jpg"}
                },
                {
                "pitch": 17.677013128988733, 
                "yaw": 35.74782077697026, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20plaque%20`Surfeit%20of%20Kindness%20Hall`.jpg"}
                },
                {
                "pitch": -26.91253256310633, 
                "yaw": -48.38434515131038, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20stone%20pavement.jpg"}
                },
                {
                "pitch": 4.074699484478811, 
                "yaw": 59.382590393638964, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20wooden%20wall%20displayed%20in%20the%20hall.jpg"}
                },
                {
                "pitch": -1.0686380621641292, 
                "yaw": -34.005653188806264, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Wooden%20doors%20on%20the%20left-hand%20side%20of%20the%20courtyard.jpg"}
                },
                {
                "pitch": 6.865313880537719, 
                "yaw": -31.781102958315046, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Wooden%20doors%20on%20the%20left-hand%20side%20of%20the%20courtyard1.jpg"}
                },
                {
                "pitch": 2.719839111434604, 
                "yaw": -46.294691829193425, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Wooden%20walls%20on%20the%20left-hand%20side%20of%20the%20courtyard1.jpg"}
                },
                {
                "pitch": 2.8467682571881774, 
                "yaw": -41.462376892756765, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Wooden%20walls%20on%20the%20left-hand%20side%20of%20the%20courtyard2.jpg"}
                },
                {
                "pitch": 2.9448324361979585, 
                "yaw": -36.31919404668787, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Wooden%20walls%20on%20the%20left-hand%20side%20of%20the%20courtyard3.jpg"}
                },
                {
                "pitch": 2.872558084226857, 
                "yaw": -31.689755838902556, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Wooden%20walls%20on%20the%20left-hand%20side%20of%20the%20courtyard4.jpg"}
                },
                {
                    "pitch":-9.491819574538932,
                    "yaw":-144.06526673612277,
                    "type": "scene",
                    "text": "K",
                    "sceneID":"K",
                    "clickHandlerFunc": toK,
                },
                {
                    "pitch":-15.842571126526307,
                    "yaw":36.7924955756,
                    "type": "scene",
                    "text": "M",
                    "sceneID":"M",
                    "clickHandlerFunc": toM,
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
            "pitch":1.1345569614394122,
            "yaw":59.80781748152677,
            //"hotSpotDebug":true,
            "autoLoad":true,
            "hotSpots": [
               {
                "pitch": 16.74552251614185, 
                "yaw": 60.411573521380916, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"A%20painting%20behind%20the%20plague%20of%20`Cordial%20Meetings%20Hall`.jpg"}
                },
                {
                "pitch": 8.784134820066894, 
                "yaw": 135.11791410876592, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Chinese%20introduction%20to%20the%20hall.jpg"}
                },
                {
                "pitch": 4.287772690147166, 
                "yaw": 135.11791410876592, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"English%20introduction%20to%20the%20hall.jpg"}
                },
                {
                "pitch": 31.732697838844047, 
                "yaw": 81.55534603907385, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20ceiling%20structure.jpg"}
                },
                {
                "pitch": 8.994214931585912, 
                "yaw": 59.93003837828433, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20overview%20of%20the%20hall.jpg"}
                },
                {
                "pitch": 5.555220723887662, 
                "yaw": -118.51414634720514, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20overview%20of%20the%20lattice%20in%20the%20middle%20of%20the%20hall.jpg"}
                },
                {
                "pitch": 20.341277080204595, 
                "yaw": 60.189813167213096, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20plaque%20`Cordial%20Meetings`.jpg"}
                },
                {
                "pitch": 16.073684090445106, 
                "yaw": 37.44808657499645, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20plaque%20`First%20Ranking%20Provincial%20Graduate`.jpg"}
                },
                {
                "pitch": 16.253572681737804, 
                "yaw": 83.57440096179373, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20plaque%20`Metropolitan%20graduate`.jpg"}
                },
                {
                "pitch": 35.732894550699044, 
                "yaw": 61.01762503782978, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20plaque%20`Provincial%20Commissioner.jpg"}
                },
                {
                "pitch": 4.933103580447151, 
                "yaw": -79.4841318972823, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20right-hand%20part%20of%20the%20lattice.jpg"}
                },
                {
                "pitch": 31.99373528933182, 
                "yaw": 143.67869801140262, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"the%20roof%20of%20the%20northeastern%20corner.jpg"}
                },
                {
                "pitch": 2.5494474475216387, 
                "yaw": 59.87769309307698, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Wooden%20carving%20displayed%20in%20the%20hall.jpg"}
                },
                {
                "pitch": -1.1648002280560674, 
                "yaw": 59.92910592202749, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Wooden%20carving%20displayed%20in%20the%20hall1.jpg"}
                },
                {
                "pitch": 5.9842708750191, 
                "yaw": 53.43315914752071, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Wooden%20carving%20displayed%20in%20the%20hall2.jpg"}
                },
                {
                "pitch": 2.717860363195066, 
                "yaw": 55.78006887653201, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Wooden%20carving%20displayed%20in%20the%20hall3.jpg"}
                },
                {
                "pitch": 2.5980131749930857, 
                "yaw": 64.35978153845042, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Wooden%20carving%20displayed%20in%20the%20hall4.jpg"}
                },
                {
                "pitch": 5.679264096830023, 
                "yaw": 64.50708847388645, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Wooden%20carving%20displayed%20in%20the%20hall5.jpg"}
                },
                {
                    "pitch":-13.259924107291917,
                    "yaw":59.98782494616855,
                    "type": "scene",
                    "text": "N1",
                    "sceneID":"N1",
                    "clickHandlerFunc": toN1,
                },
                {
                    "pitch":-17.18012137992056,
                    "yaw":-118.69969748397338,
                    "type": "scene",
                    "text": "L",
                    "sceneID":"L",
                    "clickHandlerFunc": toL,
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
            "pitch":0.6690189464290052,
            "yaw":18.972112645116173,
            //"hotSpotDebug":true,
            "autoLoad":true,
            "hotSpots": [
               {
                "pitch": 2.080946728278741, 
                "yaw": 35.850925270479706, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Brackets%20displayed%20in%20the%20hall.jpg"}
                },
                {
                "pitch": 3.7438466416609133, 
                "yaw": 27.039265076364245, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Brackets%20displayed%20in%20the%20hall1.jpg"}
                },
                {
                "pitch": 2.3555092157216664, 
                "yaw": 32.12173131495547, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Brackets%20displayed%20in%20the%20hall2.jpg"}
                },
                {
                "pitch": 26.719510916292776, 
                "yaw": 141.39373655188112, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20corner%20roof%20line%20in%20right%20corner%20of%20the%20courtyard.jpg"}
                },
                {
                "pitch": 21.469229105372328, 
                "yaw": 156.63568647425137, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20entry%20door%20to%20the%20courtyard.jpg"}
                },
                {
                "pitch": 9.629714170195129, 
                "yaw": 60.452358888301085, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20lattice%20of%20the%20window.jpg"}
                },
                {
                "pitch": 2.563388968242249, 
                "yaw": 76.46223831752961, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20right%20side%20door%20to%20the%20walkway.jpg"}
                },
                {
                    "pitch":-13.346510261504443,
                    "yaw":-156.5442900336769,
                    "type": "scene",
                    "text": "M",
                    "sceneID":"M",
                    "clickHandlerFunc": toM,
                },
                {
                    "pitch":-7.6827005541824995,
                    "yaw":19.177068233331262,
                    "type": "scene",
                    "text": "N2",
                    "sceneID":"N2",
                    "clickHandlerFunc": toN2,
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
                "pitch": 6.417086715289606, 
                "yaw": -37.38217979058402, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Chinese%20introduction%20to%20the%20hall.jpg"}
                },
                {
                "pitch": 6.448121286737106, 
                "yaw": -30.783536126590718, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"English%20introduction%20to%20the%20hall.jpg"}
                },
                {
                "pitch": 10.847999605087882, 
                "yaw": 45.56199280791695, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20ancestral%20tablets.jpg"}
                },
                {
                "pitch": -15.105706253701925, 
                "yaw": 47.87201393524796, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20carved%20stone%20foundation,%20which%20probably%20is%20the%20original%20work%20from%20the%20Ming%20Dynasty.jpg"}
                },
                {
                "pitch": 30.723689833796755, 
                "yaw": -45.66100545089307, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20interior%20roof%20line%20on%20the%20left%20side%20of%20main%20hall.jpg"}
                },
                {
                "pitch": 3.757196326665177, 
                "yaw": -49.23725795372612, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20side%20garden%20of%20Virtue%20through%20the%20Generations%20Main%20hall.jpg"}
                },
                {
                "pitch": 27.365175844181234, 
                "yaw": 2.2350119058076316, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20support%20beams%20on%20the%20left-hand%20side%20with%20paintings1.jpg"}
                },
                {
                "pitch": 27.365175844181234, 
                "yaw": 84.82018626043086, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20support%20beams%20on%20the%20right-hand%20side.jpg"}
                },
                {
                    "pitch":-7.6827005541824995,
                    "yaw":45.42622458634819,
                    "type": "scene",
                    "text": "O",
                    "sceneID":"O",
                    "clickHandlerFunc": toO,
                },
                {
                    "pitch":-13.346510261504443,
                    "yaw":-139.90911903978218,
                    "type": "scene",
                    "text": "N1",
                    "sceneID":"N1",
                    "clickHandlerFunc": toN1,
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
            "pitch":0.9830194720611651,
            "yaw":29.10795019840797,
            //"hotSpotDebug":true,
            "autoLoad":true,
            "hotSpots": [
               {
                "pitch": 22.617401011804013, 
                "yaw": -11.157084381550558, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Beam%20decoration.jpg"}
                },
                {
                "pitch": 7.427370792597228, 
                "yaw": 36.466959078192524, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Chinese%20introduction%20to%20the%20hall.jpg"}
                },
                {
                "pitch": 4.455748281957504, 
                "yaw": 36.466959078192524, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"English%20introduction%20to%20the%20hall.jpg"}
                },
                {
                "pitch": 3.8189636513334526, 
                "yaw": 27.295325229748197, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20introducion%20to%20the%20exhibiton%20of%20the%20portraits%20of%20famous%20historical%20figures%20in%20this%20hall.jpg"}
                },
                {
                "pitch": 5.21816680234192, 
                "yaw": 8.253380740968339, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20introducion%20to%20the%20exhibiton%20of%20the%20portraits%20of%20famous%20historical%20figures%20in%20this%20hall1.jpg"}
                },
                {
                "pitch": 4.7771902605248435, 
                "yaw": 12.181507617264028, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20introducion%20to%20the%20exhibiton%20of%20the%20portraits%20of%20famous%20historical%20figures%20in%20this%20hall2.jpg"}
                },
                {
                "pitch": 16.708097046519317, 
                "yaw": 45.294667063188484, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20lantern%20displayed%20in%20the%20hall.jpg"}
                },
                {
                "pitch": 12.012878569402545, 
                "yaw": 27.295325229748197, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20overview%20of%20the%20hall.jpg"}
                },
                {
                "pitch": 20.02238369875916, 
                "yaw": 27.295325229748197, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20plaque%20`Good%20Blessings`.jpg"}
                },
                {
                "pitch": 2.3697899152916015, 
                "yaw": 173.4172234604133, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Wall%20painting.jpg"}
                },
                {
                    "pitch":-9.693259706187737,
                    "yaw":28.0903781161563,
                    "type": "scene",
                    "text": "P",
                    "sceneID":"P",
                    "clickHandlerFunc": toP,
                },
                {
                    "pitch":-19.604955352069123,
                    "yaw":-150.5756526661916,
                    "type": "scene",
                    "text": "N2",
                    "sceneID":"N2",
                    "clickHandlerFunc": toN2,
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
            "pitch":0.6641282021641762,
            "yaw":-133.4433187930552,
            //"hotSpotDebug":true,
            "autoLoad":true,
            "hotSpots": [
               {
                "pitch": -14.008902245896856, 
                "yaw": 160.38127952815236, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"A%20millstone%20in%20the%20courtyard.jpg"}
                },
                {
                "pitch": 6.0469798443009966, 
                "yaw": -87.3727053776139, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Chinese%20introduction%20to%20the%20hall.jpg"}
                },
                {
                "pitch": 6.208988829444044, 
                "yaw": -83.8585944730508, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"English%20introduction%20to%20the%20hall.jpg"}
                },
                {
                "pitch": 19.289182704909145, 
                "yaw": -99.15606722399637, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20beam%20structure.jpg"}
                },
                {
                "pitch": 16.2460393121641, 
                "yaw": 64.37342859170262, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20bracket%20with%20a%20lion%20head.jpg"}
                },
                {
                "pitch": 7.828062508043356, 
                "yaw": -133.57351288632304, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20overview%20of%20the%20hall.jpg"}
                },
                {
                "pitch": 18.884585784789383, 
                "yaw": -133.41522313997885, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20plaque%20`Pleasant%20Gatherings`.jpg"}
                },
                {
                "pitch": 2.6422281715650446, 
                "yaw": 133.87154732629747, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20side%20room.jpg"}
                },
                {
                "pitch": 8.286442028148421, 
                "yaw": 2.893720140286405, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20southeastern%20corner%20of%20the%20courtyard.jpg"}
                },
                {
                    "pitch":-10.07770962910099,
                    "yaw":46.3182855102892,
                    "type": "scene",
                    "text": "O",
                    "sceneID":"O",
                    "clickHandlerFunc": toO,
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
            "pitch":0.9973347417391368,
            "yaw":44.48191636702894,
            //"hotSpotDebug":true,
            "autoLoad":true,
            "hotSpots": [
               {
                "pitch": 5.174212249279485, 
                "yaw": 94.16447246386467, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Chinese%20introduction%20to%20the%20hall.jpg"}
                },
                {
                "pitch": 4.880898555251142, 
                "yaw": -5.759177156346496, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"English%20introduction%20to%20the%20hall.jpg"}
                },
                {
                "pitch": 3.9577509213962916, 
                "yaw": -43.795758182741565, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Introduction%20to%20the%20stone%20steles%20and%20inscriptions%20displayed%20in%20the%20hall.jpg"}
                },
                {
                "pitch": -12.075798441367324, 
                "yaw": -66.38137953360678, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Stone%20steles6.jpg"}
                },
                {
                "pitch": 26.31914745908587, 
                "yaw": 31.21617307448139, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20beam%20structure%20of%20the%20front%20hall.jpg"}
                },
                {
                "pitch": 15.666473353544436, 
                "yaw": 93.36132768688833, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20bracket%20on%20the%20right-hand%20side.jpg"}
                },
                {
                "pitch": 3.050347565862536, 
                "yaw": 88.07313975226396, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20right-hand%20side%20doorway%20of%20the%20hall.%20The%20top%20plaque%20`Rising%20phoenix`.jpg"}
                },
                {
                    "pitch":-11.51331667922531,
                    "yaw":-135.01416369404743,
                    "type": "scene",
                    "text": "C",
                    "sceneID":"C",
                    "clickHandlerFunc": toC,
                },
                {
                    "pitch":-14.736450806378338,
                    "yaw":44.46919934249966,
                    "type": "scene",
                    "text": "Q2",
                    "sceneID":"Q2",
                    "clickHandlerFunc": toQ2,
                },
                {
                    "pitch":-18.723813889429184,
                    "yaw":-126.00719200077788,
                    "type": "scene",
                    "text": "K",
                    "sceneID":"K",
                    "clickHandlerFunc": toK,
                },
                {
                    "pitch":-18.723813889429184,
                    "yaw":-141.13280662933414,
                    "type": "scene",
                    "text": "R",
                    "sceneID":"R",
                    "clickHandlerFunc": toR,
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
            "pitch":1.0634607918580437,
            "yaw":44.213521317466736,
            //"hotSpotDebug":true,
            "autoLoad":true,
            "hotSpots": [
               {
                "pitch": 6.897972805098761, 
                "yaw": 92.67233692616483, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Chinese%20introduction%20to%20the%20hall.jpg"}
                },
                {
                "pitch": 3.594337313950159, 
                "yaw": 92.67233692616483, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"English%20introduction%20to%20the%20hall.jpg"}
                },
                {
                "pitch": 24.265225028607375, 
                "yaw": 57.00308534623661, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20beam%20structure%20of%20the%20hall.jpg"}
                },
                {
                "pitch": 20.374715697012086, 
                "yaw": 74.86378398856426, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20beam%20structure%20of%20the%20hall1.jpg"}
                },
                {
                "pitch": 10.119500264587652, 
                "yaw": 43.91948088072995, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20overview%20of%20the%20main%20hall.jpg"}
                },
                {
                "pitch": -4.966018484227306, 
                "yaw": 21.54617342746845, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20overview%20of%20the%20main%20hall1.jpg"}
                },
                {
                "pitch": 1.2207473145525387, 
                "yaw": 43.91948088072995, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20overview%20of%20the%20main%20hall2.jpg"}
                },
                {
                "pitch": 5.629436451024249, 
                "yaw": -46.35175500192948, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20western%20side%20of%20the%20hall.jpg"}
                },
                {
                    "pitch":-11.912716930639112,
                    "yaw":-136.80146878910602,
                    "type": "scene",
                    "text": "Q1",
                    "sceneID":"Q1",
                    "clickHandlerFunc": toQ1,
                },
                {
                    "pitch":-14.736450806378338,
                    "yaw":44.46919934249966,
                    "type": "scene",
                    "text": "Q3",
                    "sceneID":"Q3",
                    "clickHandlerFunc": toQ3,
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
            "pitch":1.2147883937356725,
            "yaw":28.60779012637335,
            //"hotSpotDebug":true,
            "autoLoad":true,
            "hotSpots": [
               {
                "pitch": 11.676915964469782, 
                "yaw": 54.60160302064766, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"A%20bracket%20with%20a%20god%20riding%20a%20lion%20as%20an%20opera%20show.jpg"}
                },
                {
                "pitch": 1.8285220933499178, 
                "yaw": 74.24851054652055, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"A%20side%20doorway%20on%20the%20eastern%20side%20of%20the%20hall.jpg"}
                },
                {
                "pitch": 2.411312330868778, 
                "yaw": -16.934236412685205, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"A%20side%20doorway%20on%20the%20western%20side%20of%20the%20hall..jpg"}
                },
                {
                "pitch": 5.276241447908139, 
                "yaw": 79.99194697431871, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Chinese%20introduction%20to%20the%20hall.jpg"}
                },
                {
                "pitch": 4.04064927683734, 
                "yaw": 11.210541824876213, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20overview%20of%20the%20hall.jpg"}
                },
                {
                "pitch": 7.172261108129289, 
                "yaw": 28.682582819282047, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20overview%20of%20the%20hall1.jpg"}
                },
                {
                "pitch": -0.8295769648052378, 
                "yaw": 28.682582819282047, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20overview%20of%20the%20hall2.jpg"}
                },
                {
                "pitch": 3.4223180503013206, 
                "yaw": 28.682582819282047, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20overview%20of%20the%20hall3.jpg"}
                },
                {
                "pitch": 7.165982549591137, 
                "yaw": 85.19835254149716, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Tiles%20on%20the%20wall%20of%20the%20courtyard.jpg"}
                },
                {
                    "pitch":-13.246846013182545,
                    "yaw":-151.2122416228073,
                    "type": "scene",
                    "text": "Q2",
                    "sceneID":"Q2",
                    "clickHandlerFunc": toQ2,
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
            "pitch":0.3509870737906092,
            "yaw":19.0029340193327,
            //"hotSpotDebug":true,
            "autoLoad":true,
            "hotSpots": [
               {
                "pitch": 6.050019154599668, 
                "yaw": 81.36609370367026, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Chinese%20translation%20to%20the%20hall.jpg"}
                },
                {
                "pitch": 1.8960433170441353, 
                "yaw": 81.22599655320965, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"English%20introduction%20to%20the%20hall.jpg"}
                },
                {
                "pitch": -3.498189435614558, 
                "yaw": -8.50296553784574, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Inside%20overview%20of%20the%20hall.jpg"}
                },
                {
                "pitch": -2.9367075455622778, 
                "yaw": 19.081537145423702, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Inside%20overview%20of%20the%20hall1.jpg"}
                },
                {
                "pitch": 24.411350725058536, 
                "yaw": 17.490978462482353, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20beam%20structure%20and%20the%20carving%20of%20the%20beam.jpg"}
                },
                {
                "pitch": 20.850322267221596, 
                "yaw": 17.490978462482353, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20beam%20structure%20and%20the%20carving%20of%20the%20beam1.jpg"}
                },
                {
                "pitch": 15.547321459692865, 
                "yaw": 81.69945654130018, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20bracket%20on%20the%20eastern%20side.jpg"}
                },
                {
                "pitch": 29.948085881029968, 
                "yaw": 88.45949839113567, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"The%20tiles%20of%20the%20roof%20line.jpg"}
                },
                {
                    "pitch":-18.18826481180207,
                    "yaw":99.16379807244768,
                    "type": "scene",
                    "text": "C",
                    "sceneID":"C",
                    "clickHandlerFunc": toC,
                },
                {
                    "pitch":-12.581085967397362,
                    "yaw":-53.00035531181442,
                    "type": "scene",
                    "text": "K",
                    "sceneID":"K",
                    "clickHandlerFunc": toK,
                },
                {
                    "pitch":-11.228377162238207,
                    "yaw":-35.375608626257936,
                    "type": "scene",
                    "text": "Q1",
                    "sceneID":"Q1",
                    "clickHandlerFunc": toQ1,
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
            "pitch":0.5118730038604766,
            "yaw":28.08868434836162,
            //"hotSpotDebug":true,
            "autoLoad":true,
            "minPitch":-30,
            "maxPitch":30,
            "hotSpots": [
                {
                    "pitch":-24.10775267844222,
                    "yaw":27.01955223519285,
                    "type": "scene",
                    "text": "S2",
                    "sceneID":"S2",
                    "clickHandlerFunc": toS2,
                },
                {
                    "pitch":-15.001668062579693,
                    "yaw":-155.54577033330867,
                    "type": "scene",
                    "text": "B",
                    "sceneID":"B",
                    "clickHandlerFunc": toB,
                },
            ]
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
                    "pitch":-19.17046381925235,
                    "yaw":-154.18561603261205,
                    "type": "scene",
                    "text": "S1",
                    "sceneID":"S1",
                    "clickHandlerFunc": toS1,
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
    var myCircle = document.getElementById('Lu-J');
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
    var myCircle = document.getElementById('Lu-J');
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
    var myCircle = document.getElementById('Lu-J');
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
    var myCircle = document.getElementById('Lu-J');
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