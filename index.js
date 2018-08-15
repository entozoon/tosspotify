const robot = require("robotjs"),
  ioHook = require("iohook");
ioHook.start();

const shortcuts = [
  {
    keycodes: [29, 56, 45], // ctrl+alt+x
    command: "audio_play"
  },
  {
    keycodes: [29, 56, 46], // ctrl+alt+c
    command: "audio_prev"
  },
  {
    keycodes: [29, 56, 47], // ctrl+alt+v
    command: "audio_next"
  }
  // keycodes (via iohook - which are a nightmare):
  // - issue posted https://github.com/WilixLead/iohook/issues/97
  // - potential chars https://github.com/WilixLead/iohook/issues/74#issuecomment-387387810
  //
  // command (via robotJS):
  // audio_mute
  // audio_vol_down
  // audio_vol_up
  // audio_play
  // audio_stop
  // audio_pause
  // audio_prev
  // audio_next
];

// Iterate through shortcuts, registering the iohook and corresponding command within
shortcuts.forEach(s => {
  ioHook.registerShortcut(s.keycodes, keys => {
    robot.keyTap(s.command);
  });
});
