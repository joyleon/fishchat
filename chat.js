function Chat(){
  this.data = [];
};
Chat.prototype.init = function(io){
  io.on('connection', function(socket){
    socket.on('message',function(msg){
      io.emit('message',msg);
    });
  });
}

module.exports = new Chat();
