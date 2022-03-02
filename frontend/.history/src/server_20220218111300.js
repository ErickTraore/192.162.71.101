const fileUpload = require("express-fileupload");

// Body Parser configuration
server.use(bodyParser.urlencoded({ extended: true }));
// server.use(express.static('public'));
// server.use(bodyParser.json());
// server.use(bodyParser.urlencoded({ extended: false }))



// server.use(express.json());
// server.use(express.urlencoded({ extended: true }));
// server.use(fileUpload());

var http = require('http');
var server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    var message = '<h1>test4 ikcad.net test works <h1>\n',
        version = 'NodeJS ' + process.versions.node + '\n',
        response = [message, version].join('\n');
    res.end(response);
});
server.listen()