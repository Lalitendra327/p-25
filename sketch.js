var paperBall,paperBallImage;
var ground1;
var dustbin1, dustbin2, dustbin3;
var dustbinImage;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	paperBallImage = loadImage("paper.png");
	dustbinImage = loadImage("dustbingreen.png");

}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	paperBallOptions = {
		isStatic: false,
		 restitution: 0.3,
		 density: 1.2,
		 friction: 0.5

	}

	paperBall = Bodies.circle(100,200,20,paperBallOptions);
	
	World.add(world,paperBall);

	ground1 = new box(400,700,800,200);

	dustbin1 = new box(600,590,200,20);
    dustbin2 = new box(500,500,20,200);
	dustbin3 = new box(700,500,20,200);
	

	Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  Engine.update(engine);

  

  imageMode(CENTER);
  image(paperBallImage,paperBall.position.x, paperBall.position.y,55,55);
  
  imageMode(CENTER);
  image(dustbinImage,600,500,200,200);

  fill("red");
  ground1.display();
  fill("white");
  stroke("white");
  //dustbin1.display();
  //dustbin2.display();
  //dustbin3.display();

 
  
  drawSprites();

 
 
}

function keyPressed() {
	 if(keyCode == UP_ARROW){

		Matter.Body.applyForce(paperBall,paperBall.position,{x:50, y:-80});
	 
	}
}



