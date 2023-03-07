const data = d3.csvParse(dataset, d => {
	return {
        category: d.Category,
        Coffe: d.Coffee,
        Chocolate:d.Chocolate
	}
});
//Emission1000kcal,emissionsperkilogram,emissionsper100gprotein,Freshwaterwithdrawalsper1000kcal,Freshwaterwithdrawalsper100gprotein,Freshwaterwithdrawalsperkilogram,Greenhousegas emissions per 1000kcal (kgCO₂eq per 1000kcal),Greenhousegasemissionsper100gprotein,Landuseper1000kcal,Landuseperkilogram,landuseper100gprotein



console.log(data)

//set the dimensions and margins of the graph
var margin = {top: 30, right: 30, bottom: 70, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

svg.append("text")
.attr("x", 200)
.attr("y", 30)
.attr("text-anchor", "middle")
.text("Coffee Kg CO2 per Kg Product");

svg.append("svg:defs").append("svg:marker")
.attr("id", "arrowhead")
.attr("viewBox", "0 0 10 10")
.attr("refX", 10)
.attr("refY", 1)
.attr("markerWidth", 12)
.attr("markerHeight", 12)
.attr("orient", "auto")
.append("path")
.attr("d", "M 0 0 L 5 10 L 10 0");
 
          
// X axis
var x = d3.scaleBand()
  .range([ 0, width ])
  .domain(data.map(function(d) { return d.category; }))
  .padding(0.2);
svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x))
  .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");
    

// Add Y axis
var y = d3.scaleLinear()
  .domain([0, 15])
  .range([ height, 0]);
svg.append("g")
  .call(d3.axisLeft(y))
  .select("path").attr("marker-end", "url(#arrowhead)");

// Bars
svg.selectAll("mybar")
  .data(data)
  .enter()
  .append("rect")
    .attr("x", function(d) { return x(d.category); })
    .attr("y", function(d) { return y(d.Coffe); })
    .attr("width", x.bandwidth())
    .attr("height", function(d) { return height - y(d.Coffe); })
    .attr("fill", "#69b3a2")



// append the svg object to the body of the page
var svg2 = d3.select("#my_dataviz2")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

svg2.append("text")
.attr("x", 200)
.attr("y", 30)
.attr("text-anchor", "middle")
.text("Chocolate Kg CO2 per Kg Product");

svg2.append("svg:defs").append("svg:marker")
.attr("id", "arrowhead")
.attr("viewBox", "0 0 10 10")
.attr("refX", 10)
.attr("refY", 1)
.attr("markerWidth", 12)
.attr("markerHeight", 12)
.attr("orient", "auto")
.append("path")
.attr("d", "M 0 0 L 5 10 L 10 0");

// X axis
var x = d3.scaleBand()
  .range([ 0, width ])
  .domain(data.map(function(d) { return d.category; }))
  .padding(0.2);
svg2.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x))
  .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

// Add Y axis
var y = d3.scaleLinear()
  .domain([0, 15])
  .range([ height, 0]);
svg2.append("g")
  .call(d3.axisLeft(y))
  .select("path").attr("marker-end", "url(#arrowhead)");

// Bars
svg2.selectAll("mybar")
  .data(data)
  .enter()
  .append("rect")
    .attr("x", function(d) { return x(d.category); })
    .attr("y", function(d) { return y(d.Chocolate); })
    .attr("width", x.bandwidth())
    .attr("height", function(d) { return height - y(d.Chocolate); })
    .attr("fill", "#69b3a2")


// append the svg object to the body of the page
var svg3 = d3.select("#my_dataviz3")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Parse the Data
let pls = `Type,Value
Coffee,16.50,
Chocolate,18.50
`

const data_tot = d3.csvParse(pls, d => {
	return {
        Type: d.Type,
        Value: d.Value,
	}
});

console.log(data_tot)

var margin = {top: 30, right: 30, bottom: 70, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;


  // Add X axis
  var x = d3.scaleLinear()
    .domain([0, 20])
    .range([ 0, width]);
  svg3.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")

  // Y axis
  var y = d3.scaleBand()
    .range([ 0, height ])
    .domain(data_tot.map(function(d) { return d.Type; }))
    .padding(.1);
  svg3.append("g")
    .call(d3.axisLeft(y))

  //Bars
  svg3.selectAll("myRect")
    .data(data_tot)
    .enter()
    .append("rect")
    .attr("x", x(0) )
    .attr("y", function(d) { return y(d.Type); })
    .attr("width", function(d) { return x(d.Value); })
    .attr("height", y.bandwidth() )
    .attr("fill", "#69b3a2")






