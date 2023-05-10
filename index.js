const express = require('express');
const app = express();
const http = require('http');

const server = http.Server(app);
// const io = require('socket.io').listen(server);



app.use(express.static(__dirname + '/src'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000, ()  => {
    console.log('listening on *:3000');
});