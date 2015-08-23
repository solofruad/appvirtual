/*
 * Module dependencies
 */

import contenido from './ContentHeader';
import modulos from './ContentModulos';
import creditos from './ContentCreditos';

export default {
  contenido: {
    find: function(callback) {
      setTimeout(() => {
        callback(contenido);
      }, 1000);
    }
  },
  modulos: {
    find: function(callback) {
      setTimeout(() => {
        callback(modulos);
      }, 1000);
    }
  },
  creditos: {
    find: function(callback) {      
        callback(creditos);
    }
  }
}