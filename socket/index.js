const express = require("express"),
    app = express(),
    http = require('http').createServer(app);

const port_number = http.listen(process.env.PORT || 8080);

const port_listen = app.listen(port_number);

const io = require('socket.io')(port_listen, {
    cors: {
        origin: 'http://127.0.0.1:5500'
    }
});

app.get("/", (req, res) => {
    res.json("ControlPrime Socket on!")
});

io.on('connection', (socket) => {
    console.log("a user connected.");

    socket.on("bus-event", (msg) => {
        console.log(`here the received msg ${msg}`);
    })
});

console.log("Server is running");