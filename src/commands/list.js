'use strict';

const readToDos = require('../functions/readToDos');

module.exports = function() {
  readToDos(toDos => {
    if (toDos.length === 0) {
      console.log('you have nothing to do.');
    } else {
      for (let index = 0; index < toDos.length; ++index) {
        console.log(`${index + 1}) ${toDos[index]}`);
      }
    }
  });
};
