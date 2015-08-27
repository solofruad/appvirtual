/*
 * Module dependencies
 */

import contenido from './ContentHeader';
import modulos from './ContentModulos';
import creditos from './ContentCreditos';
import modulo1 from './ContentModulo1';

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
  },
  modulo1: {
    find: function(callback) {
      setTimeout(() => {
        callback(modulo1);
      }, 3000);
    }
  }
}