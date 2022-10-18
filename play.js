const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "172.31.121.116",
    port: "50541"
  });

  conn.setEncoding("utf8");

  conn.on("data", () => { 
    console.log("You ded cuz you idled")
  });

  return conn;
}

console.log("Connecting...");
connect();