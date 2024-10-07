const scene = new THREE.Scene();
scene.background = new THREE.Color(0xADD8E6);  // Light blue background
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Light
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(5, 10, 7.5);
directionalLight.castShadow = true; // Enable shadows for the light

// Adjust shadow properties (optional for quality)
directionalLight.shadow.mapSize.width = 1024; // Shadow map resolution
directionalLight.shadow.mapSize.height = 1024;
directionalLight.shadow.camera.near = 0.5;
directionalLight.shadow.camera.far = 50;
scene.add(directionalLight);

const floorGeometry = new THREE.PlaneGeometry(10, 10);
const floorMaterial = new THREE.MeshBasicMaterial({ color: 0xB99263, side: THREE.DoubleSide });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2;
scene.add(floor);

const wallGeometry = new THREE.PlaneGeometry(10, 5);
const wallMaterial = new THREE.MeshBasicMaterial({ color: 0xF1F1CC }); 
const wall = new THREE.Mesh(wallGeometry, wallMaterial);
wall.position.set(0, 2.5, -5); 
scene.add(wall);

const WallingGeometry = new THREE.BoxGeometry(10, 5, 0.1);
const WallingMaterial = new THREE.MeshBasicMaterial({ color: 0xDDDDAF });

const leftWall = new THREE.Mesh(WallingGeometry, WallingMaterial);
leftWall.position.set(-5, 2.5, 0);
scene.add(leftWall);

leftWall.rotation.x = Math.PI / 1; 
leftWall.rotation.y = Math.PI / 2; 
leftWall.rotation.z = Math.PI / 1;

const RightWall = new THREE.Mesh(WallingGeometry, WallingMaterial);
RightWall.position.set(5, 2.5, 0);
scene.add(RightWall);

RightWall.rotation.x = Math.PI / 1; 
RightWall.rotation.y = Math.PI / 2; 
RightWall.rotation.z = Math.PI / 1;

const doorGeometry = new THREE.BoxGeometry(1, 3, 0.1);
const doorMaterial = new THREE.MeshBasicMaterial({ color: 0x8B4513 });
const door = new THREE.Mesh(doorGeometry, doorMaterial);
door.position.set(-4, 1, -4.9);
scene.add(door);

const knobGeometry = new THREE.SphereGeometry(0.1, 32, 32);
const knobMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFF00 });
const knob = new THREE.Mesh(knobGeometry, knobMaterial);
knob.position.set(-4.2, 1.2, -4.4); 
scene.add(knob);

const potGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.5, 32);
const potMaterial = new THREE.MeshBasicMaterial({ color: 0x782916 });
const pot = new THREE.Mesh(potGeometry, potMaterial);
pot.position.set(-2.7, 0.25, -4.5);
scene.add(pot);  

const coneGeometry = new THREE.ConeGeometry(0.5, 2, 32);
const coneMaterial = new THREE.MeshBasicMaterial({ color: 0x228B22 });
const cone = new THREE.Mesh(coneGeometry, coneMaterial);
cone.position.set(-2.7, 2, -4.5); 
scene.add(cone);

const stemGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.5, 32);
const stemMaterial = new THREE.MeshBasicMaterial({ color: 0x964B00 });
const stem = new THREE.Mesh(stemGeometry, stemMaterial);
stem.position.set(-2.7, 0.7, -4.5); 
scene.add(stem);

const windowGeometry = new THREE.PlaneGeometry(5, 1.5);
const windowMaterial = new THREE.MeshBasicMaterial({ color: 0x87CEEB, transparent: true, opacity: 0.4 });  // Slightly transparent to simulate glass
const windowPane = new THREE.Mesh(windowGeometry, windowMaterial);
windowPane.position.set(2, 2.5, -4.9);
scene.add(windowPane);

const shelfGeometry = new THREE.BoxGeometry(0.5, 2.3, 3);
const shelfMaterial = new THREE.MeshBasicMaterial({ color: 0x9B6C33});  // Slightly transparent to simulate glass
const shelf = new THREE.Mesh(shelfGeometry, shelfMaterial);
shelf.position.set(4.7, 1.1, 2);
scene.add(shelf);

const shelfinnerGeometry = new THREE.BoxGeometry(0.5, .5, 2.5);
const shelfinnerMaterial = new THREE.MeshBasicMaterial({ color: 0x7A572E});  // Slightly transparent to simulate glass
const shelfinner = new THREE.Mesh(shelfinnerGeometry, shelfinnerMaterial);
shelfinner.position.set(4.6, .5, 2);
scene.add(shelfinner);

const shelfinner2Geometry = new THREE.BoxGeometry(0.5, .5, 2.5);
const shelfinner2Material = new THREE.MeshBasicMaterial({ color: 0x7A572E});  // Slightly transparent to simulate glass
const shelfinner2 = new THREE.Mesh(shelfinner2Geometry, shelfinner2Material);
shelfinner2.position.set(4.6, 1.2, 2);
scene.add(shelfinner2);

const shelfinner3Geometry = new THREE.BoxGeometry(0.5, .5, 2.5);
const shelfinner3Material = new THREE.MeshBasicMaterial({ color: 0x7A572E});  // Slightly transparent to simulate glass
const shelfinner3 = new THREE.Mesh(shelfinner3Geometry, shelfinner3Material);
shelfinner3.position.set(4.6, 1.9, 2);
scene.add(shelfinner3);

const TVGeometry = new THREE.BoxGeometry(0.3, 1.5, 2.7);
const TVMaterial = new THREE.MeshBasicMaterial({ color: 0x292937});  // Slightly transparent to simulate glass
const TV = new THREE.Mesh(TVGeometry, TVMaterial);
TV.position.set(4.8, 3.1, 2);
scene.add(TV);

const TVScreenGeometry = new THREE.BoxGeometry(0.3, 1.3, 2.6);
const TVScreenMaterial = new THREE.MeshBasicMaterial({ color: 0x14141D});  // Slightly transparent to simulate glass
const TVScreen = new THREE.Mesh(TVScreenGeometry, TVScreenMaterial);
TVScreen.position.set(4.78, 3.1, 2);
scene.add(TVScreen);

const TVStandGeometry = new THREE.BoxGeometry(0.2, .2, 1);
const TVStandMaterial = new THREE.MeshBasicMaterial({ color: 0x292937});  // Slightly transparent to simulate glass
const TVStand = new THREE.Mesh(TVStandGeometry, TVStandMaterial);
TVStand.position.set(4.8, 2.3, 2);
scene.add(TVStand);

const sofaSeatGeometry = new THREE.BoxGeometry(4, .5, 3.4);
const sofaSeatMaterial = new THREE.MeshBasicMaterial({ color: 0xA52A2A });
const sofaSeat = new THREE.Mesh(sofaSeatGeometry, sofaSeatMaterial);
sofaSeat.position.set(-2.8, 0.1, 2);
scene.add(sofaSeat);

const sofaBackGeometry = new THREE.BoxGeometry(.3, 1, 3.4);
const sofaBackMaterial = new THREE.MeshBasicMaterial({ color: 0x7A572E });
const sofaBack = new THREE.Mesh(sofaBackGeometry, sofaBackMaterial);
sofaBack.position.set(-4.8, 0.5, 2);
scene.add(sofaBack);

const pillowGeometry = new THREE.BoxGeometry(.5, .5, 3.4);
const pillowMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
const pillow = new THREE.Mesh(pillowGeometry, pillowMaterial);
pillow.position.set(-4.4, 0.5, 2);
scene.add(pillow);

const blanketGeometry = new THREE.BoxGeometry(.1, -3.4, 3);
const blanketMaterial = new THREE.MeshBasicMaterial({ color: 0xE69138 });
const blanket = new THREE.Mesh(blanketGeometry, blanketMaterial);
blanket.position.set(-2.4, 0.4, 2);
scene.add(blanket);

blanket.rotation.x = Math.PI / 2; // Rotate 45 degrees around the X-axis
blanket.rotation.y = Math.PI / 2; // Rotate 30 degrees around the Y-axis
blanket.rotation.z = Math.PI / 1;

const rugGeometry = new THREE.CircleGeometry(2, 32);
const rugMaterial = new THREE.MeshBasicMaterial({ color: 0xFFA500 });
const rug = new THREE.Mesh(rugGeometry, rugMaterial);
rug.rotation.x = -Math.PI / 2;
rug.position.set(2, 0.01, -4);
scene.add(rug);

const lampBaseGeometry = new THREE.CylinderGeometry(0.2, 0.3, 0.1, 32);
const lampBaseMaterial = new THREE.MeshBasicMaterial({ color: 0x8B4513 });
const lampBase = new THREE.Mesh(lampBaseGeometry, lampBaseMaterial);
lampBase.position.set(-1.3, 0.05, -4.5); 
scene.add(lampBase);

const lampPoleGeometry = new THREE.CylinderGeometry(0.05, 0.05, 3.5, 32);
const lampPoleMaterial = new THREE.MeshBasicMaterial({ color: 0x8B4513 }); 
const lampPole = new THREE.Mesh(lampPoleGeometry, lampPoleMaterial);
lampPole.position.set(-1.3, 0.6, -4.5); 
scene.add(lampPole);

const lampShadeGeometry = new THREE.CylinderGeometry(0.5, 0.5, 0.5, 32);
const lampShadeMaterial = new THREE.MeshBasicMaterial({ color: 0xFFD700 }); 
const lampShade = new THREE.Mesh(lampShadeGeometry, lampShadeMaterial);
lampShade.position.set(-1.3, 2.6, -4.5); 
scene.add(lampShade);

const tableTopGeometry = new THREE.BoxGeometry(4,.2,1.2);
const tableTopMaterial = new THREE.MeshBasicMaterial({ color: 0x7A572E }); 
const tableTop = new THREE.Mesh(tableTopGeometry, tableTopMaterial);
tableTop.position.set(2,1.2,-4.5); 
scene.add(tableTop);

const tableBottomGeometry = new THREE.BoxGeometry(4,.2,1.2);
const tableBottomMaterial = new THREE.MeshBasicMaterial({ color: 0x7A572E }); 
const tableBottom = new THREE.Mesh(tableBottomGeometry, tableBottomMaterial);
tableBottom.position.set(2,.5,-4.5); 
scene.add(tableBottom);

const tableLeftLegGeometry = new THREE.BoxGeometry(.4,2.4,1.2);
const tableLeftLegMaterial = new THREE.MeshBasicMaterial({ color: 0x7A572E }); 
const tableLeftLeg = new THREE.Mesh(tableLeftLegGeometry, tableLeftLegMaterial);
tableLeftLeg.position.set(1.8,0,-4.5); 
scene.add(tableLeftLeg);

const tableLegGeometry = new THREE.BoxGeometry(.4,2.4,1.2);
const tableLegMaterial = new THREE.MeshBasicMaterial({ color: 0x7A572E }); 
const tableLeg = new THREE.Mesh(tableLegGeometry, tableLegMaterial);
tableLeg.position.set(0.2,0,-4.5); 
scene.add(tableLeg);

const tableLGeometry = new THREE.BoxGeometry(.4,2.4,1.2);
const tableLMaterial = new THREE.MeshBasicMaterial({ color: 0x7A572E }); 
const tableL = new THREE.Mesh(tableLGeometry, tableLMaterial);
tableL.position.set(3.87,0,-4.5); 
scene.add(tableL);

const PCGeometry = new THREE.BoxGeometry(2, 1, .2);
const PCMaterial = new THREE.MeshBasicMaterial({ color: 0x292937 });
const PC = new THREE.Mesh(PCGeometry, PCMaterial);
PC.position.set(1.8,2,-4.5);
scene.add(PC);

const PCScreenGeometry = new THREE.BoxGeometry(1.8, .8, .2);
const PCScreenMaterial = new THREE.MeshBasicMaterial({ color: 0x1E1E20 });
const PCScreen = new THREE.Mesh(PCScreenGeometry, PCScreenMaterial);
PCScreen.position.set(1.8,2,-4.1);
scene.add(PCScreen);

const PCstandGeometry = new THREE.BoxGeometry(.3, .8, .2);
const PCstandMaterial = new THREE.MeshBasicMaterial({ color: 0x292937 });
const PCstand = new THREE.Mesh(PCstandGeometry, PCstandMaterial);
PCstand.position.set(1.8,1.7,-4.5);
scene.add(PCstand);

const PCBaseGeometry = new THREE.CylinderGeometry(0.1, 0.2, 0.1, 32);
const PCBaseMaterial = new THREE.MeshBasicMaterial({ color: 0x292937 });
const PCBase = new THREE.Mesh(PCBaseGeometry, PCBaseMaterial);
PCBase.position.set(1.8, 1.4, -4.1); 
scene.add(PCBase);

const PowerGeometry = new THREE.BoxGeometry(.5, 1.2, 2);
const PowerMaterial = new THREE.MeshBasicMaterial({ color: 0x292937 });
const Power = new THREE.Mesh(PowerGeometry, PowerMaterial);
Power.position.set(3.3, 1.9, -4.5); 
scene.add(Power);

const FlyerGeometry = new THREE.BoxGeometry(1, 1.7, 0.1);
const FlyerMaterial = new THREE.MeshBasicMaterial({ color: 0xF3F3F3 });

const Flyer1 = new THREE.Mesh(FlyerGeometry, FlyerMaterial);
Flyer1.position.set(-5, 2.5, 0);
scene.add(Flyer1);

Flyer1.rotation.x = Math.PI / 1; 
Flyer1.rotation.y = Math.PI / 2; 
Flyer1.rotation.z = Math.PI / 1;

const Flyer2 = new THREE.Mesh(FlyerGeometry, FlyerMaterial);
Flyer2.position.set(-5, 2.8, -2);
scene.add(Flyer2);

Flyer2.rotation.x = Math.PI / 1; 
Flyer2.rotation.y = Math.PI / 2; 
Flyer2.rotation.z = Math.PI / 1;

const seatGeometry = new THREE.BoxGeometry(.8, 0.2, 2);
const seatMaterial = new THREE.MeshStandardMaterial({ color: 0x1F2124 });
const seat = new THREE.Mesh(seatGeometry, seatMaterial);
seat.position.set(0, .7, -3.4);
scene.add(seat);

// Chair Backrest
const backrestGeometry = new THREE.BoxGeometry(.8, 1.2, 0.2);
const backrestMaterial = new THREE.MeshStandardMaterial({ color: 0x1F2124 });
const backrest = new THREE.Mesh(backrestGeometry, backrestMaterial);
backrest.position.set(0, 1, -3.2); // Position it behind the seat
scene.add(backrest);

// Chair Legs
const legGeometry = new THREE.BoxGeometry(0.13, .8, 0.2);
const legMaterial = new THREE.MeshStandardMaterial({ color: 0x3A3C3E });

const frontLeftLeg = new THREE.Mesh(legGeometry, legMaterial);
frontLeftLeg.position.set(-0.3, 0.3, -2.9);
scene.add(frontLeftLeg);

const frontRightLeg = new THREE.Mesh(legGeometry, legMaterial);
frontRightLeg.position.set(0.3, 0.3, -2.9);
scene.add(frontRightLeg);

const backLeftLeg = new THREE.Mesh(legGeometry, legMaterial);
backLeftLeg.position.set(-0.3, 0.4, -3.4);
scene.add(backLeftLeg);

const backRightLeg = new THREE.Mesh(legGeometry, legMaterial);
backRightLeg.position.set(0.3, 0.4, -3.4);
scene.add(backRightLeg);

const light = new THREE.AmbientLight(0xffffff, 0.5); // Soft light
scene.add(light);

// Camera Position
camera.position.set(0, 3, 10);
camera.lookAt(0, 0, 0);

// Render Function
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
