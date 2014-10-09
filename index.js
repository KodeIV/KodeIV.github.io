var http = require('http');
var twitterimages = require('./twitimages.js');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function (request, response){
	twitterimages(function (err, res){
		response.write(res);
	})
})

server.listen(process.env.PORT||8080);