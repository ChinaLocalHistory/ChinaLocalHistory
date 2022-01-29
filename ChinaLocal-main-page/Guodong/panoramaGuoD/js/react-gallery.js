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
  <img id='Overview%20of%20the%20West%20Gate.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/A%20West%20Gate%2C%20Ximen/Overview%20of%20the%20West%20Gate.JPG" alt='Overview%20of%20the%20West%20Gate.JPG' onClick={this.on.bind(this)}></img></div>
  <div className="back-button">
  <p><b><a href = "https://jw4590.github.io/TangxiCityGodTemple/panorama%20-%20Guodong/sites-links.html">&rarr;</a></b></p>
  </div>
</div>
  );
    }
    if (pageScene== "B") {
        return(
          <div className="gallery-row">

 <div className="gallery-column">
 <img id='A%20grainery%20house%20besides%20the%20Watermouth.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/B%20Water%20Mouth%20(reservoir)%2C%20Shuikou/A%20grainery%20house%20besides%20the%20Watermouth.JPG" alt='A%20grainery%20house%20besides%20the%20Watermouth.JPG'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='Overview%20of%20the%20Watermouth.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/B%20Water%20Mouth%20(reservoir)%2C%20Shuikou/Overview%20of%20the%20Watermouth.JPG" alt='Overview%20of%20the%20Watermouth.JPG'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='Rice%20Grinder%20in%20the%20grainery%20house%202.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/B%20Water%20Mouth%20(reservoir)%2C%20Shuikou/Rice%20Grinder%20in%20the%20grainery%20house%202.JPG" alt='Rice%20Grinder%20in%20the%20grainery%20house%202.JPG'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='Rice%20Grinder%20in%20the%20grainery%20house%203.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/B%20Water%20Mouth%20(reservoir)%2C%20Shuikou/Rice%20Grinder%20in%20the%20grainery%20house%203.JPG" alt='Rice%20Grinder%20in%20the%20grainery%20house%203.JPG'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='Rice%20Grinder%20in%20the%20grainery%20house.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/B%20Water%20Mouth%20(reservoir)%2C%20Shuikou/Rice%20Grinder%20in%20the%20grainery%20house.JPG" alt='Rice%20Grinder%20in%20the%20grainery%20house.JPG'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='View%20of%20the%20bridge%20from%20the%20Watermouth%20.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/B%20Water%20Mouth%20(reservoir)%2C%20Shuikou/View%20of%20the%20bridge%20from%20the%20Watermouth%20.JPG" alt='View%20of%20the%20bridge%20from%20the%20Watermouth%20.JPG'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='Waterway%20into%20grainery%20from%20Watermouth.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/B%20Water%20Mouth%20(reservoir)%2C%20Shuikou/Waterway%20into%20grainery%20from%20Watermouth.JPG" alt='Waterway%20into%20grainery%20from%20Watermouth.JPG'onClick={this.on.bind(this)}></img></div>


<div className="back-button">
<p><b><a href = "https://jw4590.github.io/TangxiCityGodTemple/panorama%20-%20Guodong/sites-links.html">&rarr;</a></b></p></div>
</div> 
);
    }
    if(pageScene=="C"){
     
      return(
        <div className="gallery-row">

 <div className="gallery-column">
 <img id='`Neighborhood%20of%20Righteousness`,%20.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/C%20Returning%20Dragon%20Bridge%2C%20Huilong%20Qiao/`Neighborhood%20of%20Righteousness`,%20.JPG" alt='`Neighborhood%20of%20Righteousness`,%20.JPG'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='Inner%20bracket%20of%20the%20pavilion%20.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/C%20Returning%20Dragon%20Bridge%2C%20Huilong%20Qiao/Inner%20bracket%20of%20the%20pavilion%20.JPG" alt='Inner%20bracket%20of%20the%20pavilion%20.JPG'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='Inscription%20on%20the%20bridge%20%20.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/C%20Returning%20Dragon%20Bridge%2C%20Huilong%20Qiao/Inscription%20on%20the%20bridge%20%20.JPG" alt='Inscription%20on%20the%20bridge%20%20.JPG'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='Inscription%20on%20the%20bridge%20`Stone%20Rainbow%20Constructed%20for%20three%20times%20.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/C%20Returning%20Dragon%20Bridge%2C%20Huilong%20Qiao/Inscription%20on%20the%20bridge%20`Stone%20Rainbow%20Constructed%20for%20three%20times%20.JPG" alt='Inscription%20on%20the%20bridge%20`Stone%20Rainbow%20Constructed%20for%20three%20times%20.JPG'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='Introduction%20to%20the%20bridge.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/C%20Returning%20Dragon%20Bridge%2C%20Huilong%20Qiao/Introduction%20to%20the%20bridge.JPG" alt='Introduction%20to%20the%20bridge.JPG'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='Outer%20bracket%20of%20the%20pavilion%20.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/C%20Returning%20Dragon%20Bridge%2C%20Huilong%20Qiao/Outer%20bracket%20of%20the%20pavilion%20.JPG" alt='Outer%20bracket%20of%20the%20pavilion%20.JPG'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='Painted%20ceiling%20of%20the%20pavilion.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/C%20Returning%20Dragon%20Bridge%2C%20Huilong%20Qiao/Painted%20ceiling%20of%20the%20pavilion.JPG" alt='Painted%20ceiling%20of%20the%20pavilion.JPG'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='Picking%20Sweet%20Olive%20Pavilion.%20.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/C%20Returning%20Dragon%20Bridge%2C%20Huilong%20Qiao/Picking%20Sweet%20Olive%20Pavilion.%20.JPG" alt='Picking%20Sweet%20Olive%20Pavilion.%20.JPG'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='Plaque%20`Neighborhood%20of%20Righteousness`,%20.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/C%20Returning%20Dragon%20Bridge%2C%20Huilong%20Qiao/Plaque%20`Neighborhood%20of%20Righteousness`,%20.JPG" alt='Plaque%20`Neighborhood%20of%20Righteousness`,%20.JPG'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='Returning%20Dragon%20Bridge.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/C%20Returning%20Dragon%20Bridge%2C%20Huilong%20Qiao/Returning%20Dragon%20Bridge.JPG" alt='Returning%20Dragon%20Bridge.JPG'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='Side%20inscription%20of%20the%20bridge%20`.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/C%20Returning%20Dragon%20Bridge%2C%20Huilong%20Qiao/Side%20inscription%20of%20the%20bridge%20`.JPG" alt='Side%20inscription%20of%20the%20bridge%20`.JPG'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='Side%20inscription%20of%20the%20bridge%20`Returning%20Dragon%20Bridge`.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/C%20Returning%20Dragon%20Bridge%2C%20Huilong%20Qiao/Side%20inscription%20of%20the%20bridge%20`Returning%20Dragon%20Bridge`.JPG" alt='Side%20inscription%20of%20the%20bridge%20`Returning%20Dragon%20Bridge`.JPG'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='Side%20overview%20of%20Returning%20Dragon%20Bridge.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/C%20Returning%20Dragon%20Bridge%2C%20Huilong%20Qiao/Side%20overview%20of%20Returning%20Dragon%20Bridge.JPG" alt='Side%20overview%20of%20Returning%20Dragon%20Bridge.JPG'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='Side%20view%20of%20the%20bridge.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/C%20Returning%20Dragon%20Bridge%2C%20Huilong%20Qiao/Side%20view%20of%20the%20bridge.JPG" alt='Side%20view%20of%20the%20bridge.JPG'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='The%20plaque%20`Picking%20Sweet%20Olive`,%20written%20in%20seal%20style..JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/C%20Returning%20Dragon%20Bridge%2C%20Huilong%20Qiao/The%20plaque%20`Picking%20Sweet%20Olive`,%20written%20in%20seal%20style..JPG" alt='The%20plaque%20`Picking%20Sweet%20Olive`,%20written%20in%20seal%20style..JPG'onClick={this.on.bind(this)}></img></div>


<div className="back-button">
<p><b><a href = "https://jw4590.github.io/TangxiCityGodTemple/panorama%20-%20Guodong/sites-links.html">&rarr;</a></b></p></div>
</div>

);
    }
    if(pageScene=="D1"){
        return(
          <div className="gallery-row">

          <div className="gallery-column">
          <img id='Overview%20of%20Hailin%20Court%202.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/D%20Hailin%20Court%2C%20Hailin%20Ge/D.1%20Hailin%20Court--exterior/Overview%20of%20Hailin%20Court%202.JPG" alt='Overview%20of%20Hailin%20Court%202.JPG' onClick={this.on.bind(this)}></img></div>
          <div className="gallery-column">
          <img id='Overview%20of%20Hailin%20Court.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/D%20Hailin%20Court%2C%20Hailin%20Ge/D.1%20Hailin%20Court--exterior/Overview%20of%20Hailin%20Court.JPG" alt='Overview%20of%20Hailin%20Court.JPG' onClick={this.on.bind(this)}></img></div>

         <div className="back-button">
         <p><b><a href = "https://jw4590.github.io/TangxiCityGodTemple/panorama%20-%20Guodong/sites-links.html">&rarr;</a></b></p></div>
         </div>
         );
    }
    if(pageScene=="D2"){
      return(
        <div className="gallery-row">

        <div className="gallery-column">
        <img id='Chinese%20introduction%20to%20Hailin%20Court%20.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/D%20Hailin%20Court%2C%20Hailin%20Ge/D.2.%20Hailin%20Court%20--%20Shrine%20of%20Lord%20Guan%2C%20Guan%20Sheng%20Ci/Chinese%20introduction%20to%20Hailin%20Court%20.JPG" alt='Chinese%20introduction%20to%20Hailin%20Court%20.JPG'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='DSCN1553.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/D%20Hailin%20Court%2C%20Hailin%20Ge/D.2.%20Hailin%20Court%20--%20Shrine%20of%20Lord%20Guan%2C%20Guan%20Sheng%20Ci/DSCN1553.JPG" alt='DSCN1553.JPG'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='DSCN1556.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/D%20Hailin%20Court%2C%20Hailin%20Ge/D.2.%20Hailin%20Court%20--%20Shrine%20of%20Lord%20Guan%2C%20Guan%20Sheng%20Ci/DSCN1556.JPG" alt='DSCN1556.JPG'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Introduction%20to%20Hailin%20Court%20in%20Chinese%20and%20English%20.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/D%20Hailin%20Court%2C%20Hailin%20Ge/D.2.%20Hailin%20Court%20--%20Shrine%20of%20Lord%20Guan%2C%20Guan%20Sheng%20Ci/Introduction%20to%20Hailin%20Court%20in%20Chinese%20and%20English%20.JPG" alt='Introduction%20to%20Hailin%20Court%20in%20Chinese%20and%20English%20.JPG'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Looking%20out%20from%20the%20court%20.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/D%20Hailin%20Court%2C%20Hailin%20Ge/D.2.%20Hailin%20Court%20--%20Shrine%20of%20Lord%20Guan%2C%20Guan%20Sheng%20Ci/Looking%20out%20from%20the%20court%20.JPG" alt='Looking%20out%20from%20the%20court%20.JPG'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='P0002790.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/D%20Hailin%20Court%2C%20Hailin%20Ge/D.2.%20Hailin%20Court%20--%20Shrine%20of%20Lord%20Guan%2C%20Guan%20Sheng%20Ci/P0002790.JPG" alt='P0002790.JPG'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='P0002791.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/D%20Hailin%20Court%2C%20Hailin%20Ge/D.2.%20Hailin%20Court%20--%20Shrine%20of%20Lord%20Guan%2C%20Guan%20Sheng%20Ci/P0002791.JPG" alt='P0002791.JPG'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='P0002793.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/D%20Hailin%20Court%2C%20Hailin%20Ge/D.2.%20Hailin%20Court%20--%20Shrine%20of%20Lord%20Guan%2C%20Guan%20Sheng%20Ci/P0002793.JPG" alt='P0002793.JPG'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='P0002794.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/D%20Hailin%20Court%2C%20Hailin%20Ge/D.2.%20Hailin%20Court%20--%20Shrine%20of%20Lord%20Guan%2C%20Guan%20Sheng%20Ci/P0002794.JPG" alt='P0002794.JPG'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='P0002795.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/D%20Hailin%20Court%2C%20Hailin%20Ge/D.2.%20Hailin%20Court%20--%20Shrine%20of%20Lord%20Guan%2C%20Guan%20Sheng%20Ci/P0002795.JPG" alt='P0002795.JPG'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='P0002796.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/D%20Hailin%20Court%2C%20Hailin%20Ge/D.2.%20Hailin%20Court%20--%20Shrine%20of%20Lord%20Guan%2C%20Guan%20Sheng%20Ci/P0002796.JPG" alt='P0002796.JPG'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='Record%20of%20the%20renovation%20of%20Hailin%20Court%20in%201994%20.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/D%20Hailin%20Court%2C%20Hailin%20Ge/D.2.%20Hailin%20Court%20--%20Shrine%20of%20Lord%20Guan%2C%20Guan%20Sheng%20Ci/Record%20of%20the%20renovation%20of%20Hailin%20Court%20in%201994%20.JPG" alt='Record%20of%20the%20renovation%20of%20Hailin%20Court%20in%201994%20.JPG'onClick={this.on.bind(this)}></img></div>
       
       
       <div className="back-button">
       <p><b><a href = "https://jw4590.github.io/TangxiCityGodTemple/panorama%20-%20Guodong/sites-links.html">&rarr;</a></b></p></div>
       </div>);
    }
    if(pageScene=="D3"){
      return(
        <div className="gallery-row">

        <div className="gallery-column">
        <img id='P0002798.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/D%20Hailin%20Court%2C%20Hailin%20Ge/D.3%20%20Hailin%20Court%20--%20Chamber%20of%20Guanyin%20of%20the%20Southern%20Ocean%20Nanhai%20Guanyin%20Ge/P0002798.JPG" alt='P0002798.JPG'onClick={this.on.bind(this)}></img></div>
        <div className="gallery-column">
        <img id='P0002799.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/D%20Hailin%20Court%2C%20Hailin%20Ge/D.3%20%20Hailin%20Court%20--%20Chamber%20of%20Guanyin%20of%20the%20Southern%20Ocean%20Nanhai%20Guanyin%20Ge/P0002799.JPG" alt='P0002799.JPG'onClick={this.on.bind(this)}></img></div>
       
       
       <div className="back-button">
       <p><b><a href = "https://jw4590.github.io/TangxiCityGodTemple/panorama%20-%20Guodong/sites-links.html">&rarr;</a></b></p></div>
       </div>);
    }
    if(pageScene=="E"){
      return(
        <div className="gallery-row">

 <div className="gallery-column">
 <img id='Overview%20of%20the%20path%20.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/E%20Path%20between%20Sea%20and%20Unicorn%20Chamber%20and%20Guodong%20Primary%20School/Overview%20of%20the%20path%20.JPG" alt='Overview%20of%20the%20path%20.JPG'onClick={this.on.bind(this)}></img></div>
 <div className="gallery-column">
 <img id='View%20of%20the%20river%20from%20the%20path%20.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/E%20Path%20between%20Sea%20and%20Unicorn%20Chamber%20and%20Guodong%20Primary%20School/View%20of%20the%20river%20from%20the%20path%20.JPG" alt='View%20of%20the%20river%20from%20the%20path%20.JPG'onClick={this.on.bind(this)}></img></div>


<div className="back-button">
<p><b><a href = "https://jw4590.github.io/TangxiCityGodTemple/panorama%20-%20Guodong/sites-links.html">&rarr;</a></b></p></div>
</div>
);
    }
    if(pageScene=="F1"){
      return(<div className="gallery-row">

      <div className="gallery-column">
      <img id='DSCN7159.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.1.%20He%20Lineage%20Ancestral%20Hall--exterior/DSCN7159.JPG" alt='DSCN7159.JPG'onClick={this.on.bind(this)}></img></div>
      <div className="gallery-column">
      <img id='Entrance%20door%20of%20the%20ancestral%20hall%20.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.1.%20He%20Lineage%20Ancestral%20Hall--exterior/Entrance%20door%20of%20the%20ancestral%20hall%20.JPG" alt='Entrance%20door%20of%20the%20ancestral%20hall%20.JPG'onClick={this.on.bind(this)}></img></div>
      <div className="gallery-column">
      <img id='Front%20view%20of%20the%20ancestral%20hall%20.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.1.%20He%20Lineage%20Ancestral%20Hall--exterior/Front%20view%20of%20the%20ancestral%20hall%20.JPG" alt='Front%20view%20of%20the%20ancestral%20hall%20.JPG'onClick={this.on.bind(this)}></img></div>
      <div className="gallery-column">
      <img id='Left%20entrance%20of%20the%20hall%20.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.1.%20He%20Lineage%20Ancestral%20Hall--exterior/Left%20entrance%20of%20the%20hall%20.JPG" alt='Left%20entrance%20of%20the%20hall%20.JPG'onClick={this.on.bind(this)}></img></div>
      <div className="gallery-column">
      <img id='Overview%20of%20the%20ancestral%20hall.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.1.%20He%20Lineage%20Ancestral%20Hall--exterior/Overview%20of%20the%20ancestral%20hall.JPG" alt='Overview%20of%20the%20ancestral%20hall.JPG'onClick={this.on.bind(this)}></img></div>
      <div className="gallery-column">
      <img id='Overview%20of%20the%20left%20part%20of%20the%20front%20view%20.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.1.%20He%20Lineage%20Ancestral%20Hall--exterior/Overview%20of%20the%20left%20part%20of%20the%20front%20view%20.JPG" alt='Overview%20of%20the%20left%20part%20of%20the%20front%20view%20.JPG'onClick={this.on.bind(this)}></img></div>
      <div className="gallery-column">
      <img id='Overview%20of%20the%20right-hand%20side%20of%20the%20hall%20.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.1.%20He%20Lineage%20Ancestral%20Hall--exterior/Overview%20of%20the%20right-hand%20side%20of%20the%20hall%20.JPG" alt='Overview%20of%20the%20right-hand%20side%20of%20the%20hall%20.JPG'onClick={this.on.bind(this)}></img></div>
      <div className="gallery-column">
      <img id='Top%20view%20of%20the%20entrance.%20.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.1.%20He%20Lineage%20Ancestral%20Hall--exterior/Top%20view%20of%20the%20entrance.%20.JPG" alt='Top%20view%20of%20the%20entrance.%20.JPG'onClick={this.on.bind(this)}></img></div>
     
     
     <div className="back-button">
     <p><b><a href = "https://jw4590.github.io/TangxiCityGodTemple/panorama%20-%20Guodong/sites-links.html">&rarr;</a></b></p></div>
     </div>
     );
  }
  if(pageScene=="F2"){
    return(
      <div className="gallery-row">

      <div className="gallery-column">
      <img id='Chinese%20introduction%20to%20the%20ancestral%20hall%20.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.2.%20He%20Lineage%20Ancestral%20Hall%2C%20Opera%20Stage/Chinese%20introduction%20to%20the%20ancestral%20hall%20.JPG" alt='Chinese%20introduction%20to%20the%20ancestral%20hall%20.JPG'onClick={this.on.bind(this)}></img></div>
      <div className="gallery-column">
      <img id='Looking%20to%20the%20east%20.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.2.%20He%20Lineage%20Ancestral%20Hall%2C%20Opera%20Stage/Looking%20to%20the%20east%20.JPG" alt='Looking%20to%20the%20east%20.JPG'onClick={this.on.bind(this)}></img></div>
      <div className="gallery-column">
      <img id='Looking%20to%20the%20north%20.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.2.%20He%20Lineage%20Ancestral%20Hall%2C%20Opera%20Stage/Looking%20to%20the%20north%20.JPG" alt='Looking%20to%20the%20north%20.JPG'onClick={this.on.bind(this)}></img></div>
      <div className="gallery-column">
      <img id='Looking%20to%20the%20northeast%20.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.2.%20He%20Lineage%20Ancestral%20Hall%2C%20Opera%20Stage/Looking%20to%20the%20northeast%20.JPG" alt='Looking%20to%20the%20northeast%20.JPG'onClick={this.on.bind(this)}></img></div>
      <div className="gallery-column">
      <img id='Looking%20to%20the%20northwest%20.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.2.%20He%20Lineage%20Ancestral%20Hall%2C%20Opera%20Stage/Looking%20to%20the%20northwest%20.JPG" alt='Looking%20to%20the%20northwest%20.JPG'onClick={this.on.bind(this)}></img></div>
      <div className="gallery-column">
      <img id='Looking%20to%20the%20west%20.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.2.%20He%20Lineage%20Ancestral%20Hall%2C%20Opera%20Stage/Looking%20to%20the%20west%20.JPG" alt='Looking%20to%20the%20west%20.JPG'onClick={this.on.bind(this)}></img></div>
      <div className="gallery-column">
      <img id='Overview%20of%20the%20opera%20stage%20.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.2.%20He%20Lineage%20Ancestral%20Hall%2C%20Opera%20Stage/Overview%20of%20the%20opera%20stage%20.JPG" alt='Overview%20of%20the%20opera%20stage%20.JPG'onClick={this.on.bind(this)}></img></div>
      <div className="gallery-column">
      <img id='Painted%20ceiling%20of%20the%20opera%20stage%20.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.2.%20He%20Lineage%20Ancestral%20Hall%2C%20Opera%20Stage/Painted%20ceiling%20of%20the%20opera%20stage%20.JPG" alt='Painted%20ceiling%20of%20the%20opera%20stage%20.JPG'onClick={this.on.bind(this)}></img></div>
      <div className="gallery-column">
      <img id='The%20backside%20of%20the%20opera%20stage,%20.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.2.%20He%20Lineage%20Ancestral%20Hall%2C%20Opera%20Stage/The%20backside%20of%20the%20opera%20stage,%20.JPG" alt='The%20backside%20of%20the%20opera%20stage,%20.JPG'onClick={this.on.bind(this)}></img></div>
     
     
     <div className="back-button">
     <p><b><a href = "https://jw4590.github.io/TangxiCityGodTemple/panorama%20-%20Guodong/sites-links.html">&rarr;</a></b></p></div>
     </div>);
}

if(pageScene=="F3"){
  return(
    <div className="gallery-row">

    <div className="gallery-column">
    <img id='`Honorably%20Received%20the%20Favor.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.3%20He%20Lineage%20Ancestral%20Hall%2C%20Main%20Hall/`Honorably%20Received%20the%20Favor.jpg" alt='`Honorably%20Received%20the%20Favor.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='001527.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.3%20He%20Lineage%20Ancestral%20Hall%2C%20Main%20Hall/001527.jpg" alt='001527.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='001874.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.3%20He%20Lineage%20Ancestral%20Hall%2C%20Main%20Hall/001874.jpg" alt='001874.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='001875.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.3%20He%20Lineage%20Ancestral%20Hall%2C%20Main%20Hall/001875.jpg" alt='001875.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='001876.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.3%20He%20Lineage%20Ancestral%20Hall%2C%20Main%20Hall/001876.jpg" alt='001876.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Additional%20Record%20for%20the%20renovation%20%20.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.3%20He%20Lineage%20Ancestral%20Hall%2C%20Main%20Hall/Additional%20Record%20for%20the%20renovation%20%20.JPG" alt='Additional%20Record%20for%20the%20renovation%20%20.JPG'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Biography%20of%20He%20Gui%20written%20by%20Hu%20Han%20in%201401.%20.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.3%20He%20Lineage%20Ancestral%20Hall%2C%20Main%20Hall/Biography%20of%20He%20Gui%20written%20by%20Hu%20Han%20in%201401.%20.JPG" alt='Biography%20of%20He%20Gui%20written%20by%20Hu%20Han%20in%201401.%20.JPG'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Biography%20of%20He%20Gui%20written%20by%20Hu%20Han%20in%201401..JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.3%20He%20Lineage%20Ancestral%20Hall%2C%20Main%20Hall/Biography%20of%20He%20Gui%20written%20by%20Hu%20Han%20in%201401..JPG" alt='Biography%20of%20He%20Gui%20written%20by%20Hu%20Han%20in%201401..JPG'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Close-up%20of%20a%20pillar%20base%20in%20the%20main%20hall.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.3%20He%20Lineage%20Ancestral%20Hall%2C%20Main%20Hall/Close-up%20of%20a%20pillar%20base%20in%20the%20main%20hall.jpg" alt='Close-up%20of%20a%20pillar%20base%20in%20the%20main%20hall.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='DSCN6921.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.3%20He%20Lineage%20Ancestral%20Hall%2C%20Main%20Hall/DSCN6921.JPG" alt='DSCN6921.JPG'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='DSCN7082.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.3%20He%20Lineage%20Ancestral%20Hall%2C%20Main%20Hall/DSCN7082.JPG" alt='DSCN7082.JPG'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='DSCN7085.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.3%20He%20Lineage%20Ancestral%20Hall%2C%20Main%20Hall/DSCN7085.JPG" alt='DSCN7085.JPG'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='DSCN7086.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.3%20He%20Lineage%20Ancestral%20Hall%2C%20Main%20Hall/DSCN7086.JPG" alt='DSCN7086.JPG'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='DSCN7089.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.3%20He%20Lineage%20Ancestral%20Hall%2C%20Main%20Hall/DSCN7089.JPG" alt='DSCN7089.JPG'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='DSCN7149.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.3%20He%20Lineage%20Ancestral%20Hall%2C%20Main%20Hall/DSCN7149.JPG" alt='DSCN7149.JPG'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Excert%20of%20the%20words%20of%20Chairman%20Mao%20.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.3%20He%20Lineage%20Ancestral%20Hall%2C%20Main%20Hall/Excert%20of%20the%20words%20of%20Chairman%20Mao%20.JPG" alt='Excert%20of%20the%20words%20of%20Chairman%20Mao%20.JPG' onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Gate%20leading%20to%20the%20back%20hall.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.3%20He%20Lineage%20Ancestral%20Hall%2C%20Main%20Hall/Gate%20leading%20to%20the%20back%20hall.JPG" alt='Gate%20leading%20to%20the%20back%20hall.JPG' onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Looking%20southeast%20from%20the%20main%20hall%20.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.3%20He%20Lineage%20Ancestral%20Hall%2C%20Main%20Hall/Looking%20southeast%20from%20the%20main%20hall%20.JPG" alt='Looking%20southeast%20from%20the%20main%20hall%20.JPG'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Looking%20southwest%20from%20the%20main%20hall%20.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.3%20He%20Lineage%20Ancestral%20Hall%2C%20Main%20Hall/Looking%20southwest%20from%20the%20main%20hall%20.JPG" alt='Looking%20southwest%20from%20the%20main%20hall%20.JPG'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='originally%20erected%20for%20He%20Chengqin.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.3%20He%20Lineage%20Ancestral%20Hall%2C%20Main%20Hall/originally%20erected%20for%20He%20Chengqin.jpg" alt='originally%20erected%20for%20He%20Chengqin.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Overview%20of%20the%20eastern%20wing,%20facing%20north%20.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.3%20He%20Lineage%20Ancestral%20Hall%2C%20Main%20Hall/Overview%20of%20the%20eastern%20wing,%20facing%20north%20.JPG" alt='Overview%20of%20the%20eastern%20wing,%20facing%20north%20.JPG'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Overview%20of%20the%20eastern%20wing,%20facing%20south%20.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.3%20He%20Lineage%20Ancestral%20Hall%2C%20Main%20Hall/Overview%20of%20the%20eastern%20wing,%20facing%20south%20.JPG" alt='Overview%20of%20the%20eastern%20wing,%20facing%20south%20.JPG'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Overview%20of%20the%20main%20hall,%20facing%20east%20.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.3%20He%20Lineage%20Ancestral%20Hall%2C%20Main%20Hall/Overview%20of%20the%20main%20hall,%20facing%20east%20.JPG" alt='Overview%20of%20the%20main%20hall,%20facing%20east%20.JPG'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Overview%20of%20the%20western%20wing%20facing%20north.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.3%20He%20Lineage%20Ancestral%20Hall%2C%20Main%20Hall/Overview%20of%20the%20western%20wing%20facing%20north.JPG" alt='Overview%20of%20the%20western%20wing%20facing%20north.JPG'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Overview%20of%20the%20western%20wing%20facing%20south%20.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.3%20He%20Lineage%20Ancestral%20Hall%2C%20Main%20Hall/Overview%20of%20the%20western%20wing%20facing%20south%20.JPG" alt='Overview%20of%20the%20western%20wing%20facing%20south%20.JPG'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Plaque%20`Descendants%20of%20the%20people%20of%20Huai%20and%20Ge`..jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.3%20He%20Lineage%20Ancestral%20Hall%2C%20Main%20Hall/Plaque%20`Descendants%20of%20the%20people%20of%20Huai%20and%20Ge`..jpg" alt='Plaque%20`Descendants%20of%20the%20people%20of%20Huai%20and%20Ge`..jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Plaque%20`First%20Ranking%20Provincial%20Graduate`,.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.3%20He%20Lineage%20Ancestral%20Hall%2C%20Main%20Hall/Plaque%20`First%20Ranking%20Provincial%20Graduate`,.jpg" alt='Plaque%20`First%20Ranking%20Provincial%20Graduate`,.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Plaque%20`One%20whose%20Virtue%20Is%20Highly%20Respected%20,.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.3%20He%20Lineage%20Ancestral%20Hall%2C%20Main%20Hall/Plaque%20`One%20whose%20Virtue%20Is%20Highly%20Respected%20,.jpg" alt='Plaque%20`One%20whose%20Virtue%20Is%20Highly%20Respected%20,.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Plaque%20`Praising%20the%20Worthy%20and%20Diligent`.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.3%20He%20Lineage%20Ancestral%20Hall%2C%20Main%20Hall/Plaque%20`Praising%20the%20Worthy%20and%20Diligent`.jpg" alt='Plaque%20`Praising%20the%20Worthy%20and%20Diligent`.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Plaque%20`Provincial%20Graduate`,.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.3%20He%20Lineage%20Ancestral%20Hall%2C%20Main%20Hall/Plaque%20`Provincial%20Graduate`,.jpg" alt='Plaque%20`Provincial%20Graduate`,.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Plaque%20`Respect%20Instructions%20and%20Urge%20Studying`,%20..jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.3%20He%20Lineage%20Ancestral%20Hall%2C%20Main%20Hall/Plaque%20`Respect%20Instructions%20and%20Urge%20Studying`,%20..jpg" alt='Plaque%20`Respect%20Instructions%20and%20Urge%20Studying`,%20..jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Plaque%20`Respectable%20Righteousness%20and%20Braveness`,.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.3%20He%20Lineage%20Ancestral%20Hall%2C%20Main%20Hall/Plaque%20`Respectable%20Righteousness%20and%20Braveness`,.jpg" alt='Plaque%20`Respectable%20Righteousness%20and%20Braveness`,.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Plaque%20`The%20Aged,%20Virtuous,%20,.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.3%20He%20Lineage%20Ancestral%20Hall%2C%20Main%20Hall/Plaque%20`The%20Aged,%20Virtuous,%20,.jpg" alt='Plaque%20`The%20Aged,%20Virtuous,%20,.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Plaque%20`Tribute%20Student`,.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.3%20He%20Lineage%20Ancestral%20Hall%2C%20Main%20Hall/Plaque%20`Tribute%20Student`,.jpg" alt='Plaque%20`Tribute%20Student`,.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Plaque%20`Virtue%20as%20High%20as%20Eastern%20Mountain`,.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.3%20He%20Lineage%20Ancestral%20Hall%2C%20Main%20Hall/Plaque%20`Virtue%20as%20High%20as%20Eastern%20Mountain`,.jpg" alt='Plaque%20`Virtue%20as%20High%20as%20Eastern%20Mountain`,.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Record%20of%20the%20origin%20of%20the%20He%20lineage.%20.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.3%20He%20Lineage%20Ancestral%20Hall%2C%20Main%20Hall/Record%20of%20the%20origin%20of%20the%20He%20lineage.%20.JPG" alt='Record%20of%20the%20origin%20of%20the%20He%20lineage.%20.JPG'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='The%20pillar%20bases%20in%20the%20main%20hall%20.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.3%20He%20Lineage%20Ancestral%20Hall%2C%20Main%20Hall/The%20pillar%20bases%20in%20the%20main%20hall%20.JPG" alt='The%20pillar%20bases%20in%20the%20main%20hall%20.JPG'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Top%20plaque%20`Loyalty%20and%20Kindness%20Handed%20,.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.3%20He%20Lineage%20Ancestral%20Hall%2C%20Main%20Hall/Top%20plaque%20`Loyalty%20and%20Kindness%20Handed%20,.jpg" alt='Top%20plaque%20`Loyalty%20and%20Kindness%20Handed%20,.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Top%20plaque%20`One%20whose%20Righteousness%20is%20,.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.3%20He%20Lineage%20Ancestral%20Hall%2C%20Main%20Hall/Top%20plaque%20`One%20whose%20Righteousness%20is%20,.jpg" alt='Top%20plaque%20`One%20whose%20Righteousness%20is%20,.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='View%20of%20the%20opera%20stage%20.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.3%20He%20Lineage%20Ancestral%20Hall%2C%20Main%20Hall/View%20of%20the%20opera%20stage%20.JPG" alt='View%20of%20the%20opera%20stage%20.JPG'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='View%20of%20the%20opera%20stage%20from%20the%20main%20hall%20.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.3%20He%20Lineage%20Ancestral%20Hall%2C%20Main%20Hall/View%20of%20the%20opera%20stage%20from%20the%20main%20hall%20.JPG" alt='View%20of%20the%20opera%20stage%20from%20the%20main%20hall%20.JPG'onClick={this.on.bind(this)}></img></div>
   
   
   <div className="back-button">
   <p><b><a href = "https://jw4590.github.io/TangxiCityGodTemple/panorama%20-%20Guodong/sites-links.html">&rarr;</a></b></p></div>
   </div>
   
   
   );
}

if(pageScene=="F4"){
  return(
    <div className="gallery-row">

    <div className="gallery-column">
    <img id='001948.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.4.%20He%20Lineage%20Ancestral%20Shrine%2C%20Back%20Hall/001948.jpg" alt='001948.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='001949.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.4.%20He%20Lineage%20Ancestral%20Shrine%2C%20Back%20Hall/001949.jpg" alt='001949.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='001959.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.4.%20He%20Lineage%20Ancestral%20Shrine%2C%20Back%20Hall/001959.jpg" alt='001959.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='001968.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.4.%20He%20Lineage%20Ancestral%20Shrine%2C%20Back%20Hall/001968.jpg" alt='001968.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='001972.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.4.%20He%20Lineage%20Ancestral%20Shrine%2C%20Back%20Hall/001972.jpg" alt='001972.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='001973.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.4.%20He%20Lineage%20Ancestral%20Shrine%2C%20Back%20Hall/001973.jpg" alt='001973.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='001975.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.4.%20He%20Lineage%20Ancestral%20Shrine%2C%20Back%20Hall/001975.jpg" alt='001975.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='001978.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.4.%20He%20Lineage%20Ancestral%20Shrine%2C%20Back%20Hall/001978.jpg" alt='001978.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Closeup%20of%20the%20altar.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.4.%20He%20Lineage%20Ancestral%20Shrine%2C%20Back%20Hall/Closeup%20of%20the%20altar.jpg" alt='Closeup%20of%20the%20altar.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Closeup%20of%20the%20banners.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.4.%20He%20Lineage%20Ancestral%20Shrine%2C%20Back%20Hall/Closeup%20of%20the%20banners.jpg" alt='Closeup%20of%20the%20banners.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Closeup%20of%20the%20weapons.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.4.%20He%20Lineage%20Ancestral%20Shrine%2C%20Back%20Hall/Closeup%20of%20the%20weapons.jpg" alt='Closeup%20of%20the%20weapons.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Coffins%20stored%20in%20the%20western%20wing.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.4.%20He%20Lineage%20Ancestral%20Shrine%2C%20Back%20Hall/Coffins%20stored%20in%20the%20western%20wing.jpg" alt='Coffins%20stored%20in%20the%20western%20wing.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='DSCN7129.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.4.%20He%20Lineage%20Ancestral%20Shrine%2C%20Back%20Hall/DSCN7129.JPG" alt='DSCN7129.JPG'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='DSCN7143.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.4.%20He%20Lineage%20Ancestral%20Shrine%2C%20Back%20Hall/DSCN7143.JPG" alt='DSCN7143.JPG'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Overview%20of%20the%20back%20hall,%20facing%20east.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.4.%20He%20Lineage%20Ancestral%20Shrine%2C%20Back%20Hall/Overview%20of%20the%20back%20hall,%20facing%20east.jpg" alt='Overview%20of%20the%20back%20hall,%20facing%20east.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Overview%20of%20the%20back%20hall,%20facing%20southwest.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.4.%20He%20Lineage%20Ancestral%20Shrine%2C%20Back%20Hall/Overview%20of%20the%20back%20hall,%20facing%20southwest.jpg" alt='Overview%20of%20the%20back%20hall,%20facing%20southwest.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Overview%20of%20the%20back%20hall,%20facing%20west.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.4.%20He%20Lineage%20Ancestral%20Shrine%2C%20Back%20Hall/Overview%20of%20the%20back%20hall,%20facing%20west.jpg" alt='Overview%20of%20the%20back%20hall,%20facing%20west.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Overview%20of%20the%20back%20hall.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.4.%20He%20Lineage%20Ancestral%20Shrine%2C%20Back%20Hall/Overview%20of%20the%20back%20hall.jpg" alt='Overview%20of%20the%20back%20hall.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Overview%20of%20the%20eastern%20wing.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.4.%20He%20Lineage%20Ancestral%20Shrine%2C%20Back%20Hall/Overview%20of%20the%20eastern%20wing.jpg" alt='Overview%20of%20the%20eastern%20wing.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Overview%20of%20the%20south%20wall%20panel.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.4.%20He%20Lineage%20Ancestral%20Shrine%2C%20Back%20Hall/Overview%20of%20the%20south%20wall%20panel.jpg" alt='Overview%20of%20the%20south%20wall%20panel.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Plaque,.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.4.%20He%20Lineage%20Ancestral%20Shrine%2C%20Back%20Hall/Plaque,.jpg" alt='Plaque,.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='The%20eastern%20wing,%20facing%20north.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.4.%20He%20Lineage%20Ancestral%20Shrine%2C%20Back%20Hall/The%20eastern%20wing,%20facing%20north.jpg" alt='The%20eastern%20wing,%20facing%20north.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='The%20estern%20wing,%20facing%20south.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/F%20He%20Lineage%20Ancestral%20Hall%2C%20He%20Shi%20Zong%20Ci/F.4.%20He%20Lineage%20Ancestral%20Shrine%2C%20Back%20Hall/The%20estern%20wing,%20facing%20south.jpg" alt='The%20estern%20wing,%20facing%20south.jpg'onClick={this.on.bind(this)}></img></div>
   
   
   <div className="back-button">
   <p><b><a href = "https://jw4590.github.io/TangxiCityGodTemple/panorama%20-%20Guodong/sites-links.html">&rarr;</a></b></p></div>
   </div>);
}

if(pageScene=="G"){
  return(
    <div className="gallery-row">

    <div className="gallery-column">
    <img id='Blueprint%20of%20the%20hall,%20the%20first%20floor.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/G%20Between%20He%20Lineage%20Ancestral%20Hall%20and%20Xinwu%20Li/Blueprint%20of%20the%20hall,%20the%20first%20floor.jpg" alt='Blueprint%20of%20the%20hall,%20the%20first%20floor.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Closeup%20of%20the%20hall.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/G%20Between%20He%20Lineage%20Ancestral%20Hall%20and%20Xinwu%20Li/Closeup%20of%20the%20hall.jpg" alt='Closeup%20of%20the%20hall.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Blueprint%20of%20the%20hall,%20the%20second%20floor.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/G%20Between%20He%20Lineage%20Ancestral%20Hall%20and%20Xinwu%20Li/Blueprint%20of%20the%20hall,%20the%20second%20floor.jpg" alt='Blueprint%20of%20the%20hall,%20the%20second%20floor.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Overview%20of%20the%20Fanyu%20Hall.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/G%20Between%20He%20Lineage%20Ancestral%20Hall%20and%20Xinwu%20Li/Overview%20of%20the%20Fanyu%20Hall.jpg" alt='Overview%20of%20the%20Fanyu%20Hall.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Chinese%20introduction%20to%20the%20hall.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/G%20Between%20He%20Lineage%20Ancestral%20Hall%20and%20Xinwu%20Li/Chinese%20introduction%20to%20the%20hall.jpg" alt='Chinese%20introduction%20to%20the%20hall.jpg'onClick={this.on.bind(this)}></img></div>
   
   
   <div className="back-button">
   <p><b><a href = "https://jw4590.github.io/TangxiCityGodTemple/panorama%20-%20Guodong/sites-links.html">&rarr;</a></b></p></div>
   </div>);
}

if(pageScene=="H1"||pageScene=="H2"){
  return(
    <div className="gallery-row">

    <div className="gallery-column">
    <img id='Closeup%20of%20the%20bracket.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/H%20Xinwu%20Li/H.1%20Xinwu%20Li%2C%20Front%20Courtyard/Closeup%20of%20the%20bracket.jpg" alt='Closeup%20of%20the%20bracket.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Closeup%20of%20the%20stone%20wall%202.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/H%20Xinwu%20Li/H.1%20Xinwu%20Li%2C%20Front%20Courtyard/Closeup%20of%20the%20stone%20wall%202.jpg" alt='Closeup%20of%20the%20stone%20wall%202.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Closeup%20of%20the%20stone%20wall.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/H%20Xinwu%20Li/H.1%20Xinwu%20Li%2C%20Front%20Courtyard/Closeup%20of%20the%20stone%20wall.jpg" alt='Closeup%20of%20the%20stone%20wall.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Entrance%20of%20Xin%20Wuli.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/H%20Xinwu%20Li/H.1%20Xinwu%20Li%2C%20Front%20Courtyard/Entrance%20of%20Xin%20Wuli.jpg" alt='Entrance%20of%20Xin%20Wuli.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Left-hand%20side%20window%20of%20the%20eastern%20wing.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/H%20Xinwu%20Li/H.1%20Xinwu%20Li%2C%20Front%20Courtyard/Left-hand%20side%20window%20of%20the%20eastern%20wing.jpg" alt='Left-hand%20side%20window%20of%20the%20eastern%20wing.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='P0002806.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/H%20Xinwu%20Li/H.1%20Xinwu%20Li%2C%20Front%20Courtyard/P0002806.JPG" alt='P0002806.JPG'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Right-hand%20side%20window%20of%20the%20eastern%20wing.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/H%20Xinwu%20Li/H.1%20Xinwu%20Li%2C%20Front%20Courtyard/Right-hand%20side%20window%20of%20the%20eastern%20wing.jpg" alt='Right-hand%20side%20window%20of%20the%20eastern%20wing.jpg'onClick={this.on.bind(this)}></img></div>
   
   
   <div className="back-button">
   <p><b><a href = "https://jw4590.github.io/TangxiCityGodTemple/panorama%20-%20Guodong/sites-links.html">&rarr;</a></b></p></div>
   </div>
   );
}

if(pageScene=="I"){
  return(
    <div className="gallery-row">

    <div className="gallery-column">
    <img id='Closeup%20of%20the%20back%20of%20the%20arch,%20decorated%20with%20a%20Qilin,%20an%20auspicious%20animal.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/I%20Arch%20of%20Chastity%20and%20Filial%20Piety%2C%20Jie%20Xiao%20Fang/Closeup%20of%20the%20back%20of%20the%20arch,%20decorated%20with%20a%20Qilin,%20an%20auspicious%20animal.jpg" alt='Closeup%20of%20the%20back%20of%20the%20arch,%20decorated%20with%20a%20Qilin,%20an%20auspicious%20animal.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Closeup%20of%20the%20base%20of%20the%20arch.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/I%20Arch%20of%20Chastity%20and%20Filial%20Piety%2C%20Jie%20Xiao%20Fang/Closeup%20of%20the%20base%20of%20the%20arch.jpg" alt='Closeup%20of%20the%20base%20of%20the%20arch.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Closeup%20of%20the%20top%20of%20the%20arch.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/I%20Arch%20of%20Chastity%20and%20Filial%20Piety%2C%20Jie%20Xiao%20Fang/Closeup%20of%20the%20top%20of%20the%20arch.jpg" alt='Closeup%20of%20the%20top%20of%20the%20arch.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Middle%20part%20of%20the%20arch%20with%20inscriptions%20on%20the%20frame.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/I%20Arch%20of%20Chastity%20and%20Filial%20Piety%2C%20Jie%20Xiao%20Fang/Middle%20part%20of%20the%20arch%20with%20inscriptions%20on%20the%20frame.jpg" alt='Middle%20part%20of%20the%20arch%20with%20inscriptions%20on%20the%20frame.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Overview%20of%20the%20arch.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/I%20Arch%20of%20Chastity%20and%20Filial%20Piety%2C%20Jie%20Xiao%20Fang/Overview%20of%20the%20arch.jpg" alt='Overview%20of%20the%20arch.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Sideview%20of%20the%20arch.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/I%20Arch%20of%20Chastity%20and%20Filial%20Piety%2C%20Jie%20Xiao%20Fang/Sideview%20of%20the%20arch.jpg" alt='Sideview%20of%20the%20arch.jpg'onClick={this.on.bind(this)}></img></div>
   
   
   <div className="back-button">
   <p><b><a href = "https://jw4590.github.io/TangxiCityGodTemple/panorama%20-%20Guodong/sites-links.html">&rarr;</a></b></p></div>
   </div>);
}

if(pageScene=="J1"){
  return(
    <div className="gallery-row">

    <div className="gallery-column">
    <img id='Front%20view%20of%20the%20temple.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/J%20Temple%20of%20God%20of%20Literature%2C%20Wenchang%20Ge/J.1.%20Temple%20of%20God%20of%20Literature%2C%20First%20Floor/Front%20view%20of%20the%20temple.jpg" alt='Front%20view%20of%20the%20temple.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Overview%20of%20the%20temple.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/J%20Temple%20of%20God%20of%20Literature%2C%20Wenchang%20Ge/J.1.%20Temple%20of%20God%20of%20Literature%2C%20First%20Floor/Overview%20of%20the%20temple.jpg" alt='Overview%20of%20the%20temple.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Record%20of%20the%20renovation%20of%20the%20temple%20in%201988,%20.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/J%20Temple%20of%20God%20of%20Literature%2C%20Wenchang%20Ge/J.1.%20Temple%20of%20God%20of%20Literature%2C%20First%20Floor/Record%20of%20the%20renovation%20of%20the%20temple%20in%201988,%20.jpg" alt='Record%20of%20the%20renovation%20of%20the%20temple%20in%201988,%20.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='SANY0010.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/J%20Temple%20of%20God%20of%20Literature%2C%20Wenchang%20Ge/J.1.%20Temple%20of%20God%20of%20Literature%2C%20First%20Floor/SANY0010.JPG" alt='SANY0010.JPG'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Side%20view%20of%20the%20temple.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/J%20Temple%20of%20God%20of%20Literature%2C%20Wenchang%20Ge/J.1.%20Temple%20of%20God%20of%20Literature%2C%20First%20Floor/Side%20view%20of%20the%20temple.jpg" alt='Side%20view%20of%20the%20temple.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Statue%20of%20Earth%20God%20and%20his%20wife.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/J%20Temple%20of%20God%20of%20Literature%2C%20Wenchang%20Ge/J.1.%20Temple%20of%20God%20of%20Literature%2C%20First%20Floor/Statue%20of%20Earth%20God%20and%20his%20wife.jpg" alt='Statue%20of%20Earth%20God%20and%20his%20wife.jpg'onClick={this.on.bind(this)}></img></div>
   
   
   <div className="back-button">
   <p><b><a href = "https://jw4590.github.io/TangxiCityGodTemple/panorama%20-%20Guodong/sites-links.html">&rarr;</a></b></p></div>
   </div>);
}

if(pageScene=="J2"){
  return(
    <div className="gallery-row">

    <div className="gallery-column">
    <img id='001533.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/J%20Temple%20of%20God%20of%20Literature%2C%20Wenchang%20Ge/J.2.%20Temple%20of%20the%20God%20of%20Literature%2C%20Second%20Floor/001533.jpg" alt='001533.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='DSCN1576.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/J%20Temple%20of%20God%20of%20Literature%2C%20Wenchang%20Ge/J.2.%20Temple%20of%20the%20God%20of%20Literature%2C%20Second%20Floor/DSCN1576.JPG" alt='DSCN1576.JPG'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Statue%20of%20the%20God%20of%20Literature..jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/J%20Temple%20of%20God%20of%20Literature%2C%20Wenchang%20Ge/J.2.%20Temple%20of%20the%20God%20of%20Literature%2C%20Second%20Floor/Statue%20of%20the%20God%20of%20Literature..jpg" alt='Statue%20of%20the%20God%20of%20Literature..jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='002033.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/J%20Temple%20of%20God%20of%20Literature%2C%20Wenchang%20Ge/J.2.%20Temple%20of%20the%20God%20of%20Literature%2C%20Second%20Floor/002033.jpg" alt='002033.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='SANY0013.JPG' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/J%20Temple%20of%20God%20of%20Literature%2C%20Wenchang%20Ge/J.2.%20Temple%20of%20the%20God%20of%20Literature%2C%20Second%20Floor/SANY0013.JPG" alt='SANY0013.JPG'onClick={this.on.bind(this)}></img></div>
   
   
   <div className="back-button">
   <p><b><a href = "https://jw4590.github.io/TangxiCityGodTemple/panorama%20-%20Guodong/sites-links.html">&rarr;</a></b></p></div>
   </div>);
}

if(pageScene=="K1"||pageScene=="K2"){
  return(
    <div className="gallery-row">

    <div className="gallery-column">
    <img id='Exterior%20view%20of%20the%20inn.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/K%20Precious%20Spring%20Inn%2C%20Baoquan%20Shanzhuang/K.1.%20Precious%20Spring%20Inn%2C%20Exterior/Exterior%20view%20of%20the%20inn.jpg" alt='Exterior%20view%20of%20the%20inn.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Residential%20houses%20besides%20the%20inn.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/K%20Precious%20Spring%20Inn%2C%20Baoquan%20Shanzhuang/K.1.%20Precious%20Spring%20Inn%2C%20Exterior/Residential%20houses%20besides%20the%20inn.jpg" alt='Residential%20houses%20besides%20the%20inn.jpg'onClick={this.on.bind(this)}></img></div>
   
   
   <div className="back-button">
   <p><b><a href = "https://jw4590.github.io/TangxiCityGodTemple/panorama%20-%20Guodong/sites-links.html">&rarr;</a></b></p></div>
   </div>);
}


if(pageScene=="K3"||pageScene=="K4"){
  return(
    <div className="gallery-row">

    <div className="gallery-column">
    <img id='Bridge%20in%20the%20courtyard.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/K%20Precious%20Spring%20Inn%2C%20Baoquan%20Shanzhuang/K.3.%20Precious%20Spring%20Inn%2C%20Main%20Hall%20Front/Bridge%20in%20the%20courtyard.jpg" alt='Bridge%20in%20the%20courtyard.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Closeup%20of%20the%20pillar%20base.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/K%20Precious%20Spring%20Inn%2C%20Baoquan%20Shanzhuang/K.3.%20Precious%20Spring%20Inn%2C%20Main%20Hall%20Front/Closeup%20of%20the%20pillar%20base.jpg" alt='Closeup%20of%20the%20pillar%20base.jpg'onClick={this.on.bind(this)}></img></div>
   
   
   <div className="back-button">
   <p><b><a href = "https://jw4590.github.io/TangxiCityGodTemple/panorama%20-%20Guodong/sites-links.html">&rarr;</a></b></p></div>
   </div>);
}
if(pageScene=="L"){
  return(
    <div className="gallery-row">

    <div className="gallery-column">
    <img id='Overview%20of%20Community%20Hall.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/L%20Upper%20Guodong%2C%20Community%20Hall%20Square/Overview%20of%20Community%20Hall.jpg" alt='Overview%20of%20Community%20Hall.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Sideway%20besides%20Community%20Hall.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/L%20Upper%20Guodong%2C%20Community%20Hall%20Square/Sideway%20besides%20Community%20Hall.jpg" alt='Sideway%20besides%20Community%20Hall.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Pond%20in%20front%20of%20Community%20Hall.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/L%20Upper%20Guodong%2C%20Community%20Hall%20Square/Pond%20in%20front%20of%20Community%20Hall.jpg" alt='Pond%20in%20front%20of%20Community%20Hall.jpg'onClick={this.on.bind(this)}></img></div>
   
   
   <div className="back-button">
   <p><b><a href = "https://jw4590.github.io/TangxiCityGodTemple/panorama%20-%20Guodong/sites-links.html">&rarr;</a></b></p></div>
   </div>);
}
if(pageScene=="M"){
  return(
    <div className="gallery-row">

    <div className="gallery-column">
    <img id='A%20view%20of%20the%20Upper%20Guo%20from%20a%20building%20nearby%20Community%20Hall.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/M%20Overview%20of%20Upper%20Guodong/A%20view%20of%20the%20Upper%20Guo%20from%20a%20building%20nearby%20Community%20Hall.jpg" alt='A%20view%20of%20the%20Upper%20Guo%20from%20a%20building%20nearby%20Community%20Hall.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='Another%20angle%20of%20the%20village.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/M%20Overview%20of%20Upper%20Guodong/Another%20angle%20of%20the%20village.jpg" alt='Another%20angle%20of%20the%20village.jpg'onClick={this.on.bind(this)}></img></div>
    <div className="gallery-column">
    <img id='View%20of%20the%20valley,%20facing%20southwest.jpg' src="https://raw.githubusercontent.com/jw4590/TangxiCityGodTemple/master/panorama%20-%20Guodong/img/M%20Overview%20of%20Upper%20Guodong/View%20of%20the%20valley,%20facing%20southwest.jpg" alt='View%20of%20the%20valley,%20facing%20southwest.jpg'onClick={this.on.bind(this)}></img></div>
   
   
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