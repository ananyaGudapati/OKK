//creates variables
var movingRectangle
var fixedRectangle

function setup() {
  //creates canvas
  createCanvas(800,400);
  //creates sprites
  movingRectangle = createSprite(400, 200, 50, 50);
  fixedRectangle = createSprite(200, 200, 100, 50);

  //debugs the sprites
  movingRectangle.debug = true;
  fixedRectangle.debug = true;

  //creates colors for the sprites
  movingRectangle.shapeColor = "blue";
  fixedRectangle.shapeColor = "green";
}

function draw() {
  //background of canvas
  background("red"); 

  //control of movingRectangle
  movingRectangle.x = mouseX;
  movingRectangle.y = mouseY; 
  if (istouching(movingRectangle, fixedRectangle)) {
    movingRectangle.shapeColor = "yellow";
    fixedRectangle.shapeColor = "black";
  } 
  else {
    movingRectangle = "blue";
    fixedRectangle = "green";
  }

  //shows the position on console log
  console.log(movingRectangle.x - fixedRectangle.x);
  console.log(movingRectangle.width/2 + fixedRectangle.width/2)

  //draws out the rectangles
  drawSprites();
}

function  istouching (object1, object2) {
  if (object1.x - object2.x < object1.width/2 + object2.width/2
    && object2.x - object1.x < object1.width/2 + onject2.width/2
    && object1.y - object2.y < object1.height/2 + object2.height/2
    && object2.y - object1.y < object1.height/2 + object2.height/2) {
    //movingRectangle.shapeColor = "yellow";
    //fixedRectangle.shapeColor = "black";
    return true;
  }
  else {
    //movingRectangle.shapeColor = "blue";
    //fixedRectangle.shapeColor = "green";
    return false;
  }

}