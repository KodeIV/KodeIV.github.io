
  var svg = d3.select("#map").append("svg").attr("viewBox", "0 0 1000 500");

  var projection = d3.geo.robinson().translate([500, 250]);
  var path = d3.geo.path().projection(projection);

  var world, data;

  var selected_index = 0;
  var fmt = d3.format("$,2");

  function updateMap() {
    var upper_end = [100, 20000][selected_index];
    var color_scale = d3.scale.linear().domain([0, upper_end]).range(["white", "red"]);

    var data_by_alpha2 = {};
    for (var i=0; i<data.length; i++) {
      var datum = data[i];
      var alpha2 = datum["Alpha-2"],
          country_name = datum["Country name"],
          retail_price = datum["Retail price"],
          wholesale_price = datum["Wholesale price"];
      data_by_alpha2[alpha2] = [retail_price, wholesale_price, country_name];
    }

    var countries = svg.selectAll(".country").data(topojson.feature(world, world.objects["world.geo"]).features);
    countries.enter().append("path").attr("class", "country")
      .style("fill", "white")
      .on("mouseover", function(d) {
        var datum = data_by_alpha2[d.id];
        if (typeof datum != "undefined" && datum[selected_index] != 0) {
          var info = datum[2] + ": " + fmt(datum[selected_index]);
          info += " per " + (["gram", "kilo"][selected_index]);
          d3.select("#info").text(info);
        }
      }).on("mouseout", function(d) {
        d3.select("#info").text(null);
      });
    countries
      .attr("id", function(d) { return d.id; })
      .transition().duration(1000)
      .attr("d", path)
      .style("fill", function(d) {
        var datum = data_by_alpha2[d.id];
        if (typeof datum == "undefined") return "#eee";
        var value = datum[selected_index];
        if (value == 0) return "#eee";
        return color_scale(value);
      });
    d3.select("#MX").on("click", function() {
      projection.translate([1000, 350]).scale(400);
      updateMap();
    });
  }

  d3.json("world.topo.json", function(loaded_world) {
    world = loaded_world;
    if (typeof data != "undefined") updateMapUsingHash();
  });

  d3.csv("typical-price-of-a-gram-of-cocaine-salts.with-alpha-2.csv", function(loaded_data) {
    data = loaded_data;
    if (typeof world != "undefined") updateMapUsingHash();
  });

  window.onhashchange = updateMapUsingHash;

  function updateMapUsingHash() {
    var hash = window.location.hash.substr(1);
    if (hash == "retail") selected_index = 0;
    else selected_index = 1;
    d3.selectAll("#nav a.selected").attr("class", null);
    document.querySelectorAll("#nav a")[selected_index].className = "selected";
    updateMap();
  }

  function showEmbedCode() {
    d3.selectAll("textarea").remove();
    d3.select("body").append("textarea").text(
      '<iframe src="http://data.kiln.it/training/cocaine/index.html" width="800" height="600" style="border: none;"></iframe>'
    );
    return false;
  }
  
