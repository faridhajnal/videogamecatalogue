var express = require('express'); //requiring express.
var PORT = process.env.PORT || 655; //Port provided by heroku, or local port
var app = express(); //starting express.

app.use(express.static(__dirname + '/public')); //utilizará TODOS los recursos encontrados en la carpeta 'public' para el desarrollo web,-

app.listen(PORT); //la aplicación será ejecutada en el puerto 7777

console.log('App succesfuly running on port ' + PORT);