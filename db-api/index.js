/*
 * Module dependencies
 */

import contenido from './ContentHeader';
import modulos from './ContentModulos';
import creditos from './ContentCreditos';
import modulo1 from './ContentModulo1';
import modulo2 from './ContentModulo2';
import modulo3 from './ContentModulo3';
import modulo4 from './ContentModulo4';

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
  },
  modulo2: {
    find: function(callback) {
      setTimeout(() => {
        callback(modulo2);
      }, 3000);
    }
  },
  modulo3: {
    find: function(callback) {
      setTimeout(() => {
        callback(modulo3);
      }, 3000);
    }
  },
  modulo4:{
    find: function(callback){
      setTimeout(()=> {
        callback(modulo4);
      },3000);
    }
  }
}
