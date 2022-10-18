const { stdin } = require("process");

let connection;

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  
  if (key === 'w' || key === 'W') {
    connection.write("Move: up");
  } 
  
  if (key === 'a' || key === 'A') {
    connection.write("Move: left");
  }

  if (key === 's' || key === 'S') {
    connection.write("Move: down");
  }

  if (key === 'd' || key === 'D') {
    connection.write("Move: right");
  }

  if (key === 'f' || key === 'F') { //Sends message
    connection.write("Say: On a roll!");
  }

  if (key === 'l' || key === 'L') { //Sends message
    connection.write("Say: Yikes!");
  }
};

const setupInput = function(conn) {
  const stdin = process.stdin;
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {
  setupInput,
};