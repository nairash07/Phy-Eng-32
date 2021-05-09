const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var car1, car2, car3; 
var backgroundImg,platform;
var invisibleGround;
var score=0;

var gameState = "onSling";
var bkgImage="bg.png"
function preload() {
    backgroundImg = loadImage("track1.jpg");
   
}

function setup(){
    var canvas = createCanvas(1300,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    //platform = new Ground(150, 305, 300, 170);
    ground.x=ground.width/7;
    ground.velocityX=-4;

    // invisibleGround = new invisibleGround(200,190,400,10);
    // invisibleGround.visible = true;

    car1 = new Car1(1200,110,110,50);
    car2 = new Car2(1200,490,110,50);
    car3 = new Car3(100,310,110,50);
    
    
    
}

function draw(){

    background(backgroundImg);
    Engine.update(engine);
   // getTime();
    //strokeWeight(4);
    textSize(20);
    fill("red");
    text("Score = "+score,width-200,30);
    car1.display();
    car2.display();
    car3.display();
    ground.display();
       
}



function keyPressed(){
    if(keyCode === UP_ARROW){
        car1.y = car1.y + 10;
    }
}