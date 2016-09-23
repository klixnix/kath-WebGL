var express = require('express');
var app = express();
var path = require('path');
var tempIt = require('./temp.js');

// Globally stored temperature data
var temperatures = [];

// Pad temperature values with zeroes, in case there's not actually enough data
// available
function padValues(values) {
  if (values.length < 20) {
    for (var i = 0; i < (20 - values.length); i++) {
      values.push(0);
    }
  }

  return values;
}


app.get('/temperatur.csv', function(req, res) {
  res.send(temperatures.join(','));
});


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000, function() {
	console.log('Der Visualisierungs-Server läuft auf Port 3000!');
  
 
  function processResults(results) {
    temperatures = padValues(results);
    console.log('Neue Temperaturdaten wurden geladen:', temperatures);
  }

  tempIt(processResults);



});

