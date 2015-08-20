/*
 * Module dependencies
 */

import contenido from './ContentHeader';

export default {
  contenido: {
    find: function(callback) {
      setTimeout(() => {
        callback(contenido);
      }, 3000);
    }
  }
}