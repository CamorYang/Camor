// Select the portrait section element
const portraitSection = document.querySelector("#portrait-section");

// Get the height of the portrait section
const portraitSectionHeight = portraitSection.offsetHeight;

// Set the initial left position of the portrait section to be 10px
let portraitSectionLeft = 10;

// Listen for the scroll event on the window
window.addEventListener("scroll", function() {
  // Calculate the new left position of the portrait section
  portraitSectionLeft = window.pageXOffset + 10;

  // If the new left position plus the width of the portrait section
  // is greater than the window width, set the left position to be
  // window width minus the width of the portrait section minus 10px
  if (portraitSectionLeft + portraitSection.offsetWidth > window.innerWidth) {
    portraitSectionLeft = window.innerWidth - portraitSection.offsetWidth - 10;
  }

  // Set the new left position of the portrait section
  portraitSection.style.left = `${portraitSectionLeft}px`;
});


// // Set up the scene
// var scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// var renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // Create a geometry and material
// var geometry = new THREE.BoxGeometry(1, 1, 1);
// var material = new THREE.MeshBasicMaterial({ color: 0xffffff });
// var cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// camera.position.z = 5;

// // Render loop
// function animate() {
//   requestAnimationFrame(animate);

//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;

//   renderer.render(scene, camera);
// }

// animate();