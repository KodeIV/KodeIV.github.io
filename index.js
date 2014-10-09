var http = require('http');
var twitterimages = require('./twitimages.js');
var fs = require('fs');
var url = require('url');
var array = require('array.json')

var server = http.createServer(function (request, response){
	
	twitterimages(function (err, res){
		response.write(res);

		fs.readFile(array, function(err, data){
			response.writeHead(200, {"Content-Type": "text/json");
			response.end(data);
		})
	})
})

server.listen(process.env.PORT||8080);