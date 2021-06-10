const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer, {

})

io.on("connection", (socket) => {
    socket.on('up', () => { socket.emmit("up") });
});

httpServer.listen(8080);

console.log("Its running");