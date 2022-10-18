const { IP, PORT } = require("./constants");

const connect = function() {
  const net = require("net");
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding("utf8"); //Interpret data as text

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: RM");
  });

  conn.on("data", () => {
    console.log("You ded");
    process.exit();
  });

  return conn;
};

module.exports = {
  connect,
};