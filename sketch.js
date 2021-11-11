var sprite1;
var edges = [];
function setup() {
  createCanvas(400,600);
  sprite1 = createSprite(200,200,50,50);
  edges = createEdgeSprites();
}

function draw() 
{
  background("green");
drawSprites();
sprite1.shapeColor = "yellow";
if (keyIsDown(RIGHT_ARROW)){
  sprite1.x = sprite1.x + 10;

}
if (keyIsDown(UP_ARROW)){
  sprite1.y = sprite1.y - 10;
  
}
if (keyIsDown(LEFT_ARROW)){
  sprite1.x = sprite1.x - 10;
  
}
if (keyIsDown(DOWN_ARROW)){
  sprite1.y = sprite1.y + 10;
  
}
sprite1.bounceOff(edges[0]);
sprite1.bounceOff(edges[1]);
sprite1.bounceOff(edges[2]);
sprite1.bounceOff(edges[3]);

}




