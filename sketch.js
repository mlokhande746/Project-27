
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var ground;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
  world = engine.world;
  
  ground=new Roof(400,200,400,30);
	bob1=new Bob(300,480,25);
  bob2=new Bob(350,480,25);
  bob3=new Bob(400,480,25);
  bob4=new Bob(450,480,25);
  bob5=new Bob(500,480,25);

  rop1=new Chain(bob1.body,ground.body,-100,0);
  rop2=new Chain(bob2.body,ground.body,-50,0);
  rop3=new Chain(bob3.body,ground.body,0,0);
  rop4=new Chain(bob4.body,ground.body,50,0);
  rop5=new Chain(bob5.body,ground.body,100,0);
  

  
	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);

  ground.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  rop1.display();
  rop2.display();
  rop3.display();
  rop4.display();
  rop5.display();

  drawSprites();
 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-25,y:-25});
  }
}


