# Tosspotify

Control Spotify with global hotkeys (a la [Toastify](https://github.com/aleab/toastify) - which is dead at time of writing).

Keyboard shortcuts simply trigger media key presses, rather than being wired up to [Spotify Web API](https://github.com/thelinmichael/spotify-web-api-node), although that could be a fun way to expand in future (song name popups and whatnot).

## Install

Release is not currently possible without an electron wrapper, so just clone and go:

    git clone https://github.com/entozoon/tosspotify.git
    cd tosspotify
    npm i
    Tosspotify.bat
    
You might also want to smash a shortcut file to that .bat into
    
    shell:startup

## Shortcuts

| Keys       | Command       |
| :--------- | :------------ |
| Ctrl-Alt-X | Play / Pause  |
| Ctrl-Alt-C | Next song     |
| Ctrl-Alt-V | Previous song |

## Compatibility

- Windows
