var fixedRect, movingRect;
function setup(){
  createCanvas(1200, 800);
  fixedRect = createSprite(600,400,50,80);
  fixedRect.shapeColor = "orange";
  fixedRect.debug=true;
  movingRect = createSprite(200,400,80,30);
  movingRect.shapeColor = "orange";
  movingRect.debug = true;
}
function draw(){
  background(0);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
  && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 
  && movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
  && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2 ){
   movingRect.shapeColor = "purple";
   fixedRect.shapeColor = "purple";
  }
  else{
    movingRect.shapeColor = "orange";
    fixedRect.shapeColor = "orange";
  }
  drawSprites();
}