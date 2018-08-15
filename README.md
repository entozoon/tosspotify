# Tosspotify

Control Spotify with global hotkeys (a la [Toastify](https://github.com/aleab/toastify) - which is dead at time of writing).

Keyboard shortcuts simply trigger media key presses, rather than being wired up to [Spotify Web API](https://github.com/thelinmichael/spotify-web-api-node), although that could be a fun way to expand in future (song name popups and whatnot).

## Run

    npm i
    npm start

## Shortcuts

| Keys       | Command       |
| :--------- | :------------ |
| Ctrl-Alt-X | Play / Pause  |
| Ctrl-Alt-C | Next song     |
| Ctrl-Alt-V | Previous song |

## Release (dev notes)

Current release built for `node9-win`. It must be named `node.exe` as it uses native modules that rely on that filename [(sigh!)](https://github.com/zeit/pkg/issues/161#issuecomment-394309701).

    npm i -g pkg@4.3.1
    npm run build
