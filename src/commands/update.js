"use strict";

const readToDos = require("../functions/readToDos");
const writeToDos = require("../functions/writeToDos");

module.exports = function (index, toDo) {
  readToDos((toDos) => {
    if (index < 1 || index > toDos.length) {
      console.log("pick a number from 1 to " + toDos.length + ".");
    } else {
      toDos[index - 1] = toDo;
      writeToDos(toDos, () => {
        console.log("one to-do was updated.");
      });
    }
  });
};
