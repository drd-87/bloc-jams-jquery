class Helper {
    playPauseAndUpdate(song) {
    player.playPause(song);
     $('.total-time').text(player.getDuration());
    }
  }
const helper = new Helper();
