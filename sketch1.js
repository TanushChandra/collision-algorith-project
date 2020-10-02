var fixedRect, movingRect;


function setup() {
  createCanvas(1200,800);
  
  fixedRect = createSprite(600, 150, 30, 80);
  movingRect = createSprite(600, 750, 80, 30);

  fixedRect.velocityY = 5;
  movingRect.velocityY = -6;

  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "blue";

  fixedRect.debug = true;
  movingRect.debug = true;
}

function draw() {
  background(0);  
  

  console.log(movingRect.x - fixedRect.x);
  console.log(movingRect.width/2 + fixedRect.width/2);

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2){
        movingRect.velocityX = movingRect.velocityX * -1;
        fixedRect.velocityX = fixedRect.velocityX * -1;

    }



    if(movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
    && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
      movingRect.velocityY = movingRect.velocityY * -1;
      fixedRect.velocityY = fixedRect.velocityY * -1;
    
  }
 


  drawSprites();
}