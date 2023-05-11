const express = require('express');
const app = express();
const http = require('http');

const server = http.Server(app);
// const io = require('socket.io').listen(server);

app.use('/assets', express.static(__dirname + '/src/assets'));
app.use(express.static(__dirname + '/src'));
app.use(express.static(__dirname + '/node_modules/phaser/dist/'));


app.get('/test', (req, res) => {
    // res.sendFile(__dirname + '/index.html');
    res.json({
        msg: "Dies ist eine Testnachricht!",
        path: __dirname,
        agent: req.headers['user-agent'],
    });
});

app.listen(3000, () => {
    console.log('listening on *:3000');
});