
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var myWorld;
var ball;
var base,side1,side2;

function preload()
{
	
}

function setup() {
	createCanvas(800,400);


	engine = Engine.create();
	myWorld = Engine.world;

	//Create the Bodies Here.
	
	ball = Bodies.circle(200,320,12);
	World.add(myWorld,ball);

	base = new Ground(300,340,10,800);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  
  drawSprites();
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,12);
  base.display();
}



