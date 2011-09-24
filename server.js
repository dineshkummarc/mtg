var connect = require("connect");

var PORT = 8124;

var server = connect.createServer(
	connect.static(__dirname + "/htdocs")
);

var io = require("socket.io").listen(server);

io.sockets.on("connection", function (socket) {
	socket.emit('news', { hello: 'world' });
	socket.on('my other event', function (data) {
		console.log(data);
	});
});

server.listen(PORT);

console.log("Server listening on port " + PORT);
