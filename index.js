var http = require('http');
var twitterimages = require('./js/twitimages.js');
var fs = require('fs');


var server = http.createServer(function (request, response){
	
	twitterimages('collectiveAcademy',function (err, res){
		console.log(res);

		fs.readFile(array.json, function(err, data){
			response.writeHead(200, {"Content-Type": "text/json", "Access-Control-Allow-Origin":"*"});
			response.end(data);
		})
	})
})

server.listen(8080);