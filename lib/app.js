const http = require('http');
const dateTime = require('./my_modules/date.js')

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.write("The date and time currently are: " + dateTime.myDateTime() + "\n")
  response.write("Hello World" + "\n")
  response.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
