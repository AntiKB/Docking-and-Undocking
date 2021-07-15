var ISS , ISSImage , BackgroundImage;
var SpaceCraft , SpaceCraftImage1 , SpaceCraftImage2 , SpaceCraftImage3 , SpaceCraftImage4; 
var hasDocked = false;
function preload(){
  BackgroundImage = loadImage("Sprites/Background.jpg");
  ISSImage = loadImage("Sprites/InternationalSpaceStation.png");
  SpaceCraftImage1 = loadImage("Sprites/SpaceCraft1.png");
  SpaceCraftImage2 = loadImage("Sprites/SpaceCraft2.png");
  SpaceCraftImage3 = loadImage("Sprites/SpaceCraft3.png");
  SpaceCraftImage4 = loadImage("Sprites/SpaceCraft4.png");
}
function setup() {
  createCanvas(600,350);
  SpaceCraft = createSprite(285,240);
  SpaceCraft.addImage(SpaceCraftImage1);
  SpaceCraft.scale = (0.10);
  ISS = createSprite(330,130);
  ISS.addImage(ISSImage);
  ISS.scale = (0.8);
}
function draw() {
  background(BackgroundImage);  
  if(!hasDocked){
    SpaceCraft.x += random(-1,1);
    if(keyDown(UP_ARROW)){
      SpaceCraft.y -= 2;
      SpaceCraft.addImage(SpaceCraftImage2);
    }
    if(keyDown(DOWN_ARROW)){
      SpaceCraft.y += 2;
    }
    if(keyDown(LEFT_ARROW)){
      SpaceCraft.x -= 2;
      SpaceCraft.addImage(SpaceCraftImage4);
    }
    if(keyDown(RIGHT_ARROW)){
    SpaceCraft.x += 2;
    SpaceCraft.addImage(SpaceCraftImage3);
    }
  }
  if(SpaceCraft.y <= (ISS.y+70) && SpaceCraft.x <= (ISS.x-10)){
    hasDocked = true;
    textSize(30);
    fill("BLUE");
    text("DOCKING SUCCESSFUL",200,300);
  }
  drawSprites();
}