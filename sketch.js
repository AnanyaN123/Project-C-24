
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var hammer;
var stone;
var rubber;
var sand;

function preload(){
	
}

function setup() {
	createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(0, 790, 1600, 50);
  //ground.shapeColor = "black";

  hammer = new Hammer(400, 600, 90, 20);
  //hammer.shapeColor = "purple";

  stone = new Stone(200, 700, 30, 30);
  //stone.shapeColor = "brown";

  rubber = new Rubber(700, 745, 50, 40);

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("cyan");

  Engine.update(engine);

  ground.display();
  
  hammer.display();
  
  rubber.display();
  
  stone.display();

  
  
  //drawSprites();
 
}



