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

// Rutas de cabecera
app.get('/dirhead', (req, res) => {
  dbapi.contenido.find((contenido) => {
    res.json(contenido);
  });
});

// Ruta para petición ajax de archivo json de contenido de modulos de la pagina principal
app.get('/dirmod', (req, res) => {
	dbapi.modulos.find((modulos) => {
  		res.json(modulos);
  	});
});

app.get('/dircred', (req, res) => {
  dbapi.creditos.find((creditos) => {
    res.json(creditos);
  });
});

app.get('/dirsimulaciones', (req, res) => {
  dbapi.simulaciones.find((simulaciones) => {
    res.json(simulaciones);
  });
});

app.get('/dirintomod2', (req, res) => {
  dbapi.intomod2.find((intomod2) => {
      res.json(intomod2);
    });
});

app.get('/dirmod2', (req, res) => {
  dbapi.modulo2.find((modulo2) => {
      res.json(modulo2);
    });
});

app.get('/dirintomod3', (req, res) => {
  dbapi.intomod3.find((intomod3) => {
      res.json(intomod3);
    });
});
app.get('/dirmod3', (req, res) => {
  dbapi.modulo3.find((modulo3) => {
      res.json(modulo3);
    });
});
app.get('/dirintomod4', (req, res) => {
  dbapi.intomod4.find((intomod4) => {
      res.json(intomod4);
    });
});
app.get('/dirmod4', (req, res) => {
  dbapi.modulo4.find((modulo4) => {
      res.json(modulo4);
    });
});
app.get('/dirintomod5', (req, res) => {
  dbapi.intomod5.find((intomod5) => {
      res.json(intomod5);
    });
});
app.get('/dirmod5', (req, res) => {
  dbapi.modulo5.find((modulo5) => {
      res.json(modulo5);
    });
});
app.get('/dirintomod6', (req, res) => {
  dbapi.intomod6.find((intomod6) => {
      res.json(intomod6);
    });
});
app.get('/dirmod6', (req, res) => {
  dbapi.modulo6.find((modulo6) => {
      res.json(modulo6);
    });
});
app.get('/dirintomod7', (req, res) => {
  dbapi.intomod7.find((intomod7) => {
      res.json(intomod7);
    });
});
app.get('/dirmod7', (req, res) => {
  dbapi.modulo7.find((modulo7) => {
      res.json(modulo7);
    });
});

app.get('/',(req,res) => {
	res.sendFile(__dirname+'/index.html');
});

let server = http.createServer(app).listen(port,() =>{
		console.log(`El servidor se esta ejecutando por el puerto ${port}`);

});
