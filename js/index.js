var http = require('http');
var twitterimages = require('./twitimages.js');

var server = http.createServer(function (request, response){
	twitterimages(function (err, res){
		console.log(res);
	})
})

server.listen(process.env.PORT)