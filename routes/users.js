var express = require('express');
var router = express.Router();

// Creamos un MW particular para users
router.use((req, res, next) => {
  console.log('Middleware para users');
  next();
});

/* GET users listing. */
// GET http://localhost:3000/users
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

// GET http://localhost:3000/users/new
// GET http://localhost:3000/users/new?param1=valor&param2=valor
router.get('/new', (req, res) => {
  console.log(req.query);
  res.send('GET para crear usuario');
});

// GET http://localhost/3000/users/:userId
router.get('/:userId', (req, res) => {
  console.log(req.params);
  res.send(`Id del usuario: ${req.params.userId}`);
});

// POST http://localhost/3000/users/new
router.post('/new', (req, res) => {
  console.log(req.body);
  console.log(req.headers["content-type"]);
  res.send('Usuario creado');
});

module.exports = router;
