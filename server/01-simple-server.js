'use strict';

// В Node часто используется наследование,
// Далеко не все методы, которые есть в модуле http.Server, описаны в модуле http,
// часть функционала в net, часть в events
// Это и в других ситуациях бывает, документация в родителях
var http = require('http');

var server = new http.Server();

server.on('request', function(req, res) {
  // если не сделать res.end, то запрос "подвиснет", нода сама отвечать не будет
  res.end("Hello");
});

let emit = server.emit;
server.emit = function(event) {
  console.log(event);
  return emit.apply(this, arguments);
};

server.listen(8000);
