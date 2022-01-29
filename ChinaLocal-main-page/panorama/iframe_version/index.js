function on(image) {
    var expandImg = document.getElementById("expandedImg");
    expandImg.src = image.src;
    document.getElementById("overlay").style.display = "block";
    
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }