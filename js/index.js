var http = require('http');
var twitterimages = require('/js/twitimages.js');

var server = http.createServer(function (request, response){
	twitterimages(function (err, res){
		response.write(res);
	})
})

server.listen(process.env.PORT)