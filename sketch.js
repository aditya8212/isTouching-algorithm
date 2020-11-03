var move,fix

function setup() {
  createCanvas(800,400);
  fix = createSprite(400, 200, 50, 90);
  fix.shapeColor = "green";
  fix.debug = true;

  move = createSprite(400, 200, 100, 60);
  move.shapeColor = "green";
  move.debug = true;

}

function draw() {
  background("aquamarine");  

  move.x = mouseX;
  move.y = mouseY;
  
  if(move.x-fix.x < move.width/2+fix.width/2 &&
    fix.x - move.x < fix.width/2+move.width/2 &&
    move.y-fix.y < move.height/2+fix.height/2 &&
    fix.y - move.y < fix.height/2+move.height/2){
    fix.shapeColor = "red";
    move.shapeColor = "red";
  }
  else{
    fix.shapeColor = "green";
    move.shapeColor = "green";

  }




  drawSprites();
}