import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import * as dat from "dat.gui";

gsap.registerPlugin(ScrollTrigger, SplitText);

const canvas = document.querySelector("canvas.webgl");
const scene = new THREE.Scene();
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100,
);
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 15;
scene.add(camera);

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  alpha: true,
  antialias: true,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const gui = new dat.GUI();
// const controls = new OrbitControls(camera, renderer.domElement);
const loader = new GLTFLoader();

let coffee_table = null;
loader.load("../static/coffee_table_084615.glb", function (gltf) {
  coffee_table = gltf.scene;
  scene.add(coffee_table);
  coffee_table.scale.set(0.15, 0.15, 0.15);
  coffee_table.rotation.set(0.0, 0, -0.17);
  coffee_table.position.y = -6.25;
  const coffee_table_folder = gui.addFolder("Coffee Table");
  coffee_table_folder.add(coffee_table.position, "x", -15, 15, 0.01);
  coffee_table_folder.add(coffee_table.position, "y", -15, 15, 0.01);
  coffee_table_folder.add(coffee_table.position, "z", -15, 15, 0.01);
  coffee_table_folder
    .add(coffee_table.rotation, "x", -5, 5, 0.01)
    .name("Rotation X");
  coffee_table_folder
    .add(coffee_table.rotation, "y", -5, 5, 0.01)
    .name("Rotation Y");
  coffee_table_folder
    .add(coffee_table.rotation, "z", -5, 5, 0.01)
    .name("Rotation Z");
  coffee_table_folder.add(coffee_table.scale, "x", 0, 5, 0.01).name("Scale X");
  coffee_table_folder.add(coffee_table.scale, "y", 0, 5, 0.01).name("Scale Y");
  coffee_table_folder.add(coffee_table.scale, "z", 0, 5, 0.01).name("Scale Z");

  const h1 = document.querySelector("h1");
  const upper_text = document.querySelector(".first");
  const lower_text = document.querySelector(".under");
  const upper_split = new SplitText(upper_text, {
    type: "chars",
    mask: "chars",
  });
  const lower_split = new SplitText(lower_text, {
    type: "chars",
    mask: "chars",
  });
  gsap.set(upper_split.chars, { yPercent: 150 });
  gsap.set(lower_split.chars, { yPercent: 150 });
  gsap.set(h1, { opacity: 1 });
  const text_tl = gsap.timeline();
  text_tl
    .to(upper_split.chars, {
      yPercent: 0,
      stagger: { each: 0.05, from: "start" },
      ease: "back.inOut",
    })
    .from(
      coffee_table.position,
      {
        y: -4,
        z: 10,
        duration: 1.5,
        ease: "power3.out",
      },
      "<",
    )
    .to(
      lower_split.chars,
      {
        yPercent: 0,
        stagger: { each: 0.03, from: "end" },
        ease: "back.inOut",
      },
      "<0.3",
    );
});

const ambientLight = new THREE.AmbientLight(0x000000, 1);
const pointLight = new THREE.PointLight(0xffffff, 2);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);
scene.add(ambientLight);
pointLight.position.set(1.66, -3.85, 4.3);
const point_light_folder = gui.addFolder("Point Light");
point_light_folder
  .add(pointLight.position, "x", -10, 10, 0.01)
  .name("Position X");
point_light_folder
  .add(pointLight.position, "y", -10, 10, 0.01)
  .name("Position Y");
point_light_folder
  .add(pointLight.position, "z", -10, 10, 0.01)
  .name("Position Z");
point_light_folder.add(pointLight, "intensity", 0, 2, 0.01).name("Intensity");

function animate(time) {
  if (coffee_table) {
    coffee_table.rotation.y = time / 2000;
  }
  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);
