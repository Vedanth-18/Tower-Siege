const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var b1, b2, b3, b4, b5, b6, b7,b8,b9,b10,b11,b12;
var polygonBody, polygonImg;
var base1, base2, base3;
var box1	,box2	,box3	,box4	,box5	,box6	,box7	,box8	,box9	,box10	,box11	,box12	,box13	,box14	,box15	,box16	,
box17	,box18	,box19	,box20	,box21	,box22	,box23	,box24	,box25	,box26	,box27	,box28	,box29	,box30;
var sling;
var engine, world;
var bgImg;

function preload(){
   bgImg = loadImage("assets/bg.jpg");
}

function setup(){
   createCanvas(1400, 700);
   engine = Engine.create();
   world = engine.world;
    box1 =new Obje(550,570);
    box2 =new Obje(600,570);
    box3 =new Obje(650,570);
    box4 =new Obje(700,570);
     box5 =new Obje(575,535);
     box6 =new Obje(625,535);
     box7 =new Obje(675,535);
     box8 =new Obje(600,490);
     box9 =new Obje(650,490);
     box10 =new Obje(625,445);
    box11=new Obje(230,270);
    box12=new Obje(280,270);
    box13=new Obje(330,270);
    box14=new Obje(380,270);
     box15=new Obje(255,235);
     box16=new Obje(305,235);
     box17=new Obje(355,235);
     box18=new Obje(280,200);
     box19=new Obje(330,200);
     box20=new Obje(305,165);
    box21=new Obje(1090,370);
     box22=new Obje(1140,370);
     box23=new Obje(1190,370);
     box24=new Obje(1240,370);
    box25=new Obje(1115,335);
    box26=new Obje(1165,335);
    box27=new Obje(1215,335);
    box28=new Obje(1140,300);
    box29=new Obje(1190,300);
    box30=new Obje(1165,265);

   base1 = new Base(620, 600);
   base2 = new Base(310, 300);
   base3 = new Base(1160, 400);
   polygonBody = new Polygon(200, 650, 5, PI/2);
   sling = new Sling(polygonBody.body, {x: 200, y:600});
   Engine.run(engine);
}

function draw(){
   background(bgImg);
   fill("BLACK");
   textStyle(BOLD);
   textSize(25);
   text("Press space to reset the polygon", 30, 35);
   console.log(box21.body.position.y);
   Engine.update(engine);
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
   box13.display();
   box14.display();
   box15.display();
   box16.display();
   box17.display();
   box18.display();
   box19.display();
   box20.display();
   box21.display();
   box22.display();
   box23.display();
   box24.display();
   box25.display();
   box26.display();
   box27.display();
   box28.display();
   box29.display();
   box30.display();
    
  

   base1.display();
   base2.display();
   base3.display();
   polygonBody.display();
   sling.display();
   // b1.display();
   // b2.display();
   // base1.display();
}
function mouseDragged(){
   Matter.Body.setPosition(polygonBody.body, {x: mouseX, y: mouseY});
}
 function mouseReleased(){
    //Matter.Body.setStatic(polygonBody, false);
    sling.fly();
 }
 function keyPressed(){
    if(keyCode===32){
       sling.attach(polygonBody.body);
    }
 }
