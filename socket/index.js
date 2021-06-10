const express = require('express');
const app = express();
const httpServer = require("http").createServer();

app.get('/', (req, res) => {
    res.send("Api rolling");
});

app.get('/up', (req, res) => {
    const io = require("socket.io")(httpServer, {

    })
});

app.listen(8080);

console.log("Express server rolling...")