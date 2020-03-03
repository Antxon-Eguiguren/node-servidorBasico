var express = require('express');
var router = express.Router();

/* GET home page. */
// GET http://localhost:3000
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Objeto del res.render hacia la vista',
    nombre: 'Antxon',
    arrNumeros: [1, 2, 3],
    estilos: { color: 'white', 'background-color': 'blue' },
    urlImagen: 'https://img.freepik.com/foto-gratis/playa-tropical_74190-188.jpg?size=626&ext=jpg',
    randomNum: Math.floor(Math.random() * 3),
    arrTextos: ['Texto 1', 'Texto 2', 'Texto 3', 'Texto 4'],
    pLista: ['Perro', 'Gato', 'Cocodrilo']
  });
});

module.exports = router;
