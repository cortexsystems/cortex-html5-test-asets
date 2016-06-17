/* global window */

import {getRandomInt} from '../common.js';

let assets = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'];

let setUpAnimation = img => {
  let reverse = true;
  img.addEventListener('transitionend', function(e) {
    e.stopPropagation();
    if (reverse) {
      img.style.opacity = 1;
    } else {
      img.style.opacity = 0;
    }
    reverse = !reverse;
  }, true);

  window.requestAnimationFrame(() => {
    img.style.opacity = 0;
  });
};

let main = () => {
  let container = window.document.getElementById('content');
  for (let i = 0; i < 12; i++) {
    let index = getRandomInt(0, assets.length);
    let assetUrl = assets[index];
    let img = new window.Image();
    img.src = `./assets/${assetUrl}`;
    setUpAnimation(img);
    container.appendChild(img);
  }
};

main();
