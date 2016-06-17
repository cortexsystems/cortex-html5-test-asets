/* global window */

import {getRandomInt} from '../common.js';

let assets = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'];

let setUpAnimation = img => {
  let reverse = true;
  let rect = img.getBoundingClientRect();
  let x = rect.bottom + getRandomInt(0, 400);
  let y = rect.right + getRandomInt(0, 400);
  img.addEventListener('transitionend', function(e) {
    e.stopPropagation();
    if (reverse) {
      img.style.transform = `translate(-${x}px, -${y}px)`;
    } else {
      img.style.transform = `translate(${x}px,${y}px)`;
    }
    reverse = !reverse;
  }, true);

  window.requestAnimationFrame(() => {
    img.style.transform = `translate(${x}px,${y}px)`;
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
