# Tosspotify

![Screenshot](/posterity/screenshot-1.png "Screenshot")

Control Spotify with global hotkeys (a la [Toastify](https://github.com/aleab/toastify) - which is dead at time of writing).

Keyboard shortcuts simply trigger media key presses, rather than being wired up to [Spotify Web API](https://github.com/thelinmichael/spotify-web-api-node), although that could be a fun way to expand in future (song name popups and whatnot).

## Install

Release is not currently possible without an electron wrapper, so just clone and go:

    git clone https://github.com/entozoon/tosspotify.git
    cd tosspotify
    npm i
    Tosspotify.bat

You may then want to create a startup shortcut in:

    shell:startup
    [then alt-drag the .bat file into here]

## Shortcuts

| Keys       | Command       |
| :--------- | :------------ |
| Ctrl-Alt-X | Play / Pause  |
| Ctrl-Alt-C | Next song     |
| Ctrl-Alt-V | Previous song |

## Compatibility

- Windows 7, 10
- OSX/Linux in theory, but untested

## Troubleshooting

There are some known npm issues, specifically with Windows x64, so if you get a `node-gyp .. python` error..

- Update Node to LTS
- Update NPM
```
npm -g install npm@next
```
- **In an elevated powershell**, run :
```
npm i -g --add-python-to-path='true' --production windows-build-tools
setx python "%USERPROFILE%\.windows-build-tools\python27\python.exe"
[logout/restart the computer]
npm i
```
Still getting errors, perhaps mentioning `c:\Microsoft.Cpp.Default.props`?
    
Set an environment variable called `VCTargetsPath` to the directory containing your `Microsoft.Cpp.Defaults.Props` file, so for me it was 
    
    VCTargetsPath  :  C:\Program Files (x86)\MSBuild\Microsoft.Cpp\v4.0\V140
    
This was a hard-won battle for sure.. bloody Windorz! Can't be helped though, as robotjs is simulating systemic stuff (keypresses)
