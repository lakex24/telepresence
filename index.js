var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('index.html');
});

// app.get('/', function(req, res){
//   res.send('<h1>Hello world</h1>');
// });

io.on('connection', function(socket){

  // socket.on('chat message', function(msg){   // register an event handler on socket
  //   // console.log('message: ' + msg);
  //   io.emit('chat message', msg);   // server broadcast msg to everyone
  // });

  console.log('a user connected');

  console.log(socket.id);

});

http.listen(8000, function(){
  console.log('listening on *:8000');
});