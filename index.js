"use strict";

// Подгружаем нужные модули.
const http = require("http");
const url = require("url");
const fs = require("fs");
const files = require("./files.js");

var server = new http.Server();

server.on('request', function(req, res) {

    if (req.url == "/"){
        res.end("Введите запрос в адресную строку. "  + req.url);
        console.log(req.method);
        console.log(req.headers);
        console.log(req.url);
    }else if (req.url == "/test"){
        console.log(req.method);
        console.log(req.headers);
        console.log(req.url);
        res.end("Hello some one " + req.url);
    }else {
        console.log(req.method);
        console.log(req.headers);
        console.log(req.url);
        res.end(req.method + "<br>" + req.headers + "<br>" + req.url)
    };
});

server.listen(8000);