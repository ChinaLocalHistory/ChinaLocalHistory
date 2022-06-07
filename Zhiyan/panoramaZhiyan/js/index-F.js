var pageScene="F1"; 
const gallery = <ReactGallery/>;
//const domContainer = document.querySelector('#react-gallery');
ReactDOM.render(gallery, document.getElementById('react-gallery'));


//a great pannellum tutorial but in Chinese: https://www.jianshu.com/p/fdbcb551d75b 

//generating the panorama
var v=pannellum.viewer('panorama', {
    "default":{
        "firstScene":"F1",
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
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'DSC00012.JPG'}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'DSC00014.JPG'}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'DSCN0225.JPG'}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'DSCN0229.JPG'}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'DSCN0233.JPG'}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'DSCN0234.JPG'}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'DSCN0294.JPG'}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'DSCN1061.JPG'}
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
            //"hotSpotDebug":true,
            "autoLoad":true,
            "hotSpots": [
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'P0002473.JPG'}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'P0002474.JPG'}
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
            //"hotSpotDebug":true,
            "autoLoad":true,
            "hotSpots": [
               
            {
            "pitch": 1, 
            "yaw": 1, 
            "type": "info",
            "clickHandlerFunc" : expandImg,
            "clickHandlerArgs" : {"text":'1-YDT%20overview%20of%20temple%20hall.JPG'}
            },
            {
            "pitch": 1, 
            "yaw": 1, 
            "type": "info",
            "clickHandlerFunc" : expandImg,
            "clickHandlerArgs" : {"text":'2-YDT%20west%20pillar%20in%20entrance%20hall.JPG'}
            },
            {
            "pitch": 1, 
            "yaw": 1, 
            "type": "info",
            "clickHandlerFunc" : expandImg,
            "clickHandlerArgs" : {"text":'3-YDT_renovated_beam_structure_in_entrance.JPG'}
            },
            {
            "pitch": 1, 
            "yaw": 1, 
            "type": "info",
            "clickHandlerFunc" : expandImg,
            "clickHandlerArgs" : {"text":'4-YDT_main_hall_sign.JPG'}
            },
            {
            "pitch": 1, 
            "yaw": 1, 
            "type": "info",
            "clickHandlerFunc" : expandImg,
            "clickHandlerArgs" : {"text":'5-YDT_roof_and_supporting_beam_for_main_hall.JPG'}
            },
            {
            "pitch": 1, 
            "yaw": 1, 
            "type": "info",
            "clickHandlerFunc" : expandImg,
            "clickHandlerArgs" : {"text":'6-YDT_waterway_between_entrance_hall_and_main_hall.JPG'}
            },
            {
            "pitch": 1, 
            "yaw": 1, 
            "type": "info",
            "clickHandlerFunc" : expandImg,
            "clickHandlerArgs" : {"text":'7-YDT_east_wall_decoration_of_main_hall.JPG'}
            },
            {
            "pitch": 1, 
            "yaw": 1, 
            "type": "info",
            "clickHandlerFunc" : expandImg,
            "clickHandlerArgs" : {"text":'8-YDT_ancestor_tablet_chest.JPG'}
            },
            {
            "pitch": 1, 
            "yaw": 1, 
            "type": "info",
            "clickHandlerFunc" : expandImg,
            "clickHandlerArgs" : {"text":'9-YDT_ancestor_tablets_inside_chest.JPG'}
            },
            {
            "pitch": 1, 
            "yaw": 1, 
            "type": "info",
            "clickHandlerFunc" : expandImg,
            "clickHandlerArgs" : {"text":'10-YDT_northwest_side_pillar_near_ancestor_tablet_chest.JPG'}
            },
            {
            "pitch": 1, 
            "yaw": 1, 
            "type": "info",
            "clickHandlerFunc" : expandImg,
            "clickHandlerArgs" : {"text":'11-YDT_east_pillar_in_main_hall.JPG'}
            }
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
            //"hotSpotDebug":true,
            "autoLoad":true,
            "hotSpots": [
               {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'DSC00006.JPG'}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'DSC00007.JPG'}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'DSC00008.JPG'}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'DSC00009.JPG'}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'DSC00012.JPG'}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'DSC00014.JPG'}
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
            //"hotSpotDebug":true,
            "autoLoad":true,
            "hotSpots": [
               //need to add hotspots of switching screen to screen
            
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
            //"hotSpotDebug":true,
            "autoLoad":true,
            "hotSpots": [
            //need to add hotspots of switching screen to screen
              
            ]
        },
    
        "D2":{
            "title":"D2. Entrance to the Hall of Promoting Goodness, Jimei Tang",
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
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'SANY0012.JPG'}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'SANY0013.JPG'}
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
            //"hotSpotDebug":true,
            "autoLoad":true,
            "hotSpots": [
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'P0002465.JPG'}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'P0002466.JPG'}
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
            //"hotSpotDebug":true,
            "autoLoad":true,
            "hotSpots": [
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'000380.JPG'}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'000384.JPG'}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'1-XST%20view%20of%20entry%20from%20north.JPG'}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'2-XST%20main%20hall%20overhead%20signage.JPG'}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'3-XST%202nd%20sign%20facing%20north%20wall.JPG'}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'4-XST%20left%20pillar%20middle%20of%20north%20wall.JPG'}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'5-XST%20right%20pillar%20middle%20of%20north%20wall.JPG'}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'6-XST%20west%20wall%20beam%20structure.JPG'}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'11-XST%20roof%20overhang%20SW%20corner.JPG'}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'12-XST%20space%20between%20main%20hall%20and%20E%20building.JPG'}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'13-XSWT%20outside%20view%20of%20east%20building.JPG'}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'14-XST%20interior%20view%20of%20a%20room%20in%20east%20building.JPG'}
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
            //"hotSpotDebug":true,
            "autoLoad":true,
            "hotSpots": [
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'000458.JPG'}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'000459.JPG'}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'000460.JPG'}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":';000461.JPG'}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'000462.JPG'}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'000463.JPG'}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'000464.JPG'}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'000465.JPG'}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'DSC00022.JPG'}
                }
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
            //"hotSpotDebug":true,
            "autoLoad":true,
            "hotSpots": [
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'SANY0015.JPG'}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'SANY0016.JPG'}
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
            //"hotSpotDebug":true,
            "autoLoad":true,
            "hotSpots": [
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'SANY0015.JPG'}
                },
                {
                "pitch": 1, 
                "yaw": 1, 
                "type": "info",
                "clickHandlerFunc" : expandImg,
                "clickHandlerArgs" : {"text":'SANY0016.JPG'}
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
    currentSceneTxt.innerText="F1. The Hall of Abundant Splendor, Guangyu Tang";
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