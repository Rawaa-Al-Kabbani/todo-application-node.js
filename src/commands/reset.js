'use strict';

const writeToDos = require('../functions/writeToDos');

module.exports = function(index, toDo) {
  const toDos = [];
  writeToDos(toDos, () => {
    console.log('The to-dos were reset.');
  });
};
