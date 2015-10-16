/**
 * Module dependencies
 */

import express from 'express';
import http from 'http';
import dbapi from './db-api';

const port = 3000;
const app = express();

// Configurar la ruta de archivos estáticos
// 
app.use('/public', express.static(__dirname+ '/public'));


app.get('/dirhead', (req, res) => {
  dbapi.contenido.find((contenido) => {
    res.json(contenido);
  });
});

app.get('/dirmod', (req, res) => {
	dbapi.modulos.find((modulos) => {
  		res.json(modulos);
  	});
});

app.get('/dirmod2', (req, res) => {
  dbapi.modulo2.find((modulo2) => {
      res.json(modulo2);
    });
});

app.get('/dircred', (req, res) => {
	dbapi.creditos.find((creditos) => {
  		res.json(creditos);
  	});
});
app.get('/dirmod1', (req, res) => {
  dbapi.modulo1.find((modulo1) => {
      res.json(modulo1);
    });
});

app.get('/',(req,res) => {
	res.sendFile(__dirname+'/index.html');
});

let server = http.createServer(app).listen(port,() =>{
		console.log(`El servidor se esta ejecutando por el puerto ${port}`);

});



