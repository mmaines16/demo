const express = require('express');
const path = require('path');
const server = express();

server.use(express.static(path.join(__dirname, '/')));

server.get("/", function(req, res) {
   res.sendFile('index.html');
});

server.listen(8000, () => console.log(`Example app listening on port ${8000}!`))