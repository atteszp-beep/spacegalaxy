const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

const io = new Server(server);

app.use(express.static("public"));

let players = {};

io.on("connection", (socket) => {

    players[socket.id] = {
        x:450,
        y:300,
        angle:0,
        hp:100
    };

    socket.emit("init",{id:socket.id,players});

    socket.broadcast.emit("newPlayer",{
        id:socket.id,
        data:players[socket.id]
    });

    socket.on("move",(data)=>{
        players[socket.id]=data;
        socket.broadcast.emit("playerMoved",{id:socket.id,data});
    });

    socket.on("shoot",(b)=>{
        socket.broadcast.emit("playerShoot",b);
    });

    socket.on("disconnect",()=>{
        delete players[socket.id];
        io.emit("removePlayer",socket.id);
    });

});

server.listen(3000,"0.0.0.0",()=>{
    console.log("RUNNING http://localhost:3000");
});
