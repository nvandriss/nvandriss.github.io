//Fetch Library
function optionChanged(selectedID) {
    console.log(selectedID);
async function main () {
    const response = await fetch("../data/samples.json");
    const data = await response.json();
// Bar Chart
const idSample = data.samples.filter(item => parseInt(item.id) == selectedID);
var sampleValue = idSample[0].sample_values.slice(0,10);
sampleValue= sampleValue.reverse();
var otuID = idSample[0].otu_ids.slice(0,10);
otuID = otuID.reverse();
var otuLabels = idSample[0].otu_labels
otuLabels = otuLabels.reverse();

const yAxis = otuID.map(item => 'OTU' + " " + item);
    console.log(yAxis);

   const trace = {
   y: yAxis,
   x: sampleValue,
   type: 'bar',
   orientation: "h",
   text:  otuLabels,
   marker: {
      color: 'rgb(245, 66, 167)',
      line: {
         width: 3
     }
    }
   },
   layout = {
   title: 'Top 10 Operational Taxonomic Units (OTU)/Individual',
   xaxis: {title: 'Number of Samples Collected'},
   yaxis: {title: 'OTU ID'}
   };

   Plotly.newPlot('bar', [trace], layout,  {responsive: true});    
   
// BUBBLE CHART
var sampleValue1 =idSample[0].sample_values;
var otuID1= idSample[0].otu_ids;

const trace1 = {
x: otuID1,
y: sampleValue1,
mode: 'markers',
marker: {
  color: otuID1,
  
  size: sampleValue1
}
},

layout1 = {
title: '<b>Bubble Chart</b>',
xaxis: {title: 'OTU ID'},
yaxis: {title: 'Number of Samples Collected'},
showlegend: false,
height: 800,
width: 1800
};

Plotly.newPlot('bubble', [trace1], layout1);
}
main()}