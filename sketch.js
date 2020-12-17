var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  //fixedRect = createSprite(200, 100, 50, 80);
  fixedRect = createSprite(600, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(600, 600,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  //movingRect.velocityX = -5;
  //fixedRect.velocityX = +5;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

}

function draw() {
  background(0,0,0);  

  // call the function (after you define it)
  bounceOff(movingRect,fixedRect);

  drawSprites();
}


