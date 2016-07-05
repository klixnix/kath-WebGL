var express = require('express');
var app = express();

app.get('/temperatur.csv', function(req, res) {
  array = [];
  for(var i = 0; i < 20; i++) {
    array.push(Math.floor(Math.random() * 25 + 10));
  }
  res.send(array.join(','));
});

app.listen(3000, function() {
  console.log('Der Nicotinamidadenindinucleotid-Server läuft auf Port 3000!');
});
