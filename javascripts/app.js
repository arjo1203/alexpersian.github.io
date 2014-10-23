// set the scene size
var WIDTH = 1000,
    HEIGHT = 700;

// set some camera attributes
var VIEW_ANGLE = 45,
    ASPECT = WIDTH / HEIGHT,
    NEAR = 0.1,
    FAR = 10000;

// get the DOM element to attach to
// - assume we have jQuery to hand
var $container = $('#container');

// create a WebGL renderer, camera
// and a scene
var renderer = new THREE.WebGLRenderer({ antialias: true });
var camera = new THREE.PerspectiveCamera(
    VIEW_ANGLE,
    ASPECT,
    NEAR,
    FAR);

var scene = new THREE.Scene();

// add the camera to the scene
scene.add(camera);

// the camera starts at 0, 0, 0
// set it back further
camera.position.z = 300;

// start the renderer
renderer.setSize(WIDTH, HEIGHT);

// attach the render-supplied DOM element
$container.append(renderer.domElement);

var geometry = new THREE.TorusKnotGeometry( 70, 3, 100, 32 );
var material = new THREE.MeshBasicMaterial( { color: 0xcc0000 } );
var torusKnot = new THREE.Mesh( geometry, material );
scene.add( torusKnot );

// create a point light
var pointLight = new THREE.PointLight(0xffffff);

// set the light's position
pointLight.position.x = 10;
pointLight.position.y = 50;
pointLight.position.z = 130;

// add the light to the scene
scene.add(pointLight);


function render() {
    requestAnimationFrame(render);
    torusKnot.rotation.z += 0.01;
    torusKnot.rotation.y += 0.1;
    renderer.render(scene, camera);
}render();