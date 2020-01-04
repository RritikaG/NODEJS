var events= require('events');

var myEmittor = new events.EventEmitter();

myEmittor.on('someevent',function (msg) {
   console.log(msg) ;
});

myEmittor.emit('someevent','the event is emitted');

