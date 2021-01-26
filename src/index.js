"use strict";

const program = require("commander");
const addToDo = require("./commands/add");
const removeToDo = require("./commands/remove");
const resetToDos = require("./commands/reset");
const updateToDo = require("./commands/update");
const listToDos = require("./commands/list");

program.command("add <toDo>").description("add a to-do").action(addToDo);

program
  .command("remove <index>")
  .description("remove a to-do")
  .action(removeToDo);

program
  .command("reset")
  .description("reset the list of to-dos")
  .action(resetToDos);

program
  .command("update <index> <toDo>")
  .description("update a to-do")
  .action(updateToDo);

program
  .command("list")
  .description("list the current to-dos")
  .action(listToDos);

program
  .command("help")
  .description("output the help information")
  .action(() => {
    program.help();
  });

program.parse(process.argv);
