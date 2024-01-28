var http = require("http");
var url = require("url");
var fs = require("fs");
const path = require("path");

var server = http.createServer((req, res) => {
    var q = url.parse(req.url, true);
    var filename =
        // q.pathname === "/" ? "./index.html" : "." + q.pathname + ".html";
        q.pathname === "/"
            ? "./web/index.html"
            : "./web" + q.pathname + ".html";
    fs.readFile(filename, function (err, data) {
        if (err) {
            res.writeHead(404, { "Content-Type": "text/html" });
            return res.end("404 Not Found");
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
    });
});

let PORT = 3000;
server.listen(PORT);
console.log(`Server running at http://localhost:${PORT}`);
