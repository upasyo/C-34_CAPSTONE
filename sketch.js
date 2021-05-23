const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var ball;
var rope;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12;
function setup(){
   createCanvas(3000,800);
   engine = Engine.create();
   world = engine.world;

   ground = new Ground(600,600,1200,20);

   ball= new Ball(550,400,80,80);

   rope = new Rope(ball.body,{x:550,y:50});

   box1 = new Box(900,100,70,70);
   box2 = new Box(900,100,70,70);
   box3 = new Box(900,100,70,70);
   box4 = new Box(900,100,70,70);
   box5 = new Box(900,100,70,70);
   box6 = new Box(900,100,70,70);
   box7 = new Box(800,100,70,70);
   box8 = new Box(800,100,70,70);
   box9 = new Box(800,100,70,70);
   box10 = new Box(800,100,70,70);
   box11 = new Box(800,100,70,70);
   box12 = new Box(800,100,70,70);

}

function draw(){
  background(255);
  Engine.update(engine);


  ground.display();
  
  ball.display();

  rope.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

