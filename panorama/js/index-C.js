var pageScene="courtyardNearStage"; 
const gallery = <ReactGallery/>;
//const domContainer = document.querySelector('#react-gallery');
ReactDOM.render(gallery, document.getElementById('react-gallery'));


//a great pannellum tutorial but in Chinese: https://www.jianshu.com/p/fdbcb551d75b 

//generating the panorama
var v=pannellum.viewer('panorama', {
    "default":{
        "firstScene":"courtyard-near-stage",
        "author": "JENNY CHANGE THIS",
        "sceneFadeDuration": 1000
    },

    "scenes":{
        "front-gate":{
            "title":"Front Gate",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/panorama-pictures/FrontGate.jpg",
            //angle range of horizontal view
            "haov": 360,
            //angle range of vertical view
            "vaov": 75.9,
            //vertical angle of the whole panorama
            "vOffset": 0,
            //default zoom-in control
            "hfov": 90,
            //"hotSpotDebug":true,
            "autoLoad":true,
            "minPitch":-30,
            "maxPitch":30,
            "hotSpots": [
                {
                    "pitch":22.494174945326723,
                    "yaw":-4.361632086533733,
                    "type": "info",
                    "text": "City God Temple<br>城隍廟",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":"City God Temple<br>城隍廟"},
                    //"cssClass": "custom-hotspot",
                },
                {
                    "pitch": 19.494174945326723,
                    "yaw": 26.90945113444174,
                    "type": "info",
                    "text": "Defender of Our Precious Wu<br>寳婺屏藩",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":"Defender of Our Precious Wu<br>寳婺屏藩"},
                    //"cssClass": "custom-hotspot",
                },
                {
                    "pitch": 19.494174945326723,
                    "yaw": -34.442750848944804,
                    "type": "info",
                    "text": "Protector of Tangxi<br>仙舟保障",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":"Protector of Tangxi<br>仙舟保障"},
                    //"cssClass": "custom-hotspot",
                },
                {
                    "pitch": 5.7657145086227395,
                    "yaw": -11.22551496208543,
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":"Gate guardian god2"},
                    //"cssClass": "custom-hotspot",
                },
                {
                    "pitch": 5.7657145086227395,
                    "yaw": 2.389447852098916,
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":"Gate guardian god1"},
                    //"cssClass": "custom-hotspot",
                },
                {
                    "pitch": -18.285253674622176,
                    "yaw": 177.2863097277794,
                    "type": "scene",
                    "text": "B. Opera Stage",
                    "sceneId": "opera-stage",
                    "clickHandlerFunc" : toOperaStage,
                }
            ]
        },

        "opera-stage":{
            "title":"Opera Stage",
            "author": "JENNY CHANGE THIS",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/panorama-pictures/OperaStage.jpg",
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
            //"hotSpotDebug":true,
            "autoLoad":true,
            "hotSpots": [
                {
                "pitch": 8.249622428606415,
                "yaw":  36.55636945188646,
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":"Balcony.jpg"}
                },
                {
                "pitch": 19.674653911671037, 
                "yaw": 41.653090105395634, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Carved%20bracket%20and%20painted%20column.jpg'}
                },
                {
                "pitch": 15.680262694075871, 
                "yaw": 35.075639568415845, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Carved%20bracket%20and%20painted%20column1.jpg'}
                },
                {
                "pitch": 27.77400627497553, 
                "yaw": -47.000391805545576, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Carved,%20painted%20beams%20and%20balcony%20around%20the%20stage.jpg'}
                },
                {
                "pitch": 35.58785801838995, 
                "yaw": 31.503575979756686, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Ceiling%20and%20carved%20beams1.jpg'}
                },
                {
                "pitch": -4.7338007227490767, 
                "yaw": -130.79219153044818, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Day%20Patrol.jpg'}
                },
                {
                "pitch": -4.323439134449426, 
                "yaw": -117.64825797693533, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Details%20of%20Day%20Patrol.jpg'}
                },
                {
                "pitch": 33.80892369570187, 
                "yaw": -13.439506576574727, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Decorated%20ceiling.jpg'}
                },
                {
                "pitch": 5.917672508033212, 
                "yaw": -56.55578204105773, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Entrance%20to%20the%20stage%20with%20curtain.jpg'}
                },
                {
                "pitch": 5.917672508033212, 
                "yaw": -92.80806459633261, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Entrance_exit%20to%20the%20stage%20with%20curtain.jpg'}
                },
                {
                "pitch": -3.125153680300521, 
                "yaw": -20.294519499776477, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Night%20Patrol.jpg'}
                },
                {
                "pitch": -2.82274273368337, 
                "yaw": -32.112330571243625, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Night%20Patrol1.jpg'}
                },
                {
                "pitch": -11.0907082413663, 
                "yaw": -24.95899178914949, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Night%20Patrol2.jpg'}
                },
                {
                "pitch": 21.22700240825661, 
                "yaw": -76.27342382517517, 
                "type": "info",
                "text": "The temple shines again<br>廟貌重光",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'The%20temple%20shines%20again.jpg'}
                },
            {
                "pitch": -22.056335177232825,
                "yaw": 106.1616076075473,
                "type": "scene",
                "text": "A. Front Gate",
                "sceneId": "front-gate",
                "clickHandlerFunc" : toFrontGate,
            },
            {
                "pitch": -12.733579062821594,
                "yaw": 106.09878828500743,
                "type": "scene",
                "text": "C. Courtyard Near Stage",
                "sceneId": "courtyard-near-stage",
                "clickHandlerFunc" : toCourtyardNearStage,
            }
            ]
        },
        "courtyard-near-stage":{
            "title":"Courtyard Near Stage",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/panorama-pictures/CourtyardNearStage.jpg",
            //angle range of horizontal view
            "haov": 360,
            //angle range of vertical view
            "vaov": 75.9,
            //vertical angle of the whole panorama
            "vOffset": 0,
            //default zoom-in control
            "hfov": 90,
            //"hotSpotDebug":true,
            "autoLoad":true,
            "minPitch":-30,
            "maxPitch":30,
            "hotSpots": [
                {
                    "pitch": 16.678639792930042, 
                    "yaw": 179.63427516163063, 
                    "type": "info",
                    "text": "Bridge of Necessity<br>",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Bridge%20of%20Necessity.jpg'}
                    },
                    {
                    "pitch": 32.76363490515169, 
                    "yaw": 0.12299178670645272, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Bridge%20of%20Necessity1.jpg'}
                    },
                    {
                    "pitch": 1.898677912753009, 
                    "yaw": -3.9700842297310146, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20left%20part.jpg'}
                    },
                    {
                    "pitch": 1.8866181478692823, 
                    "yaw": 0.1179852912494539, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20middle%20part.jpg'}
                    },
                    {
                    "pitch": 1.846492396525223, 
                    "yaw": 4.220761544688607, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20right%20part.jpg'}
                    },
                    {
                    "pitch": 6.587449862765451, 
                    "yaw": 117.93617578677919, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'The%20remainder%20of%20an%20old%20tree,%20displayed%20in%20the%20courtyard..jpg'}
                    },
                    {
                        "pitch": -11.975436433248024,
                        "yaw": -21.95271389657835,
                        "type": "scene",
                        "text": "B. Opera Stage",
                        "sceneId": "opera-stage",
                        "clickHandlerFunc" : toOperaStage,
                    },
                    {
                        "pitch": -11.597696782329445,
                        "yaw": 0.4913498891597825,
                        "type": "scene",
                        "text": "D. Courtyard Near Main Hall",
                        "sceneId": "courtyard-near-main-hall",
                        "clickHandlerFunc" : toCourtyardNearMainHall,
                    }
            ]
        },

        "courtyard-near-main-hall":{
            "title":"Courtyard Near Main Hall",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/panorama-pictures/CourtyardNearMainHall.jpg",
            //angle range of horizontal view
            "haov": 360,
            //angle range of vertical view
            "vaov": 75.9,
            //vertical angle of the whole panorama
            "vOffset": 0,
            //default zoom-in control
            "hfov": 90,
            //"hotSpotDebug":true,
            "autoLoad":true,
            "minPitch":-30,
            "maxPitch":30,
            "hotSpots": [
                    {
                    "pitch": 5.2696320457256, 
                    "yaw": 119.60801686270025, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'000106.jpg'}
                    },
                    {
                    "pitch": 4.126803625963604, 
                    "yaw": 112.45508965387569, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'000107.jpg'}
                    },
                    {
                    "pitch": 14.73751499421178, 
                    "yaw": 154.20263965278593, 
                    "type": "info",
                    "text":"Gate of the Main Hall<br>冥冥有主",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'000154.jpg'}
                    },
                    {
                    "pitch": -3.150231036631464, 
                    "yaw": 122.82474607256833, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'000318.jpg'}
                    },
                    {
                    "pitch": 2.1760373374049338, 
                    "yaw": -157.88269376219904, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'An%20old%20stele%20of%20donation,%20displayed.%20%202.jpg'}
                    },
                    {
                    "pitch": -1.3262906923064817, 
                    "yaw": -165.1575256283831, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'An%20old%20stele%20of%20donors,%20displayed..jpg'}
                    },
                    {
                    "pitch": 18.052243619692685, 
                    "yaw": 175.76697291976876, 
                    "type": "info",
                    "text":"Furnace for burning paper",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Furnace%20for%20burning%20paper.jpg'}
                    },
                    {
                    "pitch": 18.622199473350996, 
                    "yaw": 132.3992121182789, 
                    "type": "info",
                    "text":"Furnace for burning sutra",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Furnace%20for%20burning%20sutra.jpg'}
                    },
                    {
                    "pitch": 7.92156769347885, 
                    "yaw": 154.19746734041252, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Gate%20of%20the%20main%20hall.jpg'}
                    },
                    {
                    "pitch": 18.222292432103924, 
                    "yaw":-135.1296085807799, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Modern%20stele%20with%20the%20names%20of%20donors%20for%20the%20renovation%20of%20the%20City%20God%20Temple..jpg'}
                    },
                  
                    {
                    "pitch": 13.832390909813512, 
                    "yaw": 124.60630434688397, 
                    "type": "info",
                    "text":"Overview of Dragon King Temple<br>龍王廟",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Overview%20of%20Dragon%20King%20Temple.jpg'}
                    },
                    {
                    "pitch": 13.532390909813512, 
                    "yaw": -177.19212538636646, 
                    "type": "info",
                    "text":"Overview of Having Children Sanctuary<br>達生菴",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Overview%20of%20Having%20Children%20Sanctuary.jpg'}
                    },
                    {
                    "pitch": 6.421861087048415, 
                    "yaw": 146.37781411009325, 
                    "type": "info",
                    "text":"Overview of Having Children Sanctuary<br>達生菴",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'The%20city%20is%20secured.jpg'}
                    },
                    {
                    "pitch": 6.421861087048415, 
                    "yaw": 161.56764611245043, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'The%20customs%20are%20honest.jpg'}
                    },
                    {
                    "pitch": -22.842125247240606,
                    "yaw": -25.59529817925453,
                    "type": "scene",
                    "text": "C. Courtyard Near Stage",
                    "sceneId": "courtyard-near-stage",
                    "clickHandlerFunc" : toCourtyardNearStage,
                    },
                    {
                    "pitch": -14.711915990738916,
                    "yaw": 153.85953917878498,
                    "type": "scene",
                    "text": "E. Dragon King Temple",
                    "sceneId": "dragon-king-temple",
                    "clickHandlerFunc" : toDragonKingTemple,
                    },
                ]
        },
    
    "dragon-king-temple":{
        "title":"Dragon King Temple",
        "type": "equirectangular",
        "panorama": "https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/panorama-pictures/DragonKingTemple.jpg",
        //angle range of horizontal view
        "haov": 360,
        //angle range of vertical view
        "vaov": 75.9,
        //vertical angle of the whole panorama
        "vOffset": 0,
        //default zoom-in control
        "hfov": 90,
        //"hotSpotDebug":true,
        "autoLoad":true,
        "minPitch":-30,
        "maxPitch":30,
        "hotSpots": [
            {
                "pitch": -32.99678086875983, 
                "yaw": -125.35347127879098, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Four%20dragon%20kings%20and%20the%20incense%20burner.jpg'}
                },
                {
                "pitch": -17.62964366410583, 
                "yaw": 151.65632014908059, 
                "type": "info",
                "text":"'It has command over water,how great the spirit power'<br>'其功在水神之格私養洋乎'",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'It%20has%20command%20over%20water,%20how%20great%20the%20spirit%20power.jpg'}
                },
                {
                "pitch": -18.04732244657767, 
                "yaw": -37.86358948651765, 
                "type": "info",
                "text":"'Only virtue moves Heaven,how clear the dragons influence'<br>'惟德动天龙之为民昭昭也'",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Only%20virtue%20moves%20Heaven,%20how%20clear%20the%20dragons%20influence.jpg'}
                },
                {
                "pitch": 42.64204268219442, 
                "yaw": -50.715165666558704, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Overview%20of%20the%20paintings%20on%20the%20eastern%20wall.jpg'}
                },
                {
                "pitch": 22.32233017462678, 
                "yaw": -58.0372920064603, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Overview%20of%20the%20paintings%20on%20the%20eastern%20wall1.jpg'}
                },
                {
                "pitch": 22.32233017462678, 
                "yaw": -48.74478904494577, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Overview%20of%20the%20paintings%20on%20the%20eastern%20wall2.jpg'}
                },
                {
                "pitch": 38.02470052534364, 
                "yaw": 166.46635060592024, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Overview%20of%20the%20paintings%20on%20the%20western%20wall.jpg'}
                },
                {
                "pitch": 20.81789891067519, 
                "yaw": 172.05605764207147, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Overview%20of%20the%20paintings%20on%20the%20western%20wall1.jpg'}
                },
                {
                "pitch": 20.81789891067519, 
                "yaw": 163.04851211080717, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Overview%20of%20the%20paintings%20on%20the%20western%20wall2.jpg'}
                },
                {
                "pitch": 38.359735412983056, 
                "yaw": -127.64584743627428, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Painting%20depicting.eight%20Immortals%20crossing%20the%20sea.jpg'}
                },
                {
                "pitch": -6.715767582209447, 
                "yaw": -118.83363844731387, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'The%20Dragon%20King%20of%20the%20Eastern%20Seas.jpg'}
                },
                {
                "pitch":-6.715767582209447, 
                "yaw": -141.1962298500529, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'The%20Dragon%20King%20of%20the%20Northern%20Seas.jpg'}
                },
                {
                "pitch": -6.715767582209447, 
                "yaw": -103.4416678572223, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'The%20Dragon%20King%20of%20the%20Southern%20Seas.jpg'}
                },
                {
                "pitch": -6.715767582209447, 
                "yaw":-131.39677637386515, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'The%20Dragon%20King%20of%20the%20Western%20Seas.jpg'}
                },
                {
                "pitch":-9.058805986160728, 
                "yaw": -157.6947647971333, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'The%20God%20of%20Earth.jpg'}
                },
                {
                "pitch": -9.058805986160728, 
                "yaw": -81.58098805433777, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'The%20God%20of%20Five%20Grains.jpg'}
                },
                {
                "pitch": 12.946734956330546, 
                "yaw": -44.20161487068782, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'The%20God%20of%20Rain.jpg'}
                },
                {
                "pitch": 0.4244958961732275, 
                "yaw": 141.43887771588007, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'The%20God%20of%20Thunder.jpg'}
                },
                {
                "pitch": -9.058805986160728, 
                "yaw": -92.13023203481549, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'The%20God%20of%20Wealth.jpg'}
                },
                {
                "pitch": 2.74867682959895, 
                "yaw": -61.822330670954926, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'The%20God%20of%20Wind.jpg'}
                },
                {
                "pitch": -9.058805986160728, 
                "yaw": -163.82285750673026, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'The%20Goddess%20of%20Earth,%20the%20God%20of%20Longevity.jpg'}
                },
                {
                "pitch":5.166320931128381, 
                "yaw": 176.69266183384238, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'The%20Goddess%20of%20Lightning.jpg'}
                },
                {
                "pitch": 24.084128772159435, 
                "yaw": -152.27256165370113, 
                "type": "info",
                "text":"'The oceans have calmed, the rivers have cleared; the world is at peace'<br>'海宴河清世太平'",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'The%20oceans%20have%20calmed,%20the%20rivers%20have%20cleared;%20the%20world%20is%20at%20peace.jpg'}
                },
                {
                "pitch": 24.084128772159435, 
                "yaw": -97.48367025626507, 
                "type": "info",
                "text":"'The wind has softened, the rain is gentle, the people are happy'<br>'風調雨順民安樂'",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'The%20wind%20has%20softened,%20the%20rain%20is%20gentle,%20the%20people%20are%20happy.jpg'}
                },
                {
                "pitch": -18.327043630549703,
                "yaw":38.515174016337824,
                "type": "scene",
                "text": "D. Courtyard Near Main Hall",
                "sceneId": "courtyard-near-main-hall",
                "clickHandlerFunc" : toCourtyardNearMainHall,
                },
                {
                "pitch": -18.327043630549703,
                "yaw": 86.5420114546564,
                "type": "scene",
                "text": "F. Bearing Children Cloister",
                "sceneId": "bearing-children-cloister",
                "clickHandlerFunc" : toBearingChildrenCloister,
                },
            ]
    },
    "bearing-children-cloister":{
        "title":"Bearing Children Cloister",
        "type": "equirectangular",
        "panorama": "https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/panorama-pictures/BearingChildrenCloister.jpg",
        //angle range of horizontal view
        "haov": 360,
        //angle range of vertical view
        "vaov": 75.9,
        //vertical angle of the whole panorama
        "vOffset": 0,
        //default zoom-in control
        "hfov": 90,
       // "hotSpotDebug":true,
        "autoLoad":true,
        "minPitch":-30,
        "maxPitch":30,
        "hotSpots": [
            {
                "pitch": -21.957396496759443, 
                "yaw": 129.35245930315295, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'000132.jpg'}
                },
                {
                "pitch": 36.11624385161904, 
                "yaw": 123.608075514809, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Ceiling%20painting%20above%20Guanyin.jpg'}
                },
                {
                "pitch": 13.023408705617465, 
                "yaw": 105.72034037545157,
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Guanyi%20female%20acolyte,%20the%20Naga%20daughter.jpg'}
                },
                {
                "pitch":13.023408705617465,  
                "yaw": 140.30132469951832, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Guanyi%20male%20acolyte,%20Shancai.jpg'}
                },
                {
                "pitch": 10.001788567309598, 
                "yaw": 116.26287251191195,
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Guanyin%20(Goddess%20of%20Mercy)%20Giver%20of%20Children.jpg'}
                },
                {
                "pitch": -4.402438881247944,
                "yaw": 150.92971530634128,
                "type": "info",
                "text":"'May the virtues planted in the heart at this sanctuary bring blessedness and wisdom to the children'",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'May%20the%20virtues%20planted%20in%20the%20heart%20at%20this%20sanctuary%20bring%20blessedness%20and%20wisdom%20to%20the%20children.jpg'}
                },
                {
                "pitch": 6.513174501869093, 
                "yaw": 164.20020726252744,
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Part%20of%20Eighteen%20Arhats.jpg'}
                },
                {
                "pitch": 10.441151884870083,
                "yaw": -177.0720202071335, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Part%20of%20Eighteen%20Arhats2.jpg'}
                },
                {
                "pitch": 7.798195659889838, 
                "yaw": 81.3360208233139, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Part%20of%20Eighteen%20Arhats3.jpg'}
                },
                {
                "pitch": 11.167145965701028, 
                "yaw":56.91753103745691, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Part%20of%20Eighteen%20Arhats4.jpg'}
                },
                {
                "pitch": 9.478170887554018,
                "yaw": 43.28444140533668,
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Part%20of%20Eighteen%20Arhats5.jpg'}
                },
                {
                "pitch": -4.402438881247944,
                "yaw": 94.03272199228991,  
                "type": "info",
                "text":"'She gives them the children from the Buddha land that they might be seeds of a good family to come",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'She%20gives%20them%20the%20children%20from%20the%20Buddha%20land%20that%20they%20might%20be%20seeds%20of%20a%20good%20family%20to%20come.jpg'}
                },
                {
                "pitch": -19.737119852426346,
                "yaw": -31.440639405290437,
                "type": "scene",
                "text": "G. Main Hall South",
                "sceneId": "main-hall-south",
                "clickHandlerFunc" : toMainHallSouth,
                },
                {
                "pitch": -19.737119852426346,
                "yaw": -76.39657570180252,
                "type": "scene",
                "text": "E. Dragon King Temple",
                "sceneId": "dragon-king-temple",
                "clickHandlerFunc" : toDragonKingTemple,
                },

            ]
    },
    "main-hall-south":{
        "title":"Main Hall South",
        "type": "equirectangular",
        "panorama": "https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/panorama-pictures/MainHallSouthjpg.jpg",
        //angle range of horizontal view
        "haov": 360,
        //angle range of vertical view
        "vaov": 75.9,
        //vertical angle of the whole panorama
        "vOffset": 0,
        //default zoom-in control
        "hfov": 90,
       // "hotSpotDebug":true,
        "autoLoad":true,
        "minPitch":-30,
        "maxPitch":30,
        "hotSpots": [
            {
                "pitch": 6.164731074535975, 
                "yaw": -148.26922490986692, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Gods%20in%20charge%20of%20Bureau%20of%20Punishing%20the%20Evil.jpg'}
                },
                {
                "pitch": 4.286860984466831,
                "yaw": 128.58607719394493, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Gods%20in%20charge%20of%20Bureau%20of%20Rewarding%20the%20Good.jpg'}
                },
                {
                "pitch": 1.001201026076695, 
                "yaw": 137.71020078831026, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Scene%20from%20Hell2.1.jpg'}
                },
                {
                "pitch": -0.6721950707576663, 
                "yaw": -154.46113125287667, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Scene%20of%20Hell4.jpg'}
                },
                {
                "pitch": 1.6333437946016556, 
                "yaw": 142.17603521229054,
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Scene%20of%20legend-Buying%20Fish%20and%20Releasing%20Them%20to%20Live.jpg'}
                },
                {
                "pitch": 5.242001101751065, 
                "yaw": -153.15395840572432, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Scene%20of%20legend-Sister%20Mei%20Gets%20Justice.jpg'}
                },
                {
                "pitch": -13.255983097065318,
                "yaw": -178.92423187059416,
                "type": "scene",
                "text": "F. Bearing Children Cloister",
                "sceneId": "bearing-children-cloister",
                "clickHandlerFunc" : toBearingChildrenCloister,
                },
                {
                "pitch": -13.255983097065318,
                "yaw": 160.9273769269298,
                "type": "scene",
                "text": "H. Main Hall North",
                "sceneId": "main-hall-north",
                "clickHandlerFunc" : toMainHallNorth,
                },

            ]
    },
    "main-hall-north":{
        "title":"Main Hall South",
        "type": "equirectangular",
        "panorama": "https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/panorama-pictures/MainHallNorth.jpg",
        //angle range of horizontal view
        "haov": 360,
        //angle range of vertical view
        "vaov": 75.9,
        //vertical angle of the whole panorama
        "vOffset": 0,
        //default zoom-in control
        "hfov": 90,
        //"hotSpotDebug":true,
        "autoLoad":true,
        "minPitch":-30,
        "maxPitch":30,
        "hotSpots": [
            {
                "pitch": 14.255725460393649, 
                "yaw": 113.91911337952106,  
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Bell.jpg'}
                },
                {
                "pitch": 8.660748129750703, 
                "yaw": 143.48687435586862, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Devil%20King%20in%20charge%20of%20animals%20and%20Devil%20King%20of%20Lightning.jpg'}
                },
                {
                "pitch": 5.913811010863986, 
                "yaw":152.90610264477826, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Devil%20King%20of%20Great%20Puriy%20and%20Ox-head.jpg'}
                },
                {
                "pitch": 7.195732661954577,  
                "yaw":18.823564236085303,
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Devil%20King%20of%20Kind%20Heart%20and%20Devil%20King%20of%20Ingesting%20Poison.jpg'}
                },
                {
                "pitch": 7.406272429773132, 
                "yaw": 167.09202031491208, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Devil%20servant%20and%20the%20Judge.jpg'}
                },
                {
                "pitch": 5.245861140996582, 
                "yaw": 53.60608951140824,
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Drum.jpg'}
                },
                {
                "pitch": 7.2400896042040115, 
                "yaw": 9.524221210999485, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Horse-face%20and%20Devil%20King%20of%20Thousand%20Eyes.jpg'}
                },
                {
                "pitch": -23.271244371404933,
                "yaw": 92.38777493469667,  
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Liu%20Guanglin%20praying%20for%20divination.jpg'}
                },
                {
                "pitch": 12.899353150969917,
                "yaw": 81.43715122252252, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Overview%20of%20City%20God%20statue.jpg'}
                },
                {
                "pitch":13.685673226373629, 
                "yaw": 91.52788732259427, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Overview%20of%20City%20God%20statue1.jpg'}
                },
                {
                "pitch": 13.685673226373629,
                "yaw":70.78679021210479,
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Overview%20of%20City%20God%20statue2.jpg'}
                },
                {
                "pitch": 0.30228176267751217, 
                "yaw":75.12299994696417, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Overview%20of%20City%20God%20statue3.jpg'}
                },
                {
                "pitch": 7.744158096469673, 
                "yaw": 84.98504490154954, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Overview%20of%20City%20God%20statue4.jpg'}
                },
                {
                "pitch": 18.043501812314467,
                "yaw": 81.43715122252252,
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Overview%20of%20City%20God%20statue5.jpg'}
                },
                {
                "pitch": 19.977962993774874,
                "yaw": 81.43715122252252, 
                "type": "info",
                "text":"'聰明正直'",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Overview%20of%20City%20God%20statue6.jpg'}
                },
               
    
                {
                "pitch": 9.863888085279351,
                "yaw": -4.351901274330679,
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'White%20Impermanence%20and%20Black%20Impermanence.jpg'}
                },
            {
                "pitch": -17.28690689538847,
                "yaw": -116.21337510940853, 
                "type": "scene",
                "text": "G. Main Hall South",
                "sceneId": "main-hall-south",
                "clickHandlerFunc" : toMainHallSouth,
                },
                {
                "pitch": -17.28690689538847, 
                "yaw": -84.2973172908757, 
                "type": "scene",
                "text": "I. Rear Hall",
                "sceneId": "rear-hall",
                "clickHandlerFunc" : toRearHall,
                },

            ]
    },
    "rear-hall":{
        "title":"Rear Hall",
        "type": "equirectangular",
        "panorama": "https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/panorama-pictures/RearHall.jpg",
        //angle range of horizontal view
        "haov": 360,
        //angle range of vertical view
        "vaov": 75.9,
        //vertical angle of the whole panorama
        "vOffset": 0,
        //default zoom-in control
        "hfov": 90,
        //"hotSpotDebug":true,
        "autoLoad":true,
        "minPitch":-30,
        "maxPitch":30,
        "hotSpots": [
            {
            "pitch": 15.257378891726594,
            "yaw": 175.15017282066106, 
            "type": "info",
            "clickHandlerFunc" : expandImg,
            "clickHandlerArgs" : {"text":'City%20God%20parents%20in%20the%20middle%20accompanied%20by%20City%20God%20and%20his%20wife.jpg'}
            },
            {
            "pitch": -7.372190600571965, 
            "yaw": 174.57550165300128, 
            "type": "info",
            "clickHandlerFunc" : expandImg,
            "clickHandlerArgs" : {"text":'City%20God%20parents%20in%20the%20middle%20accompanied%20by%20City%20God%20and%20his%20wife1.jpg'}
            },
            {
            "pitch": -7.372190600571965, 
            "yaw": 163.80193828625784,
            "type": "info",
            "clickHandlerFunc" : expandImg,
            "clickHandlerArgs" : {"text":'City%20God%20parents%20in%20the%20middle%20accompanied%20by%20City%20God%20and%20his%20wife2.jpg'}
            },
            {
            "pitch": -7.372190600571965,  
            "yaw": -174.63752814798087,
            "type": "info",
            "clickHandlerFunc" : expandImg,
            "clickHandlerArgs" : {"text":'City%20God%20parents%20in%20the%20middle%20accompanied%20by%20City%20God%20and%20his%20wife3.jpg'}
            },
            {
            "pitch": 35.946180255148214,
            "yaw": 175.28319419693827, 
            "type": "info",
            "text":"'Eternal beneficence left on the people'<br>'遺愛在民'",
            "clickHandlerFunc" : expandImg,
            "clickHandlerArgs" : {"text":'Eternal%20beneficence%20left%20on%20the%20people.jpg'}
            },
            {
            "pitch":15.424777474073194,
            "yaw": -4.360518210103862,
            "type": "info",
            "clickHandlerFunc" : expandImg,
            "clickHandlerArgs" : {"text":'Model%20of%20the%20city%20god%20temple%20for%20parade.jpg'}
            },
            {
            "pitch": 9.867302627548824,
            "yaw": 150.84018696061997, 
            "type": "info",
            "text":"'Placard for parade-Heaven knows, earth knows, say not that no one knows'<br>'天知地知，何謂無知'",
            "clickHandlerFunc" : expandImg,
            "clickHandlerArgs" : {"text":'Placard%20for%20parade-Heaven%20knows,%20earth%20knows,%20say%20not%20that%20no%20one%20knows.jpg'}
            },
            {
            "pitch": 9.867302627548824,
            "yaw": -159.2840224452527, 
            "type": "info",
            "text":"'Placard for parade-Whether good or bad, everything gets its proper reward'<br>'善報惡報，終須有報'",
            "clickHandlerFunc" : expandImg,
            "clickHandlerArgs" : {"text":'Placard%20for%20parade-Whether%20good%20or%20bad,%20everything%20gets%20its%20proper%20reward.jpg'}
            },
            {
            "pitch": -21.39883715325066,
            "yaw": -4.244629189025391,
            "type": "scene",
            "text": "H. Main Hall North",
            "sceneId": "main-hall-north",
            "clickHandlerFunc" : toMainHallNorth,
            },
            

            ]
    },
},
});

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

function toFrontGate(){
    var i;
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="A. Front Gate";
    var myCircles = document.getElementsByClassName('cls-1');
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('tangxi-A');
    myCircle.style.fill = "#F26E22";
    v.loadScene("front-gate");
    pageScene="frontGate";
    const agallery = <ReactGallery/>;
    ReactDOM.render(agallery, document.getElementById('react-gallery'));
}

function toOperaStage(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="B. Opera Stage";
    var myCircles = document.getElementsByClassName('cls-1');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('tangxi-B');
    myCircle.style.fill = "#F26E22";
    v.loadScene("opera-stage");
    pageScene="operaStage";
    console.log(pageScene);
    const bgallery = <ReactGallery/>;
    ReactDOM.render(bgallery, document.getElementById('react-gallery'));
}

function toCourtyardNearStage(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="C. Courtyard Near Stage";
    var myCircles = document.getElementsByClassName('cls-1');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('tangxi-C');
    myCircle.style.fill = "#F26E22";
    v.loadScene("courtyard-near-stage");
    pageScene="courtyardNearStage";
    console.log(pageScene);
    const cgallery = <ReactGallery/>;
    ReactDOM.render(cgallery, document.getElementById('react-gallery'));
}

function toCourtyardNearMainHall(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="D. Courtyard Near Main Hall";
    var myCircles = document.getElementsByClassName('cls-1');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('tangxi-D');
    myCircle.style.fill = "#F26E22";
    v.loadScene("courtyard-near-main-hall");
    pageScene="courtyardNearMainHall";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}

function toDragonKingTemple(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="E. Dragon King Temple";
    var myCircles = document.getElementsByClassName('cls-1');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('tangxi-E');
    myCircle.style.fill = "#F26E22";
    v.loadScene("dragon-king-temple");
    pageScene="dragonKingTemple";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}
function toBearingChildrenCloister(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="F. Bearing Children Cloister";
    var myCircles = document.getElementsByClassName('cls-1');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('tangxi-F');
    myCircle.style.fill = "#F26E22";
    v.loadScene("bearing-children-cloister");
    pageScene="bearingChildrenCloister";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}

function toMainHallSouth(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="G. Main Hall South";
    var myCircles = document.getElementsByClassName('cls-1');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('tangxi-G');
    myCircle.style.fill = "#F26E22";
    v.loadScene("main-hall-south");
    pageScene="mainHallSouth";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}

function toMainHallNorth(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="H. Main Hall North";
    var myCircles = document.getElementsByClassName('cls-1');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('tangxi-H');
    myCircle.style.fill = "#F26E22";
    v.loadScene("main-hall-north");
    pageScene="mainHallNorth";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}

function toRearHall(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="I. Rear Hall";
    var myCircles = document.getElementsByClassName('cls-1');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('tangxi-I');
    myCircle.style.fill = "#F26E22";
    v.loadScene("rear-hall");
    pageScene="rearHall";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}






