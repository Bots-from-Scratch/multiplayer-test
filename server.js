const express = require('express');
const app = express();
const httpServer = require('http');

const server = httpServer.Server(app);
const io = require('socket.io')(httpServer, {
    cors: {
        origin: "http://localhost:8080"
    }
})


app.use('/assets', express.static(__dirname + '/src/assets'));
app.use(express.static(__dirname + '/src'));
app.use(express.static(__dirname + '/node_modules/phaser/dist/'));
app.use(express.static(__dirname + '/node_modules/socket.io/'));

// Socket.IO-Ereignisbehandlung
io.on('connection', (socket) => {
    console.log('Ein Client hat eine Verbindung hergestellt.');
  
    // Ereignis "message" behandeln
    socket.on('message', (data) => {
      console.log('Nachricht empfangen:', data);
  
      // Zurücksenden der empfangenen Nachricht an den Client
      socket.emit('message', `Server hat empfangen: ${data}`);
    });
  
    // Ereignis "disconnect" behandeln
    socket.on('disconnect', () => {
      console.log('Ein Client hat die Verbindung getrennt.');
    });
  });

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