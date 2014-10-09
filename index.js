var http = require('http');
var twitterimages = require('./twitimages.js');
var fs = require('fs');
var url = require('url');
var array = require('array.json')

var server = http.createServer(function (request, response){
	response.setHeader("Content-Type", "text/plain");
	request.twitterimages.array(function (err, res){
		response.write(res);
	})
})

server.listen(process.env.PORT||8080);