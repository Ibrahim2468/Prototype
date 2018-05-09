var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res){
	var params = queryString.parse(url.parse(req.url).query);

	res.writeHead(200, {"Content-Type": "text/plain"});
	
	if('identifiant' in params && 'pass' in params){
		res.write('Connexion réussie avec succes !!');
	} else{
		res.write('Echec de la connxion');
	}
	res.end();
});

server.listen(8080);
