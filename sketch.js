
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy,boyImage;
var mango1,mango2,mango3,mango4,mango5,mango6;
var tree1;
function preload()
{
	boyImage=loadImage("sprites/boy.png")
}

function setup() {
	createCanvas(800, 700);
    boy=createSprite(300,600,1,1)
	boy.addImage(boyImage)
	boy.scale=0.2
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    mango1=new Mango(600,200,30)
	tree1=new Tree(600,500,20,20)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  mango1.display();
  tree1.display();
  drawSprites();
 
}



