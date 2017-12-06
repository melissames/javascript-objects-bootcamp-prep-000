var playlist = {
  Radiohead: 'Reckoner'
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}
