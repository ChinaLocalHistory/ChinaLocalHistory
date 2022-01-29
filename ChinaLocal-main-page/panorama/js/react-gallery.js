class ReactGallery extends React.Component {
    constructor(...args) {
      super(...args);
    }
    render() {
      if (pageScene== "frontGate") {
      return (
    //still images in the gallery
     <div className="gallery-row">
      <div className="gallery-column">
      <img id="Gate guardian god2" src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/front-gate/Gate%20guardian%20god .jpg" alt="Gate guardian god" onClick={this.on.bind(this)}></img>
      </div>
      <div className="gallery-column">
      <img id="Gate guardian god1" src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/front-gate/Gate%20guardian%20god.jpg" alt="Gate guardian god" onClick={this.on.bind(this)}></img>
      </div>
      <div className="gallery-column">
      <img id="City God Temple<br>城隍廟" src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/front-gate/City%20God%20Temple.jpg" alt="City God Temple" onClick={this.on.bind(this)}></img>
      </div>
      <div className="gallery-column">
      <img id="Protector of Tangxi<br>仙舟保障" src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/front-gate/Protector%20of%20Tangxi.jpg" alt="Protector of Tangxi"  onClick={this.on.bind(this)}></img>
      </div>
      <div className="gallery-column">
      <img id="Defender of Our Precious Wu<br>寳婺屏藩" src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/front-gate/Defender%20of%20our%20precious%20Wu.jpg" alt="Defender of our precious Wu"  onClick={this.on.bind(this)}></img>
      </div>
    
      <div className="back-button">
      <p><b><a href = "..\menu\index.html">&rarr;</a></b></p>
      </div>
   </div>
  );
    }
    if (pageScene== "operaStage") {
        return(
          <div className="gallery-row">

          <div className="gallery-column">
          <img id='Balcony.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Balcony.jpg" alt='Balcony.jpg'onClick={this.on.bind(this)}></img></div>
          <div className="gallery-column">
          <img id='Carved%20bracket%20and%20painted%20column.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Carved%20bracket%20and%20painted%20column.jpg" alt='Carved%20bracket%20and%20painted%20column.jpg'onClick={this.on.bind(this)}></img></div>
          <div className="gallery-column">
          <img id='Carved%20bracket%20and%20painted%20column1.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Carved%20bracket%20and%20painted%20column1.jpg" alt='Carved%20bracket%20and%20painted%20column1.jpg'onClick={this.on.bind(this)}></img></div>
          <div className="gallery-column">
          <img id='Carved,%20painted%20beams%20and%20balcony%20around%20the%20stage.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Carved,%20painted%20beams%20and%20balcony%20around%20the%20stage.jpg" alt='Carved,%20painted%20beams%20and%20balcony%20around%20the%20stage.jpg'onClick={this.on.bind(this)}></img></div>
          <div className="gallery-column">
          <img id='Carved,%20painted%20beams%20and%20balcony%20around%20the%20stage1.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Carved,%20painted%20beams%20and%20balcony%20around%20the%20stage1.jpg" alt='Carved,%20painted%20beams%20and%20balcony%20around%20the%20stage1.jpg'onClick={this.on.bind(this)}></img></div>
          <div className="gallery-column">
          <img id='Carved,%20painted%20beams%20and%20balcony%20around%20the%20stage2.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Carved,%20painted%20beams%20and%20balcony%20around%20the%20stage2.jpg" alt='Carved,%20painted%20beams%20and%20balcony%20around%20the%20stage2.jpg'onClick={this.on.bind(this)}></img></div>
          <div className="gallery-column">
          <img id='Ceiling%20and%20carved%20beams1.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Ceiling%20and%20carved%20beams1.jpg" alt='Ceiling%20and%20carved%20beams1.jpg'onClick={this.on.bind(this)}></img></div>
          <div className="gallery-column">
          <img id='Day%20Patrol.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Day%20Patrol.jpg" alt='Day%20Patrol.jpg'onClick={this.on.bind(this)}></img></div>
          <div className="gallery-column">
          <img id='Decorated%20ceiling.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Decorated%20ceiling.jpg" alt='Decorated%20ceiling.jpg'onClick={this.on.bind(this)}></img></div>
          <div className="gallery-column">
          <img id='Details%20of%20Day%20Patrol.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Details%20of%20Day%20Patrol.jpg" alt='Details%20of%20Day%20Patrol.jpg'onClick={this.on.bind(this)}></img></div>
          <div className="gallery-column">
          <img id='Entrance%20to%20the%20stage%20with%20curtain.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Entrance%20to%20the%20stage%20with%20curtain.jpg" alt='Entrance%20to%20the%20stage%20with%20curtain.jpg'onClick={this.on.bind(this)}></img></div>
          <div className="gallery-column">
          <img id='Entrance_exit%20to%20the%20stage%20with%20curtain.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Entrance_exit%20to%20the%20stage%20with%20curtain.jpg" alt='Entrance_exit%20to%20the%20stage%20with%20curtain.jpg'onClick={this.on.bind(this)}></img></div>
          <div className="gallery-column">
          <img id='Night%20Patrol.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Night%20Patrol.jpg" alt='Night%20Patrol.jpg'onClick={this.on.bind(this)}></img></div>
          <div className="gallery-column">
          <img id='Night%20Patrol1.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Night%20Patrol1.jpg" alt='Night%20Patrol1.jpg'onClick={this.on.bind(this)}></img></div>
          <div className="gallery-column">
          <img id='Night%20Patrol2.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Night%20Patrol2.jpg" alt='Night%20Patrol2.jpg'onClick={this.on.bind(this)}></img></div>
          <div className="gallery-column">
          <img id='Painted%20beams%20and%20column.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Painted%20beams%20and%20column.jpg" alt='Painted%20beams%20and%20column.jpg'onClick={this.on.bind(this)}></img></div>
          <div className="gallery-column">
          <img id='Painted%20beams%20and%20column1.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Painted%20beams%20and%20column1.jpg" alt='Painted%20beams%20and%20column1.jpg'onClick={this.on.bind(this)}></img></div>
          <div className="gallery-column">
          <img id='Painted%20beams%20and%20column2.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Painted%20beams%20and%20column2.jpg" alt='Painted%20beams%20and%20column2.jpg'onClick={this.on.bind(this)}></img></div>
          <div className="gallery-column">
          <img id='Painted%20beams%20and%20column3.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Painted%20beams%20and%20column3.jpg" alt='Painted%20beams%20and%20column3.jpg'onClick={this.on.bind(this)}></img></div>
          <div className="gallery-column">
          <img id='Painted%20beams%20and%20column4.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Painted%20beams%20and%20column4.jpg" alt='Painted%20beams%20and%20column4.jpg'onClick={this.on.bind(this)}></img></div>
          <div className="gallery-column">
          <img id='Painted%20beams%20and%20column5.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Painted%20beams%20and%20column5.jpg" alt='Painted%20beams%20and%20column5.jpg'onClick={this.on.bind(this)}></img></div>
          <div className="gallery-column">
          <img id='Panels%20with%20carvings%20on%20the%20stage.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Panels%20with%20carvings%20on%20the%20stage.jpg" alt='Panels%20with%20carvings%20on%20the%20stage.jpg'onClick={this.on.bind(this)}></img></div>
          <div className="gallery-column">
          <img id='Panels%20with%20carvings%20on%20the%20stage1.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Panels%20with%20carvings%20on%20the%20stage1.jpg" alt='Panels%20with%20carvings%20on%20the%20stage1.jpg'onClick={this.on.bind(this)}></img></div>
          <div className="gallery-column">
          <img id='Panels%20with%20carvings%20on%20the%20stage2.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Panels%20with%20carvings%20on%20the%20stage2.jpg" alt='Panels%20with%20carvings%20on%20the%20stage2.jpg'onClick={this.on.bind(this)}></img></div>
          <div className="gallery-column">
          <img id='Panels%20with%20carvings%20on%20the%20stage3.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/Panels%20with%20carvings%20on%20the%20stage3.jpg" alt='Panels%20with%20carvings%20on%20the%20stage3.jpg'onClick={this.on.bind(this)}></img></div>
          <div className="gallery-column">
          <img id='The%20temple%20shines%20again.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/opera-stage/The%20temple%20shines%20again.jpg" alt='The%20temple%20shines%20again.jpg'onClick={this.on.bind(this)}></img></div>
         
         <div className="back-button">
         <p><b><a href = "..\menu\index.html">&rarr;</a></b></p>
         </div>
         </div>);
    }
    if(pageScene=="courtyardNearStage"){
     
      return(
        <div className="gallery-row">

        <div className="gallery-column">
        <img id='Bridge%20of%20Necessity.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-stage/Bridge%20of%20Necessity.jpg" alt='Bridge%20of%20Necessity.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Bridge%20of%20Necessity1.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-stage/Bridge%20of%20Necessity1.jpg" alt='Bridge%20of%20Necessity1.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20left%20part.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-stage/Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20left%20part.jpg" alt='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20left%20part.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20left%20part1.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-stage/Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20left%20part1.jpg" alt='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20left%20part1.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20left%20part2.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-stage/Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20left%20part2.jpg" alt='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20left%20part2.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20middle%20part.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-stage/Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20middle%20part.jpg" alt='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20middle%20part.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20middle%20part1.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-stage/Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20middle%20part1.jpg" alt='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20middle%20part1.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20middle%20part2.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-stage/Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20middle%20part2.jpg" alt='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20middle%20part2.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20middle%20part3.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-stage/Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20middle%20part3.jpg" alt='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20middle%20part3.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20middle%20part4.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-stage/Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20middle%20part4.jpg" alt='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20middle%20part4.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20middle%20part5.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-stage/Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20middle%20part5.jpg" alt='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20middle%20part5.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20right%20part.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-stage/Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20right%20part.jpg" alt='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20right%20part.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20right%20part1.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-stage/Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20right%20part1.jpg" alt='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20right%20part1.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20right%20part2.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-stage/Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20right%20part2.jpg" alt='Carved%20decorations%20on%20the%20front%20side%20of%20the%20stage,%20the%20right%20part2.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='The%20remainder%20of%20an%20old%20tree,%20displayed%20in%20the%20courtyard..jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-stage/The%20remainder%20of%20an%20old%20tree,%20displayed%20in%20the%20courtyard..jpg" alt='The%20remainder%20of%20an%20old%20tree,%20displayed%20in%20the%20courtyard..jpg'onClick={this.on.bind(this)}></img></div>

        <div className="back-button">
        <p><b><a href = "..\menu\index.html">&rarr;</a></b></p>
        </div>
        </div>);
    }
    if(pageScene=="courtyardNearMainHall"){
        return(
        <div className="gallery-row">

<div className="gallery-column">
        <img id='Overview%20of%20Dragon%20King%20Temple.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/Overview%20of%20Dragon%20King%20Temple.jpg" alt='Overview%20of%20Dragon%20King%20Temple.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Overview%20of%20Having%20Children%20Sanctuary.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/Overview%20of%20Having%20Children%20Sanctuary.jpg" alt='Overview%20of%20Having%20Children%20Sanctuary.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='The%20administrative%20achievements%20of%20Song%20Yue.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/The%20administrative%20achievements%20of%20Song%20Yue.jpg" alt='The%20administrative%20achievements%20of%20Song%20Yue.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='The%20city%20is%20secured.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/The%20city%20is%20secured.jpg" alt='The%20city%20is%20secured.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='The%20customs%20are%20honest.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/The%20customs%20are%20honest.jpg" alt='The%20customs%20are%20honest.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='000066.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/000066.jpg" alt='000066.jpg' onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='000072.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/000072.jpg" alt='000072.jpg' onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='000073.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/000073.jpg" alt='000073.jpg' onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='000074.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/000074.jpg" alt='000074.jpg' onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='000075.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/000075.jpg" alt='000075.jpg' onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='000106.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/000106.jpg" alt='000106.jpg' onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='000107.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/000107.jpg" alt='000107.jpg' onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='000137.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/000137.jpg" alt='000137.jpg' onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='000142.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/000142.jpg" alt='000142.jpg' onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='000143.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/000143.jpg" alt='000143.jpg' onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='000144.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/000144.jpg" alt='000144.jpg' onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='000145.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/000145.jpg" alt='000145.jpg' onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='000146.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/000146.jpg" alt='000146.jpg' onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='000147.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/000147.jpg" alt='000147.jpg' onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='000149.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/000149.jpg" alt='000149.jpg' onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='000150.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/000150.jpg" alt='000150.jpg' onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='000154.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/000154.jpg" alt='000154.jpg' onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='000172.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/000172.jpg" alt='000172.jpg' onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='000318.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/000318.jpg" alt='000318.jpg' onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='An%20old%20stele%20of%20donation,%20displayed.%20%202.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/An%20old%20stele%20of%20donation,%20displayed.%20%202.jpg" alt='An%20old%20stele%20of%20donation,%20displayed.%20%202.jpg' onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='An%20old%20stele%20of%20donors,%20displayed..jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/An%20old%20stele%20of%20donors,%20displayed..jpg" alt='An%20old%20stele%20of%20donors,%20displayed..jpg' onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Furnace%20for%20burning%20paper.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/Furnace%20for%20burning%20paper.jpg" alt='Furnace%20for%20burning%20paper.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Furnace%20for%20burning%20sutra.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/Furnace%20for%20burning%20sutra.jpg" alt='Furnace%20for%20burning%20sutra.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Gate%20of%20the%20main%20hall.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/Gate%20of%20the%20main%20hall.jpg" alt='Gate%20of%20the%20main%20hall.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Modern%20stele%20with%20the%20names%20of%20donors%20for%20the%20renovation%20of%20the%20City%20God%20Temple..jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/Modern%20stele%20with%20the%20names%20of%20donors%20for%20the%20renovation%20of%20the%20City%20God%20Temple..jpg" alt='Modern%20stele%20with%20the%20names%20of%20donors%20for%20the%20renovation%20of%20the%20City%20God%20Temple..jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Outline%20of%20the%20temple%20history.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/courtyard-near-main-hall/Outline%20of%20the%20temple%20history.jpg" alt='Outline%20of%20the%20temple%20history.jpg'onClick={this.on.bind(this)}></img></div>
        

        <div className="back-button">
        <p><b><a href = "..\menu\index.html">&rarr;</a></b></p>
        </div>
        </div>);
    }
    if(pageScene=="dragonKingTemple"){
      return(
    <div className="gallery-row">

 <div className="gallery-column">
 <img id='Four%20dragon%20kings%20and%20the%20incense%20burner.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/dragon-king-temple/Four%20dragon%20kings%20and%20the%20incense%20burner.jpg" alt='Four%20dragon%20kings%20and%20the%20incense%20burner.jpg'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='It%20has%20command%20over%20water,%20how%20great%20the%20spirit%20power.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/dragon-king-temple/It%20has%20command%20over%20water,%20how%20great%20the%20spirit%20power.jpg" alt='It%20has%20command%20over%20water,%20how%20great%20the%20spirit%20power.jpg'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='Only%20virtue%20moves%20Heaven,%20how%20clear%20the%20dragons%20influence.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/dragon-king-temple/Only%20virtue%20moves%20Heaven,%20how%20clear%20the%20dragons%20influence.jpg" alt='Only%20virtue%20moves%20Heaven,%20how%20clear%20the%20dragons%20influence.jpg'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='Overview%20of%20the%20paintings%20on%20the%20eastern%20wall.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/dragon-king-temple/Overview%20of%20the%20paintings%20on%20the%20eastern%20wall.jpg" alt='Overview%20of%20the%20paintings%20on%20the%20eastern%20wall.jpg'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='Overview%20of%20the%20paintings%20on%20the%20eastern%20wall1.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/dragon-king-temple/Overview%20of%20the%20paintings%20on%20the%20eastern%20wall1.jpg" alt='Overview%20of%20the%20paintings%20on%20the%20eastern%20wall1.jpg'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='Overview%20of%20the%20paintings%20on%20the%20eastern%20wall2.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/dragon-king-temple/Overview%20of%20the%20paintings%20on%20the%20eastern%20wall2.jpg" alt='Overview%20of%20the%20paintings%20on%20the%20eastern%20wall2.jpg'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='Overview%20of%20the%20paintings%20on%20the%20western%20wall.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/dragon-king-temple/Overview%20of%20the%20paintings%20on%20the%20western%20wall.jpg" alt='Overview%20of%20the%20paintings%20on%20the%20western%20wall.jpg'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='Overview%20of%20the%20paintings%20on%20the%20western%20wall1.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/dragon-king-temple/Overview%20of%20the%20paintings%20on%20the%20western%20wall1.jpg" alt='Overview%20of%20the%20paintings%20on%20the%20western%20wall1.jpg'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='Overview%20of%20the%20paintings%20on%20the%20western%20wall2.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/dragon-king-temple/Overview%20of%20the%20paintings%20on%20the%20western%20wall2.jpg" alt='Overview%20of%20the%20paintings%20on%20the%20western%20wall2.jpg'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='Painting%20depicting.eight%20Immortals%20crossing%20the%20sea.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/dragon-king-temple/Painting%20depicting.eight%20Immortals%20crossing%20the%20sea.jpg" alt='Painting%20depicting.eight%20Immortals%20crossing%20the%20sea.jpg'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='The%20Dragon%20King%20of%20the%20Eastern%20Seas.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/dragon-king-temple/The%20Dragon%20King%20of%20the%20Eastern%20Seas.jpg" alt='The%20Dragon%20King%20of%20the%20Eastern%20Seas.jpg'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='The%20Dragon%20King%20of%20the%20Northern%20Seas.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/dragon-king-temple/The%20Dragon%20King%20of%20the%20Northern%20Seas.jpg" alt='The%20Dragon%20King%20of%20the%20Northern%20Seas.jpg'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='The%20Dragon%20King%20of%20the%20Southern%20Seas.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/dragon-king-temple/The%20Dragon%20King%20of%20the%20Southern%20Seas.jpg" alt='The%20Dragon%20King%20of%20the%20Southern%20Seas.jpg'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='The%20Dragon%20King%20of%20the%20Western%20Seas.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/dragon-king-temple/The%20Dragon%20King%20of%20the%20Western%20Seas.jpg" alt='The%20Dragon%20King%20of%20the%20Western%20Seas.jpg'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='The%20God%20of%20Earth.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/dragon-king-temple/The%20God%20of%20Earth.jpg" alt='The%20God%20of%20Earth.jpg'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='The%20God%20of%20Five%20Grains.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/dragon-king-temple/The%20God%20of%20Five%20Grains.jpg" alt='The%20God%20of%20Five%20Grains.jpg'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='The%20God%20of%20Rain.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/dragon-king-temple/The%20God%20of%20Rain.jpg" alt='The%20God%20of%20Rain.jpg'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='The%20God%20of%20Thunder.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/dragon-king-temple/The%20God%20of%20Thunder.jpg" alt='The%20God%20of%20Thunder.jpg'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='The%20God%20of%20Wealth.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/dragon-king-temple/The%20God%20of%20Wealth.jpg" alt='The%20God%20of%20Wealth.jpg'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='The%20God%20of%20Wind.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/dragon-king-temple/The%20God%20of%20Wind.jpg" alt='The%20God%20of%20Wind.jpg'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='The%20Goddess%20of%20Earth,%20the%20God%20of%20Longevity.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/dragon-king-temple/The%20Goddess%20of%20Earth,%20the%20God%20of%20Longevity.jpg" alt='The%20Goddess%20of%20Earth,%20the%20God%20of%20Longevity.jpg'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='The%20Goddess%20of%20Lightning.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/dragon-king-temple/The%20Goddess%20of%20Lightning.jpg" alt='The%20Goddess%20of%20Lightning.jpg'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='The%20oceans%20have%20calmed,%20the%20rivers%20have%20cleared;%20the%20world%20is%20at%20peace.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/dragon-king-temple/The%20oceans%20have%20calmed,%20the%20rivers%20have%20cleared;%20the%20world%20is%20at%20peace.jpg" alt='The%20oceans%20have%20calmed,%20the%20rivers%20have%20cleared;%20the%20world%20is%20at%20peace.jpg'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='The%20wind%20has%20softened,%20the%20rain%20is%20gentle,%20the%20people%20are%20happy.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/dragon-king-temple/The%20wind%20has%20softened,%20the%20rain%20is%20gentle,%20the%20people%20are%20happy.jpg" alt='The%20wind%20has%20softened,%20the%20rain%20is%20gentle,%20the%20people%20are%20happy.jpg'onClick={this.on.bind(this)}></img></div>

<div className="back-button">
<p><b><a href = "..\menu\index.html">&rarr;</a></b></p>
</div>
</div>);
    }
    if(pageScene=="bearingChildrenCloister"){
      return(
    <div className="gallery-row">

 <div className="gallery-column">
 <img id='000132.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/bearing-children-cloister/000132.jpg" alt='000132.jpg'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='Ceiling%20painting%20above%20Guanyin.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/bearing-children-cloister/Ceiling%20painting%20above%20Guanyin.jpg" alt='Ceiling%20painting%20above%20Guanyin.jpg'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='Guanyi%20female%20acolyte,%20the%20Naga%20daughter.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/bearing-children-cloister/Guanyi%20female%20acolyte,%20the%20Naga%20daughter.jpg" alt='Guanyi%20female%20acolyte,%20the%20Naga%20daughter.jpg'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='Guanyi%20male%20acolyte,%20Shancai.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/bearing-children-cloister/Guanyi%20male%20acolyte,%20Shancai.jpg" alt='Guanyi%20male%20acolyte,%20Shancai.jpg'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='Guanyin%20(Goddess%20of%20Mercy)%20Giver%20of%20Children.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/bearing-children-cloister/Guanyin%20(Goddess%20of%20Mercy)%20Giver%20of%20Children.jpg" alt='Guanyin%20(Goddess%20of%20Mercy)%20Giver%20of%20Children.jpg'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='May%20the%20virtues%20planted%20in%20the%20heart%20at%20this%20sanctuary%20bring%20blessedness%20and%20wisdom%20to%20the%20children.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/bearing-children-cloister/May%20the%20virtues%20planted%20in%20the%20heart%20at%20this%20sanctuary%20bring%20blessedness%20and%20wisdom%20to%20the%20children.jpg" alt='May%20the%20virtues%20planted%20in%20the%20heart%20at%20this%20sanctuary%20bring%20blessedness%20and%20wisdom%20to%20the%20children.jpg'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='Part%20of%20Eighteen%20Arhats.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/bearing-children-cloister/Part%20of%20Eighteen%20Arhats.jpg" alt='Part%20of%20Eighteen%20Arhats.jpg'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='Part%20of%20Eighteen%20Arhats2.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/bearing-children-cloister/Part%20of%20Eighteen%20Arhats2.jpg" alt='Part%20of%20Eighteen%20Arhats2.jpg'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='Part%20of%20Eighteen%20Arhats3.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/bearing-children-cloister/Part%20of%20Eighteen%20Arhats3.jpg" alt='Part%20of%20Eighteen%20Arhats3.jpg'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='Part%20of%20Eighteen%20Arhats4.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/bearing-children-cloister/Part%20of%20Eighteen%20Arhats4.jpg" alt='Part%20of%20Eighteen%20Arhats4.jpg'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='Part%20of%20Eighteen%20Arhats5.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/bearing-children-cloister/Part%20of%20Eighteen%20Arhats5.jpg" alt='Part%20of%20Eighteen%20Arhats5.jpg'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='She%20gives%20them%20the%20children%20from%20the%20Buddha%20land%20that%20they%20might%20be%20seeds%20of%20a%20good%20family%20to%20come.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/bearing-children-cloister/She%20gives%20them%20the%20children%20from%20the%20Buddha%20land%20that%20they%20might%20be%20seeds%20of%20a%20good%20family%20to%20come.jpg" alt='She%20gives%20them%20the%20children%20from%20the%20Buddha%20land%20that%20they%20might%20be%20seeds%20of%20a%20good%20family%20to%20come.jpg'onClick={this.on.bind(this)}></img></div>

<div className="back-button">
<p><b><a href = "..\menu\index.html">&rarr;</a></b></p>
</div>
</div>);
    }
    if(pageScene=="mainHallSouth"){
      return(
        <div className="gallery-row">

        <div className="gallery-column">
        <img id='Gods%20in%20charge%20of%20Bureau%20of%20Punishing%20the%20Evil.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/main-hall-south/Gods%20in%20charge%20of%20Bureau%20of%20Punishing%20the%20Evil.jpg" alt='Gods%20in%20charge%20of%20Bureau%20of%20Punishing%20the%20Evil.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Gods%20in%20charge%20of%20Bureau%20of%20Rewarding%20the%20Good.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/main-hall-south/Gods%20in%20charge%20of%20Bureau%20of%20Rewarding%20the%20Good.jpg" alt='Gods%20in%20charge%20of%20Bureau%20of%20Rewarding%20the%20Good.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Scene%20from%20Hell.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/main-hall-south/Scene%20from%20Hell.jpg" alt='Scene%20from%20Hell.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Scene%20from%20Hell2.1.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/main-hall-south/Scene%20from%20Hell2.1.jpg" alt='Scene%20from%20Hell2.1.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Scene%20from%20Hell2.2.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/main-hall-south/Scene%20from%20Hell2.2.jpg" alt='Scene%20from%20Hell2.2.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Scene%20from%20Hell2.3.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/main-hall-south/Scene%20from%20Hell2.3.jpg" alt='Scene%20from%20Hell2.3.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Scene%20from%20Hell2.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/main-hall-south/Scene%20from%20Hell2.jpg" alt='Scene%20from%20Hell2.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Scene%20of%20Hell3.1.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/main-hall-south/Scene%20of%20Hell3.1.jpg" alt='Scene%20of%20Hell3.1.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Scene%20of%20Hell3.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/main-hall-south/Scene%20of%20Hell3.jpg" alt='Scene%20of%20Hell3.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Scene%20of%20Hell4.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/main-hall-south/Scene%20of%20Hell4.jpg" alt='Scene%20of%20Hell4.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Scene%20of%20legend-Buying%20Fish%20and%20Releasing%20Them%20to%20Live.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/main-hall-south/Scene%20of%20legend-Buying%20Fish%20and%20Releasing%20Them%20to%20Live.jpg" alt='Scene%20of%20legend-Buying%20Fish%20and%20Releasing%20Them%20to%20Live.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Scene%20of%20legend-Buying%20Fish%20and%20Releasing%20Them%20to%20Live1.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/main-hall-south/Scene%20of%20legend-Buying%20Fish%20and%20Releasing%20Them%20to%20Live1.jpg" alt='Scene%20of%20legend-Buying%20Fish%20and%20Releasing%20Them%20to%20Live1.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Scene%20of%20legend-Presenting%20the%20phoenix%20headdress.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/main-hall-south/Scene%20of%20legend-Presenting%20the%20phoenix%20headdress.jpg" alt='Scene%20of%20legend-Presenting%20the%20phoenix%20headdress.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Scene%20of%20legend-Secretary%20Zhang%20Gets%20Sent%20Off.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/main-hall-south/Scene%20of%20legend-Secretary%20Zhang%20Gets%20Sent%20Off.jpg" alt='Scene%20of%20legend-Secretary%20Zhang%20Gets%20Sent%20Off.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Scene%20of%20legend-Secretary%20Zhang%20Gets%20Sent%20Off1.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/main-hall-south/Scene%20of%20legend-Secretary%20Zhang%20Gets%20Sent%20Off1.jpg" alt='Scene%20of%20legend-Secretary%20Zhang%20Gets%20Sent%20Off1.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Scene%20of%20legend-Sister%20Mei%20Gets%20Justice.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/main-hall-south/Scene%20of%20legend-Sister%20Mei%20Gets%20Justice.jpg" alt='Scene%20of%20legend-Sister%20Mei%20Gets%20Justice.jpg'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Scene%20of%20legend-Sister%20Mei%20Gets%20Justice1.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/main-hall-south/Scene%20of%20legend-Sister%20Mei%20Gets%20Justice1.jpg" alt='Scene%20of%20legend-Sister%20Mei%20Gets%20Justice1.jpg'onClick={this.on.bind(this)}></img></div>
       
       
       <div className="back-button">
       <p><b><a href = "..\menu\index.html">&rarr;</a></b></p>
       </div>
       </div>);
    }
    if(pageScene=="mainHallNorth"){
      return(<div className="gallery-row">

      <div className="gallery-column">
      <img id='Bell.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/main-hall-north/Bell.jpg" alt='Bell.jpg'onClick={this.on.bind(this)}></img></div>
      <div className="gallery-column">
      <img id='Devil%20King%20in%20charge%20of%20animals%20and%20Devil%20King%20of%20Lightning.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/main-hall-north/Devil%20King%20in%20charge%20of%20animals%20and%20Devil%20King%20of%20Lightning.jpg" alt='Devil%20King%20in%20charge%20of%20animals%20and%20Devil%20King%20of%20Lightning.jpg'onClick={this.on.bind(this)}></img></div>
      <div className="gallery-column">
      <img id='Devil%20King%20of%20Great%20Puriy%20and%20Ox-head.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/main-hall-north/Devil%20King%20of%20Great%20Puriy%20and%20Ox-head.jpg" alt='Devil%20King%20of%20Great%20Puriy%20and%20Ox-head.jpg'onClick={this.on.bind(this)}></img></div>
      <div className="gallery-column">
      <img id='Devil%20King%20of%20Kind%20Heart%20and%20Devil%20King%20of%20Ingesting%20Poison.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/main-hall-north/Devil%20King%20of%20Kind%20Heart%20and%20Devil%20King%20of%20Ingesting%20Poison.jpg" alt='Devil%20King%20of%20Kind%20Heart%20and%20Devil%20King%20of%20Ingesting%20Poison.jpg'onClick={this.on.bind(this)}></img></div>
      <div className="gallery-column">
      <img id='Devil%20servant%20and%20the%20Judge.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/main-hall-north/Devil%20servant%20and%20the%20Judge.jpg" alt='Devil%20servant%20and%20the%20Judge.jpg'onClick={this.on.bind(this)}></img></div>
      <div className="gallery-column">
      <img id='Drum.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/main-hall-north/Drum.jpg" alt='Drum.jpg'onClick={this.on.bind(this)}></img></div>
      <div className="gallery-column">
      <img id='Horse-face%20and%20Devil%20King%20of%20Thousand%20Eyes.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/main-hall-north/Horse-face%20and%20Devil%20King%20of%20Thousand%20Eyes.jpg" alt='Horse-face%20and%20Devil%20King%20of%20Thousand%20Eyes.jpg'onClick={this.on.bind(this)}></img></div>
      <div className="gallery-column">
      <img id='Liu%20Guanglin%20praying%20for%20divination.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/main-hall-north/Liu%20Guanglin%20praying%20for%20divination.jpg" alt='Liu%20Guanglin%20praying%20for%20divination.jpg'onClick={this.on.bind(this)}></img></div>
      <div className="gallery-column">
      <img id='Overview%20of%20City%20God%20statue.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/main-hall-north/Overview%20of%20City%20God%20statue.jpg" alt='Overview%20of%20City%20God%20statue.jpg'onClick={this.on.bind(this)}></img></div>
      <div className="gallery-column">
      <img id='Overview%20of%20City%20God%20statue1.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/main-hall-north/Overview%20of%20City%20God%20statue1.jpg" alt='Overview%20of%20City%20God%20statue1.jpg'onClick={this.on.bind(this)}></img></div>
      <div className="gallery-column">
      <img id='Overview%20of%20City%20God%20statue2.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/main-hall-north/Overview%20of%20City%20God%20statue2.jpg" alt='Overview%20of%20City%20God%20statue2.jpg'onClick={this.on.bind(this)}></img></div>
      <div className="gallery-column">
      <img id='Overview%20of%20City%20God%20statue3.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/main-hall-north/Overview%20of%20City%20God%20statue3.jpg" alt='Overview%20of%20City%20God%20statue3.jpg'onClick={this.on.bind(this)}></img></div>
      <div className="gallery-column">
      <img id='Overview%20of%20City%20God%20statue4.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/main-hall-north/Overview%20of%20City%20God%20statue4.jpg" alt='Overview%20of%20City%20God%20statue4.jpg'onClick={this.on.bind(this)}></img></div>
      <div className="gallery-column">
      <img id='Overview%20of%20City%20God%20statue5.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/main-hall-north/Overview%20of%20City%20God%20statue5.jpg" alt='Overview%20of%20City%20God%20statue5.jpg'onClick={this.on.bind(this)}></img></div>
      <div className="gallery-column">
      <img id='Overview%20of%20City%20God%20statue6.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/main-hall-north/Overview%20of%20City%20God%20statue6.jpg" alt='Overview%20of%20City%20God%20statue6.jpg'onClick={this.on.bind(this)}></img></div>
      <div className="gallery-column">
      <img id='Overview%20of%20City%20God%20statue7.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/main-hall-north/Overview%20of%20City%20God%20statue7.jpg" alt='Overview%20of%20City%20God%20statue7.jpg'onClick={this.on.bind(this)}></img></div>
      <div className="gallery-column">
      <img id='Overview%20of%20City%20God%20statue8.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/main-hall-north/Overview%20of%20City%20God%20statue8.jpg" alt='Overview%20of%20City%20God%20statue8.jpg'onClick={this.on.bind(this)}></img></div>
      <div className="gallery-column">
      <img id='Runners.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/main-hall-north/Runners.jpg" alt='Runners.jpg'onClick={this.on.bind(this)}></img></div>
      <div className="gallery-column">
      <img id='Runners2.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/main-hall-north/Runners2.jpg" alt='Runners2.jpg'onClick={this.on.bind(this)}></img></div>
      <div className="gallery-column">
      <img id='The%20general%20on%20duty%20for%20the%20year,%20the%20general%20on%20duty%20for%20the%20day,%20and%20the%20judge.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/main-hall-north/The%20general%20on%20duty%20for%20the%20year,%20the%20general%20on%20duty%20for%20the%20day,%20and%20the%20judge.jpg" alt='The%20general%20on%20duty%20for%20the%20year,%20the%20general%20on%20duty%20for%20the%20day,%20and%20the%20judge.jpg'onClick={this.on.bind(this)}></img></div>
      <div className="gallery-column">
      <img id='White%20Impermanence%20and%20Black%20Impermanence.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/main-hall-north/White%20Impermanence%20and%20Black%20Impermanence.jpg" alt='White%20Impermanence%20and%20Black%20Impermanence.jpg'onClick={this.on.bind(this)}></img></div>
     
     
     <div className="back-button">
     <p><b><a href = "..\menu\index.html">&rarr;</a></b></p>
     </div>
     </div>);
  }
  if(pageScene=="rearHall"){
    return(<div className="gallery-row">

    <div className="gallery-column">
    <img id='City%20God%20parents%20in%20the%20middle%20accompanied%20by%20City%20God%20and%20his%20wife.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/rear-hall/City%20God%20parents%20in%20the%20middle%20accompanied%20by%20City%20God%20and%20his%20wife.jpg" alt='City%20God%20parents%20in%20the%20middle%20accompanied%20by%20City%20God%20and%20his%20wife.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='City%20God%20parents%20in%20the%20middle%20accompanied%20by%20City%20God%20and%20his%20wife1.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/rear-hall/City%20God%20parents%20in%20the%20middle%20accompanied%20by%20City%20God%20and%20his%20wife1.jpg" alt='City%20God%20parents%20in%20the%20middle%20accompanied%20by%20City%20God%20and%20his%20wife1.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='City%20God%20parents%20in%20the%20middle%20accompanied%20by%20City%20God%20and%20his%20wife2.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/rear-hall/City%20God%20parents%20in%20the%20middle%20accompanied%20by%20City%20God%20and%20his%20wife2.jpg" alt='City%20God%20parents%20in%20the%20middle%20accompanied%20by%20City%20God%20and%20his%20wife2.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='City%20God%20parents%20in%20the%20middle%20accompanied%20by%20City%20God%20and%20his%20wife3.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/rear-hall/City%20God%20parents%20in%20the%20middle%20accompanied%20by%20City%20God%20and%20his%20wife3.jpg" alt='City%20God%20parents%20in%20the%20middle%20accompanied%20by%20City%20God%20and%20his%20wife3.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Eternal%20beneficence%20left%20on%20the%20people.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/rear-hall/Eternal%20beneficence%20left%20on%20the%20people.jpg" alt='Eternal%20beneficence%20left%20on%20the%20people.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Model%20of%20the%20city%20god%20temple%20for%20parade.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/rear-hall/Model%20of%20the%20city%20god%20temple%20for%20parade.jpg" alt='Model%20of%20the%20city%20god%20temple%20for%20parade.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Model%20of%20the%20city%20god%20temple%20for%20parade1.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/rear-hall/Model%20of%20the%20city%20god%20temple%20for%20parade1.jpg" alt='Model%20of%20the%20city%20god%20temple%20for%20parade1.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Model%20of%20the%20city%20god%20temple%20for%20parade2.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/rear-hall/Model%20of%20the%20city%20god%20temple%20for%20parade2.jpg" alt='Model%20of%20the%20city%20god%20temple%20for%20parade2.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Model%20of%20the%20city%20god%20temple%20for%20parade3.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/rear-hall/Model%20of%20the%20city%20god%20temple%20for%20parade3.jpg" alt='Model%20of%20the%20city%20god%20temple%20for%20parade3.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Model%20of%20the%20city%20god%20temple%20for%20parade4.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/rear-hall/Model%20of%20the%20city%20god%20temple%20for%20parade4.jpg" alt='Model%20of%20the%20city%20god%20temple%20for%20parade4.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Placard%20for%20parade-Heaven%20knows,%20earth%20knows,%20say%20not%20that%20no%20one%20knows.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/rear-hall/Placard%20for%20parade-Heaven%20knows,%20earth%20knows,%20say%20not%20that%20no%20one%20knows.jpg" alt='Placard%20for%20parade-Heaven%20knows,%20earth%20knows,%20say%20not%20that%20no%20one%20knows.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Placard%20for%20parade-Whether%20good%20or%20bad,%20everything%20gets%20its%20proper%20reward.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama/img/rear-hall/Placard%20for%20parade-Whether%20good%20or%20bad,%20everything%20gets%20its%20proper%20reward.jpg" alt='Placard%20for%20parade-Whether%20good%20or%20bad,%20everything%20gets%20its%20proper%20reward.jpg'onClick={this.on.bind(this)}></img></div>
   
   
   <div className="back-button">
   <p><b><a href = "..\menu\index.html">&rarr;</a></b></p>
   </div>
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