const tasklist = require("tasklist"),
  setTitle = require("console-title");

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

tasklist({
  filter: ["windowtitle eq Tosspotify"]
}).then(processes => {
  if (processes.length) {
    console.log("\033c", "\n Tosspotify is already running!\n\n Exiting..");
    setTimeout(() => {
      process.exit(0);
    }, 3000);
  } else {
    setTitle("Tosspotify");

    // Require IO libraries only.. ONLY.. if not already running, or the memory leeks more than a welshman.
    const robot = require("robotjs"),
      ioHook = require("iohook");
    ioHook.start();

    // Iterate through shortcuts, registering the iohook and corresponding command within
    shortcuts.forEach(s => {
      ioHook.registerShortcut(s.keycodes, keys => {
        robot.keyTap(s.command);
      });
    });

    // Open Spotify, if passed --open-spotify parameter
    if (process.argv[2] && process.argv[2] === "--open-spotify") {
    }

    console.log(
      "\033c",
      `_____                         _   _  __
|_   _|                       | | (_)/ _|
  | | ___  ___ ___ _ __   ___ | |_ _| |_ _   _
  | |/ _ \\/ __/ __| '_ \\ / _ \\| __| |  _| | | |
  | | (_) \\__ \\__ \\ |_) | (_) | |_| | | | |_| |
  \\_/\\___/|___/___/ .__/ \\___/ \\__|_|_|  \\__, |
                  | |                     __/ |
                  |_|                    |___/`
    );
  }
});
