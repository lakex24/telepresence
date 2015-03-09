var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('index.html');
});

app.set('port', (process.env.PORT || 5000));
// app.use(express.static(__dirname + '/public'));

// app.get('/', function(request, response) {
//   response.send('Hello World!');
// });

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});

io.on('connection', function(socket){

  // socket.on('chat message', function(msg){   // register an event handler on socket
  //   // console.log('message: ' + msg);
  //   io.emit('chat message', msg);   // server broadcast msg to everyone
  // });

  console.log('a user connected');

  console.log(socket.id);

});

// http.listen(8000, function(){
//   console.log('listening on *:8000');
// });

// var express = require('express');
// var app = express();

// app.set('port', (process.env.PORT || 5000));
// app.use(express.static(__dirname + '/public'));

// app.get('/', function(request, response) {
//   response.send('Hello World!');
// });

// app.listen(app.get('port'), function() {
//   console.log("Node app is running at localhost:" + app.get('port'));
// });
