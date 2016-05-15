(function () {

  document.onreadystatechange = function () {
    if (document.readyState == "complete") {
      console.log("ready");

      var imageSource = "./images/PeiDaKuo.jpg";

      var image = new Image();
      image.src = imageSource;
      var width = image.width, height = image.height;
      var tileWidth = Math.floor(width/10);
      var tileHeight = Math.floor(height/10);

      d3.select(".frame").style({width: width+"px"});

      var tiles = d3.select(".frame").selectAll(".tile")
        .data(d3.range(100).map(function (d) {
          return { row: Math.floor(d/10), col: d%10, id: d }; }))
        .enter().append("div").classed("tile", true)
        .style({ height: tileHeight+"px", width: tileWidth+"px",
            backgroundPosition: function (d) {
              return this.style.backgroundPosition = -d.col*tileWidth+"px "+-d.row*tileHeight+"px";
          }});

      tiles.style({ position: "relative" });

      tiles = new _tiles.Tiles(tiles);

      _tiles.tiles = tiles;
      tiles.scatterTiles();
      tiles.slowlyReturnToShape();
    }
  }

})();
