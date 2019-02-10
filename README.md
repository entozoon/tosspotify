# Tosspotify

![Screenshot](/posterity/screenshot-2.png "Screenshot")

Control Spotify with global hotkeys (a la Toastify - which is dead at time of writing).

Keyboard shortcuts simply trigger media key presses.

## Install

Head over to [Releases](https://github.com/entozoon/tosspotify/releases).

## Shortcuts

| Keys       | Command       |
| :--------- | :------------ |
| Ctrl-Alt-X | Play / Pause  |
| Ctrl-Alt-C | Next song     |
| Ctrl-Alt-V | Previous song |

## Dev

Robotjs native packages need to be rebuilt for electron for .. reasons

    npm i
    npm start
    npm run rebuild-mobuldes
    npm run build
