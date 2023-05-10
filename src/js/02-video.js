import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
let timeOfVideo = localStorage.getItem('videoplayer-current-time');
if (timeOfVideo !== null) {
  player.setCurrentTime(timeOfVideo);
}
player.on('timeupdate', currentTimeOfVideo);
function currentTimeOfVideo() {
  player
    .getCurrentTime()
    .then(seconds => localStorage.setItem('videoplayer-current-time', seconds));
}
