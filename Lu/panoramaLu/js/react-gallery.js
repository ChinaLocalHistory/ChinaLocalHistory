class ReactGallery extends React.Component {
    constructor(...args) {
      super(...args);
    }
    render() {
      if (pageScene== "A" || pageScene== "G" || pageScene== "H" || pageScene== "S1") {
      return (
    //still images in the gallery
        <div className="gallery-row">
            <div className="back-button">
            <p><b><a href = "https://chinalocalhistory.github.io/ChinaLocalHistory/Lu/menu/Lu.html">&rarr;</a></b></p>
            </div>
        </div>
          );
  }

    if (pageScene== "B") {
        return(
          <div className="gallery-row">

           <div className="gallery-column">
           <img id="001054.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/B.%20Formal%20Entrance/001054.jpg" alt="001054.jpg" onClick={this.on.bind(this)}></img></div>
           <div className="gallery-column">
           <img id="001071.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/B.%20Formal%20Entrance/001071.jpg" alt="001071.jpg" onClick={this.on.bind(this)}></img></div>
           <div className="gallery-column">
           <img id="001165.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/B.%20Formal%20Entrance/001165.jpg" alt="001165.jpg" onClick={this.on.bind(this)}></img></div>
           <div className="gallery-column">
           <img id="001167.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/B.%20Formal%20Entrance/001167.jpg" alt="001167.jpg" onClick={this.on.bind(this)}></img></div>


          <div className="back-button">
          <p><b><a href = "https://chinalocalhistory.github.io/ChinaLocalHistory/Lu/menu/Lu.html">&rarr;</a></b></p></div>
          </div>
          );
    }

    if(pageScene=="C"){
     
      return(
        <div className="gallery-row">
         <div className="gallery-column">
         <img id="001060.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/C.%20His%20Lordship`s%20Mansion,%20Daifu%20Di%20___/001060.jpg" alt="001060.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="001058.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/C.%20His%20Lordship`s%20Mansion,%20Daifu%20Di%20___/001058.jpg" alt="001058.jpg" onClick={this.on.bind(this)}></img></div>


        <div className="back-button">
        <p><b><a href = "https://chinalocalhistory.github.io/ChinaLocalHistory/Lu/menu/Lu.html">&rarr;</a></b></p></div>
        </div>
        );
    }

    if(pageScene=="D"){
        return(
          <div className="gallery-row">

           <div className="gallery-column">
           <img id="000791.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/D.%20Head%20Gate_Victory%20Report%20Gate,%20Jiebao%20Men%20___/000791.jpg" alt="000791.jpg" onClick={this.on.bind(this)}></img></div>
           <div className="gallery-column">
           <img id="000792.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/D.%20Head%20Gate_Victory%20Report%20Gate,%20Jiebao%20Men%20___/000792.jpg" alt="000792.jpg" onClick={this.on.bind(this)}></img></div>
           <div className="gallery-column">
           <img id="000793.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/D.%20Head%20Gate_Victory%20Report%20Gate,%20Jiebao%20Men%20___/000793.jpg" alt="000793.jpg" onClick={this.on.bind(this)}></img></div>
           <div className="gallery-column">
           <img id="000794.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/D.%20Head%20Gate_Victory%20Report%20Gate,%20Jiebao%20Men%20___/000794.jpg" alt="000794.jpg" onClick={this.on.bind(this)}></img></div>
           <div className="gallery-column">
           <img id="000795.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/D.%20Head%20Gate_Victory%20Report%20Gate,%20Jiebao%20Men%20___/000795.jpg" alt="000795.jpg" onClick={this.on.bind(this)}></img></div>
           <div className="gallery-column">
           <img id="000796.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/D.%20Head%20Gate_Victory%20Report%20Gate,%20Jiebao%20Men%20___/000796.jpg" alt="000796.jpg" onClick={this.on.bind(this)}></img></div>
           <div className="gallery-column">
           <img id="000816.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/D.%20Head%20Gate_Victory%20Report%20Gate,%20Jiebao%20Men%20___/000816.jpg" alt="000816.jpg" onClick={this.on.bind(this)}></img></div>
           <div className="gallery-column">
           <img id="001064.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/D.%20Head%20Gate_Victory%20Report%20Gate,%20Jiebao%20Men%20___/001064.jpg" alt="001064.jpg" onClick={this.on.bind(this)}></img></div>
           <div className="gallery-column">
           <img id="001065.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/D.%20Head%20Gate_Victory%20Report%20Gate,%20Jiebao%20Men%20___/001065.jpg" alt="001065.jpg" onClick={this.on.bind(this)}></img></div>
           <div className="gallery-column">
           <img id="001169.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/D.%20Head%20Gate_Victory%20Report%20Gate,%20Jiebao%20Men%20___/001169.jpg" alt="001169.jpg" onClick={this.on.bind(this)}></img></div>


          <div className="back-button">
          <p><b><a href = "https://chinalocalhistory.github.io/ChinaLocalHistory/Lu/menu/Lu.html">&rarr;</a></b></p></div>
          </div>
         );
    }

    if(pageScene=="E"){
      return(
        <div className="gallery-row">

         <div className="gallery-column">
         <img id="000798.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/E.%20Ceremonial%20Gate_Glory%20of%20the%20Nation%20Gate,%20Guoguang%20Men%20___/000798.jpg" alt="000798.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="000804.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/E.%20Ceremonial%20Gate_Glory%20of%20the%20Nation%20Gate,%20Guoguang%20Men%20___/000804.jpg" alt="000804.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="000807.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/E.%20Ceremonial%20Gate_Glory%20of%20the%20Nation%20Gate,%20Guoguang%20Men%20___/000807.jpg" alt="000807.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="000814.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/E.%20Ceremonial%20Gate_Glory%20of%20the%20Nation%20Gate,%20Guoguang%20Men%20___/000814.jpg" alt="000814.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="000815.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/E.%20Ceremonial%20Gate_Glory%20of%20the%20Nation%20Gate,%20Guoguang%20Men%20___/000815.jpg" alt="000815.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="001170.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/E.%20Ceremonial%20Gate_Glory%20of%20the%20Nation%20Gate,%20Guoguang%20Men%20___/001170.jpg" alt="001170.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="002734.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/E.%20Ceremonial%20Gate_Glory%20of%20the%20Nation%20Gate,%20Guoguang%20Men%20___/002734.jpg" alt="002734.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="002747.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/E.%20Ceremonial%20Gate_Glory%20of%20the%20Nation%20Gate,%20Guoguang%20Men%20___/002747.jpg" alt="002747.jpg" onClick={this.on.bind(this)}></img></div>


        <div className="back-button">
        <p><b><a href = "https://chinalocalhistory.github.io/ChinaLocalHistory/Lu/menu/Lu.html">&rarr;</a></b></p></div>
        </div>

        );
    }

    if(pageScene=="F"){
      return(
       <div className="gallery-row">

         <div className="gallery-column">
         <img id="000935.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/F.%20Seriousness%20and%20Consonance%20Hall,%20Suyong%20Hall,%20Suyong%20Tang%20___/000935.jpg" alt="000935.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="000942.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/F.%20Seriousness%20and%20Consonance%20Hall,%20Suyong%20Hall,%20Suyong%20Tang%20___/000942.jpg" alt="000942.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="000943.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/F.%20Seriousness%20and%20Consonance%20Hall,%20Suyong%20Hall,%20Suyong%20Tang%20___/000943.jpg" alt="000943.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="000944.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/F.%20Seriousness%20and%20Consonance%20Hall,%20Suyong%20Hall,%20Suyong%20Tang%20___/000944.jpg" alt="000944.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="000946.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/F.%20Seriousness%20and%20Consonance%20Hall,%20Suyong%20Hall,%20Suyong%20Tang%20___/000946.jpg" alt="000946.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="000949.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/F.%20Seriousness%20and%20Consonance%20Hall,%20Suyong%20Hall,%20Suyong%20Tang%20___/000949.jpg" alt="000949.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="000950.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/F.%20Seriousness%20and%20Consonance%20Hall,%20Suyong%20Hall,%20Suyong%20Tang%20___/000950.jpg" alt="000950.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="000951.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/F.%20Seriousness%20and%20Consonance%20Hall,%20Suyong%20Hall,%20Suyong%20Tang%20___/000951.jpg" alt="000951.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="000952.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/F.%20Seriousness%20and%20Consonance%20Hall,%20Suyong%20Hall,%20Suyong%20Tang%20___/000952.jpg" alt="000952.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="000953.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/F.%20Seriousness%20and%20Consonance%20Hall,%20Suyong%20Hall,%20Suyong%20Tang%20___/000953.jpg" alt="000953.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="000955.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/F.%20Seriousness%20and%20Consonance%20Hall,%20Suyong%20Hall,%20Suyong%20Tang%20___/000955.jpg" alt="000955.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="000956.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/F.%20Seriousness%20and%20Consonance%20Hall,%20Suyong%20Hall,%20Suyong%20Tang%20___/000956.jpg" alt="000956.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="000957.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/F.%20Seriousness%20and%20Consonance%20Hall,%20Suyong%20Hall,%20Suyong%20Tang%20___/000957.jpg" alt="000957.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="000958.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/F.%20Seriousness%20and%20Consonance%20Hall,%20Suyong%20Hall,%20Suyong%20Tang%20___/000958.jpg" alt="000958.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="000959.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/F.%20Seriousness%20and%20Consonance%20Hall,%20Suyong%20Hall,%20Suyong%20Tang%20___/000959.jpg" alt="000959.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="000961.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/F.%20Seriousness%20and%20Consonance%20Hall,%20Suyong%20Hall,%20Suyong%20Tang%20___/000961.jpg" alt="000961.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="000963.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/F.%20Seriousness%20and%20Consonance%20Hall,%20Suyong%20Hall,%20Suyong%20Tang%20___/000963.jpg" alt="000963.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="000964.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/F.%20Seriousness%20and%20Consonance%20Hall,%20Suyong%20Hall,%20Suyong%20Tang%20___/000964.jpg" alt="000964.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="000966.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/F.%20Seriousness%20and%20Consonance%20Hall,%20Suyong%20Hall,%20Suyong%20Tang%20___/000966.jpg" alt="000966.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="000967.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/F.%20Seriousness%20and%20Consonance%20Hall,%20Suyong%20Hall,%20Suyong%20Tang%20___/000967.jpg" alt="000967.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="000971.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/F.%20Seriousness%20and%20Consonance%20Hall,%20Suyong%20Hall,%20Suyong%20Tang%20___/000971.jpg" alt="000971.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="000972.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/F.%20Seriousness%20and%20Consonance%20Hall,%20Suyong%20Hall,%20Suyong%20Tang%20___/000972.jpg" alt="000972.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="000973.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/F.%20Seriousness%20and%20Consonance%20Hall,%20Suyong%20Hall,%20Suyong%20Tang%20___/000973.jpg" alt="000973.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="000974.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/F.%20Seriousness%20and%20Consonance%20Hall,%20Suyong%20Hall,%20Suyong%20Tang%20___/000974.jpg" alt="000974.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="001172.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/F.%20Seriousness%20and%20Consonance%20Hall,%20Suyong%20Hall,%20Suyong%20Tang%20___/001172.jpg" alt="001172.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="002745.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/F.%20Seriousness%20and%20Consonance%20Hall,%20Suyong%20Hall,%20Suyong%20Tang%20___/002745.jpg" alt="002745.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="002749.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/F.%20Seriousness%20and%20Consonance%20Hall,%20Suyong%20Hall,%20Suyong%20Tang%20___/002749.jpg" alt="002749.jpg" onClick={this.on.bind(this)}></img></div>


        <div className="back-button">
        <p><b><a href = "https://chinalocalhistory.github.io/ChinaLocalHistory/Lu/menu/Lu.html">&rarr;</a></b></p></div>
        </div>
     );
    }

  if(pageScene=="I"){
     
      return(
        <div className="gallery-row">

         <div className="gallery-column">
         <img id="000817.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/I.%20Stone%20Gate_Enjoy%20Longevity%20Hall_Leshou%20Hall,%20Leshou%20Tang%20___/000817.jpg" alt="000817.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="000818.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/I.%20Stone%20Gate_Enjoy%20Longevity%20Hall_Leshou%20Hall,%20Leshou%20Tang%20___/000818.jpg" alt="000818.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="000819.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/I.%20Stone%20Gate_Enjoy%20Longevity%20Hall_Leshou%20Hall,%20Leshou%20Tang%20___/000819.jpg" alt="000819.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="000820.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/I.%20Stone%20Gate_Enjoy%20Longevity%20Hall_Leshou%20Hall,%20Leshou%20Tang%20___/000820.jpg" alt="000820.jpg" onClick={this.on.bind(this)}></img></div>


        <div className="back-button">
        <p><b><a href = "https://chinalocalhistory.github.io/ChinaLocalHistory/Lu/menu/Lu.html">&rarr;</a></b></p></div>
        </div>

        );
    }

    if(pageScene=="J1"){
     
      return(
        <div className="gallery-row">

         <div className="gallery-column">
         <img id="000821.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/J.Harmony%20Through%20Generations%20Hall,%20Shiyong%20Tang%20___J.1.%20Harmony%20Through%20Generations%20Gate/000821.jpg" alt="000821.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="000822.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/J.Harmony%20Through%20Generations%20Hall,%20Shiyong%20Tang%20___J.1.%20Harmony%20Through%20Generations%20Gate/000822.jpg" alt="000822.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="000823.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/J.Harmony%20Through%20Generations%20Hall,%20Shiyong%20Tang%20___J.1.%20Harmony%20Through%20Generations%20Gate/000823.jpg" alt="000823.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="000824.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/J.Harmony%20Through%20Generations%20Hall,%20Shiyong%20Tang%20___J.1.%20Harmony%20Through%20Generations%20Gate/000824.jpg" alt="000824.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="000825.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/J.Harmony%20Through%20Generations%20Hall,%20Shiyong%20Tang%20___J.1.%20Harmony%20Through%20Generations%20Gate/000825.jpg" alt="000825.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="000826.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/J.Harmony%20Through%20Generations%20Hall,%20Shiyong%20Tang%20___J.1.%20Harmony%20Through%20Generations%20Gate/000826.jpg" alt="000826.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="000827.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/J.Harmony%20Through%20Generations%20Hall,%20Shiyong%20Tang%20___J.1.%20Harmony%20Through%20Generations%20Gate/000827.jpg" alt="000827.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="000829.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/J.Harmony%20Through%20Generations%20Hall,%20Shiyong%20Tang%20___J.1.%20Harmony%20Through%20Generations%20Gate/000829.jpg" alt="000829.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="000831.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/J.Harmony%20Through%20Generations%20Hall,%20Shiyong%20Tang%20___J.1.%20Harmony%20Through%20Generations%20Gate/000831.jpg" alt="000831.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="000832.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/J.Harmony%20Through%20Generations%20Hall,%20Shiyong%20Tang%20___J.1.%20Harmony%20Through%20Generations%20Gate/000832.jpg" alt="000832.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="000833.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/J.Harmony%20Through%20Generations%20Hall,%20Shiyong%20Tang%20___J.1.%20Harmony%20Through%20Generations%20Gate/000833.jpg" alt="000833.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="000834.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/J.Harmony%20Through%20Generations%20Hall,%20Shiyong%20Tang%20___J.1.%20Harmony%20Through%20Generations%20Gate/000834.jpg" alt="000834.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="000835.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/J.Harmony%20Through%20Generations%20Hall,%20Shiyong%20Tang%20___J.1.%20Harmony%20Through%20Generations%20Gate/000835.jpg" alt="000835.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="000836.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/J.Harmony%20Through%20Generations%20Hall,%20Shiyong%20Tang%20___J.1.%20Harmony%20Through%20Generations%20Gate/000836.jpg" alt="000836.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="000837.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/J.Harmony%20Through%20Generations%20Hall,%20Shiyong%20Tang%20___J.1.%20Harmony%20Through%20Generations%20Gate/000837.jpg" alt="000837.jpg" onClick={this.on.bind(this)}></img></div>


        <div className="back-button">
        <p><b><a href = "https://chinalocalhistory.github.io/ChinaLocalHistory/Lu/menu/Lu.html">&rarr;</a></b></p></div>
        </div>
        );
    }

    if(pageScene=="J2"){
     
      return(
        <div className="gallery-row">

         <div className="gallery-column">
         <img id="000978.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/J.Harmony%20Through%20Generations%20Hall,%20Shiyong%20Tang%20___J.2.%20Harmony%20Through%20the%20Generations%20Hall/000978.jpg" alt="000978.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="000981.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/J.Harmony%20Through%20Generations%20Hall,%20Shiyong%20Tang%20___J.2.%20Harmony%20Through%20the%20Generations%20Hall/000981.jpg" alt="000981.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="000982.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/J.Harmony%20Through%20Generations%20Hall,%20Shiyong%20Tang%20___J.2.%20Harmony%20Through%20the%20Generations%20Hall/000982.jpg" alt="000982.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="000983.jpeg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/J.Harmony%20Through%20Generations%20Hall,%20Shiyong%20Tang%20___J.2.%20Harmony%20Through%20the%20Generations%20Hall/000983.jpeg" alt="000983.jpeg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="000984.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/J.Harmony%20Through%20Generations%20Hall,%20Shiyong%20Tang%20___J.2.%20Harmony%20Through%20the%20Generations%20Hall/000984.jpg" alt="000984.jpg" onClick={this.on.bind(this)}></img></div>


        <div className="back-button">
        <p><b><a href = "https://chinalocalhistory.github.io/ChinaLocalHistory/Lu/menu/Lu.html">&rarr;</a></b></p></div>
        </div>
        );
    }

    if(pageScene=="J3"){
     
      return(
        <div className="gallery-row">

         <div className="gallery-column">
         <img id="An%20overview%20of%20the%20eastern%20wall.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/J.Harmony%20Through%20Generations%20Hall,%20Shiyong%20Tang%20___J.3.%20Harmony%20Through%20the%20Generations%20Middle%20Hall/An%20overview%20of%20the%20eastern%20wall.jpg" alt="An%20overview%20of%20the%20eastern%20wall.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="he%20bracket%20of%20the%20hall.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/J.Harmony%20Through%20Generations%20Hall,%20Shiyong%20Tang%20___J.3.%20Harmony%20Through%20the%20Generations%20Middle%20Hall/he%20bracket%20of%20the%20hall.jpg" alt="he%20bracket%20of%20the%20hall.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="Introduction%20to%20the%20Middle%20Hall.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/J.Harmony%20Through%20Generations%20Hall,%20Shiyong%20Tang%20___J.3.%20Harmony%20Through%20the%20Generations%20Middle%20Hall/Introduction%20to%20the%20Middle%20Hall.jpg" alt="Introduction%20to%20the%20Middle%20Hall.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="The%20overview%20of%20the%20courtyard%20from%20the%20northwestern%20corner%20.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/J.Harmony%20Through%20Generations%20Hall,%20Shiyong%20Tang%20___J.3.%20Harmony%20Through%20the%20Generations%20Middle%20Hall/The%20overview%20of%20the%20courtyard%20from%20the%20northwestern%20corner%20.jpg" alt="The%20overview%20of%20the%20courtyard%20from%20the%20northwestern%20corner%20.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="The%20western%20room.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/J.Harmony%20Through%20Generations%20Hall,%20Shiyong%20Tang%20___J.3.%20Harmony%20Through%20the%20Generations%20Middle%20Hall/The%20western%20room.jpg" alt="The%20western%20room.jpg" onClick={this.on.bind(this)}></img></div>


        <div className="back-button">
        <p><b><a href = "https://chinalocalhistory.github.io/ChinaLocalHistory/Lu/menu/Lu.html">&rarr;</a></b></p></div>
        </div>
        );
    }

    if(pageScene=="J4"){
     
      return(
        <div className="gallery-row">

         <div className="gallery-column">
         <img id="Ancestral%20portrait%20and%20offerings.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/J.Harmony%20Through%20Generations%20Hall,%20Shiyong%20Tang%20___J.4.%20Harmony%20Through%20the%20Generations%20Back%20Hall/Ancestral%20portrait%20and%20offerings.jpg" alt="Ancestral%20portrait%20and%20offerings.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="Chinese%20introduction%20to%20the%20offerings.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/J.Harmony%20Through%20Generations%20Hall,%20Shiyong%20Tang%20___J.4.%20Harmony%20Through%20the%20Generations%20Back%20Hall/Chinese%20introduction%20to%20the%20offerings.jpg" alt="Chinese%20introduction%20to%20the%20offerings.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="Hallway%20of%20the%20eastern%20wing.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/J.Harmony%20Through%20Generations%20Hall,%20Shiyong%20Tang%20___J.4.%20Harmony%20Through%20the%20Generations%20Back%20Hall/Hallway%20of%20the%20eastern%20wing.jpg" alt="Hallway%20of%20the%20eastern%20wing.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="Introduction%20to%20the%20back%20hall.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/J.Harmony%20Through%20Generations%20Hall,%20Shiyong%20Tang%20___J.4.%20Harmony%20Through%20the%20Generations%20Back%20Hall/Introduction%20to%20the%20back%20hall.jpg" alt="Introduction%20to%20the%20back%20hall.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="Stone%20carving%20of%20the%20wall.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/J.Harmony%20Through%20Generations%20Hall,%20Shiyong%20Tang%20___J.4.%20Harmony%20Through%20the%20Generations%20Back%20Hall/Stone%20carving%20of%20the%20wall.jpg" alt="Stone%20carving%20of%20the%20wall.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="The%20ancestral%20portrait.%20One%20pair%20of%20the%20couplets%20say.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/J.Harmony%20Through%20Generations%20Hall,%20Shiyong%20Tang%20___J.4.%20Harmony%20Through%20the%20Generations%20Back%20Hall/The%20ancestral%20portrait.%20One%20pair%20of%20the%20couplets%20say.jpg" alt="The%20ancestral%20portrait.%20One%20pair%20of%20the%20couplets%20say.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="The%20bracket%20on%20the%20left%20side%20of%20the%20hall.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/J.Harmony%20Through%20Generations%20Hall,%20Shiyong%20Tang%20___J.4.%20Harmony%20Through%20the%20Generations%20Back%20Hall/The%20bracket%20on%20the%20left%20side%20of%20the%20hall.jpg" alt="The%20bracket%20on%20the%20left%20side%20of%20the%20hall.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="The%20lattice%20of%20the%20window.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/J.Harmony%20Through%20Generations%20Hall,%20Shiyong%20Tang%20___J.4.%20Harmony%20Through%20the%20Generations%20Back%20Hall/The%20lattice%20of%20the%20window.jpg" alt="The%20lattice%20of%20the%20window.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="The%20lattice%20of%20the%20window2.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/J.Harmony%20Through%20Generations%20Hall,%20Shiyong%20Tang%20___J.4.%20Harmony%20Through%20the%20Generations%20Back%20Hall/The%20lattice%20of%20the%20window2.jpg" alt="The%20lattice%20of%20the%20window2.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="The%20stone%20base%20of%20the%20pillar.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/J.Harmony%20Through%20Generations%20Hall,%20Shiyong%20Tang%20___J.4.%20Harmony%20Through%20the%20Generations%20Back%20Hall/The%20stone%20base%20of%20the%20pillar.jpg" alt="The%20stone%20base%20of%20the%20pillar.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="The%20stone%20pavement%20of%20the%20courtyard.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/J.Harmony%20Through%20Generations%20Hall,%20Shiyong%20Tang%20___J.4.%20Harmony%20Through%20the%20Generations%20Back%20Hall/The%20stone%20pavement%20of%20the%20courtyard.jpg" alt="The%20stone%20pavement%20of%20the%20courtyard.jpg" onClick={this.on.bind(this)}></img></div>


        <div className="back-button">
        <p><b><a href = "https://chinalocalhistory.github.io/ChinaLocalHistory/Lu/menu/Lu.html">&rarr;</a></b></p></div>
        </div>

        );
    }

    if(pageScene=="K"){
     
      return(
        <div className="gallery-row">

           <div className="gallery-column">
           <img id="The%20stone%20pavement.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/K.%20Virtue%20Through%20the%20Generations%20Gateway,%20Shide%20Menfang%20____/The%20stone%20pavement.jpg" alt="The%20stone%20pavement.jpg" onClick={this.on.bind(this)}></img></div>
           <div className="gallery-column">
           <img id="The%20tiles%20of%20the%20roof.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/K.%20Virtue%20Through%20the%20Generations%20Gateway,%20Shide%20Menfang%20____/The%20tiles%20of%20the%20roof.jpg" alt="The%20tiles%20of%20the%20roof.jpg" onClick={this.on.bind(this)}></img></div>
           <div className="gallery-column">
           <img id="The%20tiles%20of%20the%20roof2.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/K.%20Virtue%20Through%20the%20Generations%20Gateway,%20Shide%20Menfang%20____/The%20tiles%20of%20the%20roof2.jpg" alt="The%20tiles%20of%20the%20roof2.jpg" onClick={this.on.bind(this)}></img></div>
           <div className="gallery-column">
           <img id="The%20stone%20carving%20on%20the%20bottom%20of%20the%20gate%20frame.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/K.%20Virtue%20Through%20the%20Generations%20Gateway,%20Shide%20Menfang%20____/The%20stone%20carving%20on%20the%20bottom%20of%20the%20gate%20frame.jpg" alt="The%20stone%20carving%20on%20the%20bottom%20of%20the%20gate%20frame.jpg" onClick={this.on.bind(this)}></img></div>
           <div className="gallery-column">
           <img id="The%20overview%20of%20the%20gateway.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/K.%20Virtue%20Through%20the%20Generations%20Gateway,%20Shide%20Menfang%20____/The%20overview%20of%20the%20gateway.jpg" alt="The%20overview%20of%20the%20gateway.jpg" onClick={this.on.bind(this)}></img></div>
           <div className="gallery-column">
           <img id="The%20side%20door.%20The%20plaque%20on%20the%20top%20`Extraordinary%20fraternity`.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/K.%20Virtue%20Through%20the%20Generations%20Gateway,%20Shide%20Menfang%20____/The%20side%20door.%20The%20plaque%20on%20the%20top%20`Extraordinary%20fraternity`.jpg" alt="The%20side%20door.%20The%20plaque%20on%20the%20top%20`Extraordinary%20fraternity`.jpg" onClick={this.on.bind(this)}></img></div>
           <div className="gallery-column">
           <img id="Chinese%20introduction%20to%20the%20gate.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/K.%20Virtue%20Through%20the%20Generations%20Gateway,%20Shide%20Menfang%20____/Chinese%20introduction%20to%20the%20gate.jpg" alt="Chinese%20introduction%20to%20the%20gate.jpg" onClick={this.on.bind(this)}></img></div>
           <div className="gallery-column">
           <img id="English%20introduction%20to%20the%20gate.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/K.%20Virtue%20Through%20the%20Generations%20Gateway,%20Shide%20Menfang%20____/English%20introduction%20to%20the%20gate.jpg" alt="English%20introduction%20to%20the%20gate.jpg" onClick={this.on.bind(this)}></img></div>
           <div className="gallery-column">
           <img id="The%20left-hand%20side%20door.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/K.%20Virtue%20Through%20the%20Generations%20Gateway,%20Shide%20Menfang%20____/The%20left-hand%20side%20door.jpg" alt="The%20left-hand%20side%20door.jpg" onClick={this.on.bind(this)}></img></div>


          <div className="back-button">
          <p><b><a href = "https://chinalocalhistory.github.io/ChinaLocalHistory/Lu/menu/Lu.html">&rarr;</a></b></p></div>
          </div>

        );
    }

    if(pageScene=="L"){
     
      return(
        <div className="gallery-row">

         <div className="gallery-column">
         <img id="A%20sculpture%20of%20qilin.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/L.%20Surfeit%20of%20Kindness%20Hall,%20Dunyu%20Tang%20___/A%20sculpture%20of%20qilin.jpg" alt="A%20sculpture%20of%20qilin.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="A%20wooden%20wall%20displayed%20on%20the%20left-hand%20side%20of%20the%20hall.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/L.%20Surfeit%20of%20Kindness%20Hall,%20Dunyu%20Tang%20___/A%20wooden%20wall%20displayed%20on%20the%20left-hand%20side%20of%20the%20hall.jpg" alt="A%20wooden%20wall%20displayed%20on%20the%20left-hand%20side%20of%20the%20hall.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="A%20wooden%20wall%20displayed%20on%20the%20north-western%20side%20of%20the%20hall.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/L.%20Surfeit%20of%20Kindness%20Hall,%20Dunyu%20Tang%20___/A%20wooden%20wall%20displayed%20on%20the%20north-western%20side%20of%20the%20hall.jpg" alt="A%20wooden%20wall%20displayed%20on%20the%20north-western%20side%20of%20the%20hall.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="A%20wooden%20wall%20displayed%20on%20the%20north-western%20side%20of%20the%20hall3.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/L.%20Surfeit%20of%20Kindness%20Hall,%20Dunyu%20Tang%20___/A%20wooden%20wall%20displayed%20on%20the%20north-western%20side%20of%20the%20hall3.jpg" alt="A%20wooden%20wall%20displayed%20on%20the%20north-western%20side%20of%20the%20hall3.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="A%20wooden%20wall%20displayed%20on%20the%20north-western%20side%20of%20the%20hall4.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/L.%20Surfeit%20of%20Kindness%20Hall,%20Dunyu%20Tang%20___/A%20wooden%20wall%20displayed%20on%20the%20north-western%20side%20of%20the%20hall4.jpg" alt="A%20wooden%20wall%20displayed%20on%20the%20north-western%20side%20of%20the%20hall4.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="An%20overview%20of%20the%20gate.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/L.%20Surfeit%20of%20Kindness%20Hall,%20Dunyu%20Tang%20___/An%20overview%20of%20the%20gate.jpg" alt="An%20overview%20of%20the%20gate.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="An%20overview%20of%20the%20gate1.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/L.%20Surfeit%20of%20Kindness%20Hall,%20Dunyu%20Tang%20___/An%20overview%20of%20the%20gate1.jpg" alt="An%20overview%20of%20the%20gate1.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="The%20bracket%20of%20the%20hall.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/L.%20Surfeit%20of%20Kindness%20Hall,%20Dunyu%20Tang%20___/The%20bracket%20of%20the%20hall.jpg" alt="The%20bracket%20of%20the%20hall.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="The%20carvings%20of%20nine%20lions%20on%20the%20beams1.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/L.%20Surfeit%20of%20Kindness%20Hall,%20Dunyu%20Tang%20___/The%20carvings%20of%20nine%20lions%20on%20the%20beams1.jpg" alt="The%20carvings%20of%20nine%20lions%20on%20the%20beams1.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="The%20carvings%20of%20nine%20lions%20on%20the%20beams2.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/L.%20Surfeit%20of%20Kindness%20Hall,%20Dunyu%20Tang%20___/The%20carvings%20of%20nine%20lions%20on%20the%20beams2.jpg" alt="The%20carvings%20of%20nine%20lions%20on%20the%20beams2.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="The%20details%20of%20the%20carving.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/L.%20Surfeit%20of%20Kindness%20Hall,%20Dunyu%20Tang%20___/The%20details%20of%20the%20carving.jpg" alt="The%20details%20of%20the%20carving.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="The%20lion%20carvings%20on%20the%20ceiling.jpeg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/L.%20Surfeit%20of%20Kindness%20Hall,%20Dunyu%20Tang%20___/The%20lion%20carvings%20on%20the%20ceiling.jpeg" alt="The%20lion%20carvings%20on%20the%20ceiling.jpeg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="The%20overview%20of%20the%20hall.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/L.%20Surfeit%20of%20Kindness%20Hall,%20Dunyu%20Tang%20___/The%20overview%20of%20the%20hall.jpg" alt="The%20overview%20of%20the%20hall.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="The%20plaque%20`Surfeit%20of%20Kindness%20Hall`.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/L.%20Surfeit%20of%20Kindness%20Hall,%20Dunyu%20Tang%20___/The%20plaque%20`Surfeit%20of%20Kindness%20Hall`.jpg" alt="The%20plaque%20`Surfeit%20of%20Kindness%20Hall`.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="The%20stone%20pavement.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/L.%20Surfeit%20of%20Kindness%20Hall,%20Dunyu%20Tang%20___/The%20stone%20pavement.jpg" alt="The%20stone%20pavement.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="The%20wooden%20wall%20displayed%20in%20the%20hall.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/L.%20Surfeit%20of%20Kindness%20Hall,%20Dunyu%20Tang%20___/The%20wooden%20wall%20displayed%20in%20the%20hall.jpg" alt="The%20wooden%20wall%20displayed%20in%20the%20hall.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="The%20wooden%20wall%20displayed%20in%20the%20hall4.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/L.%20Surfeit%20of%20Kindness%20Hall,%20Dunyu%20Tang%20___/The%20wooden%20wall%20displayed%20in%20the%20hall4.jpg" alt="The%20wooden%20wall%20displayed%20in%20the%20hall4.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="The%20wooden%20wall%20displayed%20in%20the%20hall5.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/L.%20Surfeit%20of%20Kindness%20Hall,%20Dunyu%20Tang%20___/The%20wooden%20wall%20displayed%20in%20the%20hall5.jpg" alt="The%20wooden%20wall%20displayed%20in%20the%20hall5.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="Wooden%20doors%20on%20the%20left-hand%20side%20of%20the%20courtyard.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/L.%20Surfeit%20of%20Kindness%20Hall,%20Dunyu%20Tang%20___/Wooden%20doors%20on%20the%20left-hand%20side%20of%20the%20courtyard.jpg" alt="Wooden%20doors%20on%20the%20left-hand%20side%20of%20the%20courtyard.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="Wooden%20doors%20on%20the%20left-hand%20side%20of%20the%20courtyard1.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/L.%20Surfeit%20of%20Kindness%20Hall,%20Dunyu%20Tang%20___/Wooden%20doors%20on%20the%20left-hand%20side%20of%20the%20courtyard1.jpg" alt="Wooden%20doors%20on%20the%20left-hand%20side%20of%20the%20courtyard1.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="Wooden%20walls%20on%20the%20left-hand%20side%20of%20the%20courtyard1.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/L.%20Surfeit%20of%20Kindness%20Hall,%20Dunyu%20Tang%20___/Wooden%20walls%20on%20the%20left-hand%20side%20of%20the%20courtyard1.jpg" alt="Wooden%20walls%20on%20the%20left-hand%20side%20of%20the%20courtyard1.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="Wooden%20walls%20on%20the%20left-hand%20side%20of%20the%20courtyard2.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/L.%20Surfeit%20of%20Kindness%20Hall,%20Dunyu%20Tang%20___/Wooden%20walls%20on%20the%20left-hand%20side%20of%20the%20courtyard2.jpg" alt="Wooden%20walls%20on%20the%20left-hand%20side%20of%20the%20courtyard2.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="Wooden%20walls%20on%20the%20left-hand%20side%20of%20the%20courtyard3.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/L.%20Surfeit%20of%20Kindness%20Hall,%20Dunyu%20Tang%20___/Wooden%20walls%20on%20the%20left-hand%20side%20of%20the%20courtyard3.jpg" alt="Wooden%20walls%20on%20the%20left-hand%20side%20of%20the%20courtyard3.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="Wooden%20walls%20on%20the%20left-hand%20side%20of%20the%20courtyard4.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/L.%20Surfeit%20of%20Kindness%20Hall,%20Dunyu%20Tang%20___/Wooden%20walls%20on%20the%20left-hand%20side%20of%20the%20courtyard4.jpg" alt="Wooden%20walls%20on%20the%20left-hand%20side%20of%20the%20courtyard4.jpg" onClick={this.on.bind(this)}></img></div>


        <div className="back-button">
        <p><b><a href = "https://chinalocalhistory.github.io/ChinaLocalHistory/Lu/menu/Lu.html">&rarr;</a></b></p></div>
        </div>
        );
    }

    if(pageScene=="M"){
     
      return(
        <div className="gallery-row">

           <div className="gallery-column">
           <img id="A%20painting%20behind%20the%20plague%20of%20`Cordial%20Meetings%20Hall`.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/M.%20Cordial%20Meetings%20Hall,%20Jiahui%20Tang%20___/A%20painting%20behind%20the%20plague%20of%20`Cordial%20Meetings%20Hall`.jpg" alt="A%20painting%20behind%20the%20plague%20of%20`Cordial%20Meetings%20Hall`.jpg" onClick={this.on.bind(this)}></img></div>
           <div className="gallery-column">
           <img id="Chinese%20introduction%20to%20the%20hall.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/M.%20Cordial%20Meetings%20Hall,%20Jiahui%20Tang%20___/Chinese%20introduction%20to%20the%20hall.jpg" alt="Chinese%20introduction%20to%20the%20hall.jpg" onClick={this.on.bind(this)}></img></div>
           <div className="gallery-column">
           <img id="English%20introduction%20to%20the%20hall.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/M.%20Cordial%20Meetings%20Hall,%20Jiahui%20Tang%20___/English%20introduction%20to%20the%20hall.jpg" alt="English%20introduction%20to%20the%20hall.jpg" onClick={this.on.bind(this)}></img></div>
           <div className="gallery-column">
           <img id="The%20ceiling%20structure.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/M.%20Cordial%20Meetings%20Hall,%20Jiahui%20Tang%20___/The%20ceiling%20structure.jpg" alt="The%20ceiling%20structure.jpg" onClick={this.on.bind(this)}></img></div>
           <div className="gallery-column">
           <img id="The%20overview%20of%20the%20hall.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/M.%20Cordial%20Meetings%20Hall,%20Jiahui%20Tang%20___/The%20overview%20of%20the%20hall.jpg" alt="The%20overview%20of%20the%20hall.jpg" onClick={this.on.bind(this)}></img></div>
           <div className="gallery-column">
           <img id="The%20overview%20of%20the%20lattice%20in%20the%20middle%20of%20the%20hall.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/M.%20Cordial%20Meetings%20Hall,%20Jiahui%20Tang%20___/The%20overview%20of%20the%20lattice%20in%20the%20middle%20of%20the%20hall.jpg" alt="The%20overview%20of%20the%20lattice%20in%20the%20middle%20of%20the%20hall.jpg" onClick={this.on.bind(this)}></img></div>
           <div className="gallery-column">
           <img id="The%20plaque%20`Cordial%20Meetings`.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/M.%20Cordial%20Meetings%20Hall,%20Jiahui%20Tang%20___/The%20plaque%20`Cordial%20Meetings`.jpg" alt="The%20plaque%20`Cordial%20Meetings`.jpg" onClick={this.on.bind(this)}></img></div>
           <div className="gallery-column">
           <img id="The%20plaque%20`First%20Ranking%20Provincial%20Graduate`.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/M.%20Cordial%20Meetings%20Hall,%20Jiahui%20Tang%20___/The%20plaque%20`First%20Ranking%20Provincial%20Graduate`.jpg" alt="The%20plaque%20`First%20Ranking%20Provincial%20Graduate`.jpg" onClick={this.on.bind(this)}></img></div>
           <div className="gallery-column">
           <img id="The%20plaque%20`Metropolitan%20graduate`.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/M.%20Cordial%20Meetings%20Hall,%20Jiahui%20Tang%20___/The%20plaque%20`Metropolitan%20graduate`.jpg" alt="The%20plaque%20`Metropolitan%20graduate`.jpg" onClick={this.on.bind(this)}></img></div>
           <div className="gallery-column">
           <img id="The%20plaque%20`Provincial%20Commissioner.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/M.%20Cordial%20Meetings%20Hall,%20Jiahui%20Tang%20___/The%20plaque%20`Provincial%20Commissioner.jpg" alt="The%20plaque%20`Provincial%20Commissioner.jpg" onClick={this.on.bind(this)}></img></div>
           <div className="gallery-column">
           <img id="The%20plaque%20`Provincial%20Commissioner1.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/M.%20Cordial%20Meetings%20Hall,%20Jiahui%20Tang%20___/The%20plaque%20`Provincial%20Commissioner1.jpg" alt="The%20plaque%20`Provincial%20Commissioner1.jpg" onClick={this.on.bind(this)}></img></div>
           <div className="gallery-column">
           <img id="The%20right-hand%20part%20of%20the%20lattice.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/M.%20Cordial%20Meetings%20Hall,%20Jiahui%20Tang%20___/The%20right-hand%20part%20of%20the%20lattice.jpg" alt="The%20right-hand%20part%20of%20the%20lattice.jpg" onClick={this.on.bind(this)}></img></div>
           <div className="gallery-column">
           <img id="the%20roof%20of%20the%20northeastern%20corner.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/M.%20Cordial%20Meetings%20Hall,%20Jiahui%20Tang%20___/the%20roof%20of%20the%20northeastern%20corner.jpg" alt="the%20roof%20of%20the%20northeastern%20corner.jpg" onClick={this.on.bind(this)}></img></div>
           <div className="gallery-column">
           <img id="Wooden%20carving%20displayed%20in%20the%20hall.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/M.%20Cordial%20Meetings%20Hall,%20Jiahui%20Tang%20___/Wooden%20carving%20displayed%20in%20the%20hall.jpg" alt="Wooden%20carving%20displayed%20in%20the%20hall.jpg" onClick={this.on.bind(this)}></img></div>
           <div className="gallery-column">
           <img id="Wooden%20carving%20displayed%20in%20the%20hall1.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/M.%20Cordial%20Meetings%20Hall,%20Jiahui%20Tang%20___/Wooden%20carving%20displayed%20in%20the%20hall1.jpg" alt="Wooden%20carving%20displayed%20in%20the%20hall1.jpg" onClick={this.on.bind(this)}></img></div>
           <div className="gallery-column">
           <img id="Wooden%20carving%20displayed%20in%20the%20hall2.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/M.%20Cordial%20Meetings%20Hall,%20Jiahui%20Tang%20___/Wooden%20carving%20displayed%20in%20the%20hall2.jpg" alt="Wooden%20carving%20displayed%20in%20the%20hall2.jpg" onClick={this.on.bind(this)}></img></div>
           <div className="gallery-column">
           <img id="Wooden%20carving%20displayed%20in%20the%20hall3.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/M.%20Cordial%20Meetings%20Hall,%20Jiahui%20Tang%20___/Wooden%20carving%20displayed%20in%20the%20hall3.jpg" alt="Wooden%20carving%20displayed%20in%20the%20hall3.jpg" onClick={this.on.bind(this)}></img></div>
           <div className="gallery-column">
           <img id="Wooden%20carving%20displayed%20in%20the%20hall4.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/M.%20Cordial%20Meetings%20Hall,%20Jiahui%20Tang%20___/Wooden%20carving%20displayed%20in%20the%20hall4.jpg" alt="Wooden%20carving%20displayed%20in%20the%20hall4.jpg" onClick={this.on.bind(this)}></img></div>
           <div className="gallery-column">
           <img id="Wooden%20carving%20displayed%20in%20the%20hall5.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/M.%20Cordial%20Meetings%20Hall,%20Jiahui%20Tang%20___/Wooden%20carving%20displayed%20in%20the%20hall5.jpg" alt="Wooden%20carving%20displayed%20in%20the%20hall5.jpg" onClick={this.on.bind(this)}></img></div>


          <div className="back-button">
          <p><b><a href = "https://chinalocalhistory.github.io/ChinaLocalHistory/Lu/menu/Lu.html">&rarr;</a></b></p></div>
          </div>
        );
    }

    if(pageScene=="N1"){
     
      return(
        <div className="gallery-row">

         <div className="gallery-column">
         <img id="Brackets%20displayed%20in%20the%20hall.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/N.Virtue%20Through%20Generations%20Hall,%20Shide%20Tang%20___N.1.%20Virtue%20Through%20the%20Generations%20Back%20Hall/Brackets%20displayed%20in%20the%20hall.jpg" alt="Brackets%20displayed%20in%20the%20hall.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="Brackets%20displayed%20in%20the%20hall1.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/N.Virtue%20Through%20Generations%20Hall,%20Shide%20Tang%20___N.1.%20Virtue%20Through%20the%20Generations%20Back%20Hall/Brackets%20displayed%20in%20the%20hall1.jpg" alt="Brackets%20displayed%20in%20the%20hall1.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="Brackets%20displayed%20in%20the%20hall2.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/N.Virtue%20Through%20Generations%20Hall,%20Shide%20Tang%20___N.1.%20Virtue%20Through%20the%20Generations%20Back%20Hall/Brackets%20displayed%20in%20the%20hall2.jpg" alt="Brackets%20displayed%20in%20the%20hall2.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="The%20corner%20roof%20line%20in%20right%20corner%20of%20the%20courtyard.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/N.Virtue%20Through%20Generations%20Hall,%20Shide%20Tang%20___N.1.%20Virtue%20Through%20the%20Generations%20Back%20Hall/The%20corner%20roof%20line%20in%20right%20corner%20of%20the%20courtyard.jpg" alt="The%20corner%20roof%20line%20in%20right%20corner%20of%20the%20courtyard.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="The%20entry%20door%20to%20the%20courtyard.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/N.Virtue%20Through%20Generations%20Hall,%20Shide%20Tang%20___N.1.%20Virtue%20Through%20the%20Generations%20Back%20Hall/The%20entry%20door%20to%20the%20courtyard.jpg" alt="The%20entry%20door%20to%20the%20courtyard.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="The%20lattice%20of%20the%20window.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/N.Virtue%20Through%20Generations%20Hall,%20Shide%20Tang%20___N.1.%20Virtue%20Through%20the%20Generations%20Back%20Hall/The%20lattice%20of%20the%20window.jpg" alt="The%20lattice%20of%20the%20window.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="The%20overview%20of%20the%20hall.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/N.Virtue%20Through%20Generations%20Hall,%20Shide%20Tang%20___N.1.%20Virtue%20Through%20the%20Generations%20Back%20Hall/The%20overview%20of%20the%20hall.jpg" alt="The%20overview%20of%20the%20hall.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="The%20right%20side%20door%20to%20the%20walkway.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/N.Virtue%20Through%20Generations%20Hall,%20Shide%20Tang%20___N.1.%20Virtue%20Through%20the%20Generations%20Back%20Hall/The%20right%20side%20door%20to%20the%20walkway.jpg" alt="The%20right%20side%20door%20to%20the%20walkway.jpg" onClick={this.on.bind(this)}></img></div>


        <div className="back-button">
        <p><b><a href = "https://chinalocalhistory.github.io/ChinaLocalHistory/Lu/menu/Lu.html">&rarr;</a></b></p></div>
        </div>
        );
    }

    if(pageScene=="N2"){
     
      return(
        <div className="gallery-row">

         <div className="gallery-column">
         <img id="Chinese%20introduction%20to%20the%20hall.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/N.Virtue%20Through%20Generations%20Hall,%20Shide%20Tang%20___N.2.%20Virtue%20Through%20the%20Generations%20Main%20Hall/Chinese%20introduction%20to%20the%20hall.jpg" alt="Chinese%20introduction%20to%20the%20hall.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="English%20introduction%20to%20the%20hall.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/N.Virtue%20Through%20Generations%20Hall,%20Shide%20Tang%20___N.2.%20Virtue%20Through%20the%20Generations%20Main%20Hall/English%20introduction%20to%20the%20hall.jpg" alt="English%20introduction%20to%20the%20hall.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="The%20ancestral%20tablets.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/N.Virtue%20Through%20Generations%20Hall,%20Shide%20Tang%20___N.2.%20Virtue%20Through%20the%20Generations%20Main%20Hall/The%20ancestral%20tablets.jpg" alt="The%20ancestral%20tablets.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="The%20carved%20stone%20foundation,%20which%20probably%20is%20the%20original%20work%20from%20the%20Ming%20Dynasty.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/N.Virtue%20Through%20Generations%20Hall,%20Shide%20Tang%20___N.2.%20Virtue%20Through%20the%20Generations%20Main%20Hall/The%20carved%20stone%20foundation,%20which%20probably%20is%20the%20original%20work%20from%20the%20Ming%20Dynasty.jpg" alt="The%20carved%20stone%20foundation,%20which%20probably%20is%20the%20original%20work%20from%20the%20Ming%20Dynasty.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="The%20interior%20roof%20line%20on%20the%20left%20side%20of%20main%20hall.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/N.Virtue%20Through%20Generations%20Hall,%20Shide%20Tang%20___N.2.%20Virtue%20Through%20the%20Generations%20Main%20Hall/The%20interior%20roof%20line%20on%20the%20left%20side%20of%20main%20hall.jpg" alt="The%20interior%20roof%20line%20on%20the%20left%20side%20of%20main%20hall.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="The%20side%20garden%20of%20Virtue%20through%20the%20Generations%20Main%20hall.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/N.Virtue%20Through%20Generations%20Hall,%20Shide%20Tang%20___N.2.%20Virtue%20Through%20the%20Generations%20Main%20Hall/The%20side%20garden%20of%20Virtue%20through%20the%20Generations%20Main%20hall.jpg" alt="The%20side%20garden%20of%20Virtue%20through%20the%20Generations%20Main%20hall.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="The%20support%20beams%20on%20the%20left-hand%20side%20with%20paintings1.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/N.Virtue%20Through%20Generations%20Hall,%20Shide%20Tang%20___N.2.%20Virtue%20Through%20the%20Generations%20Main%20Hall/The%20support%20beams%20on%20the%20left-hand%20side%20with%20paintings1.jpg" alt="The%20support%20beams%20on%20the%20left-hand%20side%20with%20paintings1.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="The%20support%20beams%20on%20the%20right-hand%20side.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/N.Virtue%20Through%20Generations%20Hall,%20Shide%20Tang%20___N.2.%20Virtue%20Through%20the%20Generations%20Main%20Hall/The%20support%20beams%20on%20the%20right-hand%20side.jpg" alt="The%20support%20beams%20on%20the%20right-hand%20side.jpg" onClick={this.on.bind(this)}></img></div>


        <div className="back-button">
        <p><b><a href = "https://chinalocalhistory.github.io/ChinaLocalHistory/Lu/menu/Lu.html">&rarr;</a></b></p></div>
        </div>
        );
    }

    if(pageScene=="O"){
     
      return(
        <div className="gallery-row">

         <div className="gallery-column">
         <img id="Beam%20decoration.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/O.%20Good%20Blessings%20Hall,%20Shanqing%20Tang%20___/Beam%20decoration.jpg" alt="Beam%20decoration.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="Chinese%20introduction%20to%20the%20hall.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/O.%20Good%20Blessings%20Hall,%20Shanqing%20Tang%20___/Chinese%20introduction%20to%20the%20hall.jpg" alt="Chinese%20introduction%20to%20the%20hall.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="English%20introduction%20to%20the%20hall.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/O.%20Good%20Blessings%20Hall,%20Shanqing%20Tang%20___/English%20introduction%20to%20the%20hall.jpg" alt="English%20introduction%20to%20the%20hall.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="The%20introducion%20to%20the%20exhibiton%20of%20the%20portraits%20of%20famous%20historical%20figures%20in%20this%20hall.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/O.%20Good%20Blessings%20Hall,%20Shanqing%20Tang%20___/The%20introducion%20to%20the%20exhibiton%20of%20the%20portraits%20of%20famous%20historical%20figures%20in%20this%20hall.jpg" alt="The%20introducion%20to%20the%20exhibiton%20of%20the%20portraits%20of%20famous%20historical%20figures%20in%20this%20hall.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="The%20introducion%20to%20the%20exhibiton%20of%20the%20portraits%20of%20famous%20historical%20figures%20in%20this%20hall1.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/O.%20Good%20Blessings%20Hall,%20Shanqing%20Tang%20___/The%20introducion%20to%20the%20exhibiton%20of%20the%20portraits%20of%20famous%20historical%20figures%20in%20this%20hall1.jpg" alt="The%20introducion%20to%20the%20exhibiton%20of%20the%20portraits%20of%20famous%20historical%20figures%20in%20this%20hall1.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="The%20introducion%20to%20the%20exhibiton%20of%20the%20portraits%20of%20famous%20historical%20figures%20in%20this%20hall2.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/O.%20Good%20Blessings%20Hall,%20Shanqing%20Tang%20___/The%20introducion%20to%20the%20exhibiton%20of%20the%20portraits%20of%20famous%20historical%20figures%20in%20this%20hall2.jpg" alt="The%20introducion%20to%20the%20exhibiton%20of%20the%20portraits%20of%20famous%20historical%20figures%20in%20this%20hall2.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="The%20lantern%20displayed%20in%20the%20hall.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/O.%20Good%20Blessings%20Hall,%20Shanqing%20Tang%20___/The%20lantern%20displayed%20in%20the%20hall.jpg" alt="The%20lantern%20displayed%20in%20the%20hall.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="The%20overview%20of%20the%20hall.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/O.%20Good%20Blessings%20Hall,%20Shanqing%20Tang%20___/The%20overview%20of%20the%20hall.jpg" alt="The%20overview%20of%20the%20hall.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="The%20plaque%20`Good%20Blessings`.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/O.%20Good%20Blessings%20Hall,%20Shanqing%20Tang%20___/The%20plaque%20`Good%20Blessings`.jpg" alt="The%20plaque%20`Good%20Blessings`.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="Wall%20painting.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/O.%20Good%20Blessings%20Hall,%20Shanqing%20Tang%20___/Wall%20painting.jpg" alt="Wall%20painting.jpg" onClick={this.on.bind(this)}></img></div>


        <div className="back-button">
        <p><b><a href = "https://chinalocalhistory.github.io/ChinaLocalHistory/Lu/menu/Lu.html">&rarr;</a></b></p></div>
        </div>
        );
    }

    if(pageScene=="P"){
     
      return(
        <div className="gallery-row">

           <div className="gallery-column">
           <img id="A%20millstone%20in%20the%20courtyard.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/P.%20Pleasant%20Gatherings%20Hall,%20Dunxu%20Tang%20___/A%20millstone%20in%20the%20courtyard.jpg" alt="A%20millstone%20in%20the%20courtyard.jpg" onClick={this.on.bind(this)}></img></div>
           <div className="gallery-column">
           <img id="Chinese%20introduction%20to%20the%20hall.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/P.%20Pleasant%20Gatherings%20Hall,%20Dunxu%20Tang%20___/Chinese%20introduction%20to%20the%20hall.jpg" alt="Chinese%20introduction%20to%20the%20hall.jpg" onClick={this.on.bind(this)}></img></div>
           <div className="gallery-column">
           <img id="English%20introduction%20to%20the%20hall.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/P.%20Pleasant%20Gatherings%20Hall,%20Dunxu%20Tang%20___/English%20introduction%20to%20the%20hall.jpg" alt="English%20introduction%20to%20the%20hall.jpg" onClick={this.on.bind(this)}></img></div>
           <div className="gallery-column">
           <img id="The%20beam%20structure.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/P.%20Pleasant%20Gatherings%20Hall,%20Dunxu%20Tang%20___/The%20beam%20structure.jpg" alt="The%20beam%20structure.jpg" onClick={this.on.bind(this)}></img></div>
           <div className="gallery-column">
           <img id="The%20bracket%20with%20a%20lion%20head.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/P.%20Pleasant%20Gatherings%20Hall,%20Dunxu%20Tang%20___/The%20bracket%20with%20a%20lion%20head.jpg" alt="The%20bracket%20with%20a%20lion%20head.jpg" onClick={this.on.bind(this)}></img></div>
           <div className="gallery-column">
           <img id="The%20overview%20of%20the%20hall.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/P.%20Pleasant%20Gatherings%20Hall,%20Dunxu%20Tang%20___/The%20overview%20of%20the%20hall.jpg" alt="The%20overview%20of%20the%20hall.jpg" onClick={this.on.bind(this)}></img></div>
           <div className="gallery-column">
           <img id="The%20plaque%20`Pleasant%20Gatherings`.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/P.%20Pleasant%20Gatherings%20Hall,%20Dunxu%20Tang%20___/The%20plaque%20`Pleasant%20Gatherings`.jpg" alt="The%20plaque%20`Pleasant%20Gatherings`.jpg" onClick={this.on.bind(this)}></img></div>
           <div className="gallery-column">
           <img id="The%20side%20room.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/P.%20Pleasant%20Gatherings%20Hall,%20Dunxu%20Tang%20___/The%20side%20room.jpg" alt="The%20side%20room.jpg" onClick={this.on.bind(this)}></img></div>
           <div className="gallery-column">
           <img id="The%20southeastern%20corner%20of%20the%20courtyard.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/P.%20Pleasant%20Gatherings%20Hall,%20Dunxu%20Tang%20___/The%20southeastern%20corner%20of%20the%20courtyard.jpg" alt="The%20southeastern%20corner%20of%20the%20courtyard.jpg" onClick={this.on.bind(this)}></img></div>


          <div className="back-button">
          <p><b><a href = "https://chinalocalhistory.github.io/ChinaLocalHistory/Lu/menu/Lu.html">&rarr;</a></b></p></div>
          </div>
        );
    }

    if(pageScene=="Q1"){
     
      return(
        <div className="gallery-row">

         <div className="gallery-column">
         <img id="Chinese%20introduction%20to%20the%20hall.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/Q.%20Planting%20Virtue%20Hall,%20Shude%20Tang___Q.1.%20Planting%20Virue%20Front%20Hall/Chinese%20introduction%20to%20the%20hall.jpg" alt="Chinese%20introduction%20to%20the%20hall.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="English%20introduction%20to%20the%20hall.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/Q.%20Planting%20Virtue%20Hall,%20Shude%20Tang___Q.1.%20Planting%20Virue%20Front%20Hall/English%20introduction%20to%20the%20hall.jpg" alt="English%20introduction%20to%20the%20hall.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="Front%20gate%20of%20Planting%20Virue%20Front%20Hall.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/Q.%20Planting%20Virtue%20Hall,%20Shude%20Tang___Q.1.%20Planting%20Virue%20Front%20Hall/Front%20gate%20of%20Planting%20Virue%20Front%20Hall.jpg" alt="Front%20gate%20of%20Planting%20Virue%20Front%20Hall.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="Front%20gate%20of%20Planting%20Virue%20Front%20Hall1.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/Q.%20Planting%20Virtue%20Hall,%20Shude%20Tang___Q.1.%20Planting%20Virue%20Front%20Hall/Front%20gate%20of%20Planting%20Virue%20Front%20Hall1.jpg" alt="Front%20gate%20of%20Planting%20Virue%20Front%20Hall1.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="Introduction%20to%20the%20stone%20steles%20and%20inscriptions%20displayed%20in%20the%20hall.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/Q.%20Planting%20Virtue%20Hall,%20Shude%20Tang___Q.1.%20Planting%20Virue%20Front%20Hall/Introduction%20to%20the%20stone%20steles%20and%20inscriptions%20displayed%20in%20the%20hall.jpg" alt="Introduction%20to%20the%20stone%20steles%20and%20inscriptions%20displayed%20in%20the%20hall.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="Stone%20steles.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/Q.%20Planting%20Virtue%20Hall,%20Shude%20Tang___Q.1.%20Planting%20Virue%20Front%20Hall/Stone%20steles.jpg" alt="Stone%20steles.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="Stone%20steles1.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/Q.%20Planting%20Virtue%20Hall,%20Shude%20Tang___Q.1.%20Planting%20Virue%20Front%20Hall/Stone%20steles1.jpg" alt="Stone%20steles1.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="Stone%20steles2.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/Q.%20Planting%20Virtue%20Hall,%20Shude%20Tang___Q.1.%20Planting%20Virue%20Front%20Hall/Stone%20steles2.jpg" alt="Stone%20steles2.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="Stone%20steles3.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/Q.%20Planting%20Virtue%20Hall,%20Shude%20Tang___Q.1.%20Planting%20Virue%20Front%20Hall/Stone%20steles3.jpg" alt="Stone%20steles3.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="Stone%20steles4.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/Q.%20Planting%20Virtue%20Hall,%20Shude%20Tang___Q.1.%20Planting%20Virue%20Front%20Hall/Stone%20steles4.jpg" alt="Stone%20steles4.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="Stone%20steles5.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/Q.%20Planting%20Virtue%20Hall,%20Shude%20Tang___Q.1.%20Planting%20Virue%20Front%20Hall/Stone%20steles5.jpg" alt="Stone%20steles5.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="Stone%20steles6.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/Q.%20Planting%20Virtue%20Hall,%20Shude%20Tang___Q.1.%20Planting%20Virue%20Front%20Hall/Stone%20steles6.jpg" alt="Stone%20steles6.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="Stone%20steles7.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/Q.%20Planting%20Virtue%20Hall,%20Shude%20Tang___Q.1.%20Planting%20Virue%20Front%20Hall/Stone%20steles7.jpg" alt="Stone%20steles7.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="The%20beam%20structure%20of%20the%20front%20hall.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/Q.%20Planting%20Virtue%20Hall,%20Shude%20Tang___Q.1.%20Planting%20Virue%20Front%20Hall/The%20beam%20structure%20of%20the%20front%20hall.jpg" alt="The%20beam%20structure%20of%20the%20front%20hall.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="The%20bracket%20on%20the%20right-hand%20side.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/Q.%20Planting%20Virtue%20Hall,%20Shude%20Tang___Q.1.%20Planting%20Virue%20Front%20Hall/The%20bracket%20on%20the%20right-hand%20side.jpg" alt="The%20bracket%20on%20the%20right-hand%20side.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="The%20right-hand%20side%20doorway%20of%20the%20hall.%20The%20top%20plaque%20`Rising%20phoenix`.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/Q.%20Planting%20Virtue%20Hall,%20Shude%20Tang___Q.1.%20Planting%20Virue%20Front%20Hall/The%20right-hand%20side%20doorway%20of%20the%20hall.%20The%20top%20plaque%20`Rising%20phoenix`.jpg" alt="The%20right-hand%20side%20doorway%20of%20the%20hall.%20The%20top%20plaque%20`Rising%20phoenix`.jpg" onClick={this.on.bind(this)}></img></div>


        <div className="back-button">
        <p><b><a href = "https://chinalocalhistory.github.io/ChinaLocalHistory/Lu/menu/Lu.html">&rarr;</a></b></p></div>
        </div>
        );
    }

    if(pageScene=="Q2"){
     
      return(
        <div className="gallery-row">

         <div className="gallery-column">
         <img id="Chinese%20introduction%20to%20the%20hall.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/Q.%20Planting%20Virtue%20Hall,%20Shude%20Tang___Q.2.%20Planting%20Virue%20Hall/Chinese%20introduction%20to%20the%20hall.jpg" alt="Chinese%20introduction%20to%20the%20hall.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="English%20introduction%20to%20the%20hall.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/Q.%20Planting%20Virtue%20Hall,%20Shude%20Tang___Q.2.%20Planting%20Virue%20Hall/English%20introduction%20to%20the%20hall.jpg" alt="English%20introduction%20to%20the%20hall.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="The%20beam%20structure%20of%20the%20hall.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/Q.%20Planting%20Virtue%20Hall,%20Shude%20Tang___Q.2.%20Planting%20Virue%20Hall/The%20beam%20structure%20of%20the%20hall.jpg" alt="The%20beam%20structure%20of%20the%20hall.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="The%20beam%20structure%20of%20the%20hall1.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/Q.%20Planting%20Virtue%20Hall,%20Shude%20Tang___Q.2.%20Planting%20Virue%20Hall/The%20beam%20structure%20of%20the%20hall1.jpg" alt="The%20beam%20structure%20of%20the%20hall1.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="The%20overview%20of%20the%20main%20hall.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/Q.%20Planting%20Virtue%20Hall,%20Shude%20Tang___Q.2.%20Planting%20Virue%20Hall/The%20overview%20of%20the%20main%20hall.jpg" alt="The%20overview%20of%20the%20main%20hall.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="The%20overview%20of%20the%20main%20hall1.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/Q.%20Planting%20Virtue%20Hall,%20Shude%20Tang___Q.2.%20Planting%20Virue%20Hall/The%20overview%20of%20the%20main%20hall1.jpg" alt="The%20overview%20of%20the%20main%20hall1.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="The%20overview%20of%20the%20main%20hall2.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/Q.%20Planting%20Virtue%20Hall,%20Shude%20Tang___Q.2.%20Planting%20Virue%20Hall/The%20overview%20of%20the%20main%20hall2.jpg" alt="The%20overview%20of%20the%20main%20hall2.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="The%20western%20side%20of%20the%20hall.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/Q.%20Planting%20Virtue%20Hall,%20Shude%20Tang___Q.2.%20Planting%20Virue%20Hall/The%20western%20side%20of%20the%20hall.jpg" alt="The%20western%20side%20of%20the%20hall.jpg" onClick={this.on.bind(this)}></img></div>


        <div className="back-button">
        <p><b><a href = "https://chinalocalhistory.github.io/ChinaLocalHistory/Lu/menu/Lu.html">&rarr;</a></b></p></div>
        </div>
        );
    }

    if(pageScene=="Q3"){
     
      return(
        <div className="gallery-row">

         <div className="gallery-column">
         <img id="A%20bracket%20with%20a%20god%20riding%20a%20lion%20as%20an%20opera%20show.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/Q.%20Planting%20Virtue%20Hall,%20Shude%20Tang___Q.3.%20Planting%20Virtue%20Back%20Hall/A%20bracket%20with%20a%20god%20riding%20a%20lion%20as%20an%20opera%20show.jpg" alt="A%20bracket%20with%20a%20god%20riding%20a%20lion%20as%20an%20opera%20show.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="A%20side%20doorway%20on%20the%20eastern%20side%20of%20the%20hall.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/Q.%20Planting%20Virtue%20Hall,%20Shude%20Tang___Q.3.%20Planting%20Virtue%20Back%20Hall/A%20side%20doorway%20on%20the%20eastern%20side%20of%20the%20hall.jpg" alt="A%20side%20doorway%20on%20the%20eastern%20side%20of%20the%20hall.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="A%20side%20doorway%20on%20the%20western%20side%20of%20the%20hall..jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/Q.%20Planting%20Virtue%20Hall,%20Shude%20Tang___Q.3.%20Planting%20Virtue%20Back%20Hall/A%20side%20doorway%20on%20the%20western%20side%20of%20the%20hall..jpg" alt="A%20side%20doorway%20on%20the%20western%20side%20of%20the%20hall..jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="Chinese%20introduction%20to%20the%20hall.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/Q.%20Planting%20Virtue%20Hall,%20Shude%20Tang___Q.3.%20Planting%20Virtue%20Back%20Hall/Chinese%20introduction%20to%20the%20hall.jpg" alt="Chinese%20introduction%20to%20the%20hall.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="The%20overview%20of%20the%20hall.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/Q.%20Planting%20Virtue%20Hall,%20Shude%20Tang___Q.3.%20Planting%20Virtue%20Back%20Hall/The%20overview%20of%20the%20hall.jpg" alt="The%20overview%20of%20the%20hall.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="The%20overview%20of%20the%20hall1.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/Q.%20Planting%20Virtue%20Hall,%20Shude%20Tang___Q.3.%20Planting%20Virtue%20Back%20Hall/The%20overview%20of%20the%20hall1.jpg" alt="The%20overview%20of%20the%20hall1.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="The%20overview%20of%20the%20hall2.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/Q.%20Planting%20Virtue%20Hall,%20Shude%20Tang___Q.3.%20Planting%20Virtue%20Back%20Hall/The%20overview%20of%20the%20hall2.jpg" alt="The%20overview%20of%20the%20hall2.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="The%20overview%20of%20the%20hall3.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/Q.%20Planting%20Virtue%20Hall,%20Shude%20Tang___Q.3.%20Planting%20Virtue%20Back%20Hall/The%20overview%20of%20the%20hall3.jpg" alt="The%20overview%20of%20the%20hall3.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="Tiles%20on%20the%20wall%20of%20the%20courtyard.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/Q.%20Planting%20Virtue%20Hall,%20Shude%20Tang___Q.3.%20Planting%20Virtue%20Back%20Hall/Tiles%20on%20the%20wall%20of%20the%20courtyard.jpg" alt="Tiles%20on%20the%20wall%20of%20the%20courtyard.jpg" onClick={this.on.bind(this)}></img></div>


        <div className="back-button">
        <p><b><a href = "https://chinalocalhistory.github.io/ChinaLocalHistory/Lu/menu/Lu.html">&rarr;</a></b></p></div>
        </div>
        );
    }

    if(pageScene=="R"){
     
      return(
        <div className="gallery-row">

         <div className="gallery-column">
         <img id="Chinese%20translation%20to%20the%20hall.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/R.%20East%20Chanting%20Hall,%20Dongyin%20Tang%20___/Chinese%20translation%20to%20the%20hall.jpg" alt="Chinese%20translation%20to%20the%20hall.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="English%20introduction%20to%20the%20hall.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/R.%20East%20Chanting%20Hall,%20Dongyin%20Tang%20___/English%20introduction%20to%20the%20hall.jpg" alt="English%20introduction%20to%20the%20hall.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="Inside%20overview%20of%20the%20hall.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/R.%20East%20Chanting%20Hall,%20Dongyin%20Tang%20___/Inside%20overview%20of%20the%20hall.jpg" alt="Inside%20overview%20of%20the%20hall.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="Inside%20overview%20of%20the%20hall1.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/R.%20East%20Chanting%20Hall,%20Dongyin%20Tang%20___/Inside%20overview%20of%20the%20hall1.jpg" alt="Inside%20overview%20of%20the%20hall1.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="The%20beam%20structure%20and%20the%20carving%20of%20the%20beam.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/R.%20East%20Chanting%20Hall,%20Dongyin%20Tang%20___/The%20beam%20structure%20and%20the%20carving%20of%20the%20beam.jpg" alt="The%20beam%20structure%20and%20the%20carving%20of%20the%20beam.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="The%20beam%20structure%20and%20the%20carving%20of%20the%20beam1.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/R.%20East%20Chanting%20Hall,%20Dongyin%20Tang%20___/The%20beam%20structure%20and%20the%20carving%20of%20the%20beam1.jpg" alt="The%20beam%20structure%20and%20the%20carving%20of%20the%20beam1.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="The%20bracket%20on%20the%20eastern%20side.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/R.%20East%20Chanting%20Hall,%20Dongyin%20Tang%20___/The%20bracket%20on%20the%20eastern%20side.jpg" alt="The%20bracket%20on%20the%20eastern%20side.jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="The%20tiles%20of%20the%20roof%20line.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/R.%20East%20Chanting%20Hall,%20Dongyin%20Tang%20___/The%20tiles%20of%20the%20roof%20line.jpg" alt="The%20tiles%20of%20the%20roof%20line.jpg" onClick={this.on.bind(this)}></img></div>


        <div className="back-button">
        <p><b><a href = "https://chinalocalhistory.github.io/ChinaLocalHistory/Lu/menu/Lu.html">&rarr;</a></b></p></div>
        </div>

        );
    }

    if(pageScene=="S2"){
     
      return(
        <div className="gallery-row">

         <div className="gallery-column">
         <img id="A%20carving%20of%20dragons%20displayed%20in%20the%20room..jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/S.%20Lotus%20Pavilion%20Academy,%20Heting%20Shuyuan-S.2.%20Lotus%20Pavilion%20Academy/A%20carving%20of%20dragons%20displayed%20in%20the%20room..jpg" alt="A%20carving%20of%20dragons%20displayed%20in%20the%20room..jpg" onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id="The%20plaque.United%20by%20marriage%20forever.jpg" src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Lu/panoramaLu/img/S.%20Lotus%20Pavilion%20Academy,%20Heting%20Shuyuan-S.2.%20Lotus%20Pavilion%20Academy/The%20plaque.United%20by%20marriage%20forever.jpg" alt="The%20plaque.United%20by%20marriage%20forever.jpg" onClick={this.on.bind(this)}></img></div>


        <div className="back-button">
        <p><b><a href = "https://chinalocalhistory.github.io/ChinaLocalHistory/Lu/menu/Lu.html">&rarr;</a></b></p></div>
        </div>

        );
}

}
     on(image) {
      var expandImg = document.getElementById("expandedImg");
      console.log(image.target.src);
      expandImg.src = image.target.src;
      document.getElementById("overlay").style.display = "block";
    }
  }