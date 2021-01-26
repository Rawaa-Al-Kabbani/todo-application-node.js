"use strict";

const fs = require("fs");
const path = require("path");

module.exports = function (callback) {
  const filePath = path.join(__dirname, "..", "data", "toDos.json");
  const readStream = fs.createReadStream(filePath, "utf8");
  let content = "";
  readStream.on("data", (data) => {
    content += data.toString();
  });
  readStream.on("end", () => {
    let json = JSON.parse(content);
    callback(json);
  });
};
