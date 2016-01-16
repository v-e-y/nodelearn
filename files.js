"use strict";

function Files(name){
    this.name = name.toLowerCase().trim().toString();
    // Минимальная длина имени файла.
    // Цыфры выдуманны и не счем не связанны.
    this.minNameLength = 3;
    // Максимальная длина имени файла.
    // Цыфры выдуманны и не счем не связанны.
    this.maxNameLength = 63;

    // Масив где хранятся имена файлов.
    this.fileNamesDataBase = [];

    // Проверяем уникальность имени файла.
    this.checkNameUniqu = function(){
        for (var i = 0; i < this.fileNamesDataBase.length; i++){
            var nameInBase = this.fileNamesDataBase[i];
            if (this.name === nameInBase){
                return new Error("Такое имя файла уже есть в базе.");
            }
        }

    };

    // Проверяем длину имени файла на соответствие заданнным параметрам
    // в классе Files, в свойствах minNameLength и maxNameLength.
    this.checkFilesNameLength = function() {
        if (this.name.length < this.minNameLength || this.name.length > this.maxNameLength) {
            return new Error("Длина имени файла должна быть от 3 до 63 символов.");
        } else {
            console.log("name length god");
        }

    };

    // Добавляем имя файла в базу имен fileNamesDataBase.
    this.addFileName = function(){
        this.fileNamesDataBase.push(this.name);
    };


}


var testFilename = new Files("asddddddddddddddGFDFGDFGDFGDFgdfgdfgdfg|RAGFGDSFGDSFghdfgdfgdfgFGSAFGSFGSDFGSDFHGSDFHDFGDSFGSDFGDSFGDFGDFGsdfsdf ");
console.log(testFilename.name);
console.log(testFilename.name.length);
testFilename.checkFilesNameLength();