var http = require('http');
var express = require('express');
var router = express.Router();

var title = "Express Weather App";
/* GET home page. */
router.get('/', function(req, res, next) {

	var apiKey = 'e312dbeb8840e51f92334498a261ca1d';
	var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=Seattle&units=imperial&APPID=" + apiKey;

	var weatherRequest = http.get(weatherUrl, function(response){
		if(response.statusCode === 200){
			body = '';
			response.on('data', function(dataChunck){
				console.log(dataChunck);
				body += dataChunck;
			});
			response.on('end', function(){
				body = JSON.parse(body);
				res.render('index', { title: title, body: body });
				console.log(body);

			});
		}
	});

});

module.exports = router;
