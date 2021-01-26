"use strict";

const fs = require("fs");
const path = require("path");

module.exports = function (toDos, callback) {
  const filePath = path.join(__dirname, "..", "data", "toDos.json");
  const writeStream = fs.createWriteStream(filePath, { flags: "w" });
  writeStream.on("finish", () => {
    callback();
  });
  const json = JSON.stringify(toDos);
  writeStream.write(json);
  writeStream.end();
};
