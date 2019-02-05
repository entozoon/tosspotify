const electron = require("electron"),
  app = electron.app,
  { BrowserWindow } = require("electron"),
  path = require("path"),
  url = require("url"),
  shortcuts = [
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

let mainWindow; // must be global

const createWindow = () => {
  // Create browser window
  mainWindow = new BrowserWindow({
    width: 400,
    height: 200
  });

  // Position
  // mainWindow.setPosition(0, 0);

  // Load index.html
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "../index.html"),
      protocol: "file:",
      slashes: true
    })
  );
  // Open devtools
  mainWindow.webContents.openDevTools();

  // Gunna wunna receive keyboard shorcuts with globalShortcut
  // https://electronjs.org/docs/tutorial/keyboard-shortcuts

  // Then probably yeah, robotjs still for the simulation. Although building might be hard

  // // Require IO libraries only.. ONLY.. if not already running, or the memory leeks more than a welshman.
  // const robot = require("robotjs"),
  //   ioHook = require("iohook");
  // ioHook.start();

  // // Iterate through shortcuts, registering the iohook and corresponding command within
  // shortcuts.forEach(s => {
  //   ioHook.registerShortcut(s.keycodes, keys => {
  //     robot.keyTap(s.command);
  //   });
  // });

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

  // Exit
  mainWindow.on("closed", function() {
    mainWindow = null;
  });
};

// Electron initialised
app.on("ready", createWindow);

// Quit when all windows are closed
app.on("window-all-closed", function() {
  // Avoid a macOS bug
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function() {
  // Avoid a macOS bug
  if (mainWindow === null) {
    createWindow();
  }
});
