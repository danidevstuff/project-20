var wall,thickness;
var bullet,speed,weight;
var bRE,wLE;

function setup() {
  createCanvas(1600,400);
  
  thickness = random(22,83);
  speed = random(223,321);
  weight= random(30,52);
  bullet   = createSprite(50,200,90,30);
  bullet.shapeColor = "white";
  wall  = createSprite(1200,200,thickness,height/2);
  wall.shhapeColor = color(80,80,80);
}

function draw() {
  background("black");  
  bullet.velocityX = speed;

  if(hasCollided(bullet,wall))
  {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness)
  
    if(damage > 10)
    {
      bullet.shapeColor = color(255,0,0);
    }

    if(damage < 10)
    {
      bullet.shapeColor = color(0,255,0);
    }
  }
  drawSprites();
}

function hasCollided(lbullet,lwall)
{
  bRE = lbullet.x + lbullet.width;
  wLE = lwall.x;
  if(bRE >= wLE)
  {
    return true
  }
  return false;
}