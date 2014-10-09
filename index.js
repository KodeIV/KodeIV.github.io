var http = require('http');
var twitterimages = require('./twitimages.js');
var fs = require('fs');


var server = http.createServer(function (request, response){
	
	twitterimages(function (err, res){
		response.write(res);

		fs.readFile(array, function(err, data){
			response.writeHead(200, {"Content-Type": "text/json", "Access-Control-Allow-Origin":"*"});
			response.end(data);
		})
	})
})

server.listen(process.env.PORT );