const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var divisionHeight = 300;
var particles = [];
var plinkos = [];
var divisions = [];

function setup() {

  var canvas = createCanvas(450,790);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(255, 780, 800, 20);

}

function draw() {

  background("black");  

  for (let a = 0; a <= width; a = a + 80) {
	  divisions.push( new Divisions(a, height - divisionHeight/2, 10, divisionHeight) )
	}

  for (let b = 40; b <= width; b = b + 75) {
	plinkos.push( new Pinko(b, 75) )  
	}

  for (let b = 40; b <= width; b = b + 50) {
	plinkos.push( new Pinko(b, 175) )  
	}

  for (let b = 40; b <= width; b = b + 75) {
	plinkos.push( new Pinko(b, 75) )  
	}

  for (let b = 40; b <= width; b = b + 50) {
	plinkos.push( new Pinko(b, 175) )  
	}

	if (frameCount % 60 === 0) {
		particles.push( new Part(random(width/2 - 10, width/2 + 10, 10, 10)) )
	}

  Engine.update(engine);
  
	ground.display();

}