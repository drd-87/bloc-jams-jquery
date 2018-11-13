{
   $('button#play-pause').on('click', function() {
     helper.playPauseAndUpdate();
     $(this).attr('playState', player.playState);
   });

   $('button#next').on('click', function() {
     if (player.playState !== 'playing') { return; }

     const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
     const nextSongIndex = currentSongIndex + 1;
     if (nextSongIndex >= album.songs.length) { return; }

     const nextSong = album.songs[nextSongIndex];
     helper.playPauseAndUpdate(nextSong);
   });
//event handler for previous button
      $('button#previous').on('click', function() {
        if (player.playState !== 'playing') { return; }
//create behavior for previous button
        const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
        let previousSongIndex = currentSongIndex - 1;
        if (previousSongIndex < 0) { return; }

        const previousSong = album.songs[previousSongIndex];
        helper.playPauseAndUpdate(previousSong);

      });
//change song's playback position
$('#time-control').on('input', function(event) {
  player.skipTo(event.target.value);
});

//volume slider event handler
$('#volume-control input').on('input', function(event) {
  player.setVolume(event.target.value);
})

//update time control range input per second
setInterval( () => {
   if (player.playState !== 'playing') { return; }
   const currentTime = player.getTime();
   const duration = player.getDuration();
   const percent = (currentTime / duration) * 100;
//added prettyTime(), convert to mins + seconds
   $('#time-control .current-time').text(player.prettyTime(currentTime));
   $('#time-control .total-time').text(player.prettyTime(duration));
   $('')
   $('#time-control input').val(percent);
 }, 1000);


//terminate block
}
