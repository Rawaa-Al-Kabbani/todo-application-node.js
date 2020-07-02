# Todo program
Todo is a program that allows the user to add , edit and delete a todo task from the todos list. It can lists all the existed todos in the list and reset the list.

The Todo is written in Node.js together with Commander.

## Installing the simulator
To install the todo list first clone this repostiory, then run npm install.

## Running the simulator
The run command is used to run a new simulation. The command has six required paramaters:

add - add a todo to the list (string)
edit - edit a todo (integer greater than zero) (string)
delete - delete a todo (integer greater than zero)
list - list all todos in the list
reset - empty the list
a todo - the todo task (string)
index - the number of the todo in the list (integer greater than or equal to zero)

To get more information about the commnad line interface run node app.js --help.
