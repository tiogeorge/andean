const imagen = require('../models/imagen');
const express = require('express');

//SDependencia para la compresion de la imagen
const imagemin = require('imagemin');
const pngquant = require('imagemin-pngquant');
const mozjpeg = require('imagemin-mozjpeg');
const input= './imagenes/tmp';
const output = './imagenes/compressed';



const imageCompressorRun = (input, output, plugins) => {
    return imagemin(input, output, { plugins });
}
const compressorPlugins = [
    mozjpeg({ speed: 1, quality: '20' }),
    pngquant({ speed: 1, quality: '20' })
];


const imagenController = {};



imagenController.subirImagen = function (req,res){
    imageCompressorRun([`${input}/*.{jpg,jpeg,png}`], output, compressorPlugins)
    .then(()=>{
        console.log("se comprimio correctamente");
        res.send("se comprimio correctamente");
    });

}
imagenController.obtenerImagen = async (req,res)=>{
    var form = "<!DOCTYPE HTML><html><body>" +
"<form method='post' action='/api/imagenes/subir' enctype='multipart/form-data'>" +
"<input type='file' name='image'/>" +
"<input type='submit' /></form>" +
"</body></html>";
res.writeHead(200, {'Content-Type': 'text/html' });
  res.end(form);

}
module.exports = imagenController;