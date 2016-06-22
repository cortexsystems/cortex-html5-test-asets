/* global window */

import * as THREE from 'three';

let animate = (boxes, renderer, scene, camera) => {
  window.requestAnimationFrame(() => animate(boxes, renderer, scene, camera));

  for (let box of boxes) {
    box.rotation.x += 0.01;
    box.rotation.y += 0.02;
  }

  renderer.render(scene, camera);
};

let main = () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.z = 1000;

  const geometry = new THREE.BoxGeometry(100, 100, 100);
  const material = new THREE.MeshBasicMaterial(
    {color: 0xff0000, wireframe: true, wireframeLinewidth: 3});

  const x = -window.innerWidth / 2 + 300;
  const y = window.innerHeight / 2 - 300;
  const boxes = [];
  for (let r = 0; r < 10; r++) {
    let ry = y - r * 100;
    for (let c = 0; c < 10; c++) {
      let cx = x + c * 100;
      const box = new THREE.Mesh(geometry, material);
      box.position.set(cx, ry, 0);
      boxes.push(box);
      scene.add(box);
    }
  }

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  window.document.body.appendChild(renderer.domElement);

  animate(boxes, renderer, scene, camera);
};

main();
