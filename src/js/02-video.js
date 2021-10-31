import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);
const getTimeLocaleStorage = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(getTimeLocaleStorage).then(function (currentTime) {
}).catch(function (error) {
  console.log(error);
});
let setIntervalFunction = (currentTime) => {
  let seconds = currentTime.seconds; //get current time
  localStorage.setItem('videoplayer-current-time', seconds);
}
player.on('timeupdate', throttle(setIntervalFunction, 1000));