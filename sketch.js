const Engine = Matter.Engine;                                                  
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, ground;

function setup() {
	createCanvas(1200,400);
	engine = Engine.create();
	world = engine.world;
	ground=new Ground (600,height,1200,20);
}

function draw() {
  rectMode(CENTER);
  background("black");
  Engine.run(engine);
  ground.display();
  drawSprites();
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	   Matter.Body.setStatic(paper,false)
		   }  
	 }


