
var http = require('http');
var fs = require('fs')
//var url = require('url')
var twitterimages = require('./twitimages.js');

http.createServer(function (request, response){
    twitterimages('collectiveAcademy', function (err, res){
        console.log(res);
    })
    fs.readFile('array.json',  function(err, data){
        response.writeHead(200,{"Content-Type":"text/json","Access-Control-Allow-Origin":"*"})
        response.end(data)
    })
}).listen(process.env.port || 8080)