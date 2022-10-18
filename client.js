const connect = function () {
  const net = require("net");
  const conn = net.createConnection({
    host: "172.31.113.119",
    port: "50541"
  });

  conn.setEncoding("utf8"); //Interpret data as text

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: SNK");
    /*
    setTimeout( () => {
      conn.write("Move: up")
    }, 1000)
    */
  });

  conn.on("data", () => { 
    
    
    console.log("You ded cuz you idled");
  });

  return conn;
}

module.exports = {
  connect,
};