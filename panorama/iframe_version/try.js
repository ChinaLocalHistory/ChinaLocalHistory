var bounds = [-30,30];
var v = pannellum.viewer('panorama', {
"type": "equirectangular",
"panorama": "https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/P.jpg",
"haov": 360,
"vaov": 75.9,
"vOffset": 0,
//"hotSpotDebug":true,
"autoLoad":true,
"hotSpots": [
    {
        "pitch":20.905364366865633,
        "yaw":-4.361632086533733,
        "type": "info",
        "text": "City God Temple",
        //"cssClass": "custom-hotspot",
    },
    {
        "pitch": 17.077460768584032,
        "yaw": 27.014870099148276,
        "type": "info",
        "text": "Defender of Our Precious Wu",
        "clickHandlerFunc" : expandImg,
        "clickHandlerArgs" : {"txt":"Defender of Our Precious Wu"},
        //"cssClass": "custom-hotspot",
    },
    {
        "pitch": 17.485817327539637,
        "yaw": -34.36496946053846,
        "type": "info",
        "text": "Protector of Tangxi (click to show image)",
        "URL": "https://stackoverflow.com/questions/165082/insert-a-link-using-css",
        
        //"cssClass": "custom-hotspot",
    }
]
});
v.setPitchBounds(bounds);
function hotspot(hotSpotDiv, args) {
hotSpotDiv.classList.add('custom-tooltip');
var span = document.createElement('span');
span.innerHTML = args;
hotSpotDiv.appendChild(span);
span.style.width = span.scrollWidth - 20 + 'px';
span.style.marginLeft = -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + 'px';
span.style.marginTop = -span.scrollHeight - 12 + 'px';
}

function expandImg(hotspot,txt){
    console.log(txt);
    document.title = "index.html";
    img = document.getElementById(String(txt));
    img.onclick();
};


function on(image) {
    var expandImg = document.getElementById("expandedImg");
    expandImg.src = image.src;
    document.getElementById("overlay").style.display = "block";
    
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }