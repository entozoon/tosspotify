const { BrowserWindow, app, globalShortcut, ipcMain } = require("electron"),
  path = require("path"),
  url = require("url"),
  tasklist = require("tasklist"),
  robot = require("robotjs"),
  shortcuts = [
    {
      keycodes: "CommandOrControl+alt+X",
      command: "audio_play"
    },
    {
      keycodes: "CommandOrControl+alt+C",
      command: "audio_prev"
    },
    {
      keycodes: "CommandOrControl+alt+V",
      command: "audio_next"
    }
  ];

ipcMain.on("escape", () => {
  app.quit();
});

let mainWindow; // must be global

const createWindow = () => {
  console.log(
    "\033c",
    `
   _____                         _   _  __
  |_   _|                       | | (_)/ _|
    | | ___  ___ ___ _ __   ___ | |_ _| |_ _   _
    | |/ _ \\/ __/ __| '_ \\ / _ \\| __| |  _| | | |
    | | (_) \\__ \\__ \\ |_) | (_) | |_| | | | |_| |
    \\_/\\___/|___/___/ .__/ \\___/ \\__|_|_|  \\__, |
                    | |                     __/ |
                    |_|                    |___/`
  );

  // // Require IO libraries only.. ONLY.. if not already running, or the memory leeks more than a welshman.
  tasklist({
    filter: ["windowtitle eq Tosspotify"]
  }).then(processes => {
    if (processes.length) {
      console.log("\033c", "\n Tosspotify is already running!\n\n Exiting..");
      app.quit();
    } else {
      mainWindow = new BrowserWindow({
        width: 290,
        height: 85,
        title: "Tosspotify",
        frame: false,
        resizable: true,
        transparent: true
      });

      // Load index.html
      mainWindow.loadURL(
        url.format({
          pathname: path.join(__dirname, "../index.html"),
          protocol: "file:",
          slashes: true
        })
      );

      // Position
      // mainWindow.setPosition(0, 0);

      // Open devtools
      // mainWindow.webContents.openDevTools();

      // // Iterate through shortcuts, registering the iohook and corresponding command within
      shortcuts.forEach(s => {
        globalShortcut.register(s.keycodes, () => {
          console.log(s.keycodes);
          robot.keyTap(s.command);
          // Display a human readable visual..
        });
      });

      // Exit(s)
      // globalShortcut.register("Escape", () => {
      // app.quit();
      // });
      mainWindow.on("closed", function() {
        mainWindow = null;
      });
    }
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
