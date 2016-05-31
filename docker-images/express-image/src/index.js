var Chance = require('chance');
var chance = new Chance();

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send(generateFligthts());
});

app.get('/test', function (req, res) {
  res.send('HELLO again - Text is working');
});


app.listen(3000, function () {
  console.log('Accpeting HTTP resquests on port 3000!');
}); 

function generateFligthts() {
	var numberOfFlights = chance.integer({min:2,max:10});
	
	
	var flights = [];
	
	for(var i = 0; i < numberOfFlights; i++) {
		
		var year = chance.year();
		var month = chance.month();
		var departureHour = chance.hour({twentyfour:true,min:0,max:23});
		var timeFlight = chance.hour({min:1,max:12});
		var arrivalHour = (departureHour + timeFlight)%24;
		var departureDay = chance.integer({min:1,max:29});
		
		if( arrivalHour < departureHour) {
			departureDay += 1;
		}
		
		flights.push({
			departureLocation : chance.country({full:true}),
			departureDate : chance.date({year:year,hour:departureHour, date:departureDay}),
			arrivalLocation : chance.country({full:true}),
			arrivalDate : chance.date({year:year,hour:arrivalHour, date:departureDay}),
			price : chance.dollar({min:30, max:1000})
		});
	}
	
	console.log(flights);
	return flights;
	
}