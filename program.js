var http=require('http');
var dt=require('./date');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text\html'});
    res.write("The date and time now: "+dt());
    res.end();
}).listen(8000);
console.log("Server Running");