// //
// // Use stuff from the spotify playlist thingy I made.
// // No personal details of course.
// //

// Use this thing
// https://github.com/jaywcjlove/hotkeys
//
hotkeys("ctrl+a,ctrl+b,r,f", function(event, handler) {
  switch (handler.key) {
    case "ctrl+a":
      alert("you pressed ctrl+a!");
      break;
    case "ctrl+b":
      alert("you pressed ctrl+b!");
      break;
    case "r":
      alert("you pressed r!");
      break;
    case "f":
      alert("you pressed f!");
      break;
  }
});

// const ioHook = require("iohook");
// ioHook.on("keypress", event => {
//   console.log(event);
//   // {keychar: 'f', keycode: 19, rawcode: 15, type: 'keypress'}
// });
// ioHook.start();

// const iaada = ioHook.registerShortcut([29, 56, 65], keys => {
//   console.log("Shortcut called with f7:", keys);
// });

// const id = ioHook.registerShortcut([29, 56, 88], keys => {
//   console.log("Shortcut called with keys:", keys);
//   úó;
// });

// const ida = ioHook.registerShortcut([29, 56, 120], keys => {
//   console.log("Shortcut called with keys:", keys);
// });

// const idaa = ioHook.registerShortcut([29, 120], keys => {
//   console.log("Shortcut called with keys:", keys);
// });

// const idaaa = ioHook.registerShortcut([29, 120], keys => {
//   console.log("Shortcut called with keys:", keys);
// });
