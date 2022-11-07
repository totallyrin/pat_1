var connect = require("connect");

var app = connect.createServer().use(connect.static(__dirname + '/src'));

app.listen(8180);