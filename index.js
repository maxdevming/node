    const http = require('http'); // Import the built-in http module

    const hostname = '127.0.0.1'; // Localhost
    const port = 80; // Choose a port number

    // Create the server
    const server = http.createServer((req, res) => {
      // Set the response HTTP header with a status code and content type
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');

      // Send the response body
      res.end('Hello World!\n');
    });

    // Start the server and listen for requests
    server.listen(port, hostname, () => {
      console.log(`Server running at http://${hostname}:${port}/`);
    });
