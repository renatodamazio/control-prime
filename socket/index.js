const express = require("express"),
    app = express(),
    http = require("http"),
    server = http.createServer(app),
    { Server } = require("socket.io"),
    io = new Server(server);

app.get("/", (req, res) => {
    res.json("ControlPrime Socket on!")
});

io.on('connection', (socket) => {
    console.log("a user connected.");
});

server.listen(process.env.PORT || 8080, () => {
    console.log("Server working ...")
});