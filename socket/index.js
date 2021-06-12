const express = require("express"),
    app = express(),
    http = require('http').createServer(app);

const port_number = http.listen(process.env.PORT || 8080);

const port_listen = app.listen(port_number);

const io = require('socket.io')(port_listen, {
    cors: {
        origin: '*'
    }
});

app.get("/", (req, res) => {
    res.json("ControlPrime Socket on!");
});

io.on('connection', (socket) => {
    console.log("socket connected");
    
    socket.on("bus-event", (command) => {
        io.emit("bus-command", command);
        console.log(`Comand ${command} sent`);

    });
});

console.log("Server is running");