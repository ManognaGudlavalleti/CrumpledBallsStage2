//var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
//var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Constraint = Matter.Constraint;

var paper1,ground1;
var dustbin1;
var dustbinImg,paperImg;

function setup() {
	createCanvas(800, 500);

	engine = Engine.create();
	world = engine.world;
	ground1 = new Ground(400,height,800,30);
	paper1 = new Paper(250, 490, 30);
	dustbin1 = new Dustbin(600,430,100,110);
	
	//Create the Bodies Here.


	//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyBlue");
 Engine.update(engine); 
  paper1.display();
  ground1.display(); 
  dustbin1.display();
 

  }
 
  function keyPressed() {
	  if(keyCode === UP_ARROW) {
		  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85, y:-85});
	  }
  }
 