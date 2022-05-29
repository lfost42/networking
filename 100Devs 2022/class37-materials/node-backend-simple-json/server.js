const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }
  // else if (page == '/otherpage') {
  //   fs.readFile('otherpage.html', function (err, data) {
  //     res.writeHead(200, { 'Content-Type': 'text/html' });
  //     res.write(data);
  //     res.end();
  //   });
  // }
  // else if (page == '/otherotherpage') {
  //   fs.readFile('otherotherpage.html', function (err, data) {
  //     res.writeHead(200, { 'Content-Type': 'text/html' });
  //     res.write(data);
  //     res.end();
  //   });
  // }
  else if (page == '/api') {
    if ('student' in params) {
      let value = parseInt(params['student'], 10);
      if (!isNaN(value)) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        let marbleGuess = Math.ceil(Math.random() * 2) === 1 ? 'odd' : 'even';
        const objToJson = {
          // name: "leon",
          // status: "Boss Man",
          // currentOccupation: "Baller",
          guess: marbleGuess
        }
        res.end(JSON.stringify(objToJson));
      }//student = leon
      else if (params['student'] != 'leon') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const objToJson = {
          // name: "Please enter a number!",
          status: "Please enter a number!"
          // currentOccupation: "unknown"
        }
        res.end(JSON.stringify(objToJson));
      }//student != leon
    }//student if
  }//else if
  else if (page == '/css/style.css') {
    fs.readFile('css/style.css', function (err, data) {
      res.write(data);
      res.end();
    });
  } else if (page == '/js/main.js') {
    fs.readFile('js/main.js', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.write(data);
      res.end();
    });
  } else {
    figlet('404!!', function (err, data) {
      if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8002);
