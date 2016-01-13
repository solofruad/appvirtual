/*
 * Module dependencies
 */

import contenido from './ContentHeader';
import modulos from './ContentModulos';
import creditos from './ContentCreditos';
import modulo2 from './ContentModulo2';
import modulo3 from './ContentModulo3';
import modulo4 from './ContentModulo4';
import modulo5 from './ContentModulo5';
import modulo6 from './ContentModulo6';
import intomod2 from './ContentIntoMod2';
import intomod3 from './ContentIntoMod3';
import intomod4 from './ContentIntoMod4';
import intomod5 from './ContentIntoMod5';
import intomod6 from './ContentIntoMod6';

export default {
  contenido: {
    find: function(callback) {
      setTimeout(() => {
        callback(contenido);
      }, 500);
    }
  },
  modulos: {
    find: function(callback) {
      setTimeout(() => {
        callback(modulos);
      }, 500);
    }
  },
  creditos: {
    find: function(callback) {
        callback(creditos);
    }
  },
  intomod2: {
    find: function(callback) {
      setTimeout(() => {
        callback(intomod2);
      }, 500);
    }
  },
  modulo2: {
    find: function(callback) {
      setTimeout(() => {
        callback(modulo2);
      }, 500);
    }
  },
  intomod3: {
    find: function(callback) {
      setTimeout(() => {
        callback(intomod3);
      }, 500);
    }
  },
  modulo3: {
    find: function(callback) {
      setTimeout(() => {
        callback(modulo3);
      }, 500);
    }
  },
  intomod4: {
    find: function(callback) {
      setTimeout(() => {
        callback(intomod4);
      }, 500);
    }
  },
  modulo4:{
    find: function(callback){
      setTimeout(()=> {
        callback(modulo4);
      },500);
    }
  },
  intomod5: {
    find: function(callback) {
      setTimeout(() => {
        callback(intomod5);
      }, 500);
    }
  },
  modulo5:{
    find: function(callback){
      setTimeout(()=> {
        callback(modulo5);
      },500);
    }
  },
  intomod6: {
    find: function(callback) {
      setTimeout(() => {
        callback(intomod6);
      }, 500);
    }
  },
  modulo6:{
    find: function(callback){
      setTimeout(()=> {
        callback(modulo6);
      },500);
    }
  }
}
