const ioHook = require('iohook');
ioHook.on("keypress", event => {
  console.log(event);
  // {keychar: 'f', keycode: 19, rawcode: 15, type: 'keypress'}
});
ioHook.start();


//
// Use stuff from the spotify playlist thingy I made.
// No personal details of course.
//