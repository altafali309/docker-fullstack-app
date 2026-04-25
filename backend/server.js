const http = require('http');
const mysql = require('mysql');

// 🔹 DB connection
const con = mysql.createConnection({
  host: "db",
  user: "docker_app",
  password: "ali301225",
  database: "dockerdb"
});

// 🔹 Retry DB connection
function connectWithRetry() {
  con.connect(function(err) {
    if (err) {
      console.log("DB not ready, retrying...");
      setTimeout(connectWithRetry, 2000);
    } else {
      console.log("Connected to MySQL!");
    }
  });
}
connectWithRetry();

// 🔹 Create server
const server = http.createServer((req, res) => {

  console.log(req.method, req.url);

  // 🔥 CORS HANDLING (must be INSIDE server)
  if (req.method === "OPTIONS") {
    res.writeHead(200, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
    res.end();
    return;
  }

  // ROUTES
  if (req.url === "/") {
    res.writeHead(200, {
      'Content-Type': 'text/plain',
      'Access-Control-Allow-Origin': '*'
    });
    res.end("Home Page");

  } else if (req.url.startsWith("/api")) {

    con.query("SELECT * FROM users", function(err, result) {

      if (err) {
        console.error(err);
        res.writeHead(500, {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        });
        res.end(JSON.stringify({ error: "DB error" }));
        return;
      }

      res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      });
      res.end(JSON.stringify(result));
    });

  } else if (req.url === "/health") {
    res.writeHead(200, {
      'Content-Type': 'text/plain',
      'Access-Control-Allow-Origin': '*'
    });
    res.end("OK");

  } else {
    res.writeHead(404, {
      'Content-Type': 'text/plain',
      'Access-Control-Allow-Origin': '*'
    });
    res.end("Route not found");
  }
});

// 🔹 Start server
server.listen(3000, '0.0.0.0', () => {
  console.log("Server running on port 3000");
});
