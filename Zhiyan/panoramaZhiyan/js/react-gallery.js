class ReactGallery extends React.Component {
    constructor(...args) {
      super(...args);
    }
    render() {
      if (pageScene== "A") {
      return (
    //still images in the gallery
        <div className="gallery-row">
            <div className="gallery-column">
            <img id='DSC00012.JPG' src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/img/A%20Half%20Moon%20Reservoir%2C%20Banyue%20Tang/DSC00012.JPG" alt='DSC00012.JPG' onClick={this.on.bind(this)}></img></div>
            <div className="gallery-column">
            <img id='DSC00014.JPG' src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/img/A%20Half%20Moon%20Reservoir%2C%20Banyue%20Tang/DSC00014.JPG" alt='DSC00014.JPG' onClick={this.on.bind(this)}></img></div>
            <div className="gallery-column">
            <img id='DSCN0225.JPG' src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/img/A%20Half%20Moon%20Reservoir%2C%20Banyue%20Tang/DSCN0225.JPG" alt='DSCN0225.JPG' onClick={this.on.bind(this)}></img></div>
            
            <div className="gallery-column">
            <img id='DSCN0234.JPG' src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/img/A%20Half%20Moon%20Reservoir%2C%20Banyue%20Tang/DSCN0234.JPG" alt='DSCN0234.JPG' onClick={this.on.bind(this)}></img></div>
            
            <div className="gallery-column">
            <img id='DSCN1061.JPG' src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/img/A%20Half%20Moon%20Reservoir%2C%20Banyue%20Tang/DSCN1061.JPG" alt='DSCN1061.JPG' onClick={this.on.bind(this)}></img></div>
            <div className="back-button">
            <p><b><a href = "https://chinalocalhistory.github.io/ChinaLocalHistory/Zhiyan/menu/zhiyan.html">&rarr;</a></b></p>
            </div>
        </div>
          );
  }

    if (pageScene== "B1") {
        return(
          <div className="gallery-row">
           <div className="gallery-column">
           <img id='P0002473.JPG' src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/img/B%20The%20Hall%20of%20Continuing%20Virtue%2C%20Yande%20Tang-B.1%20The%20Hall%20of%20Continuing%20Virtue%2C%20Yande%20Tang%20exterior/P0002473.JPG" alt='P0002473.JPG' onClick={this.on.bind(this)}></img></div>
           
          <div className="back-button">
          <p><b><a href = "https://chinalocalhistory.github.io/ChinaLocalHistory/Zhiyan/menu/zhiyan.html">&rarr;</a></b></p></div>
          </div> 
          );
    }

    if (pageScene== "B2") {
        return(
          <div className="gallery-row">
           <div className="gallery-column">
           <img id='P0002474.JPG' src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/img/B%20The%20Hall%20of%20Continuing%20Virtue%2C%20Yande%20Tang-B.1%20The%20Hall%20of%20Continuing%20Virtue%2C%20Yande%20Tang%20exterior/P0002474.JPG" alt='P0002474.JPG' onClick={this.on.bind(this)}></img></div>

           <div className="gallery-column">
           <img id='1-YDT%20overview%20of%20temple%20hall.JPG' src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/img/B%20The%20Hall%20of%20Continuing%20Virtue%2C%20Yande%20Tang-B.2%20The%20Hall%20of%20Continuing%20Virtue%2C%20Yande%20Tang/1-YDT%20overview%20of%20temple%20hall.JPG" alt='1-YDT%20overview%20of%20temple%20hall.JPG' onClick={this.on.bind(this)}></img></div>
           
           <div className="gallery-column">
           <img id='2-YDT%20west%20pillar%20in%20entrance%20hall.JPG' src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/img/B%20The%20Hall%20of%20Continuing%20Virtue%2C%20Yande%20Tang-B.2%20The%20Hall%20of%20Continuing%20Virtue%2C%20Yande%20Tang/2-YDT%20west%20pillar%20in%20entrance%20hall.JPG" alt='2-YDT%20west%20pillar%20in%20entrance%20hall.JPG' onClick={this.on.bind(this)}></img></div>
          
           <div className="gallery-column">
           <img id='3-YDT_renovated_beam_structure_in_entrance.JPG' src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/img/B%20The%20Hall%20of%20Continuing%20Virtue%2C%20Yande%20Tang-B.2%20The%20Hall%20of%20Continuing%20Virtue%2C%20Yande%20Tang/3-YDT_renovated_beam_structure_in_entrance.JPG" alt='3-YDT_renovated_beam_structure_in_entrance.JPG' onClick={this.on.bind(this)}></img></div>
           
           <div className="gallery-column">
           <img id='4-YDT_main_hall_sign.JPG' src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/img/B%20The%20Hall%20of%20Continuing%20Virtue%2C%20Yande%20Tang-B.2%20The%20Hall%20of%20Continuing%20Virtue%2C%20Yande%20Tang/4-YDT_main_hall_sign.JPG" alt='4-YDT_main_hall_sign.JPG' onClick={this.on.bind(this)}></img></div>
           
           <div className="gallery-column">
           <img id='5-YDT_roof_and_supporting_beam_for_main_hall.JPG' src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/img/B%20The%20Hall%20of%20Continuing%20Virtue%2C%20Yande%20Tang-B.2%20The%20Hall%20of%20Continuing%20Virtue%2C%20Yande%20Tang/5-YDT_roof_and_supporting_beam_for_main_hall.JPG" alt='5-YDT_roof_and_supporting_beam_for_main_hall.JPG' onClick={this.on.bind(this)}></img></div>
           
           <div className="gallery-column">
           <img id='6-YDT_waterway_between_entrance_hall_and_main_hall.JPG' src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/img/B%20The%20Hall%20of%20Continuing%20Virtue%2C%20Yande%20Tang-B.2%20The%20Hall%20of%20Continuing%20Virtue%2C%20Yande%20Tang/6-YDT_waterway_between_entrance_hall_and_main_hall.JPG" alt='6-YDT_waterway_between_entrance_hall_and_main_hall.JPG' onClick={this.on.bind(this)}></img></div>

           <div className="gallery-column">
           <img id='7-YDT_east_wall_decoration_of_main_hall.JPG' src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/img/B%20The%20Hall%20of%20Continuing%20Virtue%2C%20Yande%20Tang-B.2%20The%20Hall%20of%20Continuing%20Virtue%2C%20Yande%20Tang/7-YDT_east_wall_decoration_of_main_hall.JPG" alt='7-YDT_east_wall_decoration_of_main_hall.JPG' onClick={this.on.bind(this)}></img></div>
           
           <div className="gallery-column">
           <img id='8-YDT_ancestor_tablet_chest.JPG' src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/img/B%20The%20Hall%20of%20Continuing%20Virtue%2C%20Yande%20Tang-B.2%20The%20Hall%20of%20Continuing%20Virtue%2C%20Yande%20Tang/8-YDT_ancestor_tablet_chest.JPG" alt='8-YDT_ancestor_tablet_chest.JPG' onClick={this.on.bind(this)}></img></div>

           <div className="gallery-column">
           <img id='9-YDT_ancestor_tablets_inside_chest.JPG' src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/img/B%20The%20Hall%20of%20Continuing%20Virtue%2C%20Yande%20Tang-B.2%20The%20Hall%20of%20Continuing%20Virtue%2C%20Yande%20Tang/9-YDT_ancestor_tablets_inside_chest.JPG" alt='9-YDT_ancestor_tablets_inside_chest.JPG' onClick={this.on.bind(this)}></img></div>
           
           <div className="gallery-column">
           <img id='10-YDT_northwest_side_pillar_near_ancestor_tablet_chest.JPG' src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/img/B%20The%20Hall%20of%20Continuing%20Virtue%2C%20Yande%20Tang-B.2%20The%20Hall%20of%20Continuing%20Virtue%2C%20Yande%20Tang/10-YDT_northwest_side_pillar_near_ancestor_tablet_chest.JPG" alt='10-YDT_northwest_side_pillar_near_ancestor_tablet_chest.JPG' onClick={this.on.bind(this)}></img></div>

           <div className="gallery-column">
           <img id='11-YDT_east_pillar_in_main_hall.JPG' src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/img/B%20The%20Hall%20of%20Continuing%20Virtue%2C%20Yande%20Tang-B.2%20The%20Hall%20of%20Continuing%20Virtue%2C%20Yande%20Tang/11-YDT_east_pillar_in_main_hall.JPG" alt='11-YDT_east_pillar_in_main_hall.JPG' onClick={this.on.bind(this)}></img></div>
           
           <div className="gallery-column">
            <img id='DSCN0294.JPG' src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/img/A%20Half%20Moon%20Reservoir%2C%20Banyue%20Tang/DSCN0294.JPG" alt='DSCN0294.JPG' onClick={this.on.bind(this)}></img></div>

          <div className="back-button">
          <p><b><a href = "https://chinalocalhistory.github.io/ChinaLocalHistory/Zhiyan/menu/zhiyan.html">&rarr;</a></b></p></div>
          </div> 
          );
    }

    if(pageScene=="C1"){
     
      return(
        <div className="gallery-row">

        <div className="gallery-column">
        <img id='DSC00006.JPG' src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/img/C%20The%20Hall%20of%20Succeeding%20Glory,%20Chengxian%20Tang-C.1%20front%20room/DSC00006.JPG" alt='DSC00006.JPG' onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='DSC00007.JPG' src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/img/C%20The%20Hall%20of%20Succeeding%20Glory,%20Chengxian%20Tang-C.1%20front%20room/DSC00007.JPG" alt='DSC00007.JPG' onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='DSC00008.JPG' src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/img/C%20The%20Hall%20of%20Succeeding%20Glory,%20Chengxian%20Tang-C.1%20front%20room/DSC00008.JPG" alt='DSC00008.JPG' onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='DSC00009.JPG' src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/img/C%20The%20Hall%20of%20Succeeding%20Glory,%20Chengxian%20Tang-C.1%20front%20room/DSC00009.JPG" alt='DSC00009.JPG' onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='DSC00012.JPG' src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/img/C%20The%20Hall%20of%20Succeeding%20Glory,%20Chengxian%20Tang-C.1%20front%20room/DSC00012.JPG" alt='DSC00012.JPG' onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='DSC00014.JPG' src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/img/C%20The%20Hall%20of%20Succeeding%20Glory,%20Chengxian%20Tang-C.1%20front%20room/DSC00014.JPG" alt='DSC00014.JPG' onClick={this.on.bind(this)}></img></div>


        <div className="back-button">
        <p><b><a href = "https://chinalocalhistory.github.io/ChinaLocalHistory/Zhiyan/menu/zhiyan.html">&rarr;</a></b></p></div>
        </div>

        );
    }

    if(pageScene=="C2"){
     
      return(
        <div className="gallery-row">

        <div className="back-button">
        <p><b><a href = "https://chinalocalhistory.github.io/ChinaLocalHistory/Zhiyan/menu/zhiyan.html">&rarr;</a></b></p></div>        </div>

        );
    }
    if(pageScene=="D1"){
        return(
          <div className="gallery-row">

          <div className="back-button">
          <p><b><a href = "https://chinalocalhistory.github.io/ChinaLocalHistory/Zhiyan/menu/zhiyan.html">&rarr;</a></b></p></div>         </div>
         );
    }


    if(pageScene=="D2"){
      return(
        <div className="gallery-row">

        <div className="gallery-column">
        <img id='SANY0012.JPG' src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/img/D%20Entrance%20to%20the%20Hall%20of%20Promoting%20Goodness,%20Jimei%20Tang-D.2/SANY0012.JPG" alt='SANY0012.JPG' onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='SANY0013.JPG' src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/img/D%20Entrance%20to%20the%20Hall%20of%20Promoting%20Goodness,%20Jimei%20Tang-D.2/SANY0013.JPG" alt='SANY0013.JPG' onClick={this.on.bind(this)}></img></div>

        <div className="back-button">
        <p><b><a href = "https://chinalocalhistory.github.io/ChinaLocalHistory/Zhiyan/menu/zhiyan.html">&rarr;</a></b></p></div>
        </div>
        );
    }


    if(pageScene=="E1"){
      return(
        <div className="gallery-row">

         <div className="gallery-column">
         <img id='P0002465.JPG' src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/img/E%20The%20Hall%20of%20Filial%20Devotion,%20Xiaosi%20Tang-E.1%20exterior/P0002465.JPG" alt='P0002465.JPG' onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id='P0002466.JPG' src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/img/E%20The%20Hall%20of%20Filial%20Devotion,%20Xiaosi%20Tang-E.1%20exterior/P0002466.JPG" alt='P0002466.JPG' onClick={this.on.bind(this)}></img></div>


        <div className="back-button">
        <p><b><a href = "https://chinalocalhistory.github.io/ChinaLocalHistory/Zhiyan/menu/zhiyan.html">&rarr;</a></b></p></div>
        </div>
        );
    }

    if(pageScene=="E2"){
      return(
         <div className="gallery-row">

         <div className="gallery-column">
         <img id='000380.JPG' src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/img/E%20The%20Hall%20of%20Filial%20Devotion,%20Xiaosi%20Tang-E.2%20front%20hall/000380.JPG" alt='000380.JPG' onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id='000384.JPG' src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/img/E%20The%20Hall%20of%20Filial%20Devotion,%20Xiaosi%20Tang-E.2%20front%20hall/000384.JPG" alt='000384.JPG' onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id='1-XST%20view%20of%20entry%20from%20north.JPG' src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/img/E%20The%20Hall%20of%20Filial%20Devotion,%20Xiaosi%20Tang-E.2%20front%20hall/1-XST%20view%20of%20entry%20from%20north.JPG" alt='1-XST%20view%20of%20entry%20from%20north.JPG' onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id='2-XST%20main%20hall%20overhead%20signage.JPG' src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/img/E%20The%20Hall%20of%20Filial%20Devotion,%20Xiaosi%20Tang-E.2%20front%20hall/2-XST%20main%20hall%20overhead%20signage.JPG" alt='2-XST%20main%20hall%20overhead%20signage.JPG' onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id='3-XST%202nd%20sign%20facing%20north%20wall.JPG' src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/img/E%20The%20Hall%20of%20Filial%20Devotion,%20Xiaosi%20Tang-E.2%20front%20hall/3-XST%202nd%20sign%20facing%20north%20wall.JPG" alt='3-XST%202nd%20sign%20facing%20north%20wall.JPG' onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id='4-XST%20left%20pillar%20middle%20of%20north%20wall.JPG' src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/img/E%20The%20Hall%20of%20Filial%20Devotion,%20Xiaosi%20Tang-E.2%20front%20hall/4-XST%20left%20pillar%20middle%20of%20north%20wall.JPG" alt='4-XST%20left%20pillar%20middle%20of%20north%20wall.JPG' onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id='5-XST%20right%20pillar%20middle%20of%20north%20wall.JPG' src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/img/E%20The%20Hall%20of%20Filial%20Devotion,%20Xiaosi%20Tang-E.2%20front%20hall/5-XST%20right%20pillar%20middle%20of%20north%20wall.JPG" alt='5-XST%20right%20pillar%20middle%20of%20north%20wall.JPG' onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id='6-XST%20west%20wall%20beam%20structure.JPG' src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/img/E%20The%20Hall%20of%20Filial%20Devotion,%20Xiaosi%20Tang-E.2%20front%20hall/6-XST%20west%20wall%20beam%20structure.JPG" alt='6-XST%20west%20wall%20beam%20structure.JPG' onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id='11-XST%20roof%20overhang%20SW%20corner.JPG' src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/img/E%20The%20Hall%20of%20Filial%20Devotion,%20Xiaosi%20Tang-E.2%20front%20hall/11-XST%20roof%20overhang%20SW%20corner.JPG" alt='11-XST%20roof%20overhang%20SW%20corner.JPG' onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id='12-XST%20space%20between%20main%20hall%20and%20%20E%20building.JPG' src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/img/E%20The%20Hall%20of%20Filial%20Devotion%2C%20Xiaosi%20Tang-E.2%20front%20hall/12-XST%20space%20between%20main%20hall%20and%20%20E%20building.JPG" alt='12-XST%20space%20between%20main%20hall%20and%20%20E%20building.JPG' onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id='13-XSWT%20outside%20view%20of%20east%20building.JPG' src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/img/E%20The%20Hall%20of%20Filial%20Devotion,%20Xiaosi%20Tang-E.2%20front%20hall/13-XSWT%20outside%20view%20of%20east%20building.JPG" alt='13-XSWT%20outside%20view%20of%20east%20building.JPG' onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id='14-XST%20interior%20view%20of%20a%20room%20in%20east%20building.JPG' src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/img/E%20The%20Hall%20of%20Filial%20Devotion,%20Xiaosi%20Tang-E.2%20front%20hall/14-XST%20interior%20view%20of%20a%20room%20in%20east%20building.JPG" alt='14-XST%20interior%20view%20of%20a%20room%20in%20east%20building.JPG' onClick={this.on.bind(this)}></img></div>


        <div className="back-button">
        <p><b><a href = "https://chinalocalhistory.github.io/ChinaLocalHistory/Zhiyan/menu/zhiyan.html">&rarr;</a></b></p></div>
        </div>

        );
    }

    if(pageScene=="E3"){
      return(
         <div className="gallery-row">

         <div className="gallery-column">
         <img id='000458.JPG' src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/img/E%20The%20Hall%20of%20Filial%20Devotion,%20Xiaosi%20Tang-E.3%20back%20hall/000458.JPG" alt='000458.JPG' onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id='000459.JPG' src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/img/E%20The%20Hall%20of%20Filial%20Devotion,%20Xiaosi%20Tang-E.3%20back%20hall/000459.JPG" alt='000459.JPG' onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id='000460.JPG' src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/img/E%20The%20Hall%20of%20Filial%20Devotion,%20Xiaosi%20Tang-E.3%20back%20hall/000460.JPG" alt='000460.JPG' onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id='000461.JPG' src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/img/E%20The%20Hall%20of%20Filial%20Devotion%2C%20Xiaosi%20Tang-E.3%20back%20hall/000461.JPG" alt='000461.JPG' onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id='000462.JPG' src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/img/E%20The%20Hall%20of%20Filial%20Devotion,%20Xiaosi%20Tang-E.3%20back%20hall/000462.JPG" alt='000462.JPG' onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id='000463.JPG' src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/img/E%20The%20Hall%20of%20Filial%20Devotion,%20Xiaosi%20Tang-E.3%20back%20hall/000463.JPG" alt='000463.JPG' onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id='000464.JPG' src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/img/E%20The%20Hall%20of%20Filial%20Devotion,%20Xiaosi%20Tang-E.3%20back%20hall/000464.JPG" alt='000464.JPG' onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id='000465.JPG' src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/img/E%20The%20Hall%20of%20Filial%20Devotion,%20Xiaosi%20Tang-E.3%20back%20hall/000465.JPG" alt='000465.JPG' onClick={this.on.bind(this)}></img></div>
         <div className="gallery-column">
         <img id='DSC00022.JPG' src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/img/E%20The%20Hall%20of%20Filial%20Devotion,%20Xiaosi%20Tang-E.3%20back%20hall/DSC00022.JPG" alt='DSC00022.JPG' onClick={this.on.bind(this)}></img></div>

        <div className="back-button">
        <p><b><a href = "https://chinalocalhistory.github.io/ChinaLocalHistory/Zhiyan/menu/zhiyan.html">&rarr;</a></b></p></div>
        </div>

        );
    }


    if(pageScene=="F1"){
      return(
       <div className="gallery-row">

       <div className="gallery-column">
       <img id='SANY0015.JPG' src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/img/F%20The%20Hall%20of%20Abundant%20Splendor,%20Guangyu%20Tang-F.1/SANY0015.JPG" alt='SANY0015.JPG' onClick={this.on.bind(this)}></img></div>
       <div className="gallery-column">
       <img id='SANY0016.JPG' src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/img/F%20The%20Hall%20of%20Abundant%20Splendor,%20Guangyu%20Tang-F.1/SANY0016.JPG" alt='SANY0016.JPG' onClick={this.on.bind(this)}></img></div>
     
       <div className="back-button">
       <p><b><a href = "https://jw4590.github.io/TangxiCityGodTemple/panorama%20-%20Guodong/sites-links.html">&rarr;</a></b></p></div>
       </div>
     );
  }

  if(pageScene=="F2"){
    return(
       <div className="gallery-row">
       <div className="gallery-column">
       <img id='P0002468.JPG' src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/img/F%20The%20Hall%20of%20Abundant%20Splendor%2C%20Guangyu%20Tang-F.2/P0002468.JPG" alt='P0002468.JPG' onClick={this.on.bind(this)}></img></div>
       <div className="gallery-column">
       <img id='SANY0017.JPG' src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/img/F%20The%20Hall%20of%20Abundant%20Splendor%2C%20Guangyu%20Tang-F.2/SANY0017.JPG" alt='SANY0017.JPG' onClick={this.on.bind(this)}></img></div>
       <div className="gallery-column">
       <img id='SANY0018.JPG' src="https://raw.githubusercontent.com/ChinaLocalHistory/ChinaLocalHistory/main/Zhiyan/panoramaZhiyan/img/F%20The%20Hall%20of%20Abundant%20Splendor%2C%20Guangyu%20Tang-F.2/SANY0018.JPG" alt='SANY0018.JPG' onClick={this.on.bind(this)}></img></div>

     
       <div className="back-button">
       <p><b><a href = "https://jw4590.github.io/TangxiCityGodTemple/panorama%20-%20Guodong/sites-links.html">&rarr;</a></b></p></div>
       </div>);
}

}
     on(image) {
      var expandImg = document.getElementById("expandedImg");
      console.log(image.target.src);
      expandImg.src = image.target.src;
      document.getElementById("overlay").style.display = "block";
    }
  }