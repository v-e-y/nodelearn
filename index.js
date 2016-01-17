"use strict";

// Подгружаем нужные модули.
const http = require("http");
const url = require("url");
const fs = require("fs");
const files = require("./files");

var server = new http.Server();

server.on('request', function(req, res) {
    if (req.url == "/"){
        res.end("Введите запрос в адресную строку.");
    }else if (req.url == "/test"){
        res.end("Hello some one " + req.url);
    };
});

server.listen(8000);