@echo off
title Tosspotify Loading..
cd C:\www\tosspotify
mode con:cols=48 lines=9
color 0e
npm i && cls && npm run start-and-open-spotify
pause