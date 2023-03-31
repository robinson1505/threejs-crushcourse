import * as THREE from "three";
import "./style.css";

// Scene
const scene = new THREE.Scene();

// Create sphere
// Geometry is just a shape
const geometry = new THREE.SphereGeometry(3, 64, 64);

//  Material

const material = new THREE.MeshStandardMaterial({
  color: "#00ff83"
});

// Mesh  is the combination of geometry and material
const mesh = new THREE.Mesh(geometry, material);

// add to the scene

scene.add(mesh);

// Sizes

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
};

// Lightening
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(0, 10, 10);
scene.add(light);

// Camera
const camera = new THREE.PerspectiveCamera(
  45,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.z = 20;
scene.add(camera);

// Rendering

const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

// Resize
window.addEventListener("resize", () => {
  // UPDATE SIZES
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  // UPDATE CAMERA

  camera.aspect = sizes.width / sizes.height;
  renderer.setSize(sizes.width, sizes.height);
});
