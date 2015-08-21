/*
 * Module dependencies
 */

import contenido from './ContentHeader';
import modulos from './ContentModulos';

export default {
  contenido: {
    find: function(callback) {
      setTimeout(() => {
        callback(contenido);
      }, 3000);
    }
  },
  modulos: {
    find: function(callback) {
      setTimeout(() => {
        callback(modulos);
      }, 3000);
    }
  }
}