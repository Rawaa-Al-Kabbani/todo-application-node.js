'use strict';

const readToDos = require('../functions/readToDos');
const writeToDos = require('../functions/writeToDos');

module.exports = function(toDo) {
  readToDos(toDos => {
    toDos.push(toDo);
    writeToDos(toDos, () => {
      console.log('added one to-do.');
    });
  });
};
