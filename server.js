var http=require("http");

function ser(request,response){
    response.writeHead(200,{"Content-Type":"text/html"});
    response.write("Server");
    response.write("<h1>SERVER CREATED</h1>");
    response.end("<html><body>Home,URL was:"+request.url+"</body></html>");
    console.log("Request Received");
}

var server=http.createServer(ser);

server.listen(7000); 