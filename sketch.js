const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

   
    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);
    box = new Box (115,280,20,250);
    box1 = new Box1 (345,280,20,250);
    box2 = new Box2 (230,380,210,200);
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
  // rect(115,280,20,250);
  // rect(345,280,20,250);
  //  rect(230,380,210,200);
 //  ellipse(115,130,50,50);
  //  ellipse(345,130,50,50);
  //  triangle(100, 300, 250, 150, 350, 300);
 box.display();
box1.display();
box3.display();  
}