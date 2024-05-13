const express = require("express")
const { createServer } = require("http");
const { Server } = require("socket.io");
require('dotenv').config();

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

io.on("connect", (socket)=>{
    console.log("socket connected ", socket.id)
})


const PORT = process.env.PORT || 5000;


app.use(express.static("public"));
httpServer.listen(PORT)