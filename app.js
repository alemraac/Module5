const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        fs.readFile('html/module5.html', function(err, data){
            res.writeHead(200, {"Content-Type":"text/html"});
            res.write(data);
            res.end();
        })
    } else if(req.url === "/mariano" || req.url === "/mariano.html"){
        fs.readFile('html/mariano.html', function(err, data) {
            res.writeHead(200, {"Content-Type":"text/html"});
            res.write(data);
            res.write("<a href='/'><center>Back to Home Page</center></a>");
            res.end();
        })
    } else if(req.url === "/laurel" || req.url === "/laurel.html"){
        fs.readFile('html/laurel.html', function(err, data) {
            res.writeHead(200, {"Content-Type":"text/html"});
            res.write(data);
            res.write("<a href='/'><center>Back to Home Page</center></a>");
            res.end();
        })
    } else if(req.url === "/laroco" || req.url === "/laroco.html"){
        fs.readFile('html/laroco.html', function(err, data) {
            res.writeHead(200, {"Content-Type":"text/html"});
            res.write(data);
            res.write("<a href='/'><center>Back to Home Page</center></a>");
            res.end();
        })
    }else {
        res.writeHead(404, {"Content-Type":"text/html"});
        res.write("<html><body><h1>404: Page Not Found</h1></body></html>");
        res.write("<a href='/'><center>Back to Home Page</center></a>");
        res.end();
    }
}).listen(4000);
console.log("listening to port 4000");
