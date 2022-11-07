var connect = require("connect");
var app = connect();
app.use(function(req,res){
    res.end("Hello");
});
app.listen(3000);