// import './sass/main.scss';
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);
const KEY_LS = "videoplayer-current-time";
const secondsToLs = ({seconds})=> localStorage.setItem(KEY_LS, seconds);
function checkKEyLocaleStorage() {
  const secondsFromLs = localStorage.getItem(KEY_LS);
  if(secondsFromLs) {
    player.setCurrentTime(secondsFromLs);
  }
}
player.on('timeupdate',  throttle(secondsToLs, 1000))

window.addEventListener('DOMContentLoaded', checkKEyLocaleStorage)