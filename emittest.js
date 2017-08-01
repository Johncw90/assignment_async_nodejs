
var Emitter = require('./emitter');
var emitter = new Emitter();


function event() {
  console.log('event occurred!');
}

function event2() {
  console.log('2nd event!');
}

function event3() {
  console.log('3rd time\'s the charm!');
}

emitter.on('test', event);
emitter.on('click', event2);
emitter.on('doubleClick', event3);

emitter.emit('test');
emitter.emit('click');
emitter.emit('doubleClick');

emitter.removeListener('click', event2);
emitter.emit('click');

emitter.removeAllListeners('test');
emitter.emit('test');