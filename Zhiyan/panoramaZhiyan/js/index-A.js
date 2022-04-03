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
            //"hotSpotDebug":true,
            "autoLoad":true,
            "minPitch":-30,
            "maxPitch":30,
            "hotSpots": [
                {
                    "pitch": 0.7695716407371126, 
                    "yaw": -95.54280748056317, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Overview%20of%20the%20West%20Gate.JPG'}
                },
                {
                    "pitch": -6.224028266500834,
                    "yaw": 85.91131837122502,
                    "type": "scene",
                    "text": "B. Five Manifestations Cult Temple, Wuxian Miao",
                    "sceneId": "B",
                    "clickHandlerFunc" : toB,
                }
            ]
        },

        "B":{
            "title":"B. Five Manifestations Cult Temple, Wuxian Miao",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/panorama-pictures/B.jpg",
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
            "pitch":  7.171152625819008, 
            "yaw": -4.245616451134026, 
            "type": "info",
            "clickHandlerFunc" : expandImg,
            "clickHandlerArgs" : {"text":'Overview%20of%20the%20Watermouth.JPG'}
            },
            {
                "pitch": -4.845269962047471, 
                "yaw": -52.80660848248078,
                "type": "scene",
                "text":"C. Lord Yang Temple, Yanggong Miao",
                "sceneId": "C",
                "clickHandlerFunc" : toC,
            },
            {
                "pitch": -14.233784317065176, 
                "yaw":  126.65324634098477,
                "type": "scene",
                "text": "A. Half Moon Reservoir, Banyue Tang",
                "sceneId": "A",
                "clickHandlerFunc" : toA,
            }
            ]
        },
        "C":{
            "title":"C. Lord Yang Temple, Yanggong Miao",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/panorama-pictures/C.jpg",
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
                "pitch":  -24.90504120976177, 
                "yaw": 140.9004422127586,
                "type": "scene",
                "text": "D. The Hall of Completing Will, Chengzhi Tang",
                "sceneId": "D1",
                "clickHandlerFunc" : toD1,
            },
            {
                "pitch":-22.29490993983829, 
                "yaw": -45.40962870380243,
                "type": "scene",
                "text": "B. Five Manifestations Cult Temple, Wuxian Miao",
                "sceneId": "B",
                "clickHandlerFunc" : toB,
            }
            ]
        },


        //need more works
        "D1":{
            "title":"D. The Hall of Completing Will, ChengZhi Tang",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/panorama-pictures/D1.jpg",
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
                "pitch": -17.865535605353674, 
                "yaw": -143.25477114574946,
                "type": "scene",
                "text": "D2. Hailin Court -- Shrine of Lord Guan, Guan Sheng Ci",
                "sceneId": "D2",
                "clickHandlerFunc" : toD2,
            },
            {
                "pitch": -5.707430733660536, 
                "yaw": 142.53051082553577,
                "type": "scene",
                "text":"C. Returning Dragon Bridge, Huilong Qiao",
                "sceneId": "C",
                "clickHandlerFunc" : toC,
            },
            
            {
                "pitch": -15.215655784527485,
                "yaw": 0.7533702205573594,
                "type": "scene",
                "text":"E. Path between Sea and Unicorn Chamber and Guodong Primary School",
                "sceneId": "E",
                "clickHandlerFunc" : toE,
                },
              
                {
                "pitch":11.485475461189928, 
                "yaw": 145.9436513290398, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'Overview%20of%20Hailin%20Court.JPG'}
                },
              
            ]
        },
    /*
        "D2":{
            "title":"D2. Hailin Court -- Shrine of Lord Guan, Guan Sheng Ci",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/panorama-pictures/D2.jpg",
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
                    "pitch": -11.868629019937973, 
                    "yaw": 88.31877844670032, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'DSCN1553.JPG'}
                    },
                    {
                    "pitch": 17.34877089516667,
                    "yaw": 14.20576797764312, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'DSCN1556.JPG'}
                    },
                    {
                    "pitch": -12.462074996692106,  
                    "yaw": 136.61035562271317,
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Introduction%20to%20Hailin%20Court%20in%20Chinese%20and%20English%20.JPG'}
                    },
                    {
                    "pitch":27.416541860389085,
                    "yaw": -142.75631508325478, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Looking%20out%20from%20the%20court%20.JPG'}
                    },
                    {
                    "pitch": 2.394160340994728, 
                    "yaw": 13.0273653855892, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'P0002790.JPG'}
                    },
                    {
                    "pitch": 17.43026419788107, 
                    "yaw": -2.094543035674941,
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'P0002791.JPG'}
                    },
                    {
                    "pitch": -10.201650585528876, 
                    "yaw": -59.130149637151526, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'P0002793.JPG'}
                    },
                    {
                    "pitch": -8.44607110224642,
                    "yaw":  -39.05361049140934, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'P0002794.JPG'}
                    },
                    {
                    "pitch": -6.725361249449086, 
                    "yaw":  53.43691376951663,
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'P0002795.JPG'}
                    },
                    {
                    "pitch": -7.810267986283563, 
                    "yaw": 74.47906207967947, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'P0002796.JPG'}
                    },
                    {
                    "pitch":23.84237039264124,
                    "yaw": 114.25803091291996,
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Record%20of%20the%20renovation%20of%20Hailin%20Court%20in%201994%20.JPG'}
                    },   
            {
                "pitch": -20.74250591486505,
                "yaw":  115.6584025415313,
                "type": "scene",
                "text": "D1 Hailin Court--exterior",
                "sceneId": "D1",
                "clickHandlerFunc" : toD1,
            },
            {
                "pitch": -23.55951094876721, 
                "yaw": -77.25226339342346,
                "type": "scene",
                "text":"D3 Hailin Court -- Chamber of Guanyin of the Southern Ocean Nanhai Guanyin Ge",
                "sceneId": "D3",
                "clickHandlerFunc" : toD3,
            }
            ]
        },

        "D3":{
            "title":"D3. Hailin Court -- Chamber of Guanyin of the Southern Ocean Nanhai Guanyin Ge",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/panorama-pictures/D3.jpg",
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
                    "pitch": 1, 
                    "yaw": 1, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'P0002798.JPG'}
                    },
                    {
                    "pitch":  5.151257690414573,
                    "yaw": -98.2509217745344, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'P0002799.JPG'}
                    },   
            {
                "pitch": -21.391706106077184,
                "yaw": 40.0319196510468,
                "type": "scene",
                "text": "D2. Hailin Court -- Shrine of Lord Guan, Guan Sheng Ci",
                "sceneId": "D2",
                "clickHandlerFunc" : toD2,
            },
            ]
        },
*/
        "E":{
            "title":"E. The Hall of Continuing Virtue, Yande Tang",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/panorama-pictures/E.jpg",
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
                    "pitch": 9.067050007264166,
                    "yaw": 53.024768243799144,
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Overview%20of%20the%20path%20.JPG'}
                    },  
            {
                "pitch": -2.028715927162636, 
                "yaw":-158.85376649216724,
                "type": "scene",
                "text": "D1. Hailin Court, Hailin Ge",
                "sceneId": "D1",
                "clickHandlerFunc" : toD1,
            },
            ]
        },
        

        "G":{
            "title":"G. The Hall of Succeeding Glory, Chengxian Tang",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/panorama-pictures/G.jpg",
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
                    "pitch": 9.99497106530154,  
                    "yaw": -41.54862154881994, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Closeup%20of%20the%20hall.jpg'}
                    },
                   
            {
                "pitch":-19.77574221825997,
                "yaw":  -21.958199019956936,
                "type": "scene",
                "text": "H1 Xinwu Li, Front Courtyard",
                "sceneId": "H1",
                "clickHandlerFunc" : toH1,
            },
            {
                "pitch": -26.58528794474873, 
                "yaw": 130.91757761892572,
                "type": "scene",
                "text": "F1. He Lineage Ancestral Hall--exterior",
                "sceneId": "F1",
                "clickHandlerFunc" : toF1,
            }
            ]
        },
        "H1":{
            "title":"H. Entrance to the Hall of Promoting Goodness, Jimei Tang",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/panorama-pictures/H1.jpg",
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
                    "pitch": 9.447322417706294, 
                    "yaw": 151.410527094575, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Left-hand%20side%20window%20of%20the%20eastern%20wing.jpg'}
                    },
                   
                    {
                    "pitch": 8.249928268271615,
                    "yaw":166.93897528139317 , 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Right-hand%20side%20window%20of%20the%20eastern%20wing.jpg'}
                    },
            {
                "pitch": -31.33414675067754,
                "yaw": -106.23040330298603,
                "type": "scene",
                "text": "G. Between He Lineage Ancestral Hall and Xinwu Li",
                "sceneId": "G",
                "clickHandlerFunc" : toG,
            },
            {
                "pitch": -23.66886437445998,
                "yaw": 65.92947151229332,
                "type": "scene",
                "text": "H2. Xinwu Li, Back Courtyard",
                "sceneId": "H2",
                "clickHandlerFunc" : toH2,
            }
            ]
        },
        /*
        "H2":{
            "title":"H. Xinwu Li",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/panorama-pictures/H2.jpg",
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
                "pitch": -6.224028266500834,
                "yaw": 85.91131837122502,
                "type": "scene",
                "text": "H1 Xinwu Li, Front Courtyard",
                "sceneId": "H1",
                "clickHandlerFunc" : toH1,
            }
            ]
        },
        */
        "I":{
            "title":"I. The Hall of Filial Devotion, Xiaosi Tang",
            "type": "equirectangular",
            "panorama": "https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/panorama-pictures/I.jpg",
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
                    "pitch":  1.362592920052081, 
                    "yaw": -140.32874629899163 , 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Closeup%20of%20the%20base%20of%20the%20arch.jpg'}
                    },
                    
                    {
                    "pitch": 26.03336914902445,   
                    "yaw": -118.67324038144245, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Middle%20part%20of%20the%20arch%20with%20inscriptions%20on%20the%20frame.jpg'}
                    },
                    {
                    "pitch": 11.85512515290337, 
                    "yaw":  -119.19560127908154, 
                    "type": "info",
                    "clickHandlerFunc" : expandImg,
                    "clickHandlerArgs" : {"text":'Overview%20of%20the%20arch.jpg'}
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
    currentSceneTxt.innerText="A. Half Moon Reservoir, Banyue Tang";
    var myCircles = document.getElementsByClassName('cls-1');
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('guodong-A');
    myCircle.style.fill = "#F26E22";
    v.loadScene("A");
    pageScene="A";
    const agallery = <ReactGallery/>;
    ReactDOM.render(agallery, document.getElementById('react-gallery'));
}

function toB(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="B. Five Manifestations Cult Temple, Wuxian Miao";
    var myCircles = document.getElementsByClassName('cls-1');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('guodong-B');
    myCircle.style.fill = "#F26E22";
    v.loadScene("B");
    pageScene="B";
    console.log(pageScene);
    const bgallery = <ReactGallery/>;
    ReactDOM.render(bgallery, document.getElementById('react-gallery'));
}

function toC(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="C. Lord Yang Temple, Yanggong Miao";
    var myCircles = document.getElementsByClassName('cls-1');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('guodong-C');
    myCircle.style.fill = "#F26E22";
    v.loadScene("C");
    pageScene="C";
    console.log(pageScene);
    const cgallery = <ReactGallery/>;
    ReactDOM.render(cgallery, document.getElementById('react-gallery'));
}

function toD1(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="D1. The Hall of Completing Will, Chengzhi Tang";
    var myCircles = document.getElementsByClassName('cls-1');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('guodong-D');
    myCircle.style.fill = "#F26E22";
    v.loadScene("D1");
    pageScene="D1";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}
/*
function toD2(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="D2. Hailin Court -- Shrine of Lord Guan, Guan Sheng Ci";
    var myCircles = document.getElementsByClassName('cls-1');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('guodong-D');
    myCircle.style.fill = "#F26E22";
    v.loadScene("D2");
    pageScene="D2";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}

function toD3(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="D3  Hailin Court -- Chamber of Guanyin of the Southern Ocean Nanhai Guanyin Ge";
    var myCircles = document.getElementsByClassName('cls-1');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('guodong-D');
    myCircle.style.fill = "#F26E22";
    v.loadScene("D3");
    pageScene="D3";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}
*/
function toE(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="E. The Hall of Continuing Virtue, Yande Tang";
    var myCircles = document.getElementsByClassName('cls-1');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('guodong-E');
    myCircle.style.fill = "#F26E22";
    v.loadScene("E");
    pageScene="E";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}

function toG(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="G. The Hall of Succeeding Glory, Chengxian Tang";
    var myCircles = document.getElementsByClassName('cls-1');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('guodong-G');
    myCircle.style.fill = "#F26E22";
    v.loadScene("G");
    pageScene="G";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}

function toH1(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="H1. Entrance to the Hall of Promoting Goodness, Jimei Tang";
    var myCircles = document.getElementsByClassName('cls-1');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('guodong-H');
    myCircle.style.fill = "#F26E22";
    v.loadScene("H1");
    pageScene="H1";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}

/*
function toH2(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="H2. Xinwu Li, Back Courtyard";
    var myCircles = document.getElementsByClassName('cls-1');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('guodong-H');
    myCircle.style.fill = "#F26E22";
    v.loadScene("H2");
    pageScene="H2";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}
*/
function toI(){
    var currentSceneTxt = document.getElementById('currentScene');
    currentSceneTxt.innerText="I. The Hall of Filial Devotion, Xiaosi Tang";
    var myCircles = document.getElementsByClassName('cls-1');
    var i;
    for(i=0;i<myCircles.length;i++){
        myCircles[i].style.fill="#023859";
    }
    var myCircle = document.getElementById('guodong-I');
    myCircle.style.fill = "#F26E22";
    v.loadScene("I");
    pageScene="I";
    console.log(pageScene);
    const dgallery = <ReactGallery/>;
    ReactDOM.render(dgallery, document.getElementById('react-gallery'));  
}
