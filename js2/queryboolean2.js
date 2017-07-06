var draw = require('../js2/geojsonboolean.js');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/mydb.db');

var Nombre;
var Rut;
var Direccion;
var Latitude;
var Longitude;
/*
 */

exports.zeppelin = function(query, id) {

  db.all(query[0], query[1], function(err, row) {

    if (row != null) {

      var arreglo = [];
      if (row.length == 1) {
        for (i = 0; i < row.length; i++) {

          setFeatures(row[i].Rut, row[i].Nombre, row[i].Direccion, row[i].Latitude, row[i].Longitude);
          arreglo[i] = setFeatures(row[i].Rut, row[i].Nombre, row[i].Direccion, row[i].Latitude, row[i].Longitude);;
        }
        draw.togeojson1(arreglo, id);
      }
      if (row.length > 1) {
        for (i = 0; i < row.length; i++) {

          setFeatures(row[i].Rut, row[i].Nombre, row[i].Direccion, row[i].Latitude, row[i].Longitude);
          arreglo[i] = setFeatures(row[i].Rut, row[i].Nombre, row[i].Direccion, row[i].Latitude, row[i].Longitude);;
        }
        draw.togeojson1(arreglo, id);
      }
      if (row.length < 1) {
        console.log("Rut No Encontrado");
      }
    } else {
      console.log("Error: Celda Vacía");
    }
  });
};

setFeatures = function(Rut, Nombre, Direccion, Longitude, Latitude) {

  var pointFeatures;

  pointFeatures = {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [Latitude, Longitude]
    },
    "properties": {
      "title": "Adulto Mayor",
      "description": "<strong>Adulto Mayor</strong></p>" + Nombre ,
      "address": [Direccion]
    }
  }
  return pointFeatures;
};