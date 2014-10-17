<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Minimal map</title>
    <link type ="text/css" rel="stylesheet" href= "/css/map.css" />
    <script src="//cdnjs.cloudflare.com/ajax/libs/d3/3.4.12/d3.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/d3-geo-projection/0.2.9/d3.geo.projection.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/topojson/1.1.0/topojson.min.js"></script>
    <style>
      
    </style>
  </head>
  <body>
  <h1>Global Cocaine Prices</h1>
  <button id="retailButton">Retail prices</button>
  <button id="wholesaleButton">Wholesale prices</button>
    <div id="map"></div>

    <script>

      var svg = d3.select("#map").append("svg").attr("viewBox", "0 0 1000 500");
      var projection = d3.geo.robinson().translate([500, 250]);
      var path = d3.geo.path().projection(projection);

      var colorRetail = d3.scale.linear()
          .domain([0, 1333])
          .range(["#f9eded", "#ff0000"])
      var colorWholesale = d3.scale.linear()
          .domain([0, 100000])
          .range(["e4e3f7", "#1500ff"])

      var retailArray = [];
      var world, cocaine;

  
  

      function cocaineMap(){         
           var cokeObj = {};
                for (i=0; i < cocaine.length; i++){
                          cokeObj[i] = cocaine[i];        
            
            //pulls price data from each country object within cokeObj
            Object.keys(cokeObj).forEach (function(key){
               retailArray[i] = (cokeObj[key]["Retail price"]);
               wholesaleArray[i] = (cokeObj[key]["Wholesale price"]);
               
              //return(cokeObj[key]["Retail price"]);
      });
          
                 } 
           //console.log(retailArray);

          var countries = topojson.feature(world, world.objects["world.geo"]).features;             
          for (var i=0; i<countries.length; i++) {
                svg.append("path")
                .data(retailArray[i])
                .attr("fill", function(d){
                  //if (typeof colorRetail === "undefined") {
                    //return "grey"
                  //}
                  return colorRetail(d*150)})
                .attr("id", countries[i].id)
                .attr("d", path(countries[i]))
          };
      };


      
      d3.json("/world.topo.json", function(loadWorld) {
          world = loadWorld;
          if (typeof cocaine !== "undefined"){ 
            cocaineMap();
          }
      });
        

      d3.csv("/cocaine.csv", function(loadData){
            cocaine = loadData;
            //console.log(cocaine);
            if(typeof world !== "undefined") {
              cocaineMap();
            }  
      });
        
    </script>

  </body>
</html>
