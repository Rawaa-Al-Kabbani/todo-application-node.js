'use strict';

const readToDos = require('../functions/readToDos');
const writeToDos = require('../functions/writeToDos');

module.exports = function(index) {
  readToDos(toDos => {
    if (index < 1 || index > toDos.length) {
      console.log('pick a number from 1 to ' + toDos.length + '.');
    } else {
      toDos.splice(index - 1, 1);
      writeToDos(toDos, () => {
        console.log('one to-do was removed.');
      });
    }
  });
};
