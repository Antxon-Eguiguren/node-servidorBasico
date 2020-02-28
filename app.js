// Librerías importadas automáticamente
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Librerías relativas a la carpeta routes (index y users)
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// Crea la aplicación Express
var app = express();

// view engine setup --> Configuración básica de Express
// Ruta donde se encuentran las vistas de mi aplicación (HTMLs)
app.set('views', path.join(__dirname, 'views'));
// Motor de plantillas PUG
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// Lugar donde se guardan los ficheros estáticos (imagenes, videos, css, javascripts,...)
app.use(express.static(path.join(__dirname, 'public')));

// Creamos un MW global para todas las rutas
app.use((req, res, next) => {
  console.log(new Date());
  next();
});

// LO MÁS IMPORTANTE: Rutas GENERALES que gestionamos. Podremos incluir más, para gestionar el resto de rutas de nuestro proyecto (p.e: /products). Las rutas específicas las gestionaremos dentro de cada módulo concreto
app.use('/', indexRouter);
app.use('/users', usersRouter);
// Ejemplo: app.use('/products', productsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
