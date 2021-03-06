"use strict";
const fs = require("fs");
const path = require('path');

function Files(name){
    this.name = name.toLowerCase().trim().toString();
    // Минимальная длина имени файла.
    // Цыфры выдуманны и не с чем не связанны.
    this.minNameLength = 3;
    // Максимальная длина имени файла.
    // Цыфры выдуманны и не счем не связанны.
    this.maxNameLength = 63;
    // Массив где хранятся имена существующих файлов.
    this.fileNamesDataBase = [];
    // Папка для хранения файлов.
    this.filesDirectory = __dirname + "\\public";

    // Поверяем существование директории/папки.
    fs.readdir(this.filesDirectory, function(err, list){

        if (err){
            // Если директории нет, создаем её.
            fs.mkdir("public", function(err){
                if (err && err.code !== "EEXIST") {
                    throw new Error("Немогу создать папку");
                }
            });
            throw new Error;
        }

    });
}

// Проверяем уникальность имени файла.
Files.prototype.checkNameUniqu = function(){
    for (var i = 0; i < this.fileNamesDataBase.length; i++){
        var nameInBase = this.fileNamesDataBase[i];
        if (this.name === nameInBase){
            throw new Error("Такое имя файла уже есть в базе.");
        }
    }
};

// Проверяем длину имени файла на соответствие заданнным параметрам
// в классе Files, в свойствах minNameLength и maxNameLength.
Files.prototype.checkFilesNameLength = function() {
    if (this.name.length < this.minNameLength || this.name.length > this.maxNameLength) {
        throw new Error("Длина имени файла должна быть от 3 до 63 символов.");
    }
};

// Добавляем имя файла в базу имен fileNamesDataBase.
Files.prototype.addFileName = function(){
    this.fileNamesDataBase.push(this.name);
};

var testfile = new Files("testfile");