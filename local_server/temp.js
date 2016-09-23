var exec = require('child_process').exec;
var fs = require('fs');
var contents;


exec("sudo modprobe wire");
exec("sudo modprobe w1-gpio");
exec("sudo modprobe w1-therm");

function tempIt(callback) {
	while (true) {

	var temperatures = [];
    
    data = fs.readFileSync('/sys/bus/w1/devices/28-000007e0788f/w1_slave');
	contents = data.toString();
	
    var stringValue = contents.split("\n")[1].split(" ")[9].split("=")[1];

	var tempC = parseFloat(stringValue) / 1000;

	temperatures.push(tempC);
		
	callback(temperatures);
	
	}
 }

module.exports = tempIt;
