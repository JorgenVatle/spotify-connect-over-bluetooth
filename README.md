## Todo
- [x] Project depends on Raspotify which uses Librespot for fetching and playing tracks. Sometimes when connection 
issues are encountered, Librespot will hang. (See example below). Possible temporary fix for this issue would be to
tail the log output of librespot and forcefully restart it when we detect a connection reset message.
```
Jan 01 19:58:29 spotify-station librespot[609]: INFO:librespot_playback::player: Track "Leave The Light On" loaded
Jan 01 20:01:34 spotify-station librespot[609]: INFO:librespot_playback::player: Loading track "PABLO" with Spotify URI "spotify:track:3KNedE7SGTNgvekCJ5mGN2"
Jan 01 20:01:34 spotify-station librespot[609]: INFO:librespot_playback::player: Track "PABLO" loaded
Jan 01 20:05:31 spotify-station librespot[609]: ERROR:librespot_core::session: Os { code: 104, kind: ConnectionReset, message: "Connection reset by peer" }
```