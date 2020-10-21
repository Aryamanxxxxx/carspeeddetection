var car;
var wall;
var speed;
var weight;
var deformation;
function setup() {
  createCanvas(1600,400);
car=createSprite(50,200,50,50);
wall=createSprite(1500,200,60,height/2);
speed=Math.round(random(55,90));
weight=Math.round(random(400,1500));
car.velocityX=speed;
deformation=0.5*weight*speed*speed/22500;
}
function draw() {
  background("black"); 
  car.collide(wall);
if(wall.x-car.x<(wall.width+car.width)/2+1) 
{
  if(deformation<=100)
  {
car.shapeColor=color(0,255,0);
  }
  if(deformation>100&&deformation<=180)
  {
car.shapeColor=color(230,230,0);
  }
  if(deformation>180)
  {
car.shapeColor=color(255,0,0);
  }
}
  drawSprites();
}